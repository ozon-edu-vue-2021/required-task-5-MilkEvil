<template>
	<div>
		<h1 class="mb-5">Избранное</h1>
		<div
				class="row"
				v-if="favorites.length"
		>
			<div
					class="col-sm-6 col-lg-4 col-xl-3 mb-3"
					v-for="product in products"
					:key="product.uid"
			>
				<catalog-card :product="product" />
			</div>
		</div>
		<template v-else>
			<p>Вы ещё ничего не добавили в избранное</p>
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
import CatalogCard from "../catalog/CatalogCard";

export default {
	name: "FavoriteMain",
	components: {
		CatalogCard
	},
	computed: {
		favorites() {
			return this.$store.state.favorite.favorites || [];
		},
		products() {
			return this.$store.state.catalog.products.filter(product => this.favorites.includes(product.id));
		}
	}
};
</script>
