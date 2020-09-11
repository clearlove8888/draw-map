#### 项目简介
使用原生的uni-app，绘制带方向的地图路线。

#### 方法
- 1.修改配置（config.js中的参数）
```javascript
    //高德地图开发者key 修改为自己的
    const key ="5ee36bc9cb2c613c6fd00d93c544cad8";
    //高德api接口
    const url =  'https://restapi.amap.com/v3/direction/driving';
```
- 2.引入js
```javascript
    import drawRoute from '../../plugins/draw-map/draw-map.js';
```
- 3.初始化地图和参数
```html
<map :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline" :scale="scale">
</map>

//data中初始化map参数
	data() {
                return {
    				latitude: 39.90909,
    				longitude: 116.434307,
    				markers: [],
    				polyline: [],
    			}
            }
```
- 4.传入参数绘制地图上的路线
```html
onLoad() {
			drawRoute(this,{
			    latitude: 39.90909,
			    longitude: 116.434307,
				//起点的icon
			    iconPath: '../../static/1.png',
			},{
			    latitude: 39.90816,
			    longitude: 116.434446,
				//终点的icon
			    iconPath: '../../static/2.png',
			})
		}
```

#### 参数说明

|   参数名  | 说明  |
|--- | --- |
|  map  | 当前vue的实例对象,用来修改和添加属性 |
|  origin  |  起点标记点(传入一个 map组件 的markers属性对象) |
|  destination  |  终点(同上) |
|  line  |  绘制路线的参数(传入一个map组件 的polyline属性对象) |

#### 完整示例
```javascript
<template>
    <view>
        <!-- <page-head :title="title"></page-head> -->
        <view class="uni-common-mt">
            <view>
                <map :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline" :scale="scale">
					<!-- <cover-view class="cover"></cover-view> -->
                </map>
            </view>
        </view>
    </view>
</template>
<script>
	import drawRoute from '../../plugins/draw-map/draw-map.js';
	
    export default {
        data() {
            return {
				latitude: 39.90909,
				longitude: 116.434307,
				markers: [],
				polyline: [],
				scale: 15
			}
        },
        methods: {
        },
		onLoad() {
			drawRoute(this,{
			    latitude: 39.90909,
			    longitude: 116.434307,
				//起点的icon
			    iconPath: '../../static/1.png',
			},{
			    latitude: 39.90816,
			    longitude: 116.434446,
				//终点的icon
			    iconPath: '../../static/2.png',
			})
		}
    }
</script>
<style>
    map {
        width: 100%;
        height: 800upx;
    }
    .cover{
		display: flex;
		text-align: center;
        background: #999;
    }
</style>
```


#### 注意
绘制路线后，地图的中心点会修改为起点的坐标，
详细配置和使用请参考[官方文档](https://uniapp.dcloud.io/component/map)
