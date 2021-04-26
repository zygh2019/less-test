<template>
	<van-nav-bar :title="title" left-text="返回" left-arrow>
		<van-icon class-prefix="header-right-icon" name="ext" slot="right" />
		<van-icon class-prefix="header-left-icon" name="ext" slot="left" />
	</van-nav-bar>
</template>

<script>
	/**
	 * 头模块
	 */
	export default {
		name: 'c-header',
		props: {
			title: String
		},
	}
</script>

<style>
	.van-nav-bar__title{
		font-size: 20px;
		color: #d41702 !important;
	}
</style>
