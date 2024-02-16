import { defineConfig } from "cypress"
import jsonServer from "json-server"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on("before:run", () => {
        const server = jsonServer.create()
        const router = jsonServer.router(
          "cypress/fixtures/empty-user-labs.json",
        )
        const middlewares = jsonServer.defaults()

        server.use(middlewares)
        server.use(router)

        server.listen(3000, () => {
          console.log("JSON Server is running")
        })
      })
    },
  },
})
