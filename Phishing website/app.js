//step 1: get DOM
let nextDom = document.getElementById('next'); // Get the DOM element with id 'next' (Next button)
let prevDom = document.getElementById('prev'); // Get the DOM element with id 'prev' (Previous button)

let RansomwareDom = document.querySelector('.Ransomware'); // Get the first DOM element with class 'Ransomware'
let SliderDom = RansomwareDom.querySelector('.Ransomware .list'); // Get the first '.list' element inside '.Ransomware'
let thumbnailBorderDom = document.querySelector('.Ransomware .thumbnail'); // Get the first '.thumbnail' element inside '.Ransomware'
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Get all '.item' elements inside the '.thumbnail' container
let timeDom = document.querySelector('.Ransomware .time'); // Get the first '.time' element inside '.Ransomware'


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);  // Append the first thumbnail item to the '.thumbnail' container
let timeRunning = 3000; // Set the duration for time running (3 seconds)
let timeAutoNext = 7000; // Set the time interval for automatic next action (7 seconds)

nextDom.onclick = function(){ // When the 'next' button is clicked
    showSlider('next'); // Call showSlider function with 'next' argument
}

prevDom.onclick = function(){ // When the 'prev' button is clicked
    showSlider('prev'); // Call showSlider function with 'prev' argumen
}
let runTimeOut; // Declare a variable to store the timeout for resetting slider classes
let runNextAuto = setTimeout(() => { // Set a timeout to automatically click the 'next' button after the specified interval
    next.click(); // Simulate a click on the 'next' button
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.Ransomware .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.Ransomware .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        RansomwareDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        RansomwareDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        RansomwareDom.classList.remove('next');
        RansomwareDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}