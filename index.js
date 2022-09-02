let homeEL = document.getElementById('hs-el');
let guestEL = document.getElementById('gs-el');

let scoreHome = 0;
let scoreGuest = 0;

function btnh1() {
  scoreHome += 1;

  homeEL.textContent = scoreHome;
}

function btnh2() {
  scoreHome += 2;
  homeEL.textContent = scoreHome;
}

function btnh3() {
  scoreHome += 3;
  homeEL.textContent = scoreHome;
}

function btng1() {
  scoreGuest += 1;

  guestEL.textContent = scoreGuest;
}

function btng2() {
  scoreGuest += 2;
  guestEL.textContent = scoreGuest;
}

function btng3() {
  scoreGuest += 3;
  guestEL.textContent = scoreGuest;
  console.log("test")
}

function btnrs() {
  scoreHome = 0;
  scoreGuest = 0;
  guestEL.textContent = scoreGuest;
  homeEL.textContent = scoreHome;
}
