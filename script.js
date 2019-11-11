// Navbar 
$(".nav-link").on('click', event => {
    let activeLink = $(event.target).siblings('.active_nav_link')[0];
    if (activeLink) {
        $(activeLink).removeClass("active_nav_link")
    }
    $(event.target).addClass('active_nav_link');
    $("#hamburger_menu_toggler").addClass('collapsed')
    $("#navbarNavAltMarkup").removeClass("show")
})


// Flipboard
let kigali_class_time = moment([2020, 0, 7]);
let portfolio_class_time = moment([2020, 1, 4]);

const hoursInDay = 24
const secondsInHour = 60 * 60;
const secondsInDay = hoursInDay * secondsInHour;


let intervalId = setInterval(() => {
    let kglDeltaT = kigali_class_time.diff(moment(), 's')
    let portfolioDeltaT = portfolio_class_time.diff(moment(), 's')

    if (kglDeltaT <= 0) {
        $('#kigali_timer').empty().hide();
        $('#tutor_kgl').hide();
    } else {
        if (kglDeltaT > secondsInDay) {
            // DailyCounter, no seconds
            $('#kigali_timer').FlipClock(kglDeltaT, {
                clockFace: 'DailyCounter',
                countdown: true,
                showSeconds: false,
            });
        } else {
            // HourlyCounter
            $('#kigali_timer').FlipClock(kglDeltaT, {
                clockFace: 'HourlyCounter',
                countdown: true,
                showSeconds: true,
            });
        }
    }

    if (portfolioDeltaT <= 0) {
        $('#portfolio_timer').empty().clear();
        $('#sign_up_portfolio').empty().clear();
    } else {
        if (portfolioDeltaT > secondsInDay) {
            // DailyCounter, no seconds
            $('#portfolio_timer').FlipClock(portfolioDeltaT, {
                clockFace: 'DailyCounter',
                countdown: true,
                showSeconds: false,
            });
        } else {
            // HourlyCounter
            $('#portfolio_timer').FlipClock(portfolioDeltaT, {
                clockFace: 'HourlyCounter',
                countdown: true,
                showSeconds: true,
            });
        }
    }

    if (kglDeltaT <= 0 && portfolioDeltaT <= 0) {
        clearInterval(intervalId);
    }

}, 1000)