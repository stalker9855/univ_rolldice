
const userName = document.getElementById('userName');

var userName_ = prompt("Enter you name: ", "User");
if(userName_ == null || userName_ == ""){
    userName.innerHTML = "User";
}
else{
    userName.innerHTML = userName_;
}

const btn = document.getElementById('btn');

const user = document.getElementById('userOutput');
const userBackground = document.getElementById('user');

const computer = document.getElementById('computerOutput');
const computerBackground = document.getElementById('computer');

const result = document.getElementById('result');
const diceShake = document.querySelectorAll('.shake');

const countViewUser = document.getElementById('countUser');
const countViewComputer = document.getElementById('countComputer');

const images = ["img/1.png","img/2.png","img/3.png",
"img/4.png","img/5.png","img/6.png",];


const roll = () => Math.floor(6 * Math.random());  
var countUser = 0;
var countComputer = 0;
btn.addEventListener('click', () => {
    userBackground.removeAttribute("id", "win", "lose", "draw");
    computerBackground.removeAttribute("id", "win", "lose", "draw");
    console.clear();
    let rollUser = roll();
    let computerRoll = roll();
    document.getElementById('rollImageUser').src = images[rollUser];
    document.getElementById('rollImageComputer').src = images[computerRoll];

    diceShake.forEach(element => {
        element.classList.add("shaker");
    });
    diceShake.forEach(element =>{
        element.addEventListener('animationend', () =>
        {
            element.classList.remove("shaker");
            if(countComputer == 3)
            {
                alert("You lose...");
                countUser = 0;
                countComputer = 0;
                countViewUser.innerHTML = "Counts: " + countUser;
                countViewComputer.innerHTML = "Counts: " + countComputer;
            }
            else if(countUser == 3)
            {
                alert("You win!!");
                countUser = 0;
                countComputer = 0;
                countViewUser.innerHTML = "Counts: " + countUser;
                countViewComputer.innerHTML = "Counts: " + countComputer;
            }
        })
    });
    if(rollUser > computerRoll)
    {
        userBackground.setAttribute("id", "win");
        computerBackground.setAttribute("id","lose");
        countUser++;
        countViewUser.innerHTML = "Counts: " + countUser;
    }
    if(rollUser < computerRoll)
    {
        userBackground.setAttribute("id", "lose");
        computerBackground.setAttribute("id","win");
        countComputer++;
        countViewComputer.innerHTML = "Counts: " + countComputer;
    }
    if(rollUser == computerRoll)
    {
        userBackground.setAttribute("id", "draw");
        computerBackground.setAttribute("id","draw");
    }
    console.log("user: "+ countUser);
    console.log("computer: " + countComputer);

});