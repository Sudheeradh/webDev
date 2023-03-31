//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => insertImage(data.message))
    .catch(err => console.error(err))  


function insertImage(imgLink) {
    imgElement = document.querySelector('img');
    loading = document.querySelector('.lds-ripple');
    imgElement.setAttribute('src', imgLink);
    imgElement.onload = () => {
        loading.classList.add('hide');
        imgElement.classList.remove('hidden');
    }
}

function refresh() {
    location.reload();
}

refreshBtn = document.querySelector('#refresh');
refreshBtn.addEventListener('click', refresh)