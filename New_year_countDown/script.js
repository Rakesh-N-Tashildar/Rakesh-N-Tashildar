var timer_counter = new Date("Dec 31,2021 24:00:00").getTime();

var timer = setInterval(function () {
    var present = new Date().getTime();

    var time_span_between_dates = timer_counter - present;

    var days = Math.floor(time_span_between_dates / (1000 * 60 * 60 * 24));
    var hr = Math.floor((time_span_between_dates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((time_span_between_dates % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((time_span_between_dates % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML =
        days + 'd ' + hr + 'h ' + min + 'm ' + sec + 's';


    if (time_span_between_dates < 0) {
        clearInterval(timer);
        document.getElementById('timer_title').innerHTML =
            'Big offer sales is over';

    } else {
        document.getElementById('timer_title').innerHTML =
            'Big offer sales is on...hurry up!!!';
    }



}, 1000);





