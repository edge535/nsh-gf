

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
    yun_ani();
    setTimeout(function(){
        $('#box').css('display','none');
    },3000);
    let index = $(this).parent().attr('id');
    $('.xq').find('div').each(function(){
        if($(this).attr('class') == index){
            $(this).css('display','block');

        }
    });
    // $('.xq').find(`#${index}`).css('display','block');
});/*点击之后把云层显示，并执行动画*/



