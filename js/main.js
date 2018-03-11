var addthis_share =
{
    title: 'iPhone ∞',
    description: 'Introducing the new iPhone 5',
    templates: {
        vk: 'asdasd',
        twitter: 'check out {{url}} (from @example_dot_com)',
        facebook: 'check out {{url}} (from @example_dot_com)',
    }
};

$(function () {
    var $document = $(document),
        $window = $(window),
        $container = $('.iphone-body'),
        hash = window.location.hash.replace('#','');

    if($container.height()<$window.height()) {
        var count = parseInt($window.height()/100+24);
        for(i=0;i<count;i++) {
            newicon();
        }
    }

    jQuery.fn.scrollMinimal = function(smooth) {
        var cTop = this.offset().top;
        var cHeight = this.outerHeight(true);
        var windowTop = $(window).scrollTop();
        var visibleHeight = $(window).height();

        if (cTop < windowTop) {
            if (smooth) {
                $('body').animate({'scrollTop': cTop}, 'slow', 'swing');
            } else {
                $(window).scrollTop(cTop);
            }
        } else if (cTop + cHeight > windowTop + visibleHeight) {
            if (smooth) {
                $('body').animate({'scrollTop': cTop - visibleHeight + cHeight}, 'slow', 'swing');
            } else {
                $(window).scrollTop(cTop - visibleHeight + cHeight);
            }
        }
    };

    function resizeHandler()
    {
        getPosition();
    }

    function getPosition()
    {
        var $header = $('#header'),
            $iphone = $('.iphone');
        $header.css({
            'left': $iphone.width() + $iphone.offset().left + 80 + 'px',
            'display': 'block'
        });
    }

    getPosition();

    function scrollHandler()
    {
        scrTop = $window.scrollTop();
        wndHeight = $window.height();

        curScrOffset = scrTop + wndHeight;

        var number = parseInt(curScrOffset / 500);
        if(number < 5) {
            number = 5;
        }

        if(number===107) {
            number = '<a href="http://studio107.ru" target="_blank">'+number+'</a>';
        }

        $('.logo span').html(number);

        window.location.hash = number;

        el = $container.find('.clear');

        if (el.size() == 0) return 0;
        treshold = el.offset().top + el.height();
        treshold -= 200;

        if (curScrOffset >= treshold) {
            for(i=0;i<8;i++) {
                newicon();
            }
        }
    }

    function newicon()
    {
        var names = {
            1: 'YouTube',
            2: 'InstaMessage',
            3: 'TempleRun',
            4: 'Gems',
            5: 'SpaceEffect',
            6: 'RevealTheMaze',
            7: 'AirportScanner',
            8: 'RunningDead',
            9: 'Instagram',
            10: 'SongPop',
            11: 'GravityGuy',
            12: 'WhatsMyIQ',
            13: 'Love Calc',
            14: 'Wipeout Dash',
            15: 'Flashlight',
            16: 'Apple Store',
            17: 'Pinterest',
            18: 'Spotify',
            19: 'Stardom',
            20: 'InstaCollage',
            21: 'Snapchat',
            22: 'Jet Fighters II',
            23: 'The last driver',
            24: 'Find my phone',
            25: 'Ninja MustDie',
            26: 'Twitter',
            27: 'MotoHeroz',
            28: 'Flow Free',
            29: 'Explore 9/11',
            30: 'Pandora',
            31: 'FacebookMsg',
            32: 'Pic Stitch',
            33: 'Calorie Counter',
            34: 'Kakao',
            35: 'Chrome',
            36: 'Bingo Rush',
            37: 'iHeart Radio',
            38: 'Emoji',
            39: 'Google Drive',
            40: 'NFL 12',
            41: 'Kilk Messenger',
            42: 'Dictionary',
            43: 'CNN',
            44: 'Bombshells',
            45: 'Bubble mania',
            46: 'Tap Campus',
            47: 'Skype',
            48: 'Facebook',
            49: 'eBay',
            50: 'CoinDozer',
            51: 'QR Reader',
            52: 'Simpson',
            53: 'Dishonored',
            54: 'WallStreet',
            55: 'Netflix',
            56: 'Candy Maker',
            57: 'Google Translate',
            58: 'Fridays',
            59: 'Amazon Mobile',
            60: 'PayPal',
            61: 'TuneIn Radio',
            62: 'ESPN',
            63: 'Viber',
            64: 'Edmodo',
            65: 'Emoji',
            66: 'Disney',
            67: 'Voxer',
            68: 'Dropbox',
            69: 'Gmail',
            70: 'Angry Birds',
            71: 'Tango',
            72: 'LinkedIN',
            73: 'Facebook Pages',
            74: 'iBooks',
            75: 'Emoji',
            76: 'My Dragon',
            77: 'Groupon',
            78: 'Minecraft',
            79: 'ESPN',
            80: 'Photo Editor'
        };

        var number = Math.floor((Math.random()*80)+1),
            text = names[number];
        $container.find('.clear').before('<section class="iphone-icon-container"><section class="iphone-icon icons-'+number+'"></section><section class="iphone-text">'+text+'</section></section>');
    }

    $window.resize(resizeHandler);
    $window.scroll(scrollHandler);
    $window.keydown(function(e){
        if(e.keyCode==34) {
            e.preventDefault();
            return false;
        }
    });
});