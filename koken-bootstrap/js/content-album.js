$(function() {



    //resize album content image to fit available height
    function resizeAndCenter() {
        var $img = $('.tab-content img');
        var height = $img.height();

        var width = $img.width();
        var ratio = width / height;


        var winHeight = $(window).height();
        var topImg = $img.offset().top;
        var footerHeight = $(".bottomInfo").height();

        var newHeight = winHeight - topImg - footerHeight;
        var newWidth = ratio * newHeight;


        //resize
        $img.css("height", newHeight + "px");
        $img.css("width", newWidth + "px");


        //center
        var wrapperWidth = $(".tab-content").width();

        var marginLeft = (wrapperWidth - newWidth) / 2;


        $img.css("margin-left",marginLeft+"px");

    }


    $(window).on('k-resize', function() {
        console.log('k-resize event has fired!')
        resizeAndCenter();
    });


});