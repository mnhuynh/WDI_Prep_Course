//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = ['Yes', 'No', 'Maybe'];

switch(choice){
    case 1:
    console.log('Yes');
    break;
    case 2:
    console.log('No');
    break;
    default:
    console.log('Maybe');
}


    console.log(choice);
}

ask();