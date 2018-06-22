$(function(){
    //初始化全屏
    $('#main').css('margin-bottom',$(window).height()-$('.header').height()-540-121);
    $('#sendCode').click(function () {
        var _this = this;
        var timeCount = 60;
        $(_this).attr('disabled','disabled');
        $(_this).text(timeCount+'s后重新获取');
        var time = setInterval(function () {
            timeCount--;
            $(_this).text(timeCount+'s后重新获取');
            if(timeCount==0)
            {
                clearInterval(time);
                $(_this).removeAttr('disabled');
                $(_this).text('重新获取');
            }
        },1000);
    });
    //获取当前头像
    var preHead = $('#file').next('img').attr('src');

    $("#clipArea").photoClip({
        width: 200,
        height: 200,
        file: "#file",
        view: ".view",
        ok: "#clipBtn",
        loadStart: function() {
            $('#clipArea').show();
            //开启加载页面
        },
        loadComplete: function() {
            console.log("照片读取完成");
            //关闭加载页面
        },
        clipFinish: function(dataURL) {
           $('#clipBtn').click(function () {
               $('#clipArea').hide();
               $('#file').next('img').attr('src',dataURL);
           });
            $('#clipClose').click(function () {
                $('#clipArea').hide();
            });
        }
    });
    //修改昵称
    $('#name').on('input',function () {
        $(this).next('span').text($(this).val().length+'/10');
    });

    $('.myexchange').click(function () {
        $('.main').hide();
        $('#main').show();
    });
});