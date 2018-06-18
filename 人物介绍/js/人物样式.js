
$(function(){
    console.log(
        `      ┏┛┻━━━━┛┻┓
      ┃　　　　     　┃
      ┃　   ━  　   ┃
      ┃ ┳┛  ┗┳   ┃
      ┃　　　　　　   ┃
      ┃　　　┻　　   ┃
      ┃　　　　　　   ┃
      ┗━┓　 ┏━━━┛
        ┃　　　┃   神兽保佑
        ┃　　　┃   代码无BUG！
        ┃　　　┗━━━━━━━━━┓
        ┃　　　　　　　           ┣┓
        ┃　　　　                 ┏┛
        ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛
            ┃ ┫ ┫     ┃  ┫┫
            ┗━┻┛     ┗━┻┛`
    )
});/*召唤神兽*/

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



$(function(){/*人物在片头消失之后出现*/
    setTimeout(function(){
        $('.person_all').css({
            display:'block'
        })
    },11500)
});/*人物在片头消失之后出现*/

$('.person').on({/*给人物框添加事件*/
    mouseover: function () {/*鼠标进入事件*/
        $(this).find($('.halo')).css('bottom','-10px');/*脚底动画下移动*/
        $(this).find($('.head')).css('display','none');/*头顶动画影藏*/
        $(this).children().find($('.son')).css('transform','scale(1.3)');/*人物放大*/
        $(this).find('.halo').css({/*更换脚底动画内容*/
            background: 'url("../img/result/ceshi.png")',
            backgroundPosition: "-26px -10px",
            height:'75px',
            bottom:'-35px'
        });/*更换脚底动画内容*/

        $('.shada').css({/*突出人物*/
            zIndex:'12',
            display:'block',
            opacity:'1'
        });
        $(this).css({
            zIndex:'13'
        })/*突出人物*/

        /*以下为名字部分的动画内容*/
        if($(this).attr('class') == 'person in_left'){/*如果该name框在左边*/
            $(this).find($('.name')).removeClass('animated bounceOutLeft');/*先删除从左离开*/
            $(this).find($('.name')).addClass('animated bounceInLeft');/*再从左进入*/
            $(this).find($('.name')).css('opacity','1');

        }else{
            $(this).find('.name').removeClass('animated bounceOutRight');/*先删除从右离开*/
            $(this).find('.name').addClass('animated bounceInRight');/*先删除从右离开*/
            $(this).find($('.name')).css('opacity','1');
        }
        /*以下为名字部分的动画内容 end*/
    },/*鼠标进入事件*/

    mouseout:function(){/*移出还原*/
        $(this).find($('.halo')).css('bottom','8px');
        $(this).find($('.head')).css('display','block');
        $(this).children().find($('.son')).css('transform','scale(1)');
        $(this).find('.halo').css({
            background: 'url("../img/result/jd-85-33.png")',
            height:'33px'
        });
        $('.shada').css({
            zIndex:'11',
            display:'none',
            opacity:'0'
        });
        $(this).css({
            zIndex:'11'
        });

        /*以下为名字部分的动画内容*/
        if($(this).attr('class') == 'person in_left'){/*如果该name框在左边*/
            $(this).find($('.name')).removeClass('animated bounceInLeft');/*先删除左进入*/
            $(this).find($('.name')).addClass('animated bounceOutLeft');/*再添加左离开*/
            $(this).find($('.name')).css('opacity','0');

        }else{
            $(this).find('.name').removeClass('animated bounceInRight');
            $(this).find('.name').addClass('animated bounceOutRight');
            $(this).find($('.name')).css('opacity','0');
        }
        /*以下为名字部分的动画内容 end*/
    }/*移出还原*/

});/*给人物框添加事件*/

$('#person_4').on({/*布告栏单独处理*/
    mouseover: function () {/*鼠标进入事件*/
        // $(this).css('transform','scale(1.1)');
        $(this).find('.halo').css({
            background: 'url("../img/result/ceshi.png")',
            backgroundPosition: "-28px -30px",
            width:'85px',
            // height:'45px',
            bottom: '-15px',
            left:'15px',
            animation:'halo_ani 1.6s steps(10) infinite'
        })
    },/*鼠标进入事件*/

    mouseout:function(){/*移出还原*/
        // $(this).css('transform','scale(1)');
        $(this).find('.halo').css({
            background: 'url("../img/result/bgl.png")',
            width:'67px',
            height:'68px',
            bottom: '34px',
            left:'25px',
            animation:'halo_ani_4 5s steps(30) infinite'
        })
    }/*移出还原*/
});/*布告栏单独处理*/

$('#person_8').on({/*给人物框添加事件，8号修正*/
    mouseover: function () {/*鼠标进入事件*/
        $(this).find($('.halo')).css('bottom','-10px');
        $(this).find($('.head')).css('display','none');
        // $(this).children().find($('.son')).css('transform','scale(1.1)');
        $(this).find('.halo').css({
            background: 'url("../img/result/ceshi.png")',
            backgroundPosition: "-26px -10px",
            height:'75px',
            bottom:'-33px'
        })
    },/*鼠标进入事件*/

    mouseout:function(){/*移出还原*/
        $(this).find($('.halo')).css('bottom','8px');
        $(this).find($('.head')).css('display','block');
        // $(this).children().find($('.son')).css('transform','scale(1)');
        $(this).find('.halo').css({
            background: 'url("../img/result/jd-85-33.png")',
            height:'33px',
            bottom:'-8px'
        })
    }/*移出还原*/

});/*给人物框添加事件，8号修正*/


/*logo与视屏*/
$('.logo').mouseover(function(){
    $('#zs').trigger('play');
});
$('#music').on({
   mouseover:function(){
       $('#music').css('background-position-x','-32px');
   },
    mouseout:function(){
        $('#music').css('background-position-x','0px')
    },
    // click:function(){
    //    let x = $('#music').css('background-position-x');
    //    let y = $('#music').css('background-position-y');
    //     if(x != '-62px' && y != '0px'){
    //         $('#music').css('background-position-x','-62px');
    //         $('#music').css('background-position-y','-30px');
    //     } else{
    //         $('#music').css('background-position-x','0px');
    //         $('#music').css('background-position-y','0px');
    //     }
    // }


});
/*logo与视屏 end*/

