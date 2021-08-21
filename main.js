const button = document.querySelector(".container button"); // linking to my container id inside my html 
const jokeDiv = document.querySelector(".container .joke p");
const button2 = document.querySelector(".container button2");

document.addEventListener("DOMLoaded", getJock); // add event listener to get the joke when called upon 

button.addEventListener("click", getJock); //button clicker to get dad jokes
button2.addEventListener("click",getJock);
async function getJock() { //function use to generate jokes 
    const jokeData = await fetch("https://icanhazdadjoke.com/", { //fetching the data from the dad joke api 
        headers: {
            Accept: "application/json"
        }
    });
    const jokeObj = await jokeData.json();
    jokeDiv.innerHTML = jokeObj.joke;
    console.log(jokeData);
}
// when i was googling and found the async and the await function use i dont remeber being using it in class but i saw it was a good use for the extension of the promise \

async function getJoke2(){
    const jokeDataTwo = await fetch("https://icanhazdadjoke.com/", {
        headers:{
            Accept: "application/json"
        }
    });
    const jokeObjTwo = await jokeDataTwo.json();
    jokeDiv.innerHTML = jokeObjTwo.joke;
    console.log(jokeDataTwo)
}