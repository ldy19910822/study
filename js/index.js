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
for(var i=0;i<lis.length;i++){
	//console.log(lis[key]);
	var li=lis[i];
	li.addEventListener('mouseover',function(){
		var cn=this.className.slice(11);
		$('.nav-select-'+cn).show();
		this.style.backgroundColor='#1e1e1e';
	},true);
	li.addEventListener('mouseout',function(){
		var cn=this.className.slice(11);
		$('.nav-select-'+cn).hide();
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
					$('#login').hide();
					$('#login_succ').removeClass('hide').html('<span class="lf welcome">欢迎您</span><p class="lf">'+uname.value+'</p>');
					var register_email = $('.register_email').html();
					$('.register_email').html('<a href="">安全退出</a>').css('padding','0 15px');
					uname.value = '';
					upwd.value = '';
					/** 写入缓存  下次免登录 **/
					// 增加退出登录功能
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
// 邮箱注册功能
// form表单输入下拉选择功能
