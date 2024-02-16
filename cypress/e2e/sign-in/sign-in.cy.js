/// <reference types="cypress" />

describe("Sign In", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it.only("can successfully sign in user via Google", () => {
    cy.stubLogin()
    cy.intercept("GET", "/api/labs?**", { fixture: "empty-user-labs" })
    cy.get("[data-test=aws-rstart-title]").should("be.visible")

    cy.get('[data-test="lab-checkbox-1"]').should("exist")
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
