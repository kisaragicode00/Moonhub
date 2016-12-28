var header = document.getElementById("header"),
	headerClassName = header.className;
onscroll = function(){
	header.className = headerClassName + (document.documentElement.scrollTop || scrollY >= 50 ? " fixed" : " normal");
};