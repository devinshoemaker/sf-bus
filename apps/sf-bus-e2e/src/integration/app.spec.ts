describe('sf-bus', () => {
  beforeEach(() => cy.visit('/'));

  it('should load Google Maps correctly', () => {
    cy.findByText(`This page can't load Google Maps correctly.`).should(
      'not.exist'
    );
  });
});
