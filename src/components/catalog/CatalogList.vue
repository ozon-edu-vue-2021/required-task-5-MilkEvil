<template>
	<div>
		<h1 class="mb-5">Каталог</h1>
		<div class="row">
			<div
					class="col-sm-6 col-lg-4 col-xl-3 mb-3"
					v-for="product in products"
					:key="product.uid"
			>
				<catalog-card :product="product" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import CatalogCard from "./CatalogCard";

export default {
	name: "CatalogList",
	components: {
		CatalogCard
	},
	computed: {
		...mapState("catalog", [ "products" ])
	}
};
</script>
