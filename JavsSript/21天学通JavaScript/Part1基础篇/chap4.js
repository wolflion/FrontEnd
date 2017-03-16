<!-- 4-1
function useExpression()
{
	var balance = 1000.0;
	var willPay = 300.0;
	balance -= willPay; // 当前余额
	document.write("当前余额为： " + balance ); // 输出余额
	var willPay2 = 800;
	if(balance < willPay2)
	{
		document.write( (",不足以进行下次支付！").fontcolor("red") );
	}
}
-->

<!-- 4-2
function use42()
{
	var A = 1;
	var B = 2;
	var C = 3;
	var D = 4;
	var E = ( A + B ) * C + D;
	document.write( E + 4 );
}
-->
