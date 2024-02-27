// We actually made use of the promise-based API called fetch,

function getDetails(id) {
    // save the promise or object we created as a request
    // which having a promise
    const request = fetch(`https://dummyjson.com/products/${id}`);
    
    // to resolve a promise we have request.then
    // save the response in the response object
    const response =  request.then((response) => {
        //and again json is an asynchronous function 
        return response.json();
    });
    // That's why we have used .then again on the reponse
    // to get user out of that - what ever data it is
    response.then((user) => console.log(user));
    // currently we have one user so one user on the console we getting
}

getDetails(2); 
