describe('node app', () => {
    it('should visit a site', () => {

        cy.visit('http://localhost:3000/')
    })

    it('button', () => {
        cy.get('#btn-somewhere').should('have.text', 'Go somewhere')
    })

})