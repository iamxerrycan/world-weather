describe('🌤️ Weather App - E2E Tests', () => {
  beforeEach(() => {
    cy.visit('https://weather-cities-x.netlify.app/');
    cy.wait(1000); // Wait for initial render
  });

  it('Displays initial weather data after loading', () => {
    cy.get('.spinner', { timeout: 10000 }).should('not.exist');
    cy.wait(1000);
    cy.contains(/Good (Morning|Afternoon|Evening|Night)/, { timeout: 10000 }).should('exist');
    cy.wait(1000);
    cy.contains(/°C|°F/).should('exist');
    cy.wait(1000);
    cy.contains('Kolkata').should('exist');
  });

  it('Opens modal and searches weather for a city (e.g. Delhi)', () => {
    cy.contains('Search').click();
    cy.wait(1000);
    cy.get('.modal-content input').type('Delhi');
    cy.wait(1000);
    cy.get('.modal-content button[type="submit"]').click();
    cy.wait(1000);
    cy.get('.spinner', { timeout: 10000 }).should('not.exist');
    cy.wait(1000);
    cy.contains('Delhi').should('exist');
    cy.wait(1000);
    cy.contains(/°C|°F/).should('exist');
  });

  it('Handles invalid city input gracefully', () => {
    cy.contains('Search').click();
    cy.wait(1000);
    cy.get('.modal-content input').type('FakeCity123');
    cy.wait(1000);
    cy.get('.modal-content button[type="submit"]').click();
    cy.wait(1000);
    cy.contains('City Not Found').should('exist');
  });

  it('Toggles dark mode and Fahrenheit/Celsius switch', () => {
    cy.get('button[aria-label="Toggle Dark Mode"]').click();
    cy.wait(1000);
    cy.get('button[aria-label="Toggle Temperature Unit"]').click();
    cy.wait(1000);
    cy.contains('°F').should('exist');
  });

  it('Shows detailed weather information', () => {
    cy.get('.spinner', { timeout: 10000 }).should('not.exist');
    cy.wait(1000);

    cy.get('.detailed-info').within(() => {
      cy.contains(/Feels like/i).should('exist');
      cy.wait(1000);
      cy.contains(/°C|°F/).should('exist');
    });

    cy.wait(1000);

    cy.get('.hourly-forecast').within(() => {
      cy.contains('Sunrise').should('exist');
      cy.wait(500);
      cy.contains('Sunset').should('exist');
      cy.wait(500);
      cy.contains('Wind Dir').should('exist');
      cy.wait(500);
      cy.contains('Visibility').should('exist');
      cy.wait(500);
      cy.contains('Pressure').should('exist');
      cy.wait(500);
      cy.contains('Min / Max').should('exist');
    });
  });
});
