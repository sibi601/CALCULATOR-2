let result=document.getElementById('iptext');

/*let calculate=(number)=>{*/
	function calculate(number) {
		result.value+=number;
}

/*let Result=()=>{*/
	function Result() {

	try
	{
		result.value=eval(result.value)
	}
	catch(err){
		alert("Invalid input");
	}
}

function allclr(){
result.value=" ";
}

function clr(){
	result.value=result.value.slice(0,-1);
}