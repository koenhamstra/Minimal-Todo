console.log("JavaScript is working!");

const domElement = document.getElementById("starWars");

/**
 * Example 2
 * Get data from https://swapi.dev/api/people/1/ using Fetch API
 */

// function call
getSwapiData();
/**
 * Function to get the data from the Swapi API and deliver it to the DOM
 */
function getSwapiData() {
    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=spacex&api-key=6XH9mer8K5NlTVwY5TnHqMwqTUMMq4Jd')

        .then((response) => response.json())
        .then((data) => {
            // for (let i = 0; i < data.response.docs.length; i++){
            //     const ul = document.createElement("ul");
            //     ul.innerHTML = `<li>${data.response.docs[i].headline.main}<br>${data.response.docs[i].snippet}</li>`;
            //     domElement.append(ul);
            // }
            console.log(data.response.docs);
        })
        .catch((err) => {
            console.log("something went wrong", err);
        })
}

//key: 6XH9mer8K5NlTVwY5TnHqMwqTUMMq4Jd
