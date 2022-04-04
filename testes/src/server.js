const express = require('express');
const colorConverter = require('./color-converter');

const app = express();

app.get('/rgb-to-hex/:red/:green/:blue', (req, res) => {
  const { red = 0, green = 0, blue = 0 } =  req.params;
  const color = colorConverter.toHex([
    parseInt(red),
    parseInt(green),
    parseInt(blue)
  ]);

  res.send(color);
});

app.get('/hex-to-rgb/:hex', (req, res) => {
  const color = colorConverter.toRgb(req.params.hex);

  res.send(color);
});

app.listen(9000);