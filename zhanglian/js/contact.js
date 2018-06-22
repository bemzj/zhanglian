$(function () {
    //初始化全屏
    $('#main').css('margin-bottom',$(window).height()-$('.header').height()-548-121);
});
var map = new AMap.Map('map', {
    resizeEnable: true,
    zoom:19,
    center: [116.336777,39.918591]
});
var marker = new AMap.Marker({
    position: map.getCenter(),
    draggable: true,
    cursor: 'move',
    // icon: "img/addressIcon.png"
});
marker.setMap(map);
// 设置点标记的动画效果，此处为弹跳效果
//marker.setAnimation('AMAP_ANIMATION_BOUNCE');
marker.setTitle('点击我，打开地图，掌链欢迎您的到来！');
marker.on('click',function(e){
    marker.markOnAMAP({
        name:'掌链有限公司',
        position:marker.getPosition()
    })
})