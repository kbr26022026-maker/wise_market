import { createServer } from 'vite'

const server = await createServer({
  configFile: '/Users/nikitasentyurin/VScode/w_market/vue-app/vite.config.js',
  root: '/Users/nikitasentyurin/VScode/w_market/vue-app',
  server: { port: 3000, host: true, strictPort: true }
})
await server.listen()
server.printUrls()
