let sliderPhotos = document.querySelectorAll('.slider-photo');
sliderPhotos = Array.from(sliderPhotos);
sliderPhotos = sliderPhotos.slice().reverse();
let i = 0;

const slidePics = () => {

    sliderPhotos[i].style.opacity = `1`;
    setTimeout(function(){
    sliderPhotos[i].style.opacity = `0`;
    if(i===sliderPhotos.length-1){
        i = 0;
        slidePics();
    }
    else{
        i++;
        slidePics()
    }
    },4000);

}
slidePics();
 