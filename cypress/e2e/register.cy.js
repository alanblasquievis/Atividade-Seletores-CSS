describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/cypress/e2e/projeto.html');
    // Selecionar o formulário de cadastro pelo ID e garantir que ele está visível.
    cy.get('#register-form').should('be.visible');
    // Selecionar os campos de input pela classe .input-field e garantir que há 3 inputs na página.
    cy.get('.input-field');
    // Selecionar o botão de cadastro pelo ID e verificar se o texto é "Cadastrar".
    cy.get('#register-button').should('have.text', 'Cadastrar');
    // Selecionar o link "Já tem uma conta? Faça login" pelo atributo class.
    cy.get('.login-link');
    // Selecionar o campo de nome pelo atributo type="text" e digitar um nome fictício.
    cy.get('input[type="text"]').type('Alan de Lara');
    // Selecionar o campo de e-mail pelo atributo type="email" e digitar um e-mail fictício.
    cy.get('input[type="email"]').type('alan123@gmail.com');
    // Selecionar o campo de senha pelo atributo type="password" e digitar uma senha fictícia.
    cy.get('input[type="password"]').type('123456');
    // Clicar no botão de cadastro utilizando um seletor CSS.
    cy.get('#register-button').click();
  });
})