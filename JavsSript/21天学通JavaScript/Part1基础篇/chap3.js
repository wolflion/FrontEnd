<!-- 3-1 常量的使用
function constUse()
{
	document.write("<li>JavaScript编程，乐趣无穷！<br>" );
	document.write("<li>" + 3 + "周学通JavaScript!" );
	if (true)  // 使用布尔型常量
	{
		document.write( "<br><li>if语句中使用了布尔常量：" + true );
	}
	document.write( "<li>八进制数值常量011输出为十进制：" + 011 );
	// 使用8进制常量和十进制常量
	document.write( "<br><li>十六进制数值常量0xf输出为十进制：" + 0xf );
}
-->

<!-- 3-2 变量的定义和使用
function varUse()
{
	var str = "21天学通JavaSript！";  // 定义一个字符串型变量
	var b = true;    // 定义一个布尔型变量
	var n = 10;
	var m;        // 声明一个变量m，其类型未知
	var o = new Object();  // 定义一个Object类型变量o
	p = new Object();      // 定义一个Object类型变量p

	document.write( str );
	document.write( "<br>" );
	document.write( b );
	document.write( "<br>" );
	document.write( n );
	document.write( "<br>" );
	document.write( m );
	document.write( "<br>" );
	document.write( o );
	document.write( "<br>" );
	document.write( p );
	document.write( "<br>" );
	// 改变各变量的值
	str = "这是一个字符串";
	b = false;
	n = 20;
	m = 30;
	o = new Array("data1","data2");
	document.write("<font color = red><br>");
	document.write(str);
	document.write( "<br>" );
	document.write(b);
	document.write( "<br>" );
	document.write(n);
	document.write( "<br>" );
	document.write(m);
	document.write( "<br>" );
	document.write("<br>数组o的数据为： ");
	document.write(o);
	document.write("<br>数组o的长度为：" + o.length);
	document.write("<br></font>");
	var pp;
	document.write(pp); // 输出未定义变量pp
	var pp = 20;
}
-->