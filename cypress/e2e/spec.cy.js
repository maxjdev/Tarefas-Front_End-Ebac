describe('Funcionalidades Add, Remove e Edit', () => {
  beforeEach('visit', () => {
    // Visita padrão
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Adição de contatos', () => {
    // Define valor fixo para os atributos de um novo contato
    const novoContato = {
      nome: 'joao',
      email: 'joao@gmail.com',
      telefone: '99 99 99'
    }

    // Recupera o Input, escreve e clica no Submit
    cy.get('input[type="text"]').type(novoContato.nome)
    cy.get('input[type="email"]').type(novoContato.email)
    cy.get('input[type="tel"]').type(novoContato.telefone)
    cy.get('button[type="submit"]').click()

    // Verifica a adicao do contato conferindo os atributos
    cy.get('.sc-beqWaB.eQdhbg.contato')
      .contains('li', novoContato.nome)
      .should('exist')
    cy.get('.sc-beqWaB.eQdhbg.contato')
      .contains('li', novoContato.telefone)
      .should('exist')
    cy.get('.sc-beqWaB.eQdhbg.contato')
      .contains('li', novoContato.email)
      .should('exist')
  })

  it('Edicao de conato', () => {
    // Clica no Edit do primeiro contato
    cy.get('.sc-beqWaB.eQdhbg.contato .edit')
      .first()
      .click()

    // Faz um Clear no campo e atribui um valor
    cy.get('input[type="text"]')
      .clear()
      .type('joao ebac silva')

    // Faz envio da alteracao pelo Click 
    cy.get('button[type="submit"]').click()

    // Confere se tem se o contato contem o nome atribuido
    cy.get('.sc-beqWaB.eQdhbg.contato').first()
      .contains('li', 'joao ebac silva')
      .should('exist')
  })

  it('Remocao de contato', () => {
    // Verifica se o contato existe
    cy.get('.sc-beqWaB.eQdhbg.contato').first()
      .contains('li', 'joao ebac silva')
      .should('exist')
      
    // Remove o mesmo
    cy.get('.sc-beqWaB.eQdhbg.contato')
      .first()
      .find('.delete')
      .click()
  })
})