console.log("hello");

const form = document.getElementById("form");
let oo;
let dd;

function getZips(e) {
  e.preventDefault();
  const dest = e.target[1].value;
  const origin = e.target[0].value;
  oo = origin;
  dd = dest;
  console.log("getZips f", oo);

  loadScript();
}

function loadScript() {
  let script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfo56YNbOeY5A_rLLPSHjNaZR_SzbdNvQ&callback=sendg";
  document.head.append(script);
}

form.addEventListener("submit", getZips);
