//1.	Data Visualisation of increase in CPI to showcase inflation:

//Update text when you click on factor 1
function showFactor1Content() {
  document.getElementById("info-box").innerHTML = '<div class="context-text-box-1" id="info-box">' 
  + '<canvas id="context-chart"></canvas>' + 
  '</div>';

//Plot chart when factor 1 is clicked
  
      //source: https://www.singstat.gov.sg/whats-new/latest-news/cpi-highlights
      
      const labelYear = ["2019","2020","2021","2022"]//table[0].slice(1); //replace this with the appropriate values
      //const labelBasket = table[1].slice(1); //replace this with the appropriate values
      const dataObjs = {
        labels: labelYear,
        datasets: [
          {
            label: "All Items",
            data: [0.6,-0.2,2.3,6.1],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(30,129,176)",
            borderColor: "rgb(30,129,176)"
          },
          {
            label: "Food",
            data: [1.5,1.9,1.4,5.3],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(226,135,67)",
            borderColor: "rgb(226,135,67)"
          },
          {
            label: "Clothing & Footwear",
            data: [-0.8,-3.8,-5.5,2.8],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(234,182,118)",
            borderColor: "rgb(234,182,118)"
          },
          {
            label: "Housing & Utilities",
            data: [-1.0,-0.3,1.4,5.2],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(135,62,35)",
            borderColor: "rgb(135,62,35)"
          },
          {
            label: "Household Durables & Services",
            data: [0.8,0.3,1.5,2.0],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(118,181,197)",
            borderColor: "rgb(118,181,197)"
          },
          {
            label: "Health Care",
            data: [1.1,-1.5,1.1,2.2],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(171,219,227)",
            borderColor: "rgb(171,219,227)"
          },
          {
            label: "Transport",
            data: [0.8,-0.7,8.8,16.4],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(6,57,112)",
            borderColor: "rgb(6,57,112)"
          },
          {
            label: "Communication",
            data: [-0.9,0.7,-0.6,-1.2],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(6,57,112)",
            borderColor: "rgb(6,57,112)"
          },
          {
            label: "Education",
            data: [2.4,-0.6,1.3,2.1],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(6,57,112)",
            borderColor: "rgb(6,57,112)"
          },
        ],
      };
  
      new Chart("context-chart", {
        type: "line",
        data: dataObjs,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: true,
            labels: {
              fontColor: "black"
            }
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
            text: ['Annual % Change In Consumer Price Index (CPI) Over Corresponding Period Of Previous Year, 2019 As Base Year'],
            fontColor: 'black',
        }
        },
      });
    //});
  };

 //Update text when you click on factor 2
 function showFactor2Content() {
  document.getElementById("info-box").innerHTML = '<div class="context-text-box-1" id="info-box">' +
  '<div id = "graph-area">' + '<canvas id="context-chart"></canvas>'+ '</div>' + 
  '<div id = "graph-explanation-area">'+ '<img src="resources/cpistats.jpg" height = "80px">' //img source: https://forums.tigsource.com/index.php?topic=72020.0
  + '</div>';

//Plot chart when factor 2 is clicked
  const data2 = fetch(
    "https://2207-resources.s3.ap-southeast-1.amazonaws.com/sharing_deepfakes.csv" //replace this with the appropriate URL
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (data2) {
      const table = [];
      const rows = data2.split("\r\n"); //replace this with the appropriate values
  
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
              "Core Inflation Chart",
            ],          
            fontSize: 16,
            fontColor: "black",
            fontFamily: "TrebuchetMS",
          },
        },
      });
    });
  };

  function showFactor3Content() {
    document.getElementById("info-box").innerHTML = '<div class="context-text-box-1" id="info-box">' 
    + '<canvas id="context-chart"></canvas>'+ 
    '</div>';
  
  //Plot chart when factor 3 is clicked
    
        //source: https://www.singstat.gov.sg/whats-new/latest-news/cpi-highlights
        
        const labelYears = ["2019","2020","2021","2022"]//table[0].slice(1); //replace this with the appropriate values
        //const labelBasket = table[1].slice(1); //replace this with the appropriate values
        const dataObjss = {
          labels: labelYears,
          datasets: [
            {
              label: "All Items",
              data: [0.6,-0.2,2.3,6.1],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(30,129,176)",
              borderColor: "rgb(30,129,176)"
            },
            {
              label: "Food",
              data: [1.5,1.9,1.4,5.3],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(226,135,67)",
              borderColor: "rgb(226,135,67)"
            },
            {
              label: "Clothing & Footwear",
              data: [-0.8,-3.8,-5.5,2.8],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(234,182,118)",
              borderColor: "rgb(234,182,118)"
            },
            {
              label: "Housing & Utilities",
              data: [-1.0,-0.3,1.4,5.2],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(135,62,35)",
              borderColor: "rgb(135,62,35)"
            },
            {
              label: "Household Durables & Services",
              data: [0.8,0.3,1.5,2.0],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(118,181,197)",
              borderColor: "rgb(118,181,197)"
            },
            {
              label: "Health Care",
              data: [1.1,-1.5,1.1,2.2],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(171,219,227)",
              borderColor: "rgb(171,219,227)"
            },
            {
              label: "Transport",
              data: [0.8,-0.7,8.8,16.4],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(6,57,112)",
              borderColor: "rgb(6,57,112)"
            },
            {
              label: "Communication",
              data: [-0.9,0.7,-0.6,-1.2],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(6,57,112)",
              borderColor: "rgb(6,57,112)"
            },
            {
              label: "Education",
              data: [2.4,-0.6,1.3,2.1],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(6,57,112)",
              borderColor: "rgb(6,57,112)"
            },
          ],
        };
    
        new Chart("context-chart", {
          type: "line",
          data: dataObjss,
          options: {
            maintainAspectRatio: false,
            legend: {
              display: true,
              labels: {
                fontColor: "black"
              }
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
              text: ['Annual % Change In Consumer Price Index (CPI) Over Corresponding Period Of Previous Year, 2019 As Base Year'],
              fontColor: 'black',
          }
          },
        });
      //});
    };
    //Generate Income Percentile
   
    function generateincomedecile() {
      let income = document.getElementById("input-income-value").value;
      if (income < 4110) {
        document.getElementById("result-percentile").innerHTML = "You are in the 10th percentile";
      } else if (income >= 4110 && income < 5659) {
        document.getElementById("result-percentile").innerHTML = "You are in the 20th percentile";
      } else if (income >= 5659 && income < 7471) {
        document.getElementById("result-percentile").innerHTML = "You are in the 30th percentile";
      } else if (income >= 7471 && income < 9316) {
        document.getElementById("result-percentile").innerHTML = "You are in the 40th percentile";
      } else if (income >= 9316 && income < 11210) {
        document.getElementById("result-percentile").innerHTML = "You are in the 50th percentile";
      } else if (income >= 11210 && income < 13307) {
        document.getElementById("result-percentile").innerHTML = "You are in the 60th percentile";
      } else if (income >= 13307 && income < 16135) {
        document.getElementById("result-percentile").innerHTML = "You are in the 70th percentile";
      } else if (income >= 16135 && income < 20204) {
        document.getElementById("result-percentile").innerHTML = "You are in the 80th percentile";
      } else if (income >= 20204 && income < 29542) {
        document.getElementById("result-percentile").innerHTML = "You are in the 90th percentile";
      } else if (income > 29542) {
        document.getElementById("result-percentile").innerHTML = "You are above the 90th percentile";
      } else {
        alert("Input is invalid!");
      }
      
    }


   //2.Data Visualisation on average household income
    const labelYears = ["2019","2020","2021","2022"]//table[0].slice(1); //replace this with the appropriate values
        //const labelBasket = table[1].slice(1); //replace this with the appropriate values
        const dataObjss = {
          labels: labelYears,
          datasets: [
            {
              label: "All Items",
              data: [0.6,-0.2,2.3,6.1],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(30,129,176)",
              borderColor: "rgb(30,129,176)"
            },
            {
              label: "Food",
              data: [1.5,1.9,1.4,5.3],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(226,135,67)",
              borderColor: "rgb(226,135,67)"
            },
            {
              label: "Clothing & Footwear",
              data: [-0.8,-3.8,-5.5,2.8],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(234,182,118)",
              borderColor: "rgb(234,182,118)"
            },
            {
              label: "Housing & Utilities",
              data: [-1.0,-0.3,1.4,5.2],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(135,62,35)",
              borderColor: "rgb(135,62,35)"
            },
            {
              label: "Household Durables & Services",
              data: [0.8,0.3,1.5,2.0],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(118,181,197)",
              borderColor: "rgb(118,181,197)"
            },
            {
              label: "Health Care",
              data: [1.1,-1.5,1.1,2.2],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(171,219,227)",
              borderColor: "rgb(171,219,227)"
            },
            {
              label: "Transport",
              data: [0.8,-0.7,8.8,16.4],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(6,57,112)",
              borderColor: "rgb(6,57,112)"
            },
            {
              label: "Communication",
              data: [-0.9,0.7,-0.6,-1.2],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(6,57,112)",
              borderColor: "rgb(6,57,112)"
            },
            {
              label: "Education",
              data: [2.4,-0.6,1.3,2.1],
              borderWidth: 2,
              fill: false,
              backgroundColor: "rgb(6,57,112)",
              borderColor: "rgb(6,57,112)"
            },
          ],
        };
    
        new Chart("data-visualisation-1", {
          type: "line",
          data: dataObjss,
          options: {
            maintainAspectRatio: false,
            legend: {
              display: true,
              labels: {
                fontColor: "black"
              }
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
              text: ['Annual % Change In Consumer Price Index (CPI) Over Corresponding Period Of Previous Year, 2019 As Base Year'],
              fontColor: 'black',
          }
          },
        });
      //});

      //3.	Data Visualisation on average household expenditure
      const data3 = fetch(
        "https://2207-resources.s3.ap-southeast-1.amazonaws.com/sharing_deepfakes.csv" //replace this with the appropriate URL
      )
        .then(function (response) {
          return response.text();
        })
        .then(function (data3) {
          const table = [];
          const rows = data3.split("\r\n"); //replace this with the appropriate values
      
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
      
          new Chart("data-visualisation-3", {
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
    
        //3.	Data Visualisation on average household expenditure
        const data4 = fetch(
          "https://2207-resources.s3.ap-southeast-1.amazonaws.com/sharing_deepfakes.csv" //replace this with the appropriate URL
        )
          .then(function (response) {
            return response.text();
          })
          .then(function (data4) {
            const table = [];
            const rows = data4.split("\r\n"); //replace this with the appropriate values
        
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
        
            new Chart("data-visualisation-2", {
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
      