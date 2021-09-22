describe('node app', () => {
    it('should visit a site', () => {

        cy.visit('http://localhost:3000')
    })

    it('input', () => {
        cy.get('#input').should('have.text', 'Go somewhere')
    })

})