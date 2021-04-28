<template>
	<van-tabbar v-model="active">


		<van-row style="width: 100%;" type="flex" justify="center">
			<van-col span="8">
				<van-button round type="info" class="roll" icon="like-o"></van-button>
			</van-col>
			<van-col span="16">
				<van-button round type="info" class="roll-two" @click="openCar($event)">add to car</van-button>
			</van-col>
		</van-row>
		<CshopCar  :shopShow="shopShow" msg="true"></CshopCar>
	</van-tabbar>


</template>

<script>
	import CshopCar from "../other/shopcar/CshopCar.vue"
	export default {
		data() {
			return {
				active: 0,
				shopShow: true
			};
		},
		components: {
			CshopCar
		},
		methods: {
			openCar: function(e) {
				console.log(e.target)
			}
		}
	};
</script>

<style lang="less">
	.van-tabbar--fixed {
		bottom: 13px !important;
	}

	.two.van-tabbar-item--active {
		color: white !important;
		font-weight: 700 !important;
		background-color: @base-color  !important;
	}

	.roll {
		width: 47px;
		background-color: @base-back-color  !important;
		border: 1px solid @base-back-color  !important;
		box-shadow: 4px 4px 3px @base-shadow-color;
	}

	.roll-two {
		font-weight: 700;
		width: 200px;
		background-color: @base-color  !important;
		border: 1px solid @base-color  !important;
		box-shadow: 4px 4px 3px @base-shadow-color;
	}

	.van-col {
		text-align: center;
	}

	.van-icon-like-o {
		font-weight: 700 !important;
		font-size: 25px !important;
		color: @base-color;
	}

	[class*=van-hairline]::after {
		border: 0 !important;
	}
</style>
