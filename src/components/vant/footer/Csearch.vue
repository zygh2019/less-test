<template>
	<van-search v-model="value" shape="round" />
</template>

<script>
	export default {
		name: 'Csearch',
		data: () => {
			return {
				value: ""
			}
		},
	}
</script>

<style>
	.van-search__content {
		box-shadow: 4px 4px 6px #dadada;
		background-color: #f9f0e3 !important;
	}

	.van-icon-search {
		font-size: 19px !important;
		color: #d41702 !important;
	}
</style>
