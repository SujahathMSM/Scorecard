let homeScore = document.getElementById('score1')
homeScore.textContent = 0
let score1 = 0;

let guestScore = document.getElementById('score2')
guestScore.textContent = 0
let score2 = 0;

let add1h=() => {
    score1+=1
    homeScore.textContent = score1
}

let add2h=() => {
    score1+=2
    homeScore.textContent = score1
}

let add3h=() => {
    score1+=3
    homeScore.textContent = score1
}

let add1g=() => {
    score2+=1
    guestScore.textContent = score2
}

let add2g=() => {
    score2+=2
    guestScore.textContent = score2
}

let add3g=() => {
    score2+=3
    guestScore.textContent = score2
}

let exit = () => {
    guestScore.textContent = 0
    homeScore.textContent = 0

}