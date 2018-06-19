

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
    $('.yun').css('animation','yunIn 3s steps(28)');/*云进入*/
    setTimeout(function(){/*云退出*/
        $('.yun').css('animation','yunOut 3s steps(28)');
    },3500)/*云退出*/
}/*云动画*/

$('.person_all').find('a').click(function(){/*点击之后把云层显示，并执行动画*/
    $('.yun').css('display','block');
    yun_ani()
});/*点击之后把云层显示，并执行动画*/



/*跳转*/
$('#box').click(function(){

});