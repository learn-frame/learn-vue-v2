describe('查找页面是否存在某个 HTML 标签', () => {
  it('Check H1 tag', () => {
    cy.visit('/e2e')
    cy.contains('h1', 'Learn E2E')
    cy.contains('E2E')
  })
})

describe('断言测试', () => {
  it('url 是否包含 `e2e`', () => {
    cy.url().should('include', 'e2e')
  })
})

describe('交互测试', () => {
  it('clicks the button!', () => {
    // cy.contains('p', 'Hello, world.')
    cy.contains('click me!').click()
    cy.contains('p', 'Hello, world.')
  })
})
