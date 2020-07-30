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

// 测试点击交互
describe('交互测试', () => {
  it('clicks the button!', () => {
    // cy.contains('.log', 'Hello, world.')
    cy.contains('click me!')
      .as('myButton')
      .click()
    cy.contains('.log', 'Hello, world.')
    cy.get('@myButton').should('have.class', 'is-fetching')
  })
})

// 向 class 为 '.c-input' 的 input 元素输入 `input something...`
describe('输入测试', () => {
  it('input something...', () => {
    cy.pause()
    cy.get('.c-input')
      .as('myInput')
      .type('input something...')
      .blur()

    // const $el = cy
    //   .get('#main-content')
    //   .find('.article')
    //   .children('img[src^="/static"]')
    //   .first()

    // if ($el) {
    //   // do something...
    // }

    cy.get('.c-input').then($el => {
      console.table($el)
    })

    cy.get('@myInput').type('input anything...')
  })
})
