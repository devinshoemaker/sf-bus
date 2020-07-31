describe('sf-bus', () => {
  beforeEach(() => cy.visit('/'));

  it('should load Google Maps correctly', () => {
    cy.findByText(`This page can't load Google Maps correctly.`).should(
      'not.exist'
    );
  });

  it(`should redirect 404's to /`, () => {
    cy.visit('/does/not/exist');
    cy.url().should('equal', 'http://localhost:4200/');
  });
});
