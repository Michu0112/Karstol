
const main = document.querySelector('main');

const outputtingPhotos = () =>{

    for(let i = 7;i < 104;i++){
    main.innerHTML += `<div>
    <a href="assets/styles/images/gallery(${i}).jpg" data-lightbox="lightbox-group-1">
        <div class="lightbox-thumbnail" class="g-min" style="background-image: url('assets/styles/images/gallery(${i}).jpg'); background-repeat: no-repeat;
        background-size: cover;"></div>
    </a>
    </div>`
    }
}
outputtingPhotos();