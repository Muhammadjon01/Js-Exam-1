function changeTwoNum(n){
    var a;
    var b;
    var c;

    a=n/100;
    b=n%100/10;
    c=n%10;
    console.log(`${Math.floor(b)}${Math.floor(a)}${c}`)
}

changeTwoNum(615);