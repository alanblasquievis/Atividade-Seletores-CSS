describe('template spec', () => {
  it('Deve clicar no botão tenha polo no site da faculdade', () => {
    cy.visit('https://guairaca.jacad.com.br/academico/aluno-v2/login');
     cy.get('input[name="login.login"]')
      .click()
      .type('');
      cy.get('input[name="login.password"]')
      .click()
      .type('');
      cy.get('#btn-login').click();
  })
})
