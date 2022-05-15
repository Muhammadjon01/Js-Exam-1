function smallestNum(a,b,c){
    
    if(a<c && a<b){
        console.log(a)
    }else if(b<c && b<a){
        console.log(b)
    }else{
        console.log(c)
    }
}

smallestNum(1,3,2)
smallestNum(6,4,5)