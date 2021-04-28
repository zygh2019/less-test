<template>
	<van-tabs v-model="active">
		<Cswipe v-for="item,index in swipeData" :title="item.title" :images="item.images" :key="index"></Cswipe>
	</van-tabs>
</template>
<script>
	import Cswipe from "./Cswipe.vue"
	export default {
		components: {
			Cswipe
		},
		data: () => {
			return {
				active: 1,
				swipeData: [{
					title: "测试1",
					images: [{
						url: "p1.jpg"
					}, {
						url: "p1.jpg"
					}]
				}, {
					title: "测试1",
					images: [{
						url: "p1.jpg"
					}, {
						url: "p1.jpg"
					}]
				}, {
					title: "测试1",
					images: [{
						url: "p1.jpg"
					}, {
						url: "p1.jpg"
					}]
				}]

			}
		},
	}
</script>

<style lang="less">
	.van-tab--active {
		color: @base-color  !important;
	}
</style>
