function loop(n,k){
    var cnt;
    var res;

    for(let i=1; i<=k; i++){
        if(n<=0){
            break;
        }
        cnt=i*n;
        res=cnt*k
        console.log(cnt, res)
    }
}

loop(1,5)
loop(0,5)