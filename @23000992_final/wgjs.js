//js
//array , current word , score , index for missing letter
const wordBank = ["cat","computer","time","clock","pink"];
let currentWord = "";
let score = 0;
let missingLetterIndex = 0;

//choosing/getting word from word bank with a random index
function getWord () {
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    return wordBank[randomIndex];
}

// from array to the word "box" on screen
function genWordBox (){
    const wordBox = document.getElementById("wordBox");
    //get a new word everytime
    wordBox.innerHTML = "";
    currentWord = getWord();
    //choose missing index
    missingLetterIndex = Math.floor(Math.random() * currentWord.length);
    //create the letter boxes for the current selected word
    for (let i = 0; i < currentWord.length; i++ )
    {
        //create input
        const input = document.createElement("input");
        input.setAttribute("maxlength", "1"); //only 1 letter
        // add style class to the input box
        input.classList.add("letter-box");
        //only input for the missing letter
        input.disabled = (i !== missingLetterIndex)
        if (!input.disabled) input.focus();
        //rest of the letters
        else input.value = currentWord[i];
        wordBox.appendChild(input); //into html/the page/the screen

    }
}
// checking the letter compare the input to the missing letter
function checkLetter(){

    const wordBox = document.getElementById("wordBox"); //get from dom
    const letterBoxes = wordBox.getElementsByTagName("input"); //get word/all letters
    const userLetter = letterBoxes[missingLetterIndex].value; //the answer the user gave


    //the correct letter/answer
    const correctLetter = currentWord[missingLetterIndex];

    //comparing input with the answer
    if (userLetter.toLowerCase() === correctLetter.toLowerCase()) {
        alert("Correct!");
        score++;
        document.getElementById("score").textContent = "Score: " + score;
        genWordBox(); // move to next word only if correct
    } else {
        alert("Wrong! Try again.");
        letterBoxes[missingLetterIndex].value = ""; // clear the wrong input
        letterBoxes[missingLetterIndex].focus(); // put cursor back
    }
}

window.onload = genWordBox; //first call