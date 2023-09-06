function getWeatherIcon(description, temperature) {
    if (description && temperature) {
      const lowerDescription = description.toLowerCase();

      if (lowerDescription.includes("clear")) {
        if (temperature > 20) {return "../imgs/icons8-weather-48.png"}
      } else if (
        lowerDescription.includes("cloud") ||
        lowerDescription.includes("overcast")
      ) {
        if (lowerDescription.includes('overcast')) return '../imgs/icons8-clouds-48.png'
        if (temperature > 20) {
          return "../imgs/icons8-partly-cloudy-day-48.png"; 
        } else {
          return "../imgs/icons8-partly-cloudy-day-48.png"; 
        }
      } else if (
        lowerDescription.includes("rain")){
          return "../imgs/icons8-rain-48.png";
        }else if(
        lowerDescription.includes("drizzle") ||
        lowerDescription.includes("shower")
      ) {
         return '../imgs/icons8-heavy-rain-48.png'
      } else if (lowerDescription.includes("thunderstorm")) {
        return "../imgs/3d-fluency-storm.png"; 
      } else if (lowerDescription.includes("snow")) {
        return "../imgs/3d-fluency-snow.png"; 
      } else {
        return "../imgs/icons8-night-48.png";
      }
  }
}
  
  export default getWeatherIcon