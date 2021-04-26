<template>
	<div id="CellTest">
		<van-cell-group>
			<van-cell title="商品1" value="内容" />
			<van-cell title="商品2" value="内容" label="哈哈哈" />
			<van-cell title="单元格" icon="location-o" />
			<van-cell title="单元格" is-link />
			<van-cell title="单元格" is-link value="哈哈哈哈" />
			<van-cell title="单元格" is-link arrow-direction="down" value="哈哈哈" />
			<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
			<van-cell title="路由跳转" is-link to="index" />
		</van-cell-group>
		<van-cell-group title="1=菜单">
			<van-cell title="单元格" value="内容" />
		</van-cell-group>
		<van-cell-group title="其他">
			<van-cell title="单元格" value="内容" />
		
			<van-cell value="内容" is-link>
				<!-- 使用 title 插槽来自定义标题 -->
				<template #title>
					<span class="custom-title">单元格</span>
					<van-tag type="danger">标签</van-tag>
				</template>
			</van-cell>
		
			<van-cell title="单元格" icon="shop-o">
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
				<template #right-icon>
					<van-icon name="search" class="search-icon" />
				</template>
			</van-cell>
		
		</van-cell-group>
	</div>

</template>

<script>
	export default {
		name: 'CellTest',
		
	}
	// 创建构造器
	
</script>

