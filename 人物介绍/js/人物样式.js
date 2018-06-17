


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

$('.person').on({/*给人物框添加事件*/
    mouseover: function () {/*鼠标进入事件*/
        $(this).css('transform','scale(1.2)');
        $(this).find('.halo').css({
            border: 'solid 1px',
            background: 'url("../img/result/ceshi.png")',
            backgroundPosition: "-28px -33px"
        })
    },/*鼠标进入事件*/

    mouseout:function(){/*移出还原*/
        $(this).css('transform','scale(1)');
        $(this).find('.halo').css({
            border: 'solid 1px',
            background: 'url("../img/result/jd-85-33.png")'
        })
    }/*移出还原*/

});/*给人物框添加事件*/