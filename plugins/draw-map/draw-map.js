import {key,url} from './config.js';

const drawRoute =(map,origin,destination,line={
				 arrowLine: true,
				'points':[],
				 color:'#f00',
				 width:10
			})=>{
				
	const {markers=[],polyline=[]} = map;
	markers.push(origin);
	markers.push(destination);
	
	uni.request({
		url: url,
		method: 'GET',
		data: {
			"origin": origin.longitude+","+origin.latitude,
			"destination": destination.longitude+","+destination.latitude,
			"key":key
		},
		success: res => {
			line.points || (line.points= []);
			
			res.data.route.paths.map(item=>{
				item.steps.map(path=>{
					path.tmcs.map(tmcs=>{
						tmcs.polyline.split(";").map(loacl=>{
							const longitude = loacl.split(",")[0];
							const latitude = loacl.split(",")[1];
							line.points.push({latitude: latitude, longitude: longitude});
						})
					});
				})
			});
			
			// todo 通过距离 计算 scale 的值
			polyline.push(line);
			Object.assign(map,{
				latitude: origin.latitude,
				longitude: origin.longitude,
				scale: 15,
				markers,
				polyline
			});
		},
		fail: () => {
		},
		complete: () => {
		}
	});
}

export default drawRoute;
