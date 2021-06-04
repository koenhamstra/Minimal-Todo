console.log("JavaScript is working!");

const domElement = document.getElementById("starWars");

/**
 * Example 2
 * Get data from https://swapi.dev/api/people/1/ using Fetch API
 */

// function call
getNYTimesData();

/**
 * Function to get the data from the Swapi API and deliver it to the DOM
 */
function getNYTimesData() {
    fetch('https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=6XH9mer8K5NlTVwY5TnHqMwqTUMMq4Jd')

        .then((response) => {
            return response.json()
                .then((data) => {
                    let repos = data.results
                    for (let i = 0; i < repos.length; i++) {
                        // create outer div
                        const outerDiv = document.createElement("div")
                        outerDiv.className = 'col-xl-4 col-lg-4 col-md-4 col-sm-12'
                        outerDiv.id = "article-container"
                        domElement.append(outerDiv)
                        // create innerdiv
                        const innerDiv = document.createElement("div")
                        innerDiv.className = 'why-box'
                        innerDiv.id = "box_ho"
                        outerDiv.append(innerDiv)
                        // add h1 element in innerdiv
                        const h1 = document.createElement("h1")
                        h1.innerHTML = data.results[i].title
                        innerDiv.append(h1)
                        // only shows the image if it is available
                        if (data.results[i].multimedia !== null) {
                            // add img to innerdiv
                            const img = document.createElement("img")
                            img.src = data.results[i].multimedia[2].url
                            innerDiv.append(img)
                        }
                        // add h4 to innerdiv
                        const h4 = document.createElement("h4")
                        h4.innerHTML = data.results[i].abstract
                        innerDiv.append(h4)
                        // add paragraph with updated date to innderdiv
                        const p = document.createElement("p")
                        p.innerHTML = 'Published At ' + data.results[i].updated_date.substring(0, 10)
                        innerDiv.append(p)
                        // add paragraph with author to innerdiv
                        const p1 = document.createElement("p")
                        p1.innerHTML = data.results[i].byline
                        innerDiv.append(p1)
                        // add anker with link to outerdiv
                        const a = document.createElement("a")
                        a.className = 'read_more bg'
                        a.innerHTML = '<a>Read more</a>'
                        a.href = data.results[i].url
                        outerDiv.append(a)
                    }
                    console.log(data.results);
                })
                .catch((err) => {
                    console.log("something went wrong", err);
                });
        })
}

// function getNYTimesData() {
//     fetch('https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=6XH9mer8K5NlTVwY5TnHqMwqTUMMq4Jd')
//
//         .then((response) => {
//             return response.json()
//                 .then((data) => {
//                     let repos = data.results
//                     for (let i = 0; i < repos.length; i++) {
//                         const outerDiv = document.createElement("div")
//                         outerDiv.className = 'col-xl-4 col-lg-4 col-md-4 col-sm-12'
//                         domElement.append(outerDiv)
//
//                         const innerDiv = document.createElement("div")
//                         innerDiv.className = 'why-box'
//                         innerDiv.id = "box_ho"
//                         outerDiv.append(innerDiv)
//
//                         const h3 = document.createElement("h3")
//                         h3.innerHTML = data.results[i].title
//                         innerDiv.append(h3)
//
//                         const p = document.createElement("p")
//                         p.innerHTML = 'Published At ' + data.results[i].first_published_date.substring(0,10)
//                         innerDiv.append(p)
//
//                         const a = document.createElement("a")
//                         a.className = 'read_more bg'
//                         a.innerHTML = '<a>See more</a>'
//                         a.href = data.results[i].url
//                         outerDiv.append(a)
//                     }
//                     console.log(repos);
//                 })
//                 .catch((err) => {
//                     console.log("something went wrong", err);
//                 });
//         })
// }

// function getNYTimesData() {
//     fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=nasa&api-key=6XH9mer8K5NlTVwY5TnHqMwqTUMMq4Jd')
//
//         .then((response) => {
//             return response.json()
//                 .then((data) => {
//                     let repos = data.response.docs
//
//                     for (let i = 0; i < repos.length; i++) {
//                         const outerDiv = document.createElement("div")
//                         outerDiv.className = 'col-xl-4 col-lg-4 col-md-4 col-sm-12'
//                         domElement.append(outerDiv)
//
//                         const innerDiv = document.createElement("div")
//                         innerDiv.className = 'why-box'
//                         innerDiv.id = "box_ho"
//                         outerDiv.append(innerDiv)
//
//                         const h3 = document.createElement("h3")
//                         h3.innerHTML = data.response.docs[i].headline.main
//                         innerDiv.append(h3)
//
//                         const p = document.createElement("p")
//                         p.innerHTML = data.response.docs[i].abstract
//                         innerDiv.append(p)
//
//                         const a = document.createElement("a")
//                         a.className = 'read_more bg'
//                         a.innerHTML = '<a>See more</a>'
//                         a.href = data.response.docs[i].web_url
//                         outerDiv.append(a)
//                     }
//                     console.log(repos);
//                 })
//                 .catch((err) => {
//                     console.log("something went wrong", err);
//                 });
//         })
// }
//key: 6XH9mer8K5NlTVwY5TnHqMwqTUMMq4Jd

