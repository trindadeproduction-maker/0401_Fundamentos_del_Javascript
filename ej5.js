for (let n = 1; n <= 20; n++){
    if (n % 3 === 0 ){
        document.writeln("Fizz");
    }else if (n % 5 === 0){
        document.writeln("Buzz");
    }else if(n % 3 === 0 && n % 5 === 0){
        document.writeln("FizzBuzz");
    }else {
        document.writeln(n);
    }
}

