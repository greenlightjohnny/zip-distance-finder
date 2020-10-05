console.log("hello");

const form = document.getElementById("form");

function getZips(e) {
  e.preventDefault();
  const dest = e.target[1].value;
  const origin = e.target[0].value;

  console.log(dest);
  console.log("hmm", e);
}

form.addEventListener("submit", getZips);
