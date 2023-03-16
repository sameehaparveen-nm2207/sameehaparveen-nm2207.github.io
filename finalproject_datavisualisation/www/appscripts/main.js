//Update text when you click on factor 1
function showFactor1Content() {
  document.getElementById("info-box").innerHTML = '<div class="context-text-box-1" id="info-box">' +
  '<p>Consumer prices have constantly been on the rise </p>' + 
  '<canvas id="context-chart"></canvas>' +
  '</div>';

//Plot chart when factor 2 is clicked
  const data = fetch(
    "https://2207-resources.s3.ap-southeast-1.amazonaws.com/sharing_deepfakes.csv" //replace this with the appropriate URL
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      const table = [];
      const rows = data.split("\r\n"); //replace this with the appropriate values
  
      //insert your forEach loop here
      rows.forEach((r, index)=>{
        const item = r.split(",");
        table.push(item)
      });
      console.log(table);
  
      const labelCountry = table[0].slice(1); //replace this with the appropriate values
      const beingOld = table[1].slice(1); //replace this with the appropriate values
      const dataObj = {
        labels: labelCountry,
        datasets: [
          {
            label: "Age",
            data: beingOld,
            borderWidth: 2,
            backgroundColor: "#7552F2",
            borderColor: "#7552F2",
          },
        ],
      };
  
      new Chart("context-chart", {
        type: "bar",
        data: dataObj,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          scales: {
            xAxes: [{
              ticks: {
                fontColor: "black", 
                fontFamily: "TrebuchetMS",
              },
            }],
            yAxes: [{
              ticks: {
                fontColor: "black", 
                fontFamily: "TrebuchetMS",
              },
            }],
          },
          title: {
            display: true,
            text: [
              "CPI Chart",
            ],          
            fontSize: 16,
            fontColor: "black",
            fontFamily: "TrebuchetMS",
          },
        },
      });
    });
  };

 //Update text when you click on factor 2
 function showFactor2Content() {
  document.getElementById("info-box").innerHTML = '<div class="context-text-box-1" id="info-box">' +
  '<p>GST increased from 7% to 8% </p>' + 
  '<canvas id="context-chart"></canvas>' +
  '</div>';

//Plot chart when factor 2 is clicked
  const data = fetch(
    "https://2207-resources.s3.ap-southeast-1.amazonaws.com/sharing_deepfakes.csv" //replace this with the appropriate URL
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      const table = [];
      const rows = data.split("\r\n"); //replace this with the appropriate values
  
      //insert your forEach loop here
      rows.forEach((r, index)=>{
        const item = r.split(",");
        table.push(item)
      });
      console.log(table);
  
      const labelCountry = table[0].slice(1); //replace this with the appropriate values
      const beingOld = table[1].slice(1); //replace this with the appropriate values
      const dataObj = {
        labels: labelCountry,
        datasets: [
          {
            label: "Age",
            data: beingOld,
            borderWidth: 2,
            backgroundColor: "#7552F2",
            borderColor: "#7552F2",
          },
        ],
      };
  
      new Chart("context-chart", {
        type: "bar",
        data: dataObj,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          scales: {
            xAxes: [{
              ticks: {
                fontColor: "black", 
                fontFamily: "TrebuchetMS",
              },
            }],
            yAxes: [{
              ticks: {
                fontColor: "black", 
                fontFamily: "TrebuchetMS",
              },
            }],
          },
          title: {
            display: true,
            text: [
              "GST Chart",
            ],          
            fontSize: 16,
            fontColor: "black",
            fontFamily: "TrebuchetMS",
          },
        },
      });
    });
  };