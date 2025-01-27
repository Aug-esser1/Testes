describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app/#')


  });
  it('Cadastrar entrada', () => {
  
  //clicar em nova transação
  cy.get('#transaction > .button').click();

  //nova entrada
  cy.get('#description').type('Freela')
  cy.get('#amount').type(100)
  cy.get('#date').type('2024-09-10') //yyyy-mm-dd

  cy.get('button').click()

  cy.get('.description').should('have.text', 'Freela')
  })


  it.skip('Cadastrar saida', () => {
    criarTransacao('cinema', '-40')
    cy.get('.description').should('have.text', 'cinema')

  });


})

function criarTransacao(descricao, valor){
  cy.get('#transaction > .button').click();
  cy.get('#description').type(descricao)
  cy.get('#amount').type(valor)
  cy.get('#date').type('2024-09-10')
  cy.get('button').click()
}