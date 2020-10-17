
function check(t){
    if(t<10){
        return '0' + t;
    } else {
        return t;
    }
}


const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


function update_date(){
    let today = new Date();
    let date = days[today.getDay()] + ', ' + check(today.getDate()) + '-' + check(today.getMonth()+1) + '-' + check(today.getFullYear());
    let t = check(today.getHours());
    let v=' AM'
    if(t>=12){
        t -= 12;
        v=' PM';
    }
    let time = t + ':' + check(today.getMinutes()) + ':' + check(today.getSeconds()) + v;
    document.getElementById('watch_date').textContent = date;
    document.getElementById('watch_time').textContent = time;
}

setInterval(update_date,500);
