
$(function () {
    var $element = $('.war');
    function fadeInOut () {
        $element.fadeIn(2500, function () {
            $element.fadeOut(2000, function () {
                $element.fadeIn(2500, function () {
                    setTimeout(fadeInOut, 500);
                });
            });
        });
    }

    fadeInOut();
});

$(function () {
    $(".alert").fadeOut(4000)
});


$(function () {
    var $element = $('.booble-profile-name');
    function fadeInOut () {
        $element.fadeIn(2500, function () {
            $element.fadeOut(2000, function () {
                $element.fadeIn(2500, function () {
                    setTimeout(fadeInOut, 500);
                });
            });
        });
    }

    fadeInOut();
});