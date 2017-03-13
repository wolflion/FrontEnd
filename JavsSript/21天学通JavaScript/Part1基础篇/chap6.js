<script language = "javascript"
<!--  6-5
function a()
{
	function b()
	{
		function c()
		{
			document.write( "<li>C" );  // cout C
		}
		document.write( "<li>B" );  // cout B
	}
	document.write( "<li>A" );  // cout A
	b();   // 调用a的私有函数b
	c();  // error
}
a();   //调用a
-->

<!--  6-6
var chair = "公园里的椅子"；  // 公用
function TomHome()
{
	this.chair = "Tom的椅子";
}
function useChair()
{
	document.write("<li>此时使用的是： " + this.chair + "<br>");
}
var th = new TomHome(); // 生成一个新“家”实例
useChair();  // 当前所在的场景是公园里
useChair.call(th); // 当前所在的场景是Tom家
-->
</script>