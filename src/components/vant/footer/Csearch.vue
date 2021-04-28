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

<style lang="less">
	.van-search__content {
		box-shadow: 4px 4px 6px @base-shadow-color;
		background-color: @base-back-color !important;
	}

	.van-icon-search {
		font-size: 19px !important;
		color: @base-color !important;
	}
</style>
