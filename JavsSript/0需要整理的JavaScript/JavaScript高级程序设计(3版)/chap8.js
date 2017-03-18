function getQueryStringArgs(){

	//取得查询字符串并去年掉开头的问号
	var qs = (location.search.length > 0 ? location.search.substring(1) : "");

	//保存数据的对象
	var args = {};

	//取得每一项
	var items = qs.split("&");
	var item = null,
	    name = null,
	    value = null;

    //逐个将每一项添加到args对象中
    for (var i = 0; i < items.length; i++) {
    	item = items[i].split("=");
    	//记住decodeURIComponent 
    	name = decodeURIComponent(item[0]);
    	value = decodeURIComponent(item[1]);
    	args[name] = value;
    }

    return args;
}