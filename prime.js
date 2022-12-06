function identifyPrime(number) {
    let counter=0;
    for(let i=1;i<=number;i++){
        if(number%i==0){
            counter++;
        }
    }
    if(counter==2){
        return true;
    }
        return false;
    
}
let bag = checkprime(13);
if(bag==true){
console.log("prime");
}else{
console.log("not prime");
}