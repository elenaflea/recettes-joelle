const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".recette");



searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();

    divs.forEach (item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})
/*
const searchInputTwo = document.querySelector("#search");
searchInputTwo.addEventListener("keyup", function(event) {
    const wordTwo = event.target.value.toLowerCase();

    divs.forEach (item => {
        item.querySelector("ul").textContent.toLowerCase().includes(wordTwo) ? (item.style.display = "block") : (item.style.display = "none");
    })
})
*/
/*const hid = document.querySelectorAll(".hiddenSearch");
console.log(hid);
searchInput.addEventListener("keyup", function(event) {
    const wordThree = event.target.value.toLowerCase();

    hid.forEach (item => {
        item.querySelector("p").textContent.toLowerCase().includes(wordThree) ? (item.style.display = "block") : (item.style.display = "none");
    })
})*/

const circl = document.querySelectorAll ('.circ');

circl.forEach (circ=> {
    circ.addEventListener('mouseover', ()=> {
        removeClass ();
        circ.classList.add ('selectCirc');
    })
    removeClass = ()=>{
        circl.forEach (circ=>{
            circ.classList.remove('selectCirc');
        })
    }
});

function myFunctionOne() {
    document.querySelector("#myDropdownOne").classList.toggle("show");
    }
    /*window.onclick = function(event) {
        if (!event.target.matches('.one')) {
            let dropdowns = document.querySelector("contOne");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }*/

function myFunctionTwo() {
    document.querySelector("#myDropdownTwo").classList.toggle("show");
    }
function myFunctionThree() {
    document.querySelector("#myDropdownThree").classList.toggle("show");
    }
function myFunctionFour() {
    document.querySelector("#myDropdownFour").classList.toggle("show");
    }
function myFunctionFive() {
    document.querySelector("#myDropdownFive").classList.toggle("show");
    }
function myFunctionSix() {
    document.querySelector("#myDropdownSix").classList.toggle("show");
    }
function myFunctionSeven() {
    document.querySelector("#myDropdownSeven").classList.toggle("show");
    }
function myFunctionEight() {
    document.querySelector("#myDropdownEight").classList.toggle("show");
    }
function myFunctionNine() {
    document.querySelector("#myDropdownNine").classList.toggle("show");
    }
function myFunctionTen() {
    document.querySelector("#myDropdownTen").classList.toggle("show");
    }
function myFunctionEleven() {
    document.querySelector("#myDropdownEleven").classList.toggle("show");
    }
function myFunctionTwelve() {
    document.querySelector("#myDropdownTwelve").classList.toggle("show");
    }