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