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