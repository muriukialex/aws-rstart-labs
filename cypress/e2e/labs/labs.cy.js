/// <reference types="cypress" />

import { faker } from "@faker-js/faker"

describe("User Labs", () => {
  beforeEach(() => {
    cy.setCookie("next-auth.session-token", faker.string.uuid())
    cy.setCookie("next-auth.callback-url", "/home")
    cy.setCookie("next-auth.csrf-token", faker.string.uuid())

    cy.visit("/home")
  })

  it("can successfully track a lab", () => {
    cy.intercept("POST", "/labs", {
      statusCode: 201,
      body: { message: "Lab successfully created" },
    }).as("successfullyTrackedLab")

    cy.get('[data-test="lab-checkbox-1"]').first().check()
    cy.wait("@successfullyTrackedLab")
    cy.contains("Lab tracked successfully").should("exist")
  })

  it("can successfully update a lab status", () => {
    const updatedLab = {
      _id: faker.string.uuid(),
      email: faker.internet.email(),
      name: "11-[CF]-Lab - Introduction to Amazon EC2",
      completed: false,
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
      __v: 0,
    }

    cy.intercept("PUT", "/labs", {
      statusCode: 201,
      body: { message: "Lab successfully updated", lab: updatedLab },
    }).as("successfullyUpdatedLabStatus")

    cy.get('[data-test="lab-checkbox-1"]').first().check()
    cy.wait("@successfullyUpdatedLabStatus")
    cy.contains("Lab status updated successfully").should("exist")
  })

  it("can show an error if lab tracking is unsuccessful", () => {
    cy.intercept("POST", "/labs", {
      statusCode: 500,
      body: "Internal Server Error",
    }).as("failedLabTracking")

    cy.get('[data-test="lab-checkbox-1"]').first().check()

    cy.wait("@failedLabTracking")
    cy.contains("Error occurred tracking this lab").should("exist")
  })

  it("can show an error if lab status update is unsuccessful", () => {
    cy.intercept("PUT", "/labs/*", {
      statusCode: 500,
      body: "Internal Server Error",
    }).as("failedLabStatusUpdate")

    cy.get('[data-test="lab-checkbox-1"]').first().check()

    cy.wait("@failedLabStatusUpdate")
    cy.contains("An error occurred updating this lab").should("exist")
  })
})
