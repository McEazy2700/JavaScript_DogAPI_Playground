// https://dog.ceo/api/breed/image/random

let url = 'https://dog.ceo/api/breeds/image/random'

const fetchDogImage = () => {
    return (fetch(url)
    .then(response => response.json())
    .then(json => document.getElementById('dogImage')
    .innerHTML = `<img src='${json.message}'/>`))}
// .then(response => response.json())
// .then(json => console.log(json))

document.querySelector('.fetch__button').onclick = fetchDogImage