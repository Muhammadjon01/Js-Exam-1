function checkPow(n, s=3, r=1){
    while(r*s<=n)
    r*=s 
    if(r==n){
        console.log("true")
    }else {
        console.log("false")
    }
    
}
checkPow(27)