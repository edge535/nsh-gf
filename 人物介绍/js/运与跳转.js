
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

    let index = $(this).parent().attr('id');/*获取到点击的index*/



    if(index == 'person_4' || index == 'person_9' || index == 'person_10'){
    }else{
        $('.xq').css('display','block');/*详情页显示*/
        yun_ani();/*执行动画*/
        setTimeout(function(){/*在云完全覆盖的时候box消失*/
            $('#box').css('display','none');
        },3000);/*在云完全覆盖的时候box消失*/

        $('.xq').find('div').each(function(){/*所有的详情页*/
            $(this).css('zIndex','-1')
        });/*所有的详情页*/

        $('.xq').find('div').each(function(){/*匹配index*/
            if($(this).attr('class') == index){
                $(this).css({
                    // display:'block',
                    zIndex:100
                });
            }
        });
    }

});/*点击之后把云层显示，并执行动画*/


$('.xq>div>a').click(function(){
    setTimeout(function(){
        $(this).parent().css({
            // display:'none',
            zIndex:'-2'
        });
        $('.xq').css('display','none');
    },3000);
    yun_ani();
    setTimeout(function(){
        $('#box').css('display','block');
        // $(this).parent().css('display','none');
    },3000);

});