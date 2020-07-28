describe('Learn E2E', () => {
  it('Check H1 tag', () => {
    cy.visit('/e2e')
    cy.contains('h1', 'Learn E2E')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
