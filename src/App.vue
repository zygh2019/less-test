<template>
	<div id="app">
		<van-search v-model="value" placeholder="请输入搜索关键词" />
		<van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
		<p class="p">adsf</p>
		<span> 哈哈哈</span>
		<ButtonTest></ButtonTest>
		<CellTest></CellTest>
		<van-icon size="40" name="chat-o" dot />
		<van-icon size="40" name="chat-o" badge="9" />
		<van-icon size="40" name="chat-o" badge="99+" />
		<van-icon size="40" name="chat-o" />
		<van-icon size="40" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
		<!-- 输入任意文本 -->
		<van-field v-model="text" label="文本" />
		<!-- 输入手机号，调起手机号键盘 -->
		<van-field v-model="tel" type="tel" label="手机号" />
		<!-- 允许输入正整数，调起纯数字键盘 -->
		<van-field v-model="digit" type="digit" label="整数" />
		<!-- 允许输入数字，调起带符号的纯数字键盘 -->
		<van-field v-model="number" type="number" label="数字" />
		<!-- 输入密码 -->
		<van-field v-model="password" type="password" label="密码" />
		<van-steps :active="active">
			<van-step>买家下单</van-step>
			<van-step>商家接单</van-step>
			<van-step>买家提货</van-step>
			<van-step>交易完成</van-step>
		</van-steps>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>
		<van-tag v-if="show" closeable size="medium" type="primary" @close="close" >
			标签
		</van-tag>
		<van-tag v-if="show" closeable size="medium" type="primary" @close="close" >
			标签
		</van-tag>
		<van-tag v-if="show" closeable size="medium" type="primary" @close="close" >
			标签
		</van-tag>
		<van-tag v-if="show" closeable size="medium" type="primary" @close="close" >
			标签
		</van-tag>
	</div>

</template>

<script>
	import ButtonTest from "./components/vant/buttonTest/ButtonTest.vue"

	import CellTest from "./components/vant/cellTest/CellTest.vue"
	export default {
		name: 'app',
		components: {
			ButtonTest,
			CellTest
		},
		data: () => {
			return {
				tel: '',
				text: '',
				digit: '',
				number: '',
				password: '',
				value: '',
				active: '3',
				show: true
			}
		},
		methods: {
			close() {
				this.show = false;
			},
		},

	}
	// 创建构造器
</script>

<style lang="less">
	@import url("assets/css/base.less");

	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
</style>
