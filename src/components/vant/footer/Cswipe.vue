<template>
	<van-tab :title="title" >
		<van-swipe  :touchable="true" >
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="image.url" height="200px" width="100%" />
			</van-swipe-item>
		</van-swipe>
	</van-tab>
</template>

<script>
	export default {
		props: {
			title: String,
			images:Array
		},
	}
</script>

<style>
</style>
