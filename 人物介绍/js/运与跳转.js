
$(function(){
    setTimeout(function(){
        $('.logo').css('display','block')
    },11500)
});
//      ┏┛┻━━━━┛┻┓
//      ┃　　　　     　┃
//      ┃　   ━  　   ┃
//      ┃ ┳┛  ┗┳   ┃
//      ┃　　　　　　   ┃
//      ┃　　　┻　　   ┃
//      ┃　　　　　　   ┃
//      ┗━┓　 ┏━━━┛
//        ┃　　　┃   神兽保佑
//        ┃　　　┃   代码无BUG！
//        ┃　　　┗━━━━━━━━━┓
//        ┃　　　　　　　           ┣┓
//        ┃　　　　                ┏┛
//        ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛
//          ┃  ┫ ┫   ┃  ┫  ┫
//          ┗━┻━┛   ┗━┻━┛
//


function yun_ani(){/*云动画*/
    $('.yun').css('display','block');
    $('.yun').css('animation','yunIn 3s steps(28)');/*云进入*/
    setTimeout(function(){/*云退出*/
        $('.yun').css('animation','yunOut 3s steps(28)');
    },3000)/*云退出*/
    setTimeout(function(){
        $('.yun').css('display','none');
    },6000)
}/*云动画*/

/*跳转*/
$('.person_all').find('a').click(function(){/*点击之后把云层显示，并执行动画*/
    $('.xq').css('display','block');
    yun_ani();
    setTimeout(function(){
        $('#box').css('display','none');
    },3000);
    let index = $(this).parent().attr('id');
    console.log(index);
    $('.xq').find('div').each(function(){
        if($(this).attr('class') == index){
            console.log($(this));
            $(this).css({
                display:'block',
                zIndex:100
            });
        }
    });
});/*点击之后把云层显示，并执行动画*/


$('.xq>div>a').click(function(){
    // $('#pt').css('display','none');
    setTimeout(function(){

        $(this).parent().css({
            display:'none',
            zIndex:'-99999999'
        });
        $('.xq').css('display','none');
    },3000);
    yun_ani();
    setTimeout(function(){
        $('#box').css('display','block');
        $(this).parent().css('display','none');
    },3000);

});