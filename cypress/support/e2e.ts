// put e2e only commands and plugins here
// better to import plugins where relevant, speeds up test warmup
// import '@testing-library/cypress/add-commands'

import "@bahmutov/cy-api"
import "cypress-map"
import "cypress-v10-preserve-cookie"
import "./commands"

//@ts-ignore
Cypress.Commands.add("stubLogin", () => {
  cy.intercept("/api/auth/session", { fixture: "auth-session.json" }).as(
    "session",
  )

  cy.setCookie(
    "next-auth.session-token",
    "a valid cookie from your browser session",
  )
  cy.visit("/home")
  cy.wait("@session")
})
