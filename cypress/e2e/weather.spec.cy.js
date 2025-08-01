describe('Weather App E2E', () => {
  it('Loads app and searches for a city', () => {
    cy.visit('/');
    cy.get('input[placeholder*="city"]').type('Delhi');
    cy.contains('Delhi').click();
    cy.contains(/Temperature|Clouds/).should('exist');
  });
});