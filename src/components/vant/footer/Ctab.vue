<template>
	<van-tabs v-model="active">
		<Cswipe v-for="item,index in swipeData" 
		:title="item.title" 
		:images="item.images" 
		:key="index"></Cswipe>
	</van-tabs>
</template>
<script>
	import Cswipe from "./Cswipe.vue"
	import swipeData from "../../../data/swipeData.js"
	console.log(swipeData)
	export default {
		components: {
			Cswipe
		},
		data: () => {
			return {
				active: 1,
				swipeData: swipeData

			}
		},
	}
</script>

<style lang="less">
	.content {
		margin-top: 10px;
		width: auto;
		background-color: red;
		height: 200px;
	}
</style>
