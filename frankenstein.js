
let UOAlink = document.getElementById('fetchUOA').addEventListener('click', presentUOA);
let AUTlink = document.getElementById('fetchAUT').addEventListener('click', presentAUT);
let vicLink = document.getElementById('fetchUOO').addEventListener('click', presentUOO);
let otagoHead = document.getElementById('otagoHead');
var responseClone;
let showUOAResponse = document.getElementById('UOAresponse');
let showAUTResponse = document.getElementById('AUTresponse');
let showUOOResponse = document.getElementById('UOOresponse');

function presentUOA() {

fetch('https://murmuring-caverns-75264-71de7b54696d.herokuapp.com/https://www.auckland.ac.nz/en/study/scholarships-and-awards/scholarship-types/undergraduate-scholarships/entry-level-and-first-year-scholarships.html'
)
.then (function(response) {
    return response.text();
})
.then (function(html) {
    let returnedUOA = html;
    let position = returnedUOA.search('<h2>School-leaver scholarships </h2>');
    let position2 = returnedUOA.search('<p>Applications open in December 2023.</p>');
    let extract = returnedUOA.substring(position, position2);
    showUOAResponse.innerHTML = (extract);
})
.catch(function(err) {
    console.warn('something went wrong.', err);
});

}

function presentAUT() {
    fetch('https://murmuring-caverns-75264-71de7b54696d.herokuapp.com/https://www.aut.ac.nz/study/fees-and-scholarships/scholarships-and-awards-at-aut/secondary-schools-scholarships'
    )
    .then (function (response) {
        return response.text();
    })
    .then (function (html) {
        let returnedAUT = html;
        let position = returnedAUT.search('<h2>2024 AUT Welcome to Auckland Scholarships</h2>');
        let position2 = returnedAUT.search('<h2>Search our scholarships database</h2>');
        let extract = returnedAUT.substring(position, position2);
        showAUTResponse.innerHTML = (extract);
    })
    .catch(function(err) {
        console.warn('something went wrong.', err);
    });
}

function presentUOO() {
    fetch('https://murmuring-caverns-75264-71de7b54696d.herokuapp.com/https://www.otago.ac.nz/study/scholarships/database/undergraduate'
    )
    .then (function (response) {
        return response.text();
    })
    .then (function (html) {
        let returnedUOO = html;
        let position = returnedUOO.search(' <main id="main" class="content">');
        let position2 = returnedUOO.search('href="mailto:scholarships@otago.ac.nz">scholarships@otago.ac.nz</a></p><ul><p class="clearall"></p></ul> ');
        let extract = returnedUOO.substring(position, position2);
        showUOOResponse.innerHTML = (extract);
    })
    .catch(function (err) {
        console.warn('something went wrong.', err);
    })
}

function presentUOP() {
    fetch('https://murmuring-caverns-75264-71de7b54696d.herokuapp.com/https://www.otago.ac.nz/study/scholarships/database/undergraduate'
    )
    .then (function(response) {
        responseClone = response.clone();
        return response.json();
    })
    .then (function (data) {
        //stil no idea why i need this
    }, function(rejectionReason) {
        console.log('error parsing json:', rejectionReason, responseClone);
        responseClone.text()
        .then(function (bodyText) {
            console.log('received the following instead of valid json:', bodyText);
        })
    })

}




function presentUOB() {
    fetch('https://www.aut.ac.nz/study/fees-and-scholarships/scholarships-and-awards-at-aut/secondary-schools-scholarships'
    )
    .then (function(response) {
        responseClone = response.clone();
        return response.json();
    })
    .then (function (data) {
        // IDK WHY I NEED THIS
    }, function (rejectionReason) {
        console.log('Error parsing JSON from response:', rejectionReason, responseClone);
        responseClone.text()
        .then(function (bodyText) {
            console.log('Received the following instead of valid JSON:', bodyText);
        })
    }
    )
}
