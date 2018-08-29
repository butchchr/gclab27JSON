function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://forecast.weather.gov/MapClick.php?lat=38.4247341&lon=-86.9624086&FcstType=json",
    true
  );

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      data.data.text.forEach(element => {
        console.log(element);
        var node = document.createElement("li");
        node.innerText = element;
        document.getElementById("weather").appendChild(node);
      });
    }
  };

  xhttp.send();
}

// function loadData() {
//   // fetch(`https://jsonplaceholder.typicode.com/users`)
//   fetch(
//     `https://forecast.weather.gov/MapClick.php?lat=38.4247341&lon=-86.9624086&FcstType=json`
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.location);
//       let test;
//       //   let textArray = data.forEach(element => {
//       //     const text = element.text;
//       //   });
//       test += `
//         <div>Location: ${data.text}</div>
//         `;
//       var newLi = document.createElement("li");
//       var content = document.createTextNode(`${test}`);
//       newLi.appendChild(content);
//       document.querySelector(".display").innerHTML = text;
//     });
// }
