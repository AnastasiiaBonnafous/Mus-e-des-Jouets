window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".logoMusee").classList.add("shrink");
    } else {
        document.querySelector(".logoMusee").classList.remove("shrink");
    }
}
let url =
  "https://api.open-meteo.com/v1/forecast?latitude=44.02&longitude=1.35&hourly=temperature_2m";
fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data);
    document.querySelector("#datameteo").innerHTML =
      data.hourly.temperature_2m[0];
  })
);



const toggleMenuBtn = document.querySelector('.toggle-menu');
const mainMenu = document.querySelector('.main-menu');

toggleMenuBtn.addEventListener('click', function() {
  mainMenu.classList.toggle('toggle-menu');
});

window.addEventListener('resize', function() {
  if (window.innerWidth >= 650) {
    mainMenu.classList.remove('toggle-menu');
  }
});

function toggle() {
  var x = document.getElementById("texte");
  if (x.classList.contains("hidden")) {
      x.classList.remove("hidden");
      window.location.href = "#imgA";
  } else {
      x.classList.add("hidden");
  }
}
function toggle1() {
  var x = document.getElementById("texte1");
  if (x.classList.contains("hidden1")) {
      x.classList.remove("hidden1");
      window.location.href = "#imgB";
  } else {
      x.classList.add("hidden1");
  }
}
function toggle2() {
  var x = document.getElementById("texte2");
  if (x.classList.contains("hidden2")) {
      x.classList.remove("hidden2");
      window.location.href = "#imgC";
  } else {
      x.classList.add("hidden2");
  }
}
function toggle3() {
  var x = document.getElementById("texte3");
  if (x.classList.contains("hidden3")) {
      x.classList.remove("hidden3");
      window.location.href = "#imgD";
  } else {
      x.classList.add("hidden3");
  }
}
function toggle4() {
  var x = document.getElementById("texte4");
  if (x.classList.contains("hidden4")) {
      x.classList.remove("hidden4");
      window.location.href = "#imgE";
  } else {
      x.classList.add("hidden4");
  }
}
