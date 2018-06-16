/*片头*/
$(function(){
    $('#box').scrollLeft(160);
});
setTimeout(function(){
    $("#pt").css('opacity','0');
},11500);
/*片头end*/

var jud_r = 0;/*移动函数的冲突判断*/
var jud_l = 0;/*移动函数的冲突判断*/
var jud = 0;/*移动函数的冲突判断，只要有一方运动，则该值为1*/
function box_move_r(){/*该函数是box的右移动*/
    if(jud == 1){/*表示已经有点击或者移入*/
        if(jud_r == 1){/*表示是被点击*/
            jud_l = -1;/*让对方的检测函数处于无法触发状态*/
            $('.ear_d').css('display','none');/*确定让大耳朵消失*/
            let scroll =  $('#box').scrollLeft();/*获取值*/
            let max = 2500;/*设置边界值*/
            let set1 = setInterval(function() {
                $('#box').scrollLeft(scroll+=5);/*右移*/
                if (scroll >= max) {
                    clearInterval(set1);/*达到边界值之后取消定时器*/
                    jud_r = 0;/*让本身检测函数进入可被触发状态*/
                    jud = 0;/*在总检测进入可被触发状态*/
                    jud_l = 0;/*让对方进入可被触发状态*/
                    $('.ear_d').css('display','block');/*大耳朵出现*/
                }
            },1)
        }else if(jud_r == 11){/*表示是移入触发该方法*/
            let scroll =  $('#box').scrollLeft();/**/
                $('#box').scrollLeft(scroll += 1);
                if (scroll >= 2500) {
                    $('#box').scrollLeft(2500);/*在边界值时固定该值无法再次变动*/
                    jud_r =0;/*回归到可被触发*/
                    jud = 0;/*回归到可被触发*/
                }
        }
    }

}/*该函数是box的右移动*/
function box_move_l(){/*该函数是box的左移动*/
    if(jud == 1){
        if(jud_l == 1){
            jud_r = -1;
            $('.ear_d').css('display','none');
            let scroll =  $('#box').scrollLeft();
            let set1 = setInterval(function() {
                $('#box').scrollLeft(scroll-=5);
                if (scroll <= 0) {
                    clearInterval(set1);
                    jud_r = 0;
                    jud = 0;
                    jud_r = 0;
                    $('.ear_d').css('display','block');
                }
            },1)
        }else if(jud_l == 22){
            let scroll =  $('#box').scrollLeft();
            $('#box').scrollLeft(scroll -= 1);
            if (scroll <= 0) {
                $('#box').scrollLeft(0);
                jud_l =0;
                jud = 0;
            }
        }
    }

}/*该函数是box的左移动*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左右耳朵控制*/
setTimeout(function(){/*在片头完成后出后耳朵*/
    $('.ear,.ear_d').css('display','block')
},11500);/*在片头完成后出后耳朵*/

var ces_r;/*移出检测*/
var ces_l;/*移出检测*/
$('.right_d').on({
    mouseover:function(){
        if(jud_r == 0 && jud_l == 0 && jud == 0 ){/*所有都不运行*/
             ces_r = setInterval(function(){/*重复触发方法*/
                jud_r =11;/*传递为移入触发*/
                jud = 1;/*总监控运行开始*/
                box_move_r();
            },5)
        }
    },
    mouseout:function(){
        clearInterval(ces_r);/*移出之后清楚*/
        jud_r =0;/*检测函数回归*/
        jud = 0;/*检测函数回归*/
    }
});
$('.left_d').on({
    mouseover:function(){
        if(jud_r == 0 && jud_l == 0 && jud == 0 ){/*所有都不运行*/
            ces_l = setInterval(function(){
                jud_l =22;
                jud = 1;/*总监控运行开始*/
                box_move_l()
            },5)
        }
    },
    mouseout:function(){
        clearInterval(ces_l);
        jud_l =0;
        jud = 0;
    }
});
$('#right').on({
    click:function(){
        if(jud_l ==0 && jud ==0 && jud_r ==0){
            $('.ear_d').css('display','none');
            jud_r = 1;
            jud = 1;
            box_move_r();
            jud_r = 0;
            jud = 0;
        }
    }
});
$('#left').on({
    click:function(){
        if(jud_r ==0 && jud ==0 && jud_l ==0){
            $('.ear_d').css('display','none');
            jud_l = 1;
            jud = 1;
            box_move_l();
            jud_l = 0;
            jud = 0;
        }
    }
});
$(function(){/*触到两边边界小耳朵消失*/
    $('#box').scroll(function(){
        let scroll = $('#box').scrollLeft();
        console.log(scroll);
        if(scroll == 0){
            $('#left').css('z-index','-9999')
        }else if(scroll >= 2450){
            $('#right').css('z-index','-9999')
        }else{
            $('.ear').css('z-index','10')
        }
    })
});/*触到两边边界小耳朵消失*/
/*给耳朵添加动态*/
$(function(){/*耳朵的抖动*/
    setInterval(function(){
        $('#right').animate({
            right:'2%'
        },'slow');
        $('#right').animate({
            right:'0px'
        },'normal');

        $('#left').animate({
            left:'2%'
        },'slow');
        $('#left').animate({
            left:'0px'
        },'normal')
    },1);
});/*耳朵的抖动*/
/*左右耳朵控制 end*/