export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
  }

  getTemplate() {
    return `
      <h1>The weather is ${Math.round((this.kelvin - 273.15)*9/5+32).toFixed()}°F right now in ${this.city}.</h1>
  
    `
  }
}