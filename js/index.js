/******设置顶部导航条效果******/
/**通用方法**/

/**应用**/
$('.nets_appli').on('mouseover',function(){
	$('.nav-select-appli').css('display','block');
	$('.nets_appli>a>b').removeClass('down').addClass('up');
});
$('.nets_appli').on('mouseout',function(){
	$('.nav-select-appli').css('display','none');
	$('.nets_appli>a>b').removeClass('up').addClass('down');
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

//登录成功后红色按钮下拉监听
$('#login_succ').on('mouseover','div.pop',function(){
	console.log(11111);
	$('.nav-select-pop').removeClass('hide');
	$('#login_succ p.lf b').removeClass('down').addClass('up');
});
$('#login_succ').on('mouseout','div.pop',function(){
	$('.nav-select-pop').addClass('hide');
	$('#login_succ p.lf b').removeClass('up').addClass('down');
});

var lis = document.querySelectorAll('#right_header>ul>li');
for(var i=0;i<lis.length;i++){
	//console.log(lis[key]);
	var li=lis[i];
	li.addEventListener('mouseover',function(e){		
		var cn=this.className.slice(11);
		$('.nav-select-'+cn).show();
		$('.'+cn+' .top_nav_select').removeClass('down').addClass('up');
		this.style.backgroundColor='#1e1e1e';
	},true);
	li.addEventListener('mouseout',function(e){
		var cn=this.className.slice(11);
		$('.nav-select-'+cn).hide();
		$('.'+cn+' .top_nav_select').removeClass('up').addClass('down');
		this.style.backgroundColor='';
	},true)
}
var moblie = document.querySelector('#right_header>ul>li:last-child'),
	moblieImg = document.querySelector('.top_header_box .qrcode-img');
$(moblie).hover(function(){$(moblieImg).show()},function(){$(moblieImg).hide()});

window.onscroll = function(){
	var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
	//console.log(scrollTop);
	if(scrollTop>=300){
		side_bar.style.display = 'block';
	}else {
		side_bar.style.display = 'none';
	}
	if(scrollTop<=941){//864   266+402=668   1609-668=941
		$('.nav-bottom').addClass('fixed');
		$('.nav-content-box').addClass('hide');
	}else{
		$('.nav-bottom').removeClass('fixed');
		$('.nav-content-box').removeClass('hide');
	}
}
/* 当滚动条高度<... 时 固定定位在屏幕底部，display:none
   单击时toggle 显示/隐藏
   按钮箭头改变
   当滚动条高度>...时显示在默认位置，display:block
*/
/* 底部导航单击事件 */
$('.nav-top-button').click(function(){
	$('.nav-content-box').toggleClass('hide');
	if($('.button i').hasClass('traig-up')){
		$('.button i').removeClass('traig-up').addClass('traig-down');
	}else{
		$('.button i').addClass('traig-up').removeClass('traig-down');
	}
})
$('.nav-tabs li a').mouseover(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

/** 登录框 **/
$('#login').hover(
	function(){
		$('#login_box').show();
	},
	function(){
		$('#login_box').hide();
	}
);

$('#login_btn').click(function(){
	if(!(uname.value || upwd.value)){		
		return;
	}else {
		$.ajax({
			type:'post',
			url:'../data/login.php',
			data:$('#form').serialize(),
			success:function(data){
				if(data==='OK'){
					loginOperate(uname.value);					
					/** 写入缓存  下次免登录 **/
					//如果7天内免登陆
					if(ckb.checked){
						localStorage['uname']=uname.value;
						localStorage['upwd']=encodeURIComponent(upwd.value);
					}
					uname.value = '';
					upwd.value = '';
					

				} else {
					$('.tips').removeClass('hide');
				}
			},
			error:function(){
				console.log(new Error('出错啦'));
			}
		})
	}
});
window.onload = function(){
	//免登陆
	if(localStorage['uname']){
		loginOperate(localStorage['uname']);
	}
}
// 邮箱注册功能
// form表单输入下拉选择功能
function loginOperate(str){
	$('#login').hide();
	//登录成功后的下拉菜单
	var arr = ['进入用户中心','进入我的邮箱','进入我的LOFTER','进入我的相册','进入我的花田','进入我的同城约会','进入我的博客','进入我的云笔记','进入我的彩票','进入我的贵金属','进入我的车险','进入我的保险','进入网易商城','进入网易云阅读','进入云课堂','进入我的考拉'];
	var strr = '<div class="top_header_menu nav-select-pop hide"><ul class="nav-select-list">';
	for (var i = 0; i < arr.length; i++) {
		strr+='<li><a href="">'+arr[i]+'</a></li>';
	}
	strr+='</ul></div>';
	$('#login_succ').removeClass('hide').html('<span class="lf welcome">欢迎您</span><div class="pop lf"><p class="lf">'+str+'</p></div>');
	$('#login_succ .pop').append(strr);
	$('#login_succ p.lf').append('<b class="top_nav_select down"></b>');	
	$('.register_email').addClass('hide');
	$('.logout').removeClass('hide');
}
// 增加退出登录功能
$('.logout').click(function(){
	if(localStorage['uname']){
		localStorage.clear();
	}
	$('.register_email').removeClass('hide');
	$(this).addClass('hide');
	$('#login').show();
	$('#login_succ').addClass('hide').html('');
	
});
//登录框输入提示功能
uname.addEventListener('keyup',function(){
	var v = this.value;
	if(v!=undefined){
		if((i = v.indexOf('@'))!=-1){
			v.splice(i);
		}
		$('.user_login').removeClass('hide');

		var addStr = ['@126.com','@163.com','@yeah.com','@188.com','@vip.163.com','@vip.126.com'];

		var str = '<ul>';
		for(var i = 0;i<addStr.length;i++){
			str+= '<li>' + v + addStr[i] + '</li>';
		}
		str += "</ul>";
		$('.user_login').html(str);
	}
	if(!v){
		$('.user_login').addClass('hide');
	}
});
//登录提示框点击功能
$('.user_login').delegate('ul>li','click',function(e){
	console.log(e.target.innerHTML);
	uname.value = e.target.innerHTML;
	$('.user_login').addClass('hide');
})
