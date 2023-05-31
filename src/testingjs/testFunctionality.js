asyncTest(); 

// Callbacks
function callbackTest() {

    const devNames = ['Joseph', 'Joseph1', 'Joseph2']; 

    const getDevsFromList = (devArr, callback) => {
        for (let i=0; i<devArr.length; i++) {
            const element = devArr[i]; 
            callback(element); 
        }
    }

    getDevsFromList(devNames, (name) => {
        console.log("Recieved " + name + " from callback.")
    });
}

// Callback Pyramid of Doom
function callbackPyramidOfDoomTest() {

    const devNames = ['Joseph', 'Joseph1', 'Joseph2']; 

    const getDevsFromList = (devArr, callback, errorCallback) => {
        let devsExist = true; 

        if (devsExist) {
            for (let i=0; i<devArr.length; i++) {
                const element = devArr[i]; 
                callback(element); 
            }
        } 
        else {
            errorCallback('NO DEVS'); 
        }
    }

    const validateName = (name, callback, errorCallback) => {
        let verifiedName = false; 
        if (verifiedName) {
            callback(name); 
        } 
        else {
            errorCallback('NAME INVALID')
        }
    }

    const addName = (name, callback, errorCallback) => {
        let addedName = false; 
        if (addedName) {
            callback(name); 
        }
        else {
            errorCallback('UNABLE TO ADD NAME')
        }
    }

    getDevsFromList(devNames, (name) => {
        validateName(name, (validName) => {
            addName(validName, (addName) => {
                console.log("Recieved " + addName + " from callback.");
            }, (error) => console.log("Error! Log: " + error)); 
        }, (error) => console.log("Error! Log: " + error));
    }, (error) => console.log("Error! Log: " + error));
}

// Promises
function promiseTest() {
    const devNames = ['Joseph', 'Joseph1', 'Joseph2']; 

    function getDevsPromise(devArr) {
        return new Promise((resolve, reject) => {
            let x = true; 
            if (x) {
                for (let i=0; i<devArr.length; i++) {
                    const element = devArr[i]; 
                    resolve(element); 
                }
            } else {
                reject('NO DEVS');
            }
        });
    }

    // The value in the resolved promise is passed to the .then as a parameter. 
    getDevsPromise(devNames).then((name) => {
        console.log("Recieved " + name + " from callback.");
    }).catch((error) => {
        console.log("ERROR: " + error); 
    });
}

// Promise Pyramid of Doom 
function promisePODTest() {
    const devNames = ['Joseph', 'Joseph1', 'Joseph2']; 

    const getDevsPromise = (devArr, iter) => new Promise((resolve, reject) => {
        let x = false; 
        if(x) {
            resolve(devArr[iter]); 
        } else {
            reject('NO DEVS'); 
        }
    }); 

    const validateNamePromise = (name) => new Promise((resolve, reject) => {
        let x = true; 
        if(x) {
            resolve(name); 
        }
        else {
            reject('INVALID NAME'); 
        }
    });

    const addNamePromise = (name) => new Promise((resolve, reject) => {
        let x = true; 
        if(x) {
            resolve(name); 
        }
        else {
            reject('UNABLE TO ADD NAME'); 
        }
    }); 

    for (i=0; i<devNames.length; i++) {
        getDevsPromise(devNames, i)
        .then((name) => validateNamePromise(name))
        .then((name) => addNamePromise(name))
        .then((name) => console.log("The developer, " + name + " has been added to the database."))
        .catch((msg) => console.log("ERROR: " + msg));
    }    
}

// Async promises
function asyncPromisesTest() {
    const resolveTwo = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(2), 2000); 
        })
    }
    const resolveFive = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(5), 5000); 
        })
    }
    const resolveTen = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(7), 7000); 
        })
    }

    (async function() {
        const asyncFunctions = [
            resolveTwo,
            resolveFive, 
            resolveTen
        ];

        for (const asyncFn of asyncFunctions) {
            const result = await asyncFn(); 
            console.log(result);
        }
    })(); 
}

// Running things asynchronously
function asyncTest() {
    
    const getFromDatabase = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve('GET 200'), 2000); 
    });

    const processData = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve('DONE'), 6000);
    });

    async function doStuff() {
        const response = await getFromDatabase(); 
        console.log('Response Received @ ' + (new Date() - time)/1000);
    }

    var time = new Date(); 

    // Immediately after starting await getFromDatabase() the program starts to run processData(). Thus after getFromDatabase() is complete, processData() is already 2 seconds into being completed.
    doStuff()
    processData().then((x) => console.log(x + " @ " + (new Date() - time)/1000));
}

// Closures 
function closureTest() {
    function makeFunc() {
        const name = "Mozilla";
        function displayName() {
          console.log(name);
        }
        return displayName;
    }
      
    const myFunc = makeFunc();
    myFunc();
}

// Arithmetic closure
function mathClosureTest() {
    function add(x) {
        return (y) => x + y; 
    }

    const first = add(10)(2); 

    console.log(first); 
}

