$(function () {
    //定时器
    var time;
    //显示登录窗口
    $('.logining').click(function () {
        $('#login').show();
    });
    //关闭
    $('.loginNamel').click(function () {
        if(time)
        {
            clearInterval(time);
        }
        $('#sendCode').text('发送验证码');
        $('#sendCode').removeAttr('disabled');
        $('#login').hide();
        $('.loginPhone').show();
        $('.loginWx').hide();
    });
    //发送验证码
    $('#sendCode').click(function () {
        var _this = this;
        var timeCount = 60;
        $(_this).attr('disabled','disabled');
        $(_this).text(timeCount+'s后重新获取');
        time = setInterval(function () {
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
    //微信登录
    $('.wxLogin').click(function () {
        $('.loginPhone').hide();
        $('.loginWx').show();
    });
    var time1;
    //发送验证码
    $('#sendCode1').click(function () {
        var _this = this;
        var timeCount = 60;
        $(_this).attr('disabled','disabled');
        $(_this).text(timeCount+'s后重新获取');
        time1 = setInterval(function () {
            timeCount--;
            $(_this).text(timeCount+'s后重新获取');
            if(timeCount==0)
            {
                clearInterval(time1);
                $(_this).removeAttr('disabled');
                $(_this).text('重新获取');
            }
        },1000);
    });
    //关闭
    $('.loginNameC').click(function () {
        if(time1)
        {
            clearInterval(time1);
        }
        $('#sendCode1').text('发送验证码');
        $('#sendCode1').removeAttr('disabled');
        $('#count').hide();
    });

});