export const formatDate = (date = new Date()) => {
  return date.toLocaleDateString('en-us', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
};

export const formatTemprature = (value = 0, scale = 'celsius') => {
  if (scale === 'celsius') return value;
  if (scale === 'fahrenheit') return value * (9 / 5) + 32;
};

export const formatWindDirection = (degrees) => {
  if ((degrees >= 0 && degrees < 22.5) || degrees === 360) return 'N';
  else if (degrees >= 22.5 && degrees < 45) return 'NNE';
  else if (degrees >= 45 && degrees < 67.5) return 'NE';
  else if (degrees >= 67.5 && degrees < 90) return 'ENE';
  else if (degrees >= 90 && degrees < 112.5) return 'E';
  else if (degrees >= 112.5 && degrees < 135) return 'ESE';
  else if (degrees >= 135 && degrees < 157.5) return 'SE';
  else if (degrees >= 157.5 && degrees < 180) return 'SSE';
  else if (degrees >= 180 && degrees < 205.5) return 'S';
  else if (degrees >= 205.5 && degrees < 225) return 'SSW';
  else if (degrees >= 225 && degrees < 247.5) return 'SW';
  else if (degrees >= 247.5 && degrees < 270) return 'WSW';
  else if (degrees >= 270 && degrees < 292.5) return 'W';
  else if (degrees >= 292.5 && degrees < 315) return 'WNW';
  else if (degrees >= 315 && degrees < 337.5) return 'NW';
  else if (degrees >= 337.5 && degrees < 360) return 'NNW';
};
