describe('template spec', () => {

    beforeEach(() => {
      cy.visit('https://dev-finance.netlify.app/#')
  
  
    });
    it('Cadastrar saida', () => {
    
    //clicar em nova transação
    cy.get('#transaction > .button').click();
  
    //nova saida
    cy.get('#description').type('cinema')
    cy.get('#amount').type(-50)
    cy.get('#date').type('2024-09-10') //yyyy-mm-dd
  
    cy.get('button').click()
  
    cy.get('.description').should('have.text', 'cinema')
    })
});  