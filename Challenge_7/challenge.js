//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = ['Yes', 'No', 'Maybe'];

if (choice == 1){
    console.log('Yes');
} else if (choice == 2) {
    console.log('No');
} else {console.log('Maybe');
    
}

    console.log(choice);
}

ask();
