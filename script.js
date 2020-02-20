document.getElementById("getCurrency").addEventListener("change", function(event) {
  event.preventDefault();
  const value = document.getElementById("getCurrency").value;
  if (value === "")
    return;
  const url = "https://api.exchangerate-api.com/v4/latest/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<h2 style ="font-weight: normal">Showing Conversions for ' + json.base + ':</h2><br/>';
      results += '<h2 style="font-size: 2.5rem">1.00 [' + json.base + '] = </h2>';
      results += '<div class="row">';
      results += '<div class="col">';
      results += '<p>' + json.rates.USD.toFixed(2) + '</p><hr/><p>USD</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png">';
      results += '</div>';
      results += '<div class="col">';
      results += '<p>' + json.rates.CAD.toFixed(2) + '</p><hr/><p>CAD</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Canada.png">';
      results += '</div>';
      results += '<div class="col">';
      results += '<p>' + json.rates.EUR.toFixed(2) + '</p><hr/><p>EUR</p>' + '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png">';
      results += '</div>';
      results += '</div>';
      results += '<div class="row">';
      results += '<div class="col">';
      results += '<p>' + json.rates.JPY.toFixed(2) + '</p><hr/><p>JPY</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Japan.png">';
      results += '</div>';
      results += '<div class="col">';
      results += '<p>' + json.rates.GBP.toFixed(2) + '</p><hr/><p>GBP</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-United-Kingdom.png">';
      results += '</div>';
      results += '<div class="col">';
      results += '<p>' + json.rates.CHF.toFixed(2) + '</p><hr/><p>CHF</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Switzerland.png">';
      results += '</div>';
      results += '</div>';
      document.getElementById("currencyResults").innerHTML = results;
    });
});
