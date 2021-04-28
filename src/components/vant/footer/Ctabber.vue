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
		<van-action-sheet v-model="shopShow">
			<div class="content" align="center" style="font-size: 20px;font-weight: 700;">{{name}}
			</div>
			<div class="content" align="left">{{'价格：'+money}}</div>
			<div class="content" align="left">{{"规格："+weight+"kg"}}</div>

			<div class="content" align="center">
				<van-stepper v-model="value" theme="round" button-size="22" disable-input />
			</div>
			<div class="content" align="center">
				<van-button round type="info" class="roll-car">加入购物车</van-button>
			</div>
		</van-action-sheet>
	</van-tabbar>


</template>

<script>
	export default {
		props: {
			name: String,
			money: String,
			count: String,
			weight: String
		},
		data() {
			return {
				active: 0,
				shopShow: true,
			};
		},
		methods: {
			openCar: function() {
				this.shopShow = true
			}
		}
	};
</script>

<style lang="less">
	.van-action-sheet__content {
		background-color: @base-color;
	}

	.van-tabbar--fixed {
		bottom: 13px !important;
	}

	.two.van-tabbar-item--active {
		color: white !important;
		font-weight: 700 !important;
		background-color: @base-color  !important;
	}

	.roll.van-button {
		width: 47px;
		background-color: @base-back-color  !important;
		border: 1px solid @base-back-color  !important;
		box-shadow: 4px 4px 3px @base-shadow-color;
	}

	.content {
		color: white;
		
		padding: 16px 16px 10px;
	}

	.roll-two.van-button {
		font-weight: 700;
		width: 200px;
		background-color: @base-color  !important;
		border: 1px solid @base-color  !important;
		box-shadow: 4px 4px 3px @base-shadow-color;
	}

	.roll-car.van-button {
		color: @base-color;
		font-weight: 700;
		width: 200px;
		background-color: white !important;
		border: 1px solid white !important;
		box-shadow: 4px 4px 3px #a20000;
	}

	.van-stepper__input {
		border-radius: 999px !important;
		background-color: white !important;
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
