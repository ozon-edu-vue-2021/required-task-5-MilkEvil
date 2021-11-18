<template>
	<div class="h-100 card">
		<div class="position-relative">
			<img
					class="card-img-top card-image"
					:src="product.image"
					:alt="product.dish"
			>
			<div
					:class="['position-absolute card-favorite', {
          'card-favorite-active': isFavorite
        }]"
					@click="toggleFavorite(isFavorite)"
			>
				<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
							d="M17.282 1C21.34 1 23.999 4.147 24 8.5c0 4.287-3.168 8.376-10.8 14.1l-1.2.9-1.2-.9C3.168 16.876 0 12.787 0 8.5 0 4.147 2.659 1 6.718 1 8.734 1 10.64 1.806 12 3.177A7.455 7.455 0 0117.282 1z"
							fill="#fff" />
					<path
							d="M23 8.5C23 4.8 20.861 2 17.282 2 15.115 2 13.136 3.069 12 4.742 10.864 3.069 8.884 2 6.718 2 3.138 2 1 4.8 1 8.5c0 3.817 2.886 7.664 10.4 13.3l.6.45.6-.45C20.115 16.164 23 12.316 23 8.5zM17.282 4C19.622 4 21 5.805 21 8.5c0 2.93-2.398 6.211-9 11.246C5.398 14.712 3 11.43 3 8.5 3 5.805 4.379 4 6.718 4 9.03 4 11 5.743 11 8h2c0-2.257 1.969-4 4.282-4z"
							fill="currentColor" />
				</svg>
			</div>
		</div>
		<div class="d-flex flex-column card-body">
			<div class="h5 card-title fw-bold">{{ product.dish }}</div>
			<p class="card-text card-description">{{ product.description }}</p>
			<p>
				<span class="fw-bold">Цена:</span> {{ product.price }} руб.
			</p>
			<div
					class="row align-items-center g-2 flex-nowrap mt-auto"
					v-if="isBasket"
			>
				<count-product
						:id="product.id"
				/>
				<div class="col">
					<span class="form-text">шт.</span>
				</div>
			</div>
			<div class="mt-auto" v-else>
				<div
						class="btn btn-primary"
						@click="addToBasket"
				>
					Добавить в корзину
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CountProduct from "../utils/CountProduct";

export default {
	name: "CatalogCard",
	components: {
		CountProduct
	},
	props: {
		product: {
			type: Object,
			required: true
		}
	},
	computed: {
		isBasket() {
			return !!this.$store.state.basket.products[this.product.id] && this.$store.state.basket.products[this.product.id] !== "0";
		},
		isFavorite() {
			return this.$store.state.favorite.favorites.includes(this.product.id);
		}
	},
	methods: {
		addToBasket() {
			this.$store.dispatch("basket/addProduct", this.product.id);
		},
		toggleFavorite(status) {
			this.$store.dispatch("favorite/toggleFavorite", {
				id: this.product.id,
				status: status
			});
		}
	}
};
</script>

<style scoped>
.card-image {
	width: 100%;
	height: 230px;
	object-fit: cover;
}

.card-favorite {
	top: 10px;
	right: 10px;
	background: #fff;
	padding: 6px;
	border-radius: 50%;
	cursor: pointer;
}

.card-favorite-active,
.card-favorite:hover {
	color: #c33;
}

.card-description {
	-webkit-box-orient: vertical;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 3;
}
</style>
