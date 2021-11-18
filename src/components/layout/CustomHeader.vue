<template>
	<header class="mb-4 border-bottom">
		<div class="container">
			<div class="d-flex flex-wrap justify-content-center py-3">
				<div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
					<span class="fs-4">SuperLogo</span>
				</div>

				<ul class="nav nav-pills">
					<li class="nav-item">
						<router-link
								:to="{ name: 'Catalog'}"
								class="nav-link"
								exact
						>
							Каталог
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
								:to="{ name: 'Basket'}"
								class="nav-link position-relative"
								exact
						>
							Корзина
						</router-link>
					<li class="nav-item">
						<router-link
								:to="{ name: 'Favorite' }"
								class="nav-link"
								exact
						>
							Избранное
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "CustomHeader"
};
</script>
