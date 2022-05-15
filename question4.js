function sumAndProduct(a){
    //divide number
    var b;
    // mod number
    var c;
    //sum of num
    var sum;
    //multiply
    var prod;

    b=Math.floor(a/10);
    c=a%10;

    sum=b+c;
    prod=b*c;

    console.log(sum)
    console.log(prod)
}

sumAndProduct(23)