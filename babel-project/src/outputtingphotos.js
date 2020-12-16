const main = document.querySelector('main');
const buttonsOfPages = document.querySelectorAll('button');
let arr = [];


const firstOutPut = () =>{
    main.innerHTML = '';
    for(let i = 0; i <= linksMaxConcrete.length;i++){
        main.innerHTML += `<div>
        <a href="${linksMaxConcrete[i]}" data-lightbox="lightbox-group-1">
            <div class="lightbox-thumbnail" class="g-min" style="background-image: url('${linksMinConcrete[i]}'); background-repeat: no-repeat;
            background-size: cover;"></div>
        </a>
        </div>`;
    }
}

let t = localStorage.getItem("cont");
let p = localStorage.getItem("back");
if(t){
    buttonsOfPages[p].style.backgroundColor = "rgba(172, 116, 67)";
    main.innerHTML = '';
    let newT = t.split(',');
    for(let i = 0; i < linksMaxConcrete.length; i++){
    main.innerHTML += newT[i];
    }
}
else{
    buttonsOfPages[0].style.backgroundColor = "rgba(172, 116, 67)";
    firstOutPut();
}


buttonsOfPages.forEach( (el,idx) =>{

    el.addEventListener('click',()=>{
        if(idx === 0){
            localStorage.setItem("back", idx);
            prepareOutPut(linksMaxConcrete,linksMinConcrete);
            window.location.reload();
        }
        else{
            localStorage.setItem("back", idx);
            window.location.reload();
            prepareOutPut(linksMaxSelfsupport, linksMinSelfSupport);
        }
    });
});


const prepareOutPut = (maxArray,minArray) =>{
    for(let O = 0; O < maxArray.length;O++){
    arr.push(`<div>
    <a href="${maxArray[O]}" data-lightbox="lightbox-group-1">
        <div class="lightbox-thumbnail" class="g-min" style="background-image: url('${minArray[O]}'); background-repeat: no-repeat;
        background-size: cover;"></div>
    </a>
    </div>`);
    }
    localStorage.setItem("cont", arr );
}