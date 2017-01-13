//Exercise 1

for (var i = 1; i <= 100; i++) {
    console.log(i);
}

//Exercise 2

var hash = '';

for (var i = 0; i < 7; i++){hash += '#'
    console.log(hash);
}

//Exercise 3

for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0){
    console.log('FizzBuzz');
    } 
    else if (i % 5 == 0){
    console.log('Fizz');
    }
    else if (i % 3 == 0){
    console.log('Buzz');
    }
    else{
    console.log(i);
    }
}

//Exercise 4

var size = 8;
var board = '';

for (var w = 0; w < size; w++){
    for (var b = 0; b < size; b++){
        if ((w+b) % 2 == 0)
        board += ' ';
        else
        board += '#'; 
        } board += '\n';
        }
console.log(board);