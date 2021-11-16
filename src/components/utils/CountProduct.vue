<template>
	<div class="input-group input-group-sm input-group-count flex-nowrap">
		<button
				class="btn btn-sm btn-count btn-outline-secondary border-300 px-2"
				@click="changeCount(-1)"
		>
			-
		</button>
		<input
				class="form-control form-control-count border-300 text-center px-2"
				type="number"
				v-model="count"
		>
		<button
				class="btn btn-sm btn-count btn-outline-secondary border-300 px-2"
				@click="changeCount(1)"
		>
			+
		</button>
	</div>
</template>

<script>
export default {
	name: "CountProduct",
	props: {
		id: {
			type: Number,
			required: true
		},
		min: {
			type: String,
			default: "0"
		}
	},
	computed: {
		count: {
			get() {
				return this.$store.state.basket.products[this.id] || "0";
			},
			set(value) {
				if (value < +this.min)
					value = +this.min;

				this.$store.dispatch("basket/changeCountProduct", {
					id: this.id,
					count: value
				});
			}
		}
	},
	methods: {
		changeCount(num) {
			this.count = +this.count + num;
		}
	}
};
</script>

<style scoped>
.input-group-count {
	width: 100px;
	max-width: 100px;
}

.form-control-count {
	-moz-appearance: textfield;
	-webkit-appearance: textfield;
	appearance: textfield;
}

.form-control-count::-webkit-outer-spin-button,
.form-control-count::-webkit-inner-spin-button {
	display: none;
}

.form-control-count {
	width: 40px;
}

.btn-count {
	width: 30px;
}
</style>