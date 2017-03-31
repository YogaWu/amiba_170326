/**
 * Created by qiangxl on 2017/3/24.
 */
;var active=$(".active");
active.siblings().add(active).on('click',function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});
$(".main ul>li:first-child").off('click');
