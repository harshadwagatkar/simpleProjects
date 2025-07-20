const jokeBtn = document.querySelector('.setup');
const first = document.querySelector('.first');
const second = document.querySelector('.second');

const URL = "https://official-joke-api.appspot.com/random_joke";

//fetching URL
const fetchJoke = async () => {
    try {
        const response = await fetch(URL);

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); 
        }
        
        return await response.json();
        
    } catch(error) {
        console.error("Failed to fetch joke:", error);
        displayError();
        return null;
    }
}

function displayError() {
    first.innerHTML = `<p>Oops! Couldn't load a joke.</p>`;
    second.innerHTML = `Please try again later`;
}


function showLoading() {
    first.innerHTML = "<p>Loading joke...</p>";
    second.innerHTML = "<p></p>";
} 

async function displayJoke() {
    showLoading();

    const joke = await fetchJoke();

    if(joke) {
        first.innerHTML = `<p>${joke.setup}</p>`;
    }

    setTimeout(() => {
        second.innerHTML = `<p>${joke.punchline}</p>`;
    }, 1500);
}

//adding Event listner
let isFetching = false;
jokeBtn.addEventListener('click', async () => {

    if(!isFetching) {
        isFetching = true;
        await displayJoke();
        isFetching = false;
    }
});

displayJoke();


//************newCode ***********/
// const jokeButton = document.querySelector(".setup");
// const setupBox = document.querySelector(".first");
// const punchlineBox = document.querySelector(".second");

// const JOKE_API_URL = "https://official-joke-api.appspot.com/random_joke";

// // Improved fetch function with error handling
// async function fetchJoke() {
//     try {
//         const response = await fetch(JOKE_API_URL);
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         return await response.json();
//     } catch (error) {
//         console.error("Failed to fetch joke:", error);
//         displayError();
//         return null;
//     }
// }

// // Display error message if API fails
// function displayError() {
//     setupBox.innerHTML = "<p>Oops! Couldn't load a joke.</p>";
//     punchlineBox.innerHTML = "<p>Please try again later.</p>";
// }

// // Display loading state
// function showLoading() {
//     setupBox.innerHTML = "<p>Loading joke...</p>";
//     punchlineBox.innerHTML = "<p></p>";
// }

// // Main function to handle joke display
// async function displayJoke() {
//     showLoading();
    
//     const joke = await fetchJoke();
    
//     if (joke) {
//         setupBox.innerHTML = `<p>${joke.setup}</p>`;
        
//         // Delay the punchline for better comedic timing
//         setTimeout(() => {
//             punchlineBox.innerHTML = `<p>${joke.punchline}</p>`;
//         }, 1500);
//     }
// }

// // Event listener with debounce to prevent rapid clicks
// let isFetching = false;
// jokeButton.addEventListener('click', async () => {
//     if (!isFetching) {
//         isFetching = true;
//         await displayJoke();
//         isFetching = false;
//     }
// });

// // Load a joke when page first loads
// displayJoke();

