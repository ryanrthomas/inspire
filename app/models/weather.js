export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.windSpeed = data.wind.speed
    this.humidity = data.main.humidity
  }
  
  getTemplate() { // Temperature has already been converted from Kelvin to Fahrenheit/Celsius.
    return `
      <h2>${Math.round((this.kelvin - 273.15)*9/5+32).toFixed()}°F/${Math.round(this.kelvin - 273.15)}°C</h2>
      <h5>${this.city}, ID</h5>
      <p>Humidity: ${Math.round(this.humidity*.77)}%<br>Wind: ${Math.round(this.windSpeed*2.5)} mph</p>
    `
  }
}