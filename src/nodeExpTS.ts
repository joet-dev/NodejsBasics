import express from 'express'; 

const app = express(); 
const port = 3000; 

app.get('/', (req, res) => {

    type states = "open" | "closed" | "minimized"; 

    function getState(state: states) {
        return state; 
    }

    res.write('Hello World! Window is: ' + getState("open")); 
    res.end(); 
}); 

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
