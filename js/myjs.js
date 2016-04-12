

$('.page_wrap a').click(function(event) {
	$('.page_wrap a').removeClass('on');
	$(this).addClass('on');
	$('.page_wrap a:last-child').css('background','none');
});

$('.answer_con .number').each(function(event) {
	var length = $(this).parent().parent().parent().siblings('.other_ans').children().children('li').length;
	$(this).text(length)
});

$('.other_ans ul li:last-child').css('border-bottom','none');

function resize(){
	
$(".vip_ques").each(function(event) {
	var vip_name = $(this).siblings().width();
	var vip= $(this).parent().width();
	 $(this).width(vip-vip_name-5);	
    });
}
resize();

$(window).resize(function() {
  resize();
});

$('.number').parent().click(function(e) {
    $(this).parent().siblings('.huifu').toggleClass('hide');
});