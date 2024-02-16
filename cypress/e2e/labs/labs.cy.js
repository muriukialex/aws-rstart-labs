/// <reference types="cypress" />

import { faker } from "@faker-js/faker"

describe("User Labs", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.stubLogin()
  })

  it("can successfully track user's lab", () => {
    cy.intercept("GET", "/api/labs?**", { fixture: "empty-user-labs" })
    cy.intercept("POST", "/api/labs", {
      statusCode: 201,
      body: { message: "Lab tracked successfully" },
    })

    cy.get('[data-test="lab-checkbox-1"]').first().check()
    cy.contains("Lab tracked successfully").should("exist")
  })

  it("can show error message if lab tracking is unsuccessful", () => {
    cy.intercept("GET", "/api/labs?**", { fixture: "empty-user-labs" })
    cy.intercept("POST", "/api/labs", {
      statusCode: 500,
      body: {
        message: "Error occurred tracking this lab",
      },
    })

    cy.get('[data-test="lab-checkbox-1"]').first().check()
    cy.contains("Failed to perform request, please try again.").should("exist")
  })

  it("can successfully update lab status", () => {
    const updatedLab = {
      _id: faker.string.uuid(),
      email: faker.internet.email(),
      name: "11-[CF]-Lab - Introduction to Amazon EC2",
      completed: false,
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
      __v: 0,
    }

    cy.intercept("GET", "/api/labs?**", { fixture: "user-labs" })
    cy.intercept("PUT", "/api/labs/**", {
      statusCode: 201,
      body: { message: "Lab status updated successfully", lab: updatedLab },
    })

    cy.get('[data-test="lab-checkbox-1"]').first().check()
    cy.contains("Lab status updated successfully").should("exist")
  })

  it("can show error message if lab status update is unsuccessful", () => {
    cy.intercept("GET", "/api/labs?**", { fixture: "user-labs" })
    cy.intercept("PUT", "/api/labs/**", {
      statusCode: 500,
      body: {
        message: "An error occurred updating this lab",
      },
    })

    cy.get('[data-test="lab-checkbox-1"]').first().check()
    cy.contains("Failed to perform request, please try again.").should("exist")
  })
})
