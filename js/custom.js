// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}

// search prpoerties
const searchproperties = () => {
    const city = document.querySelector('#city').value
    const location = document.querySelector('#location').value
    console.log(city, '\n', location)
}

// subscribe to
const subscribe = () => {
    const sub = document.querySelector('#sub').value
    setTimeout(() => {
        alert("thanks for subscription")
        console.log(sub)
    }, 2000);
}



console.log("Developed by : Muhammad Hussain Shamim")