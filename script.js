document.getElementById("getCurrency").addEventListener("change", function(event) {
  event.preventDefault();
  var amount = document.getElementById("amountInput").value;
  const value = document.getElementById("getCurrency").value;
  if (value === "")
    return;
  const url = "https://api.exchangerate-api.com/v4/latest/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      console.log(amount);
      let results = "";
      results += '<h2 style ="font-weight: normal; color: #6e6e6e;">Showing Conversions for ' + ' ' + json.base + ':</h2><br/>';
      results += '<h2 style="font-size: 2.5rem">';
      switch (json.base) {
        case "USD": results += '&#36;';
          break;
        case "CAD": results += '&#36;';
          break;
        case "EUR": results += '&#128;';
          break;
        case "JPY": results += '&#165;';
          break;
        case "GBP": results += '&#163;';
          break;
        case "CHF": results += '&#8355;';
          break;
      }
      results += parseFloat(amount).toFixed(2).toString();
      results += ' [' + json.base + '] = </h2><hr>';
      results += '<div class="row">';
      results += '<div class="col">';
      results += '<p>&#36;' + (parseFloat(amount) * json.rates.USD).toFixed(2) + '</p><p class="p-small">USD</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png">';
      results += '</div>';
      results += '<div class="col">';
      results += '<p>&#36;' + (parseFloat(amount) * json.rates.CAD).toFixed(2) + '</p><p class="p-small">CAD</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Canada.png">';
      results += '</div>';
      results += '<div class="col">';
      results += '<p>&#128;' + (parseFloat(amount) * json.rates.EUR).toFixed(2) + '</p><p class="p-small">EUR</p>' + '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png">';
      results += '</div>';
      results += '</div>';
      results += '<hr>'
      results += '<div class="row">';
      results += '<div class="col">';
      results += '<p>&#165;' + (parseFloat(amount) * json.rates.JPY).toFixed(2) + '</p><p class="p-small">JPY</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Japan.png">';
      results += '</div>';
      results += '<div class="col">';
      results += '<p>&#163;' + (parseFloat(amount) * json.rates.GBP).toFixed(2) + '</p><p class="p-small">GBP</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-United-Kingdom.png">';
      results += '</div>';
      results += '<div class="col">';
      results += '<p>&#8355;' + (parseFloat(amount) * json.rates.CHF).toFixed(2) + '</p><p class="p-small">CHF</p>' + '<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Switzerland.png">';
      results += '</div>';
      results += '</div>';
      document.getElementById("currencyResults").innerHTML = results;
    });
});
