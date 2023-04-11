//1.	Data Visualisation of increase in CPI to showcase inflation:

//Update text when you click on factor 1
function showFactor1Content() {
  document.getElementById("info-box").innerHTML = '<div class="context-text-box-1" id="info-box">' 
  + '<canvas id="context-chart"></canvas>' + 
  '</div>';

//Plot chart when factor 1 is clicked
  
      //source: https://www.singstat.gov.sg/whats-new/latest-news/cpi-highlights
      //modified file: https://docs.google.com/spreadsheets/d/1UKnH-ILWtK5s1iOT8yHdvkV8a6Ix9HTs3_c1lqPk5WI/gviz/tq?tqx=out:csv 
      
      const labelYearallgoods = ["2015", "2016", "2017", "2018", "2019","2020","2021","2022"]
      const allgoods = {
        labels: labelYearallgoods,
        datasets: [
          {
            label: "All Items",
            data: [-0.5, -0.5, 0.6, 0.4,0.6,-0.2,2.3,6.1],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#3288bd",
            borderColor: "#3288bd"
          },
          {
            label: "Food",
            data: [1.9,2.1,1.4,1.4,1.5,1.9,1.4,5.3],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#f46d43",
            borderColor: "#f46d43"
          },
          {
            label: "Clothing & Footwear",
            data: [0.1,0.2,0.6,1.4,-0.8,-3.8,-5.5,2.8],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#bf9b36",
            borderColor: "#bf9b36"
          },
          {
            label: "Housing & Utilities",
            data: [-3.5,-4.1,-2.5,-1.3,-1.0,-0.3,1.4,5.2],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(135,62,35)",
            borderColor: "rgb(135,62,35)"
          },
          {
            label: "Household Durables & Services",
            data: [-0.6,1.8,1.1,0.8,0.8,0.3,1.5,2.0],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#46806e",
            borderColor: "#46806e"
          },
          {
            label: "Health Care",
            data: [-0.1,1.1,2.5,2.0,1.1,-1.5,1.1,2.2],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#5e4fa2",
            borderColor: "#5e4fa2"
          },
          {
            label: "Communication",
            data: [0.3,-0.4,0.6,-1.0,-0.9,0.7,-0.6,-1.2],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#515731",
            borderColor: "#515731"
          },
          {
            label: "Education",
            data: [3.4,3.1,3.0,2.9,2.4,-0.6,1.3,2.1],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#9e0142",
            borderColor: "#9e0142"
          },
          {
            label: "Recreation & Culture",
            data: [0.3,0.9,0.3,1.2,1.1],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#74A16D",
            borderColor: "#74A16D"
          },
        ],
      };
  
      new Chart("context-chart", {
        type: "line",
        data: allgoods,
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
  };

//Update text when you click on factor 4
function showFactor4Content() {
  document.getElementById("info-box").innerHTML = '<div class="context-text-box-1" id="info-box">' 
  + '<canvas id="context-chart"></canvas>' + 
  '</div>';

//Plot chart when factor 4 is clicked
  
      //source: https://www.singstat.gov.sg/whats-new/latest-news/cpi-highlights
      //modified file: https://docs.google.com/spreadsheets/d/1UKnH-ILWtK5s1iOT8yHdvkV8a6Ix9HTs3_c1lqPk5WI/gviz/tq?tqx=out:csv 
      
      const labelYearallgoods = ["2015", "2016", "2017", "2018", "2019","2020","2021","2022"]
      const allgoods = {
        labels: labelYearallgoods,
        datasets: [
          {
            label: "All Items",
            data: [-0.5, -0.5, 0.6, 0.4,0.6,-0.2,2.3,6.1],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#3288bd",
            borderColor: "#3288bd"
          },
          {
            label: "Food",
            data: [1.9,2.1,1.4,1.4,1.5,1.9,1.4,5.3],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#f46d43",
            borderColor: "#f46d43"
          },
          {
            label: "Clothing & Footwear",
            data: [0.1,0.2,0.6,1.4,-0.8,-3.8,-5.5,2.8],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#bf9b36",
            borderColor: "#bf9b36"
          },
          {
            label: "Housing & Utilities",
            data: [-3.5,-4.1,-2.5,-1.3,-1.0,-0.3,1.4,5.2],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(135,62,35)",
            borderColor: "rgb(135,62,35)"
          },
          {
            label: "Household Durables & Services",
            data: [-0.6,1.8,1.1,0.8,0.8,0.3,1.5,2.0],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#46806e",
            borderColor: "#46806e"
          },
          {
            label: "Health Care",
            data: [-0.1,1.1,2.5,2.0,1.1,-1.5,1.1,2.2],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#5e4fa2",
            borderColor: "#5e4fa2"
          },
          
          {
            label: "Communication",
            data: [0.3,-0.4,0.6,-1.0,-0.9,0.7,-0.6,-1.2],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#515731",
            borderColor: "#515731"
          },
          {
            label: "Education",
            data: [3.4,3.1,3.0,2.9,2.4,-0.6,1.3,2.1],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#9e0142",
            borderColor: "#9e0142"
          },
          {
            label: "Recreation & Culture",
            data: [0.3,0.9,0.3,1.2,1.1],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#74A16D",
            borderColor: "#74A16D"
          },
          {
            label: "Transport",
            data: [-1.4,-2.4,2.6,-0.5,0.8,-0.7,8.8,16.4],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(6,57,112)",
            borderColor: "rgb(6,57,112)"
          },
        ],
      };
  
      new Chart("context-chart", {
        type: "line",
        data: allgoods,
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
  };

//Update text when you click on factor 2
  function showFactor2Content() {
    document.getElementById("info-box").innerHTML = '<div class="context-text-box-1" id="info-box">' 
    + '<canvas id="context-chart"></canvas>' + 
    '</div>';

//Plot chart when factor 2 is clicked
//source: https://www.singstat.gov.sg/whats-new/latest-news/cpi-highlights

      const labelYearcoreinflation = ["2015", "2016", "2017", "2018", "2019","2020","2021","2022"]; 
      const coreinflation = {
        labels: labelYearcoreinflation,
        datasets: [
          {
            label: "All Items Less Accommodation",
            data: [-0.1,0.3,1.8,1.4,0.9,-0.3,2.5,6.6],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#2f1c4b",
            borderColor: "#2f1c4b"
          },
        ],
      };
  
      new Chart("context-chart", {
        type: "line",
        data: coreinflation,
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
  };

 //Update text when you click on factor 3
  function showFactor3Content() {
    document.getElementById("info-box").innerHTML = '<div class="context-text-box-1" id="info-box">' 
    + '<canvas id="context-chart"></canvas>' + 
    '</div>';

//Plot chart when factor 3 is clicked
//source: https://www.singstat.gov.sg/whats-new/latest-news/cpi-highlights
//modified file: https://docs.google.com/spreadsheets/d/1UKnH-ILWtK5s1iOT8yHdvkV8a6Ix9HTs3_c1lqPk5WI/gviz/tq?tqx=out:csv 
  

      const labelYearoverallinflation = ["2015", "2016", "2017", "2018", "2019","2020","2021","2022"]; 
      const overallinflation = {
        labels: labelYearoverallinflation,
        datasets: [
          {
            label: "All Items",
            data: [-0.5, -0.5, 0.6, 0.4,0.6,-0.2,2.3,6.1],
            borderWidth: 2,
            fill: false,
            backgroundColor: "#3288bd",
            borderColor: "#3288bd"
          },
        ],
      };
  
      new Chart("context-chart", {
        type: "line",
        data: overallinflation,
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
  };

  //--------------------------------------------------------------------------------------------------------------------------------------//

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
//--------------------------------------------------------------------------------------------------------------------------------------//

                                             //2.Data Visualisation on average household income

//---------------------------------------------------INCOME GROWTH GRAPH: LOW INCOME ---------------------------------------------------------

  //Update income-growth-graph when you click on low-income
  function showlowincomegrowthcontent() {
  document.getElementById("growth-box").innerHTML = '<div class="context-text-box-2" id="growth-box">' 
  + '<canvas id="income-growth-graph"></canvas>' + 
  '</div>';

  //Plot chart when low-income is clicked
  //source: https://tablebuilder.singstat.gov.sg/table/CT/17820

    const labelYearslowincomegrowthdata = ["2015", "2016", "2017", "2018", "2019","2020","2021","2022"]
    const lowincomegrowthdata = {
          labels: labelYearslowincomegrowthdata,
          datasets: [
            {
              label: "Total",
              data: [10515,10493,10920,11016,11250,11111,11137,11906],
              borderWidth: 2,
              fill: false,
              backgroundColor: "#643c6a",
              borderColor: "#643c6a"
            },
            {
              label: "1st Decile",
              data: [1745,1732,1763,1785,1858,1805,1858,2104],
              borderWidth: 2,
              fill: false,
              backgroundColor: "#932525",
              borderColor: "#932525"
            },
            {
              label: "2nd Decile",
              data: [3402,3486,3512,3574,3692,3839,3892,4110],
              borderWidth: 2,
              fill: false,
              backgroundColor: "#D57617",
              borderColor: "#D57617"
            },
            {
              label: "3rd Decile",
              data: [4965,5040,5158,5174,5237,5190,5192,5659],
              borderWidth: 2,
              fill: false,
              backgroundColor: "#DBBD23",
              borderColor: "#DBBD23"
            },
            {
              label: "4th Decile",
              data: [6262,6434,6554,6762,6903,6955,7223,7471],
              borderWidth: 2,
              fill: false,
              backgroundColor: "#41784A",
              borderColor: "#41784A"
            },
            {
              label: "5th Decile",
              data: [7746,7856,8254,8413,8708,8648,8890,9316],
              borderWidth: 2,
              fill: false,
              backgroundColor: "#3E4F70",
              borderColor: "#3E4F70"
            },
          ],
        };
    
        new Chart("income-growth-graph", {
          type: "line",
          data: lowincomegrowthdata,
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
              text: ['Lower Income Group - Average Monthly Household Income from Work (SGD)'],
              fontColor: 'black',
          }
          },
        });
      };
    
    //---------------------------------------------------INCOME GROWTH GRAPH: HIGH INCOME ---------------------------------------------------------

    //Update income-growth-graph when you click on high-income
    function showhighincomegrowthcontent() {
    document.getElementById("growth-box").innerHTML = '<div class="context-text-box-2" id="growth-box">' 
    + '<canvas id="income-growth-graph"></canvas>' + 
    '</div>';
  
    //Plot chart when low-income is clicked
    //source: https://tablebuilder.singstat.gov.sg/table/CT/17820
  
      const labelYearshighincomegrowthdata = ["2015", "2016", "2017", "2018", "2019","2020","2021","2022"]
      const highincomegrowthdata = {
            labels: labelYearshighincomegrowthdata,
            datasets: [
              {
                label: "Total",
                data: [10515,10493,10920,11016,11250,11111,11137,11906],
                borderWidth: 2,
                fill: false,
                backgroundColor: "#643c6a",
                borderColor: "#643c6a"
              },
              {
                label: "6th Decile",
                data: [9480,9636,9736,10106,10402,10204,10749,11210],
                borderWidth: 2,
                fill: false,
                backgroundColor: "#932525",
                borderColor: "#932525"
              },
              {
                label: "7th Decile",
                data: [11323,11421,12042,12153,12454,12383,12698,13307],
                borderWidth: 2,
                fill: false,
                backgroundColor: "#D57617",
                borderColor: "#D57617"
              },
              {
                label: "8th Decile",
                data: [13519,13765,14351,14588,15139,14626,15093,16135],
                borderWidth: 2,
                fill: false,
                backgroundColor: "#DBBD23",
                borderColor: "#DBBD23"
              },
              {
                label: "9th Decile",
                data: [16848,17188,17809,18407,18631,18215,18629,20204],
                borderWidth: 2,
                fill: false,
                backgroundColor: "#41784A",
                borderColor: "#41784A"
              },
              {
                label: "10th Decile",
                data: [29860,28377,30018,29197,29474,29246,27149,29542],
                borderWidth: 2,
                fill: false,
                backgroundColor: "#3E4F70",
                borderColor: "#3E4F70"
              },
            ],
          };
      
          new Chart("income-growth-graph", {
            type: "line",
            data: highincomegrowthdata,
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
                text: ['Higher Income Group - Average Monthly Household Income from Work (SGD)'],
                fontColor: 'black',
            }
            },
          });
        };

//---------------------------------------------------INCOME CHANGE GRAPH: HIGH INCOME ---------------------------------------------------------        
//Update income-change-graph when you click on high-income
        function showhighincomechangecontent() {
          document.getElementById("change-box").innerHTML = '<div class="content-text-box-2" id="change-box">' 
          + '<canvas id="income-change-graph"></canvas>' + 
          '</div>';
        
          //Plot chart when low-income is clicked
          //source: https://tablebuilder.singstat.gov.sg/table/CT/17820
        
            const labelYearshighincomechange = ["2016", "2017", "2018", "2019","2020","2021","2022"]
            const highincomechangedata = {
                  labels: labelYearshighincomechange,
                  datasets: [
                    {
                      label: "Inflation Rate",
                      data: [-0.50,0.60,0.40,0.60,-0.20,2.30,6.10],
                      borderWidth: 2,
                      fill: false,
                      backgroundColor: "#E136A7",
                      borderColor: "#E136A7"
                    },
                    {
                      label: "Total",
                      data: [-0.209, 4.069, 0.879, 2.124, -1.236, 0.234, 6.905],
                      borderWidth: 2,
                      fill: false,
                      backgroundColor: "#643c6a",
                      borderColor: "#643c6a"
                    },
                    {
                      label: "6th Decile",
                      data: [1.646, 1.038, 3.800, 2.292, -1.903, 5.341, 4.289],
                      borderWidth: 2,
                      fill: false,
                      backgroundColor: "#932525",
                      borderColor: "#932525"
                    },
                    {
                      label: "7th Decile",
                      data: [0.865,5.437,0.922,2.477,-0.570,2.544,4.796],
                      borderWidth: 2,
                      fill: false,
                      backgroundColor: "#D57617",
                      borderColor: "#D57617"
                    },
                    {
                      label: "8th Decile",
                      data: [1.820,4.257,1.651,3.777,-3.389,3.193,6.904],
                      borderWidth: 2,
                      fill: false,
                      backgroundColor: "#DBBD23",
                      borderColor: "#DBBD23"
                    },
                    {
                      label: "9th Decile",
                      data: [2.018,3.613,3.358,1.217,-2.233,2.273,8.455],
                      borderWidth: 2,
                      fill: false,
                      backgroundColor: "#41784A",
                      borderColor: "#41784A"
                    },
                    {
                      label: "10th Decile",
                      data: [-4.967,5.783,-2.735,0.949,-0.774,-7.170,8.814],
                      borderWidth: 2,
                      fill: false,
                      backgroundColor: "#3E4F70",
                      borderColor: "#3E4F70"
                    },
                  ],
                };
            
                new Chart("income-change-graph", {
                  type: "line",
                  data: highincomechangedata,
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
                      text: ['Higher Income Group - Yearly % Change in Average Monthly Household Income from Work (SGD)'],
                      fontColor: 'black',
                  }
                  },
                });
              };

//---------------------------------------------------INCOME CHANGE GRAPH: LOW INCOME ---------------------------------------------------------
    //Update income-change-graph when you click on low-income
    function showlowincomechangecontent() {
      document.getElementById("change-box").innerHTML = '<div class="content-text-box-2" id="change-box">' 
      + '<canvas id="income-change-graph"></canvas>' + 
      '</div>';
    
      //Plot chart when low-income is clicked
      //source: https://tablebuilder.singstat.gov.sg/table/CT/17820
    
        const labelYearslowincomechange = ["2016", "2017", "2018", "2019","2020","2021","2022"]
        const lowincomechangedata = {
              labels: labelYearslowincomechange,
              datasets: [
                {
                  label: "Inflation Rate",
                  data: [-0.50,0.60,0.40,0.60,-0.20,2.30,6.10],
                  borderWidth: 2,
                  fill: false,
                  backgroundColor: "#E136A7",
                  borderColor: "#E136A7"
                },
                {
                  label: "Total",
                  data: [-0.209, 4.069, 0.879, 2.124, -1.236, 0.234, 6.905],
                  borderWidth: 2,
                  fill: false,
                  backgroundColor: "#643c6a",
                  borderColor: "#643c6a"
                },
                {
                  label: "1st Decile",
                  data: [-0.745,1.790,1.248,4.090,-2.853,2.936,13.240],
                  borderWidth: 2,
                  fill: false,
                  backgroundColor: "#932525",
                  borderColor: "#932525"
                },
                {
                  label: "2nd Decile",
                  data: [2.469,0.746,1.765,3.302,3.982,1.381,5.601],
                  borderWidth: 2,
                  fill: false,
                  backgroundColor: "#D57617",
                  borderColor: "#D57617"
                },
                {
                  label: "3rd Decile",
                  data: [1.511,2.341,0.310,1.218,-0.897,0.039,8.995],
                  borderWidth: 2,
                  fill: false,
                  backgroundColor: "#DBBD23",
                  borderColor: "#DBBD23"
                },
                {
                  label: "4th Decile",
                  data: [2.747,1.865,3.174,2.085,0.753,3.853,3.433],
                  borderWidth: 2,
                  fill: false,
                  backgroundColor: "#41784A",
                  borderColor: "#41784A"
                },
                {
                  label: "5th Decile",
                  data: [1.420,5.066,1.926,3.506,-0.689,2.789,4.792],
                  borderWidth: 2,
                  fill: false,
                  backgroundColor: "#3E4F70",
                  borderColor: "#3E4F70"
                },
              ],
            };
        
            new Chart("income-change-graph", {
              type: "line",
              data: lowincomechangedata,
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
                  text: ['Lower Income Group - Yearly % Change in Average Monthly Household Income from Work (SGD)'],
                  fontColor: 'black',
              }
              },
            });
          };

//---------------------------------------------------HOUSEHOLD EXPENDITURE PIE CHART ---------------------------------------------------------
//source: https://tablebuilder.singstat.gov.sg/table/TS/M212981

const categoryofgoods = ["Food", "Healthcare", "Transport", "Communication","Recreation & Culture","Educational Services","Accommodation Services","Others"]
const householdexpenditure = [1198.9, 323.1, 781.2,240.4,378.6,339.2,69.8,744.2]
const chartColors = [
  "#74A16D",
  "#212C57",
  "#733E6A",
  "#DA7C76",
  "#FFDB9C",
  "#BA4E6F",
  "#77ACBA",
  "#e8c3b9",]

    new Chart("expenditure-pie-chart", {
      type: "doughnut",
      data: {
        labels: categoryofgoods,
        datasets: [{
          backgroundColor: chartColors,
          data: householdexpenditure
        }]
      },
      options: {
        title: {
          display: true,
          text: "Proportion of Monthly Income Spent on Different Goods",
          fontColor: "black",
          
          fontSize: 14,
        },

        legend: {
          labels: {
            fontColor: "black",
            fontSize: 14
          }
        }
        
      }
    });
  //---------------------------------------------------FINFLATION RATE COMPARISION CHART ---------------------------------------------------------

    const labelYearinflationcompare = ["2018", "2019","2020","2021","2022"]
      const inflationcompare = {
        labels: labelYearinflationcompare,
        datasets: [
          {
            label: "Food",
            data: [1.4,1.5,1.9,1.4,5.3],
            borderWidth: 2,
            fill: true,
            backgroundColor: "#f46d43",
            borderColor: "#f46d43"
          },
          {
            label: "Housing & Utilities",
            data: [-1.3,-1.0,-0.3,1.4,5.2],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgb(135,62,35)",
            borderColor: "rgb(135,62,35)"
          },
          {
            label: "Health Care",
            data: [2.0,1.1,-1.5,1.1,2.2],
            borderWidth: 2,
            fill: true,
            backgroundColor: "#5e4fa2",
            borderColor: "#5e4fa2"
          },
          {
            label: "Communication",
            data: [-1.0,-0.9,0.7,-0.6,-1.2],
            borderWidth: 2,
            fill: true,
            backgroundColor: "#515731",
            borderColor: "#515731"
          },
          {
            label: "Education",
            data: [2.9,2.4,-0.6,1.3,2.1],
            borderWidth: 2,
            fill: true,
            backgroundColor: "#9e0142",
            borderColor: "#9e0142"
          },
          {
            label: "Recreation & Culture",
            data: [1.2,1.1,-1.8,1.0,4.3],
            borderWidth: 2,
            fill: true,
            backgroundColor: "#74A16D",
            borderColor: "#74A16D"
          },
          {
            label: "Transport",
            data: [-0.5,0.8,-0.7,8.8,16.4],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgb(6,57,112)",
            borderColor: "rgb(6,57,112)"
          },
        ],
      };
  
      new Chart("inflation-bar-chart", {
        type: "bar",
        data: inflationcompare,
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
            text: ['Inflation Rates of Individual Categories from 2018 to 2022'],
            fontColor: 'black',
        }
        },
      });

    