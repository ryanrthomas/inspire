export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp
  }
  
  getTemplate() { // Temperature has already been converted from Kelvin to Fahrenheit/Celsius.
    return `
      <h4>${Math.round((this.kelvin - 273.15)*9/5+32).toFixed()}°F/${Math.round(this.kelvin - 273.15)}°C</h4>
      <h5>${this.city}</h5>
    `
  }
}