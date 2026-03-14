let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function addOne(){
    homeScore += 1;
    home.textContent = homeScore;
}

function addTwo(){
    homeScore += 2;
    home.textContent = homeScore;
}

function addThree(){
    homeScore += 3;
    home.textContent = homeScore;
}

function add1(){
    guestScore += 1;
    guest.textContent = guestScore;
}

function add2(){
    guestScore += 2;
    guest.textContent = guestScore;
}
function add3(){
    guestScore += 3;
    guest.textContent = guestScore;
}

function reset(){
    homeScore = 0;
    guestScore = 0;
    home.textContent = homeScore;
    guest.textContent = guestScore;
}