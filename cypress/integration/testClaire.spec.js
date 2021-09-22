describe('test de Claire', () => {
    it('Visit our page', () => {
        cy.visit('http://localhost:3000/')
    })

    it('Buttons have style', () => {
        // Check if the buttons have the correct style
        cy.get('.btn-primary').should('have.css', 'background-color', 'rgb(13, 110, 253)')
    })

})