let scoreHome = 0, scoreGuest = 0;
scoreHomeEl= document.getElementById("scoreHome")

function changeScoreH1() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}
function changeScoreH2() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}
function changeScoreH3() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

scoreGuestEl= document.getElementById("scoreGuest")

function changeScoreG1() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}
function changeScoreG2() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}
function changeScoreG3() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}