import { createProxyMiddleware } from 'http-proxy-middleware';

const API_PROXY_TARGET = 'http://localhost:3002/'; // Replace YOUR_EXPRESS_APP_PORT with your Express app's port

const apiProxy = createProxyMiddleware('/', {
  target: API_PROXY_TARGET,
  changeOrigin: true,
});

export default function setupProxy(app: any) {
  app.use(apiProxy);
}
