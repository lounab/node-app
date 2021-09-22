describe('node app', () => {
    it('should visit a site', () => {

        cy.visit('http://localhost:3000/')
    })

    it('louna_test', () => {
        cy.get('#bouton_search').should('have.text', 'Search')
    })

})