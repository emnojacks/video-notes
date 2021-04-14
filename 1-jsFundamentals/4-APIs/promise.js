// setTimeOut(() = >console.log("this is a test of timeouts"), 1000);

//Promises
//all need functions and a resolve and reject action
//uses a callback function that occurs AFTER another event occurs
//Promise with capital P is a promise contructor 

let promise = new Promise(function(resolve, reject) {

    //this func simulates asynchronous data fetch to a server and request timing out
    setTimeOut(() => {
        if (true) {
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000); //3 seconds lapse before the promise function runs
})

promise
//.then handles a resolved promised
    .then(success => console.log(success))
    //how to handle a promise failure
    //use a catch statment
    //don't use semi colons after .then 
    .catch(err => console.log(err));


//promises allow your code to run while just waiting and hanging out
//it will happen after your other code runs that is not time based osea that is instantaneous