/// <reference types="Cypress" />

const links = [
    "https://mable.com.au/newsroom/mables-guide-to-events-for-older-australians-february-2023/",
  
 ];

  describe('Check content font size, weight and family', () => {
    it('should load all images without errors', () => {
        links.forEach((link) => {
            cy.visit(link);
            cy.screenshot(link);
          });
      cy.xpath('//div[@class="newsroom-bnr-inr"]//h1')
      .should('have.css', 'font-size', '48px')
      .should('have.css', 'font-weight', '700')
      .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif')
      
      })
      
}); 
  describe('Check content paragraphs', () => {
  it("should check content paragraphs", () => {
    links.forEach((link) => {
        cy.visit(link);
        cy.screenshot(link);
      });
    cy.xpath("//div[@class='wprt-container']/p").then((elements) => {
      elements.each((index, element) => {
        const fontSize = Cypress.$(element).css("font-size");
        const fontWeight = Cypress.$(element).css("font-weight");
        const fontColor = Cypress.$(element).css("color");
        const fontFamily = Cypress.$(element).css("font-family");
  
        if (index === 0) {
          expect(fontSize).to.equal("20px");
          expect(fontWeight).to.equal("700");
        } else {
          expect(fontSize).to.equal("16px");
          expect(fontWeight).to.equal("400");
        }
        expect(fontColor).to.equal("rgb(61, 44, 62)");
        expect(fontFamily).to.equal("\"Sofia Pro\", Arial, sans-serif");
      });
    });
});
});
  describe('Check content images', () => {
  it('Given all content images are working correctly', () => 
  {
    links.forEach((link) => {
        cy.visit(link);
        cy.screenshot(link);
      });
    cy.get('.site-content img').each(($el, index, $list) => {
      const name = $el.attr('name');
      const src = $el.attr('src');
  
      expect($el[0].naturalWidth).to.not.equal(0, `Error at image ${src}`);
    });
  });

 
});