var createA = function(){
	var divCity = document.createElement("div");
	divCity.className = "city";
	return function (name,href){
		var a = document.createElement("a");
		a.appendChild(document.createTextNode(name));
		a.href = href;
		divCity.appendChild(a);
		return divCity;
	};
}();
var data = [
		{
			name : "北京",
			href : ""
		},
		{
			name : "宁波",
			href : ""
		},
		{
			name : "深圳",
			href : ""
		},
		{
			name : "厦门",
			href : ""
		},
		{
			name : "成都",
			href : ""
		}
	];
var a;
data.forEach(function(item){
	a = createA(item.name, item.href);
});
var divVCenter = document.getElementById("divCenter");
divCenter.appendChild(a);
