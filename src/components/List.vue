<template>
	<div class="hello">
		<p>我是vip</p>
		<h1>{{ msg }}</h1>
		<h2>{{yes}}</h2>
		<bo
	</div>
</template>

<script>
	
	export default {
		name: 'HelloWorld',
		props: {
			msg: String,
			yes:String
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	p{
		font-size: 0.625rem;
		background-color: firebrick;
	}
	h1{
		background-color: yellowgreen;
	}
</style>
