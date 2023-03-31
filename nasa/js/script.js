apiKey = "9TwTRh1QxWKizBM11B3tdgPyrbnIMMkGVVPIWYja";
apiQueryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

let info;
let date = new Date;
date.setDate(date.getDate() - 1)
date = date.toLocaleDateString('en-CA');

const getButton = document.querySelector('.input button');
const getDate = document.querySelector('.input input');
const image = document.querySelector('img');
const iframe = document.querySelector('iframe');
const description = document.querySelector('#apodDesc');
const article = document.querySelector('article');
const ripple = document.querySelector('div.lds-ripple');


function getData() {
    date = (getDate.value === '') ? date : getDate.value;

    fetch(apiQueryUrl + `&date=${date}`)
    .then(res => res.json())
    .then(loadData)
    .catch(err => alert(err))
}

function loadData(data) {
    info = data;

    iframe.classList.add('hidden');
    image.classList.add('hidden');
    description.classList.add('hidden');
    article.classList.add('hidden');
    ripple.classList.remove('hidden');
    

    if (info.media_type === "image") {
        image.src = info.hdurl;
        image.onload= () => {render(image)};
    } else if (info.media_type === "video") {
        iframe.src = info.url;
        iframe.onload = () => {render(iframe)};
    } else {{alert("Select a Past date"); location.reload()}}
}

function render(media) {
    description.textContent = info.explanation;
    ripple.classList.add('hidden');
    media.classList.remove('hidden');
    description.classList.remove('hidden');
    article.classList.remove('hidden');
}





getButton.addEventListener('click', getData);