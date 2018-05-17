$(document).ready(function () {

    var windowWidth = $(window).outerWidth();

    if (windowWidth > 991) {
        adjustTabMenu(windowWidth);
    }
    if (windowWidth < 992) {

        var $mainMenu = $('.nav.nav-tabs.tabs-left');
        if ($mainMenu.length > 0) {
            $mainMenu.on('click', 'a', function () {
                var $parent = $('.mainContent__tabNavigation');
                var $parentNav = $('.tabMenu');
                var btnIcon = $parentNav.find('.fa');

                console.log(btnIcon);
                $($parent).fadeToggle(300);

                if (btnIcon.hasClass('fa-caret-down')) {
                    btnIcon.removeClass('fa-caret-down');
                    btnIcon.addClass('fa-caret-up');

                } else {
                    btnIcon.removeClass('fa-caret-up');
                    btnIcon.addClass('fa-caret-down');
                }


            });
        }

    }


    var tabToPage = $('.tab-to-page');
    if (tabToPage.length > 0) {

        $('.tab-to-page a').on('click', function (e) {
            e.preventDefault();

            var $this = $(this);
            var $el = $this.attr('href');

            $('a[href="' + $el + '"]').tab('show');
        });

    }

    var toolkitBtn = $('.toolkit-btn');
    if (toolkitBtn.length > 0) {

        toolkitBtn.on('click', function () {
            var $parent = $('.tabMenu');
            var $menu = $('.mainContent__tabNavigation');
            var btnIcon = $parent.find('.fa');

            if (btnIcon.hasClass('fa-caret-down')) {
                btnIcon.removeClass('fa-caret-down');
                btnIcon.addClass('fa-caret-up');

            } else {
                btnIcon.removeClass('fa-caret-up');
                btnIcon.addClass('fa-caret-down');
            }

            $('.mainContent__tabNavigation').fadeToggle(300);

        });


    }



    $('a[data-toggle=tab]').on('click', function () {
        var $this = $(this);

        if ($this.hasClass('tab-toolkit-cdr')){
            $('.mainContent__tabNavigation').css('margin-top', '60px');
        }else{
            $('.mainContent__tabNavigation').css('margin-top', '0');
        }
    });



});

$(window).resize(function () {
    var windowWidth = $(window).outerWidth();

    adjustTabMenu(windowWidth);

    // if (windowWidth > 991) {
    //     adjustTabMenu(windowWidth);
    // }
    // if (windowWidth < 992) {
    //     var $tabMenu = $('.tabMenu');
    //     $tabMenu.css('margin-left', 0);
    //
    // }
});


function adjustTabMenu(wWidth) {
    var $tabMenu = $('.tabMenu');
    var $tabSubMenu = $('.tabSubMenu');
    var $tabsLeft = $('.tabs-left');
    if ($tabMenu.length > 0) {
        var tabWidth = $tabsLeft.innerWidth() + 15;

        $tabMenu.css('margin-left', -tabWidth);
    }

    if ($tabSubMenu.length > 0) {
        var tabWidth = $tabsLeft.innerWidth() + 15;

        $tabSubMenu.css('margin-left', -tabWidth);
    }

    if (wWidth > 991) {
        $('.mainContent__tabNavigation').show();
    }
    if (wWidth < 992) {
        var $tabMenu = $('.tabMenu');
        $tabMenu.css('margin-left', 0);

    }
}