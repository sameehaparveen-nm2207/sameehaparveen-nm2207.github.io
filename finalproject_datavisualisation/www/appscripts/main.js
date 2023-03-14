//function updateInfoBox(factor) {
    //const infoBox = document.getElementById('info-box');
    //if (factor === 'factor-1') {
      //infoBox.innerHTML = '<div class="context-text-box" id="info-box">' +
      //'<p>Consumer prices have constantly been on the rise <br> <br> will be using data from https://www.singstat.gov.sg/whats-new/latest-news/cpi-highlights to have a data visualisation on inflation</p>' +
      //'<img src="resources/cpistats.jpg" alt="SINGAPORE\'S CPI INCREASED BY 6.1% IN 2022" id="cpi-stats">' +
      //'</div>';
    //} else if (factor === 'factor-2') {
      //infoBox.innerHTML = '<div class="context-text-box" id="info-box">' +
      //'<p>GST increased from 7% to 8% <br> some info on how this has contributed to the increased cost of living</p>' +
      //'</div>';
    //} else if (factor === 'factor-3') {
     // infoBox.innerHTML = 'will think of a factor 3';
    //} else if (factor === 'factor-4') {
    //  infoBox.innerHTML = 'will think of a factor 4';
    //}
//}

//let factor1Box = document.getElementById('factor-1');
//factor1Box.addEventListener('click', function() {
//  updateInfoBox('factor-1');
//});

//let factor2Box = document.getElementById('factor-2');
//factor2Box.addEventListener('click', function() {
//  updateInfoBox('factor-2');
//});

//let factor3Box = document.getElementById('factor-3');
//factor3Box.addEventListener('click', function() {
//  updateInfoBox('factor-3');
//});

//let factor4Box = document.getElementById('factor-4');
//factor4Box.addEventListener('click', function() {
//  updateInfoBox('factor-4');
//});

function showFactor1Content() {
    document.getElementById("info-box").innerHTML = '<div class="context-text-box" id="info-box">' +
    '<p>Consumer prices have constantly been on the rise <br> <br> will be using data from https://www.singstat.gov.sg/whats-new/latest-news/cpi-highlights to have a data visualisation on inflation</p>' +
    '<img src="resources/cpistats.jpg" alt="SINGAPORE\'S CPI INCREASED BY 6.1% IN 2022" id="cpi-stats">' +
    '</div>';
  }
  
  function showFactor2Content() {
    document.getElementById("info-box").innerHTML = '<div class="context-text-box" id="info-box">' +
    '<p>GST increased from 7% to 8% <br> some info on how this has contributed to the increased cost of living</p>' +
    '</div>';
  }

  function showFactor3Content() {
    document.getElementById("info-box").innerHTML = 'will think of a factor 3';
  }
  
  function showFactor4Content() {
    document.getElementById("info-box").innerHTML = 'will think of a factor 4';
  }