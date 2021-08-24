const hide = () => {
    document.querySelector(".cookie").style.display="none";
}

const cToF = (val) => {
    return val*1.8+32;
}
const fToC = (val) => {
    return (val-32)*5/9;
}

const changeTemp = (element) => {
    var highs = document.querySelectorAll(".high");
    var lows = document.querySelectorAll(".low");
    if(element.value == 'f')
        for(var i = 0; i<highs.length;i++) {
            highs[i].innerHTML=Math.trunc(10*cToF(highs[i].innerHTML.substring(0,2)))/10+"°";
            lows[i].innerHTML=Math.trunc(10*cToF(lows[i].innerHTML.substring(0,2)))/10+"°";
        }
    else
    for(var i = 0; i<highs.length;i++) {
        highs[i].innerHTML=Math.ceil(fToC(highs[i].innerHTML.substring(0,3)))+"°";
        lows[i].innerHTML=Math.ceil(fToC(lows[i].innerHTML.substring(0,3)))+"°";
    }
}