<template>
	<div>
		<h1 class="mb-5">Корзина</h1>
		<template v-if="!!getCountProducts">
			<div class="card">
				<div class="card-header">
					<div class="row mx-0 fw-bold">
						<div class="col-9 col-md-8 py-2">Название</div>
						<div class="col-3 col-md-4">
							<div class="row">
								<div class="col-md-8 py-2 d-none d-md-block text-center">Количество</div>
								<div class="col-12 col-md-4 text-end py-2">Цена</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-body p-0">
					<div
							v-for="product in products"
							:key="product.uid"
					>
						<basket-card :product="product" />
					</div>
				</div>
				<div class="card-footer">
					<div class="row fw-bold gx-card mx-0">
						<div class="col-9 col-md-8 py-2 text-end">Всего</div>
						<div class="col px-0">
							<div class="row mx-0">
								<div class="col-md-8 py-2 d-none d-md-block text-center">{{ getCountProducts }} товаров</div>
								<div class="col-12 col-md-4 text-end py-2">{{ costProducts }} руб.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-end mt-3">
				<button
						class="btn btn-primary"
						@click="sendOrder"
				>
					Оформить заказ
				</button>
			</div>
		</template>
		<template v-else>
			<p>Вы ещё ничего не добавили в корзину</p>
			<router-link
					:to="{ name: 'Catalog' }"
					class="btn btn-primary"
					exact
			>
				В каталог
			</router-link>
		</template>
	</div>
</template>

<script>
import BasketCard from "@/components/basket/BasketCard";

import { mapGetters, mapState } from "vuex";

export default {
	name: "BasketMain",
	components: {
		BasketCard
	},
	computed: {
		...mapGetters("basket", [ "getCountProducts" ]),
		...mapState("basket", {
			basket: "products"
		}),
		products() {
			return this.$store.state.catalog.products.filter(product => !!this.basket[product.id] && this.basket[product.id] !== "0");
		},
		costProducts() {
			return this.products.reduce((sum, product) => {
				return sum + (product.price * this.basket[product.id]);
			}, 0);
		}
	},
	methods: {
		sendOrder() {
			const message = this.products.reduce((result, product) => {
				return [...result, `${product.dish} - ${this.basket[product.id]}шт;`]
			}, ["Вы заказали:"]);

			alert(message.join(" "));

			this.$store.dispatch("basket/clearBasket");
		}
	}
};
</script>
