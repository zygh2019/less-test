<template>
	<div id="app">
		<Cheader title="测试"></Cheader>
		<div style="margin: 10px;">
			<Csearch></Csearch>
			<Ctab></Ctab>
		</div>
		<Ctabber :weight="weight" :name="name" :money="money" :count="count"></Ctabber>




	</div>

</template>

<script>
	import Cheader from "./components/vant/header/Cheader.vue"
	import Csearch from "./components/vant/footer/Csearch.vue"
	import Ctab from "./components/vant/footer/Ctab.vue"
	import Ctabber from "./components/vant/footer/Ctabber.vue"
	
	export default {
		name: 'app',
		components: {
			Cheader,
			Csearch,
			Ctab,
			Ctabber
		},
		data: () => {
			return {
				shopShow: true,
				name:"超级好吃的烟台大樱桃(200L)",
				money:"234",
				count:"0",
				weight:10
			}
		}

	}
	// 创建构造器
</script>

<style>
	
</style>
