/// <reference types="cypress" />

context('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('contains Hello', () => {
    cy.contains('Hello')
  })
})
