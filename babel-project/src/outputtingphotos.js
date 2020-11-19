
const main = document.querySelector('main');
const buttonsOfPages = document.querySelectorAll('.page-button');
let amountOfPics = [12,24,36,48,60,72,84,96];
let arr = [];

const firstOutPut = (start,amount) => {
    for(let i = start; i < amount;i++){
        main.innerHTML += `<div>
        <a href="${linksMax[i]}" data-lightbox="lightbox-group-1">
            <div class="lightbox-thumbnail" class="g-min" style="background-image: url('${linksMin[i]}'); background-repeat: no-repeat;
            background-size: cover;"></div>
        </a>
        </div>`;
    }
}

    let t = localStorage.getItem("cont");
    let p = localStorage.getItem("numPage");
    if(t){
        main.innerHTML = '';
    let newT = t.split(',');
    for(let i = 0; i < 12; i++){
        console.log(i);
        main.innerHTML += newT[i];
        }
        console.log(p)
    }
    else{
        firstOutPut(0,12);
    }

const navEls = document.querySelectorAll('a');
navEls.forEach((el)=>{
    el.addEventListener('click', () =>{
        outputtingPhotos(0,12);
        localStorage.setItem("cont", arr);
    })
})

buttonsOfPages.forEach( (el,idx) =>{
    el.addEventListener('click', () =>{
        outputtingPhotos(amountOfPics[idx]-12,amountOfPics[idx]);
        localStorage.setItem("numPage", idx);
        localStorage.setItem("cont", arr );
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
