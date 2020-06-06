const QRCode = require('qrcode')
const canvas = document.getElementById('canvas')
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('text');

QRCode.toCanvas(canvas, myParam, {
  width: 500
}, function (error) {
  if (error) console.error(error)
  console.log('success!');
})
