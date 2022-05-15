function discriminant(a,b,c){
    var d;
    var x1;
    var x2;

    a*a+b+c==0
    d=(b*b)-4*a*c;
    if(d<0){
        console.log("hal nadorad")
    }else if(d==0){
        x1=(-b+Math.sqrt(d))/(2*a);
        console.log(x1)
    } else{
        x1=(-b+Math.sqrt(d))/(2*a);
        x2=(-b-Math.sqrt(d))/(2*a);

        console.log(x1,x2)
    }
    

    
}

discriminant(4,-20,25)