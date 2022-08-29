

let myHeader = document.querySelector(".header");
let myBottomIcon = document.querySelector(".icon");
let myList = document.querySelector(".ul-list");
let myListIcon = document.querySelector(".list i");
let myIcon = document.querySelector('.up-down');

// Navbar Vissible After Scrolling By 200px
window.addEventListener('scroll', function() {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > 200) {
        myHeader.style.display = 'block';
        myHeader.style.transition = 'var(--main-transition)';
    }else {
        myHeader.style.display = 'none';
    }
})

// Hide The Bottom Icon After Scrolling By 150px

window.addEventListener('scroll', function() {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > 150) {
        myBottomIcon.style.display = 'none';
    } else {
        myBottomIcon.style.display = 'block';
    }
})

// Visble List After Click on Icon

myListIcon.addEventListener('click', function()  {
    if (myList.style.display === "none") {
        myList.style.display = "block";
        myList.style.transition = 'var(--main-transition)';
    } else {
        myList.style.display = "none"
    }
})

// Return Me To Home Section 

window.addEventListener('scroll', function() {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > 200) {
        myIcon.style.display = 'block';
    }else {
        myIcon.style.display = 'none';
    }
})

// 

let myTestIcon = document.querySelector(".testimonial .test-icons a");
let myDiv = document.querySelector(".s-client")

myTestIcon.inclick = function() {
    myDiv.style.display = "none";
}

