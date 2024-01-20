// Global Variables
let imgs = Array.from(document.querySelectorAll('.item img'));
let lightBox = document.getElementById('lightBox');
let closeBtn = document.getElementById('closeBtn');
let boxData = document.getElementById('boxData');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let currentIndex = 0 ;
// Functions
function closeSlider(){
   lightBox.classList.add('d-none');
}
function nextSlider(){
    currentIndex++ ;
    if (currentIndex == imgs.length) {
        currentIndex = 0 ;
    }
   let currentElementSrc = imgs[currentIndex].getAttribute('src');
   // console.log(currentElementSrc);  
   boxData.style.backgroundImage = `url(${currentElementSrc})`;
}

function prevSlider(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length-1;
    }
    let currentElementSrc = imgs[currentIndex].getAttribute('src');
    // console.log(currentElementSrc);  
    boxData.style.backgroundImage = `url(${currentElementSrc})`;
}
// Events
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click' , function(e){

        var currentTarget = e.target ;
       currentIndex = imgs.indexOf(currentTarget);
      

        lightBox.classList.remove('d-none');  
       let currentSrc = e.target.getAttribute('src');
       boxData.style.backgroundImage = `url(${currentSrc})`;
    });    
}

closeBtn.addEventListener('click' , function(){
    closeSlider();
});

nextBtn.addEventListener('click' , function(){
    nextSlider();
});

prevBtn.addEventListener('click' , function(){
    prevSlider();
});

document.addEventListener('click' , function(e){
    if (e.target == lightBox) {
        closeSlider();
    }
});

document.addEventListener('keydown' , function(e){
    if (e.key == 'ArrowRight') {
        nextSlider();
    }else if (e.key == 'ArrowLeft') {
        prevSlider();
    } else if (e.key == 'Escape') {
        closeSlider();
    }
   // console.log(e.key);
   
})