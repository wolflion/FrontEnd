
加快页面加载的方法之一:是在


1. 根据时间显示日期

span让JavaScript返回一个包含页面上所有标签的数组。
`var spanTags = document.getElementsByTagName("span");`

第i个标签是否具有以tz开头的class属性。
`if(spanTags[i].className.indexOf("tz") == 0)`

传递给showTheTime()两个参数：第一个是第i个标签元素，第二个是class属性中"tz"后面的部分。
`showTheTime(spanTags[i],spanTags[i].className.substring(2));`    

基于UTC的时间


innerHTML属性


2. 把24小时转化为12小时

将其它函数的结果连接起来，构造出要显示的时间值。将结果放进showTime的innerHTML属性。
    document.getElementById("showTime").innerHTML = showTheHours(now.getHours()) + showZeroFilled
	(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();

让浏览器每秒更新显示一次
    setTimeout(showTheTime,1000);

###6创建倒数计数器###
创建一个新数组spanTags,并用页面上的所有标签去填充它。
`var spanTags = document.getElementsByTagName("span");`

检查在页面上任何标签的class属性中是否能够找到字符串daysTill。
`if(spanTags[i].className.indexOf("daysTill") > -1)`



###7隐藏和显示层###


###8移动文档中的对象###
为了开始移动，在广告上添加一个mouseover事件处理程序，让它触发slide()函数。

`document.getElementById(adBox).addEventLister("mouseover",slide,false);`


###9日期方法###


