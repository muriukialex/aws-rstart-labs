/// <reference types="cypress" />

describe("Sign In", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("can successfully sign in user via Google", () => {
    cy.get("[data-test=sign-in-with-google]")
      .should("exist")
      .should("contain.text", "Sign in with Google")
      .click()

    cy.get("[data-test=sign-in-with-google]")
      .should("be.disabled")
      .should("contain.text", "Signing in...")
  })

  it("should handle failed Google sign-in", () => {
    cy.intercept("GET", "/api/auth/providers", {
      statusCode: 500,
      body: "Internal Server Error",
    })

    cy.get('[data-test="sign-in-with-google"]').click()

    cy.contains("Error")
  })
})
