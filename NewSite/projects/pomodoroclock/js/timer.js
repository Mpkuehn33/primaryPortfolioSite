var minstart = 59;
var timer;
var pace = [];

var js = function () {
    var st = document.getElementById("time").innerHTML.split(":");
    var down;
    if (pace.length % 2 === 0){
        down = document.getElementById("ssnlength").innerHTML; 
    } else if (pace.length % 2 !== 0){
        down = document.getElementById("brklength").innerHTML;
    }
    /*Lowers the minute number when starting*/
    if (parseInt(down) === parseInt(st[0])) {
        st[0]--;
    }
    if (st[0] < 0){
        settime();
    }
    
    st[1] = minstart;
    minstart--;
    if (st[1] === 0){
        if (st[0] !== "0"){
        st[0]--;
        }
        minstart = 59;
    }
    if (st[1] >= 10){
        document.getElementById("time").innerHTML = st[0] + ":" + st[1];
    } else if (st[1] < 10){
        document.getElementById("time").innerHTML = st[0] + ":0" + st[1]; 
    }
    timer = setTimeout('js()', 1000);
    if (st[0] === "0" && minstart === 0){
        clearTimeout(timer);
        st[0] = parseInt(document.getElementById("brklength").innerHTML).toString();
        if (pace.length % 2 === 0){
        document.getElementById("msg").innerHTML =  '<h1>Enjoy your break!</h1>';
        stuff();
        } else{
            settime();
            js();
            document.getElementById("msg").innerHTML =  '<h1>Work Mode</h1>';
        }
        pace.push("0");
    }
}
var stuff = function() {
    var brktime = parseInt(document.getElementById("brklength").innerHTML).toString();
    document.getElementById("time").innerHTML = brktime + ":" + "00";
    js();
}

var settime = function(){
    var length = parseInt(document.getElementById("ssnlength").innerHTML).toString();
    document.getElementById("time").innerHTML = length + ":" + "00";
}


/*Stop Time*/
var stop = function() {
    clearTimeout(timer);
}
var upbrk = function () {
    var up = document.getElementById("brklength").innerHTML;
    up++;
    document.getElementById("brklength").innerHTML = up;
}
var downbrk = function(){
    var down = document.getElementById("brklength").innerHTML;
    if (down === "4"){
        alert("A break shorter than 4 minutes is meaningless.");
    } else{
    down--;
    document.getElementById("brklength").innerHTML = down;
    }
}

/* Change session time up */
var upssn = function () {
    var up = document.getElementById("ssnlength").innerHTML;
    var min = document.getElementById("time").innerHTML.split(":");
    var upnum = parseInt(up);
    var minnum = parseInt(min[0]);
    if (upnum === minnum) {
        up++;
        document.getElementById("ssnlength").innerHTML = up;
        /*Below changes clock */
        min[0] = up;
        document.getElementById("time").innerHTML = min[0] + ":" + min[1];
    } else {
        alert("The timer has already been set. Refresh to start new timer.");
    }
}

/* Change session time down */
var downssn = function(){
    var down = document.getElementById("ssnlength").innerHTML;
    var min = document.getElementById("time").innerHTML.split(":");
    var downnum = parseInt(down);
    var minnum = parseInt(min[0]);
    if (downnum === minnum) {
        down--;
        document.getElementById("ssnlength").innerHTML = down;
        /*Below changes clock */
        min[0] = down;
        document.getElementById("time").innerHTML = min[0] + ":" + min[1];
    } else {
        alert("The timer has already been set. Refresh to start new timer.");
    }
}

