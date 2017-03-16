<!-- 7-1 通过指定数组元素创建数组
function createArray()
{
	var students = new Array("Peter", "Tom", "Vicky", "Jet"); // 通过指定元素创建数组
	// 直接创建数组
	var teachers = ["PeterT","TomT","VickyT","JetT"];

	// 输出数组中的名字
	for (n in students)
	{
		document.write( students[n] + " "); // 将名字写入当前文档流中	
		document.write(teachers[n] + " ");
	}
}
-->