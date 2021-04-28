<template>
	<van-action-sheet :v-model="shopShow">
		<div class="content">{{msg}}</div>
	</van-action-sheet>
</template>

<script>
	export default {
		props: {
			shopShow: Boolean
		},
		data: function() {
			return {
				msg: ""
			}
		}
	}
</script>

<style>
	.content {
		padding: 16px 16px 100px;
	}
</style>
