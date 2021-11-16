<template>
	<div class="row gx-card mx-0 align-items-center border-bottom">
		<div class="col-8 py-3">
			<div class="d-flex align-items-center">
				<img
						class="img-fluid rounded-1 me-3 d-none d-md-block"
						width="60"
						:src="product.image"
						:alt="product.dish"
				>
				<div class="flex-1">
					<div class="h5">{{ product.dish }}</div>
					<div class="text-secondary">{{ product.description }}</div>
					<a
							href="javascript:void(0)"
							class="link-danger"
							@click="deleteProduct"
					>
						Удалить
					</a>
				</div>
			</div>
		</div>
		<div class="col-4 py-3">
			<div class="row align-items-center">
				<div class="col-md-8 d-flex justify-content-end justify-content-md-center order-1 order-md-0">
					<count-product
							:id="product.id"
							min="1"
					/>
				</div>
				<div class="col-md-4 text-end ps-0 order-0 order-md-1 mb-2 mb-md-0">{{ product.price }} руб.</div>
			</div>
		</div>
	</div>
</template>

<script>
import CountProduct from "../utils/CountProduct";

export default {
	name: "BasketCard",
	components: {
		CountProduct
	},
	props: {
		product: {
			type: Object,
			required: true
		}
	},
	methods: {
		deleteProduct() {
			this.$store.dispatch("basket/deleteProduct", this.product.id);
		}
	}
};
</script>