// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('header', 'Gestion Stock')
    cy.contains('main', 'Gérer efficacement votre stock !')
    cy.contains('Voir le stock').click()
    cy.get("[title='Ajouter']").click()
  })
  it('second tests  ', () => {
    cy.visit('/')
    cy.contains('header', 'Gestion Stock')
  })
})
