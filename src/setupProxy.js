const { createProxyMiddleware } = require("http-proxy-middleware");

const DEV_GATEWAY = 'http://localhost:8081/';

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: DEV_GATEWAY,
      changeOrigin: true,
    })
  );
};
