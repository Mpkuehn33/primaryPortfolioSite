// alert("js works!");

var home = function(){
    $('.bdytxt2').css('display', 'none');
    $('.home').fadeIn(1500).css('display', 'block');
    $('#current').html('// Home');
    $('.bdytxt3').css('display', 'none');
    $('.bdytxt4').css('display', 'none');
}

var projects = function(){
        $('.bdytxt2').fadeIn(1500).css('display', 'block');
        $('.home').css('display', 'none');
        $('#current').html('// Projects');
        $('.bdytxt3').css('display', 'none');
        $('.bdytxt4').css('display', 'none');
}

var resume = function(){
    $('.bdytxt2').css('display', 'none');
    $('.home').css('display', 'none');
    $('#current').html('// Resume');
    $('.bdytxt3').fadeIn(1500).css('display', 'block');
    $('.bdytxt4').css('display', 'none');
}

var contact = function(){
    $('.bdytxt2').css('display', 'none');
    $('.home').css('display', 'none');
    $('#current').html('// Contact');
    $('.bdytxt3').css('display', 'none');
    $('.bdytxt4').fadeIn(1500).css('display', 'block');
}


