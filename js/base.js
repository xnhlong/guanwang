window.onload = function() {
	onunload();
	$(".person_news_t>span").click(function() {
		$(".person_news_t>span").removeClass("news_sel");
		$(this).addClass("news_sel");
	})
	
	//导航栏固定
	$(window).scroll(function() {
		var st = $(document).scrollTop();
		if(st > 0) {
			$("header").addClass("head");
		} else {
			$("header").removeClass("head");
		}
	});
	//	个人中心标签切换
	$(".person_nav li").click(function() {
		$(".person_nav li").removeClass("sel");
		$(".person_nav li").find("span").removeClass("black");
		$(this).addClass("sel");
		$(this).find("span").addClass("black");
		var index = $(this).index();
		$(".person_info>div").addClass("hide");
		$(".person_info>div").eq(index).removeClass("hide");

	})

	//	点击滑动一屏
	down($(".down"), $(".index_banner"));
	down($(".down1"), $(".bus_banner"));
}

$(".person>div>div").mouseenter(function() {
	$(this).find('.person_wrop').show("slow");
})
$(".person>div").mouseleave(function() {
	$(".person_wrop").hide("slow");
})
//价格表格淡入
$(".price_info").fadeIn(3000)

//点击向下箭头滑动一屏
function down(ele1, ele2) {
	ele1.click(function() {
		var bannerH = ele2.height();
		var headerH = $("header").height();
		var top = bannerH - headerH;
		$("body,html").animate({ scrollTop: top }, 700);
		return false;
	})
}

//新闻中心板块分类点击字体变色
$(".news_ban span a").click(function(){
	$(".news_ban span a").css("color","#000");
	$(this).css("color","#57ABF3");
	$(this).css("text-decoration","none");
})

//点击下载出现遮罩层
$(".load_load>div:first").find("a").click(function(){
	$(".load_wrap:first").css("display","block");
})
$(".load_load>div:last").find("a").click(function(){
	$(".load_wrap:last").css("display","block");
})

//点击关闭遮罩层
$(".close").click(function(){
	$(".load_wrap").hide();
})


window.onunload=function(){
	if($(document).scrollTop()>0){
		$("header").addClass("head");
	}
}

var mm=$(".index_banner").height();
var nn=$(".team_banner").height();
$(".index_content1").css("margin-top",mm);
$(".team_content_t").css("margin-top",nn);
