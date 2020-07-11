// Foursquare API Info
const clientId = 'KR1PCSXKAPRSTKE5IA30LQCKONE4B3UCZ1BOL3I0XBPOGUBJ';
const clientSecret = 'G5NFYA2OH1QJ3011RU1P4K4SAM0L5DZXNWLIS4NX24MAYB5A';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';


// OpenWeather Info
const openWeatherKey = 'fb851b5e6d8c3d513cec1704149d57ab';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';


// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// AJAX functions
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200710`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      console.log(venues);
      return venues;  
    }
  } catch (error) {
    console.log(error);
  }
};


const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}


const renderForecast = (day) => {
	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}


const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => {
    return renderVenues(venues);
  });
  getForecast().then(forecast => {
    return renderForecast(forecast);
  });
  return false;
}


$submit.click(executeSearch)