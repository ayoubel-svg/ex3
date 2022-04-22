const myDiv = document.getElementById("myDiv");
function myFun() {
  let myV = parseInt(document.fom.inpu.value);
  if (myV > 0 && myV < 59) {
    myDiv.innerHTML = "<span class='text-primary'>Insufisant</span>";
  } else if (myV >= 60 && myV <= 69) {
    myDiv.innerHTML = "<span class='text-secondary'>Suffisant</span>";
  } else if (myV >= 70 && myV <= 79) {
    myDiv.innerHTML = "<span class='text-warning'>bien</span>";
  } else if (myV >= 80 && myV <= 89) {
    myDiv.innerHTML = "<span class='text-info'>tres bien</span>";
  } else if (myV >= 90 && myV <= 100) {
    myDiv.innerHTML = "<span class='text-success'>Excelent</span>";
  } else if (myV > 100 || String(myV)) {
    myDiv.innerHTML =
      "<span class='text-danger'>saisie eronne en couluer rouge</span>";
  }
}
