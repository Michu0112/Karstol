
const main = document.querySelector('main');

const outputtingPhotos = () =>{

    for(let i = 0;i < 104;i++){
    main.innerHTML += `<div>
    <a href="${Links[i]}" data-lightbox="lightbox-group-1">
        <div class="lightbox-thumbnail" class="g-min" style="background-image: url('${Links[i]}'); background-repeat: no-repeat;
        background-size: cover;"></div>
    </a>
    </div>`
    }
}
outputtingPhotos();