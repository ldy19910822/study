/******设置顶部导航条效果******/
/**通用方法**/

/**应用**/
$('.nets_appli').on('mouseover',function(){
	$('.nav-select-appli').css('display','block');
});
$('.nets_appli').on('mouseout',function(){
	$('.nav-select-appli').css('display','none');
});

/**顶部右侧导航条下拉**/
/*注册邮箱*/
$('.register_email').hover(function(){
	$('#register_mail').css('display','block');
},
function(){
	$('#register_mail').css('display','none');
}
)
/***顶部右侧主导航下拉***/
/*
	$('#right_header .entry_bgblack').parent().on('mouseover',function(e){
		display(e,'block');
	});
	$('#right_header .entry_bgblack').parent().on('mouseout',function(e){
		display(e,'none');
	})
	function display(e,dis){
		var target=e.target;
		//console.log(e.target);
		//if(target.nodeName=='S'||target.nodeName=='B'){target=target.parentNode.parentNode}
		//if(target.nodeName=='A'){target=e.target.parentNode.parentNode}
		console.log(target);
		//if(target.nodeName=='LI'&&(target.className!='')){
			//console.log(target);
			var cn=target.className.slice(11);
			//console.log($('.nav-select-'+cn)[0]);
			$('.nav-select-'+cn).css('display',dis);
		//}
	}
*/
var lis = document.querySelectorAll('#right_header>ul>li');
console.log(lis);
for(var i=0;i<lis.length;i++){
	//console.log(lis[key]);
	var li=lis[i];
	li.addEventListener('mouseover',function(){
		var cn=this.className.slice(11);
		console.log(cn);
		$('.nav-select-'+cn).show();
	},true);
	li.addEventListener('mouseout',function(){
		var cn=this.className.slice(11);
		console.log(cn);
		$('.nav-select-'+cn).hide();
	},true)
}

