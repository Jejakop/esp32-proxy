const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const ESP32_IP = 'http://192.168.0.73'; // tutaj wpisz IP swojego ESP32

app.use('/api', createProxyMiddleware({
  target: ESP32_IP,
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy działa na porcie ${PORT}`);
});
