describe('template spec', () => {
  it('Deve clicar no botão tenha polo no site da faculdade', () => {
    cy.visit('https://guairaca.jacad.com.br/academico/aluno-v2/login');
     cy.get('input[name="login.login"]')
      .click()
      .type('11032124946');
      cy.get('input[name="login.password"]')
      .click()
      .type('Blask10alan');
      cy.get('#btn-login').click();
  })
})