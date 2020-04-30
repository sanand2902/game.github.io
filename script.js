
function check(t){
    if(t<10){
        return '0' + t;
    } else {
        return t;
    }
}


var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


function update_date(){
    var today = new Date();
    var date = days[today.getDay()] + ', ' + check(today.getDate()) + '-' + check(today.getMonth()+1) + '-' + check(today.getFullYear());
    var t = check(today.getHours());
    var v=' AM'
    if(t>=12){
        t -= 12;
        v=' PM';
    }
    var time = t + ':' + check(today.getMinutes()) + ':' + check(today.getSeconds()) + v;
    document.getElementById('watch_date').textContent = date;
    document.getElementById('watch_time').textContent = time;
}

setInterval(update_date,500);
