module.exports = {
  toHex: (rgb) => {
    const arrayColorsConverted = [
      rgb[0].toString(16),
      rgb[1].toString(16),
      rgb[2].toString(16),
    ]

    const hexValue = arrayColorsConverted.reduce((acc, current) => {
      if(current.length === 1) {
        return acc + current.padStart(2, '0');
      }

      return acc + current;
    }, '#');

    return hexValue;
  },
  toRgb: (hex) => {
    if (hex[0] === '#') hex.replace('#', '');
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);

    return [
      red,
      green,
      blue
    ]
  }
}