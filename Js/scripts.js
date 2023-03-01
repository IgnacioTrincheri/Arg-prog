const direction = document.querySelector('.direction')
btnTraerInfo = document.getElementById('traer')
phone = document.querySelector('.phone');
mail = document.querySelector('.mail');
github = document.getElementsByClassName('github');
linkedin = document.getElementsByClassName('linkedin');
cv = document.getElementsByClassName('cv');
main = document.querySelector('main')
const resume = document.getElementsByClassName('resume');
nav = document.querySelector('nav')

foto = document.getElementById('portada')
fotito = document.getElementById('fotito')

fetch('data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    const nombre = document.getElementById('name')
    nombre.innerHTML = `${data.sex}`;
})

btnTraerInfo.addEventListener('click', () => {
    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function (data) {
            const dataT = data.results[0]
            nombre.innerHTML = `${dataT.name.first} ${dataT.name.last}`
            direction.innerHTML = `<span class="material-symbols-outlined">location_on</span>${dataT.location.city}, ${dataT.location.state}. ${dataT.location.country}`
            phone.innerHTML = `<span class="material-symbols-outlined">call</span>${dataT.cell}`;
            mail.innerHTML = `<span class="material-symbols-outlined">mail</span> ${dataT.email}`;
            foto.src = `${dataT.picture.large}`
            fotito.href = `${dataT.picture.thumbnail}`
        }
    });
})

function openDownloadableFile(file) {
    setTimeout(() => {
        window.open(file, '_blank');
    }, 100);
}


cv[0].addEventListener('click', () => {
    openDownloadableFile('../Docs/CV.pdf');
});

resume[0].addEventListener('click', () => {
    openDownloadableFile('../Docs/Resume.pdf');
});