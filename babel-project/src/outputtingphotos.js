
const main = document.querySelector('main');
const buttonsOfPages = document.querySelectorAll('.page-button');
let amountOfPics = [12,24,36,48,60,72,84,96];
let arr = [];

    let t = sessionStorage.getItem("cont");
    let newT = t.split(',');
    for(let i = 0; i < 13; i++){
        console.log(i);
        main.innerHTML += newT[i];
    }


buttonsOfPages.forEach( (el,idx) =>{
    el.addEventListener('click', () =>{
        outputtingPhotos(amountOfPics[idx]-12,amountOfPics[idx]);
        sessionStorage.setItem("numPage", idx);
        sessionStorage.setItem("cont", arr );
        window.location.reload();
    })
})

const outputtingPhotos = (start,amount) =>{
    main.innerHTML = '';
    for(let i = start; i < amount;i++){
    arr.push(`<div>
    <a href="${linksMax[i]}" data-lightbox="lightbox-group-1">
        <div class="lightbox-thumbnail" class="g-min" style="background-image: url('${linksMin[i]}'); background-repeat: no-repeat;
        background-size: cover;"></div>
    </a>
    </div>`)
    }
}

