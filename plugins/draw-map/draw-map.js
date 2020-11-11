function Route(){
	this.key = "";
	this.url = 'https://restapi.amap.com/v3/direction/driving';
	this.type = "";
}

Route.prototype.setKey= function(key){
	this.key=key;
}
Route.prototype.setUrl = function(url){
	this.url=url;
}
Route.prototype.setType = function(type){
	this.type = type;
}

Route.prototype.initParam = function(param){
	Object.assign(this,{...param});
}

Route.prototype.drawRoute = function(map,origin,destination,line={
				 arrowLine: true,
				'points':[],
				 color:'#f00',
				 width:10
			}){
	const {url,key,type="driving"} = this;

	const {markers=[],polyline=[]} = map;
	markers.push(origin);
	markers.push(destination);

	this.requestRoute(origin,destination).then(res=>{
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

		polyline.push(line);
		Object.assign(map,{
			latitude: origin.latitude,
			longitude: origin.longitude,
			// todo 通过距离 计算 scale 的值
			//scale: 15
			markers,
			polyline
		});
	});
}

Route.prototype.initMap = function(object){
	console.log(object);
	Object.assign(object,{
				latitude: 39.90909,
				longitude: 116.434307,
				markers: [],
				polyline: [],
				scale: 15
			});
}

Route.prototype.requestRoute = function(origin,destination){

	const {url,key} = this;
	return new Promise((resolve,reject)=>{
		uni.request({
			url: url,
			method: 'GET',
			data: {
				"origin": origin.longitude+","+origin.latitude,
				"destination": destination.longitude+","+destination.latitude,
				"key":key
			},
			success: res => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
			}
		});
	})
}

export default new Route();
