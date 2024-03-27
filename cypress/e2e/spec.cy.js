describe(`My First Test`, () => {
  it(`Gets, types and asserts`, () => {
    cy.visit(`./index.html`)


    cy.get(`#username`).type(`Ann`)

    cy.get(`#start-game-button`).click()
    cy.get(`#user-selection`).select(`Paper`)
    cy.get(`#go-button`).click()


    cy.get(`#game-history`).contains(`Ann`)
  })
})