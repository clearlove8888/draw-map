#### 项目简介
使用原生的uni-app map组件，绘制带方向的地图路线。

####  注意
请先自行注册一个高德应用的key **选择服务平台的时候请选择web服务** 地址 https://console.amap.com/dev/key/app  
绘制路线后，地图的中心点会修改为起点的坐标，  
支持 App-nvue 2.1.5+、微信小程序、百度小程序  
详细配置和使用请参考[官方文档](https://uniapp.dcloud.io/component/map)  
修改调用的接口后请传入自己的回调方法来解析数据，显示路线

## 完整示例
```html
<template>
    <view>
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
	import route from '../../plugins/draw-map/draw-map.js';
	
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
			// 这里填自己的高德地图应用中key 没有的话自己注册一个
			route.setKey("");
			const origin ={
			    latitude: 25.09591,
			    longitude: 104.872858,
				//起点的icon
			    iconPath: '../../static/1.png',
			};
			const destination = {
			    latitude: 25.106936,
			    longitude: 104.916211,
				//终点的icon
			    iconPath: '../../static/2.png',
			};
			
			route.drawRoute(this,origin,destination);
		}
    }
</script>
<style>
    map {
        width: 100%;
        height: 600rpx;
    }
    .cover{
		display: flex;
		text-align: center;
        background: #999;
    }
</style>
```

#### 使用方法
##### 1.引入js文件
```javascript
    import map from '../../plugins/draw-map/draw-map.js';
```
##### 2.修改配置
```javascript
    //高德地图开发者key 修改为自己的
    const key ="";
    //高德api接口
    const url =  'https://restapi.amap.com/v3/direction/driving';
    map.setKey(key);
    map.setUrl(url);

    //注意 修改调用的接口后请传入自己的回调方法来解析数据
    route.requestRoute(origin,destination)//该方法返回一个Promise并返回接口的数据res
```

#####3.初始化地图和参数
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
##### 4.传入参数绘制地图上的路线
```html
onLoad() {
			map.drawRoute(this,{
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

#### drawRoute方法参数说明

|   参数名  | 说明  |
|--- | --- |
|  map  | 当前vue的实例对象,用来修改和添加属性 |
|  origin  |  起点标记点(传入一个 map组件 的markers属性对象) |
|  destination  |  终点标记点 (同上) |
|  line  |  绘制路线对象(传入一个map组件 的polyline属性对象) |
