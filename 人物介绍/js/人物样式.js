
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
        $(this).find($('.halo')).css('bottom','-10px');
        $(this).find($('.head')).css('display','none');
        $(this).children().find($('.son')).css('transform','scale(1.3)');
        $(this).find('.halo').css({
            background: 'url("../img/result/ceshi.png")',
            backgroundPosition: "-26px -10px",
            height:'75px',
            bottom:'-35px'
        })
    },/*鼠标进入事件*/

    mouseout:function(){/*移出还原*/
        $(this).find($('.halo')).css('bottom','8px');
        $(this).find($('.head')).css('display','block');
        $(this).children().find($('.son')).css('transform','scale(1)');
        $(this).find('.halo').css({
            background: 'url("../img/result/jd-85-33.png")',
            height:'33px'
        })
    }/*移出还原*/

});/*给人物框添加事件*/

$('#person_4').on({/*布告栏单独处理*/
    mouseover: function () {/*鼠标进入事件*/
        // $(this).css('transform','scale(1.1)');
        $(this).find('.halo').css({
            border:'solid 1px',
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
            border:'solid 1px',
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

