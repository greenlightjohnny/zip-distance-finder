const resDiv = document.querySelector(".res");
console.log(resDiv);

function loopDisplay(data) {
  console.log(data);
  let startDiv = document.querySelector(".startdiv");
  let start = data.originAddresses[0];
  startDiv.innerHTML = start;
}

function sendg() {
  console.log("SendG funct");
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [oo],
      destinations: [dd],
      travelMode: "DRIVING",
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    },
    function (response, status) {
      if (status !== "OK") {
        alert("Error was: " + status);
      } else {
        console.log(response);
        let mychart = response.rows[0].elements[0].distance.text;
        loopDisplay(response);
        let yack = document.createElement("div");
        yack.textContent = "hello";
        resDiv.appendChild(yack);
      }
    }
  );
}
