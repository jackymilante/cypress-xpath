import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"


Given('I access to {string} page', (portal) => {
  cy.visit(`${portal}`);
})

And('Banner title is displayed correctly', () => {
  cy.xpath('//div[@class="newsroom-bnr-inr"]//h1')
  .should('have.css', 'font-size', '48px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Content paragraphs are displayed correctly', () => {
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

})

And('Content images are displayed correctly', () => {
  cy.get('.site-content img').each(($el, index, $list) => {
    const name = $el.attr('name');
    const src = $el.attr('src');

    expect($el[0].naturalWidth).to.not.equal(0, `Error at image ${src}`);
  });
})

And('Posted in tags are displayed correctly', () => {
  cy.xpath('//section[@class="newsroom-middile-scn"]//div[@class="newsroom-item-inner"]//span[text()="Posted in:"]')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '18px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

  cy.xpath('//div[@class="newsroom-item-inner"][.//span[.="Posted in:"]]//a')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '16px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'color', 'rgb(77, 77, 79)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });
})

And('Recent news items are displayed correctly', () => {
  
  cy.xpath('//section[@class="newsroom-middile-scn"]//div[@class="newsroom-mdl-item-inner"]//span[text()="Recent news"]')
  .each((element) => {
    cy.wrap(element)
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
  });
  
  cy.xpath('//div[@class="newsroom-mdl-item"][.//span[.="Recent news"]]//a')
  .each((element) => {
    cy.wrap(element)
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'color', 'rgb(77, 77, 79)')
      .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
  });

})

And('State filter list are displayed correctly', () => {
  cy.xpath('//div[@class="filter-list"]//ul[@class="state-list"]/li')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '20px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'color', 'rgb(47, 29, 44)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });
})

And('Hero image is displayed correctly', () => {
  cy.xpath('//section[@class="newsroom-bnr-scn"]//*[@clip-path="url(#blob)"]')
  .should(function($img) {
});
})

And('Subscribe to Mable news is displayed correctly', () => {
  cy.xpath('//section[@class="newsroom-middile-scn"]//div[@class="newsroom-mdl-item-inner"]//span[text()="Subscribe to Mable news"]')
  .should('be.visible')
  .and('have.css', 'font-size', '18px')
  .and('have.css', 'font-weight', '400')
  .and('have.css', 'color', 'rgb(0, 0, 0)')
  .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

  cy.xpath('//section[@class="newsroom-middile-scn"]//div[@class="newsroom-mdl-item-inner"]//p')
  .should('be.visible')
  .and('have.css', 'font-size', '14px')
  .and('have.css', 'font-weight', '400')
  .and('have.css', 'color', 'rgb(77, 77, 79)')
  .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

  cy.xpath('//section[@class="newsroom-middile-scn"]//div[@class="newsroom-mdl-item-inner"]//a[text()="Subscribe"]')
  .should('be.visible')
  .and('have.css', 'font-size', '21px')
  .and('have.css', 'font-weight', '400')
  .and('have.css', 'color', 'rgb(255, 255, 255)')
  .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
});

And('Header menu is displayed correctly', () => {
  
  //Trustpilot
  cy.xpath('//div[@id="header_top_bar-2"]//div[@class="rated-prt"]')
  .should('be.visible')

  //Trust and Safety
  cy.xpath('//div[@class="hdr-top-links"]//a[text()="Trust and Safety"]')
  .should('be.visible')

  //Contact
  cy.xpath('//div[@class="hdr-top-links"]//a[text()="Contact"]')
  .should('be.visible')

  //Mable logo
  cy.xpath('//section[@class="hdr-logo-nav-prt"]//div[@class="hdr-logo"]//img[@data-src="https://mablestaging.wpenginepowered.com/wp-content/uploads/2020/10/mable-logo-white.svg"]')
  .should('be.visible')
});

And('Navigation menus are displayed correctly', () => {
  cy.xpath('//div[@class="menu-menu-header-container"]//ul[@id="menu-menu-header"]//a[text()="How it works"]')
  .should('be.visible')

  cy.xpath('//div[@class="menu-menu-header-container"]//ul[@id="menu-menu-header"]//a[text()="Explore"]')
  .should('be.visible')

  cy.xpath('//div[@class="menu-menu-header-container"]//ul[@id="menu-menu-header"]//a[text()="Pricing"]')
  .should('be.visible')

  cy.xpath('//div[@class="menu-menu-header-container"]//ul[@id="menu-menu-header"]//a[text()="Help"]')
  .should('be.visible')

});
  
And('Navigation sub-menus are displayed correctly', () => {
 
  function verifyElementVisible(selector) {
    cy.xpath(selector).should('be.visible');
  }
  
  //How it works
  cy.xpath('//div[@class="menu-menu-header-container"]//ul[@id="menu-menu-header"]//a[text()="How it works"]')
    .click();
  
  const subnavList1 = [  'Support Workers',  'NDIS & Disability Support',  'Aged Care & Home Care Packages',  'Self-managing your Home Care Package',  'NDIS Support Coordinators',  'Aged Care Managers',  'Find support workers by location',  'Provide support'];
  
  subnavList1.forEach((text) => {
    verifyElementVisible(`//div[@class="menu-menu-header-container"]//ul[@class="subnav-list"]//a[text()="${text}"]`);
  });
  
  //Explore
  cy.xpath('//div[@class="menu-menu-header-container"]//ul[@id="menu-menu-header"]//a[text()="Explore"]')
    .click();
  
  const subnavList2 = [  'About Mable',  'Safeguards',  'Testimonials',  'Mable Community Grants',  'Newsroom',  'Events',  'Download the Mable App',  'Browse our Topic Libraries'];
  
  subnavList2.forEach((text) => {
    verifyElementVisible(`//div[@class="menu-menu-header-container"]//ul[@class="subnav-list"]//a[text()="${text}"]`);
  });
  
  //Help
  cy.xpath('//div[@class="menu-menu-header-container"]//ul[@id="menu-menu-header"]//a[text()="Help"]')
  .click();

  const subnavList3 = [  'FAQs',  'Feedback',  'Support Guides',  'COVID-19 Key Information',  'Help Centre',  'Incidents',  'Contact Us'];

  subnavList3.forEach((text) => {
    verifyElementVisible(`//div[@class="menu-menu-header-container"]//ul[@class="subnav-list"]//a[text()="${text}"]`);


});

cy.xpath('//div[@class="menu-menu-header-container"]//ul[@id="menu-menu-header"]//a[text()="Help"]')
.click();
   
  });


And('Social media icons are displayed correctly', () => {

    // Assert if LinkedIn icon is displayed
cy.get('.share-icons > .share-linkedin').should('be.visible');

// Assert if Facebook icon is displayed
cy.get('.share-icons > .share-facebook').should('be.visible');

// Assert if Twitter icon is displayed
cy.get('.share-icons > .share-twitter').should('be.visible');

// Assert if Print icon is displayed
cy.get('.share-icons > .share-print').should('be.visible');
  
  });

  And('Date format is displayed correctly', () => {

// Assert that at least one element with class "date" exists
cy.get('//div[@class="date"]').should('exist');

// Assert that all elements with class "date" have a valid date format
cy.get('//div[@class="date"]').each(($el) => {
  const dateStr = $el.text().trim();
  expect(dateStr).to.match(/^\d{1,2}\s\w+\s\d{4}$/);
  
  cy.get('div.date').should('have.css', 'color', 'rgb(0, 0, 0)');

  });

  cy.get('div.event-item-cont').each(($el, index, $list) => {
    cy.wrap($el).find('h3').should('be.visible'); // assertion for event title
    cy.wrap($el).find('div.date').should('be.visible'); // assertion for event date
    cy.wrap($el).find('div.venue').should('be.visible'); // assertion for event venue
    cy.wrap($el).find('div.time').should('be.visible'); // assertion for event time
    cy.wrap($el).find('a.button').should('be.visible'); // assertion for event registration button
  });

  
});

And('Event items are displayed correctly', () => {
 
    // Verify that there are multiple event items on the page
    cy.get('div.event-item-cont').should('have.length.greaterThan', 0)

    // Loop through each event item and verify its details
    cy.get('div.event-data').each(($eventData) => {
      // Verify that the event data section contains an image
      cy.wrap($eventData).find('img').should('be.visible')

      // Verify that the event data section contains the event title
      cy.wrap($eventData).find('h2.event-title').should('be.visible')

      // Verify that the event data section contains the event date
      cy.wrap($eventData).find('div.date').should('be.visible')

      // Verify that the event data section contains the event time
      cy.wrap($eventData).find('div.time').should('be.visible')

      // Verify that the event data section contains the event venue
      cy.wrap($eventData).find('div.venue').should('be.visible')

      // Verify that the event data section contains the event description
      cy.wrap($eventData).find('div.event-description').should('be.visible')
    })
    cy.get('button.load-more').should('be.visible')

    // Verify that the font size of the "Load More" button is 16 pixels
    cy.get('button.load-more').should('have.css', 'font-size', '16px')

    // Verify that the background color of the "Load More" button is #F04E23
    cy.get('button.load-more').should('have.css', 'background-color', 'rgb(240, 78, 35)')

    // Verify that the font color of the "Load More" button is #FFFFFF (white)
    cy.get('button.load-more').should('have.css', 'color', 'rgb(255, 255, 255)')


  })

  And('Footer sub-menus are displayed correctly', () => {
 
    function verifyElementVisible(selector) {
      cy.xpath(selector).should('be.visible');
    }
    
    //How it works
    const subnavList1 = [ 'Support Workers', 'NDIS & Disability Support',  'Home Care Package', 'Self-managing your Home Care Package', 'Aged Care', 'NDIS Support Coordinators', 'Aged Care Managers', 'Provide support', 'Code of Conduct', 'Find support workers by location'     ];
    
    subnavList1.forEach((text) => {
      verifyElementVisible(`//footer[@id='colophon']//div[@class='ftr-top-scn']//div[@class='ftr-top-item']//a[text()="${text}"]`);
    });
    
     
    });
 


//Location pages V1

And('Banner title is displayed correctly in location page', () => {
  cy.xpath('//div[@id="content"]//h1')
  .should('have.css', 'font-size', '56px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(47, 29, 44)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Start Now button is displayed correctly in location page', () => {
  cy.xpath('//div[@id="content"]//div[@class="location-image"]//a[text()="Start Now"]')
  .should('have.css', 'font-size', '18px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(255, 255, 255)')
  .should('have.css', 'background-color', 'rgb(223, 114, 12)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Search results is displayed correctly in location page', () => {
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__title"]//h2[@class="search-results__title-heading"]')
  .should('have.css', 'font-size', '24px')
  .should('have.css', 'font-weight', '600')
  .should('have.css', 'color', 'rgb(47, 29, 44)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Search result details is displayed correctly in location page', () => {
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__title"]//h2[@class="search-results__title-heading"]//small')
  .should('have.css', 'font-size', '16px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(77, 77, 79)')
  .should('have.css', 'font-family', '"Sofia Pro"');
})

And('Support workers are displayed correctly in location page', () => {
  
  //Image
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__img"]')
    .each((element) => {
      cy.wrap(element)
        .should('be.visible');
    });
  
  //Name text
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__text"]//h2')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '24px')
        .and('have.css', 'font-weight', '600')
        .and('have.css', 'color', 'rgb(85, 55, 86)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });
  
  //Type text
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__text"]//div[@class="search-results__text-type"]')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'font-weight', '500')
        .and('have.css', 'color', 'rgb(148, 148, 152)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

  //Distance
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__text"]//div[@class="search-results__text-dist"]')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '13px')
        .and('have.css', 'font-weight', '500')
        .and('have.css', 'color', 'rgb(148, 148, 152)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

    //Show more
    cy.xpath('//div[@class="container"]//div[@class="btn-center if-results open"]//a[text()="Show more"]')
    .should('have.css', 'font-size', '18px')
    .should('have.css', 'font-weight', '400')
    .should('have.css', 'color', 'rgb(255, 255, 255)')
    .should('have.css', 'background-color', 'rgb(223, 114, 12)')
    .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    

})

And('How people are using Mable are displayed correctly in location page', () => {
  
  //Title
  cy.xpath('//div[@class="container"]//div[@class="people-using__title section-title"]//h2[text()="How people are using Mable"]')
  .should('have.css', 'font-size', '46px')
  .should('have.css', 'font-weight', '600')
  .should('have.css', 'color', 'rgb(47, 29, 44)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');


  //Description
  cy.xpath('//div[@class="container"]//div[@class="people-using__title section-title"]//p')
  .should('have.css', 'font-size', '18px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(77, 77, 79)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

//Tile Title
cy.xpath('//div[@class="container"]//div[@class="people-using__item-title"]//h3')
.should('have.css', 'font-size', '20px')
.should('have.css', 'font-weight', '600')
.should('have.css', 'color', 'rgb(47, 29, 44)')
.should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

    //Get Started
    cy.xpath('//div[@class="container"]//div[@class="btn-center"]//a[text()="Get Started"]')
    .should('have.css', 'font-size', '18px')
    .should('have.css', 'font-weight', '400')
    .should('have.css', 'color', 'rgb(255, 255, 255)')
    .should('have.css', 'background-color', 'rgb(223, 114, 12)')
    .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
 
});

And('How it works page is displayed correctly in location page', () => {
  
  //Title
  cy.xpath('//div[@class="how-it-works wrap"]//div[@class="row section-title"]//h2[text()="How it works"]')
  .should('have.css', 'font-size', '46px')
  .should('have.css', 'font-weight', '600')
  .should('have.css', 'color', 'rgb(47, 29, 44)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');


  //Description
  cy.xpath('//div[@class="how-it-works wrap"]//div[@class="row section-title"]//p')
  .should('have.css', 'font-size', '18px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(77, 77, 79)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

  //Tile Title
cy.xpath('//div[@class="how-it-works wrap"]//div[@class="how-it-works__item"]//h3')
.should('have.css', 'font-size', '24px')
.should('have.css', 'font-weight', '600')
.should('have.css', 'color', 'rgb(223, 114, 12)')
.should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

  //Tile Description
  cy.xpath('//div[@class="how-it-works wrap"]//div[@class="how-it-works__item"]//p')
  .should('have.css', 'font-size', '16px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(77, 77, 79)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

    //Start Now
    cy.xpath('//div[@class="how-it-works wrap"]//a[text()="Start Now"]')
    .should('have.css', 'font-size', '18px')
    .should('have.css', 'font-weight', '400')
    .should('have.css', 'color', 'rgb(255, 255, 255)')
    .should('have.css', 'background-color', 'rgb(47, 29, 44)')
    .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

 
});

And('FAQ section is displayed correctly in location page', () => {
  
  //Title
  cy.xpath('//div[contains(@class, "faq-section")]//h2')
  .should('have.css', 'font-size', '46px')
  .should('have.css', 'font-weight', '600')
  .should('have.css', 'color', 'rgb(47, 29, 44)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');


cy.xpath('//div[contains(@class, "faq-section")]//div[@class="faq-list"]//div[contains(@class, "faq-list__item")]//a[contains(@class,"faq-list__title")]')
.each((element) => {
  cy.wrap(element)
    .should('have.css', 'font-size', '20px')
    .and('have.css', 'font-weight', '600')
    .and('have.css', 'color', 'rgb(77, 77, 79)')
    .and('have.css', 'font-family', '"Sofia Pro Semi", sans-serif')
    .click;
  });
});

And('Our happy members section is displayed correctly', () => {
  
  const tabStyles = {
    'font-size': '20px',
    'font-weight': '600',
    'font-family': '"Sofia Pro Semi", sans-serif'
  };

  // Tab - All members
  cy.xpath('//div[contains(@class,"clients-list")]//ul[@class="clients-list__nav"]//li//a[contains(.,"All members")]')
    .scrollIntoView()
    .should('have.css', tabStyles);

  // Tab - Aged care
  cy.xpath('//div[contains(@class,"clients-list")]//ul[@class="clients-list__nav"]//li//a[contains(.,"Aged care")]')
    .scrollIntoView()  
    .should('have.css', tabStyles);

  // Tab - Disability
  cy.xpath('//div[contains(@class,"clients-list")]//ul[@class="clients-list__nav"]//li//a[contains(.,"Disability")]')
    .should('have.css', tabStyles);

});


//Location pages V2
And('Sign up now button is displayed correctly in location page', () => {
  cy.xpath('//div[@id="content"]//div[@class="content-banner"]//a[text()="Sign up now"]')
  .should('have.css', 'font-size', '18px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(255, 255, 255)')
  .should('have.css', 'background-color', 'rgb(223, 114, 12)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Banner description is displayed correctly in location page', () => {
  cy.xpath('//div[@id="content"]//div[@class="content-banner"]//p')
  .should('have.css', 'font-size', '16px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(77, 77, 79)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Support workers are displayed correctly in location page', () => {
  
  //Image
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__img"]')
    .each((element) => {
      cy.wrap(element)
        .should('be.visible');
    });
  
  //Name text
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__text"]//h2')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '24px')
        .and('have.css', 'font-weight', '600')
        .and('have.css', 'color', 'rgb(85, 55, 86)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });
  
  //Type text
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__text"]//div[@class="search-results__text-type"]')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'font-weight', '500')
        .and('have.css', 'color', 'rgb(148, 148, 152)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

  //Distance
  cy.xpath('//section[@class="search-results__list"]//div[@class="search-results__text"]//div[@class="search-results__text-dist"]')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '13px')
        .and('have.css', 'font-weight', '500')
        .and('have.css', 'color', 'rgb(148, 148, 152)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

    //Show more
    cy.xpath('//div[@class="container"]//div[@class="btn-center if-results open"]//a[text()="Show more"]')
    .should('have.css', 'font-size', '18px')
    .should('have.css', 'font-weight', '400')
    .should('have.css', 'color', 'rgb(255, 255, 255)')
    .should('have.css', 'background-color', 'rgb(223, 114, 12)')
    .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    

})

And('Browse area header is displayed correctly in location page', () => {
  cy.xpath('//div[@id="content"]//div[@class="row px-1"]//div[@class="wprt-container"]//h2')
  .should('have.css', 'font-size', '40px')
  .should('have.css', 'font-weight', '600')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Browse area description is displayed correctly in location page', () => {
  
  //Type text
  cy.get('#content .row.px-1 .wprt-container p').each(($el, index) => {
    const fontSize = $el.css('font-size');
    const fontColor = $el.css('color');
    const fontFamily = $el.css('font-family');
    const fontWeight = $el.css('font-weight');
    const fontTxt = $el.text();

    if (index === 0) {
      expect(fontSize).to.equal('20px');
      expect(fontWeight).to.equal('500');
    } else {
      expect(fontSize).to.equal('16px');
    }

    expect(fontColor).to.equal('rgb(77, 77, 79)');
    expect(fontFamily).to.equal('"Sofia Pro", Arial, sans-serif');
  });
})

And('Browse area description list of links are displayed correctly in location page', () => {
  
  cy.xpath('//div[@id="content"]//div[@class="row px-1"]//div[@class="wprt-container"]/ul//li')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '16px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'color', 'rgb(77, 77, 79)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });
})

And('Join Mable section is displayed correctly in location page', () => {
  
  //Header
  cy.xpath('//div[@id="content"]//div[@class="row px-1"]//div[@class="wprt-container"]//h3')
  .should('have.css', 'font-size', '24px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(77, 77, 79)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
 
 //Header list
  cy.xpath('//div[@id="content"]//div[@class="row px-1"]//div[@class="wprt-container"]/ul//li')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '16px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'color', 'rgb(77, 77, 79)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

    // List descriptions
    cy.xpath('//div[@id="content"]//div[@class="row px-1"]//div[@class="wprt-container"]//ul[@class="stars-list"]//li//p[2]')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '16px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'color', 'rgb(77, 77, 79)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

//button
  cy.xpath('//div[@id="content"]//div[@class="row px-1"]//div[@class="wprt-container"]//a[text()="Sign up"]')
  .should('have.css', 'font-size', '18px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(255, 255, 255)')
  .should('have.css', 'background-color', 'rgb(223, 114, 12)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');





})

And('Support workers section header is displayed correctly in location page', () => {
  cy.xpath('//div[@id="content"]//div[@class="wrap why-mable-box"]//h3')
  .should('have.css', 'font-size', '36px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(47, 29, 44)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})


And('When you need us section is displayed correctly', () => {

  //header
  cy.xpath('//div[@id="content"]//div[@class="wrap why-mable-box"]//h3')
  .should('have.css', 'font-size', '36px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(47, 29, 44)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

//Provide support page
And('Banner title is displayed correctly in provide support page', () => {
  cy.xpath('//div[@class="why-mable-container"]//h1')
  .should('have.css', 'font-size', '56px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Banner description is displayed correctly in provide support page', () => {
  cy.xpath('//div[@id="content"]//div[@class="content-banner"]//p')
  .should('have.css', 'font-size', '20px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Sign up now button is displayed correctly in provide support page', () => {
  cy.xpath('//div[@id="content"]//div[@class="content-banner"]//a[text()="Sign up now"]')
  .should('have.css', 'font-size', '19px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(255, 255, 255)')
  .should('have.css', 'background-color', 'rgb(132, 80, 134)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Why Mable section is displayed correctly in provide support page', () => {
  
  //Header
  cy.xpath('//div[@class="why-mable-container"]//h2[text()="Why Mable?"]')
  .should('have.css', 'font-size', '36px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
 
 //Header list
  cy.xpath('//div[@class="why-mable-full-col-block"]//h4')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '26px')
        .and('have.css', 'font-weight', '700')
        .and('have.css', 'color', 'rgb(61, 44, 62)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

    // List descriptions
    cy.xpath('//div[@class="why-mable-full-col-block"]//p')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '16px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'color', 'rgb(61, 44, 62)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

})


And('Benefits you get from booking clients on Mable section is displayed correctly in provide support page', () => {
  
  //header
  cy.xpath('//div[@id="benefits-you"]//h2')
  .should('have.css', 'font-size', '36px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');


   // List descriptions
   cy.xpath('//div[@class="benifits-section-rgt"]//li')
   .each((element) => {
     cy.wrap(element)
       .should('have.css', 'font-size', '16px')
       .and('have.css', 'font-weight', '500')
       .and('have.css', 'color', 'rgb(61, 44, 62)')
       .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
   });


})

And('Boost your earnings section is displayed correctly in provide support page', () => {
  
  //header
  cy.xpath('//div[@class="boost-your-earnings-rgt"]//h2')
  .should('have.css', 'font-size', '36px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');


   // Header list
   cy.xpath('//div[@class="boost-your-earnings-rgt"]//div[@class="boost-your-col"]//h4')
   .each((element) => {
     cy.wrap(element)
       .should('have.css', 'font-size', '26px')
       .and('have.css', 'font-weight', '700')
       .and('have.css', 'color', 'rgb(61, 44, 62)')
       .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
   });

    // List description
    cy.xpath('//div[@class="boost-your-earnings-rgt"]//div[@class="boost-your-col"]//p')
    .each((element) => {
      cy.wrap(element)
        .should('have.css', 'font-size', '16px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'color', 'rgb(61, 44, 62)')
        .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
    });

//You can learn more on our   pricing page.
cy.xpath('//div[@class="boost-your-faq"]//h4')
.should('have.css', 'font-size', '16px')
.should('have.css', 'font-weight', '400')
.should('have.css', 'color', 'rgb(61, 44, 62)')
.should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');



    

})

And('Payments FAQs section is displayed correctly in provide support page', () => {
  
  //header
  cy.xpath('//div[@class="payment-faq"]//h5')
  .should('have.css', 'font-size', '20px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');


   // Header list
   cy.xpath('//div[@class="payment-faq"]//div[@class="faq-list"]')
   .each((element) => {
     cy.wrap(element)
       .should('have.css', 'font-size', '16px')
       .and('have.css', 'font-weight', '400')
       .and('have.css', 'color', 'rgb(77, 77, 79)')
       .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
   });
    

})

And('Service you can offer section is displayed correctly in provide support page', () => {
  
  //header
  cy.xpath('//div[@class="service-you-offer-rgt"]//h2')
  .should('have.css', 'font-size', '36px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

  //description
  cy.xpath('//div[@class="service-you-offer-rgt"]/p')
  .should('have.css', 'font-size', '20px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');


   // Header list
   cy.xpath('//div[@class="services-offer-list"]//div[@class="service-offer-col"]//span[@class="service-offer-name"]')
   .each((element) => {
     cy.wrap(element)
       .should('have.css', 'font-size', '17px')
       .and('have.css', 'font-weight', '700')
       .and('have.css', 'color', 'rgb(61, 44, 62)')
       .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
   });
    

})

And('How to sign up to Mable section is displayed correctly in provide support page', () => {
  
  //header
  cy.xpath('//div[@class="how-to-signup"]//h2')
  .should('have.css', 'font-size', '36px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');

  //description
  cy.xpath('//div[@class="how-to-signup"]//div[@class="provide-support-heading"]//p')
  .should('have.css', 'font-size', '20px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(61, 44, 62)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');


   // Header list
   cy.xpath('//div[@class="how-to-signup"]//h4')
   .each((element) => {
     cy.wrap(element)
       .should('have.css', 'font-size', '26px')
       .and('have.css', 'font-weight', '700')
       .and('have.css', 'color', 'rgb(61, 44, 62)')
       .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
   });
    
 // list description
 cy.xpath('//div[@class="sign-step-box-cont"]//p[1]')
 .each((element) => {
   cy.wrap(element)
     .should('have.css', 'font-size', '16px')
     .and('have.css', 'font-weight', '400')
     .and('have.css', 'color', 'rgb(61, 44, 62)')
     .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
 });

  // set up your account list description
  cy.xpath('//div[@class="sign-step-box-cont"]//div[@class="signup-step-check"]//li')
  .each((element) => {
    cy.wrap(element)
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'color', 'rgb(77, 77, 79)')
      .and('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
  });




})


//Support workers page
And('Banner title is displayed in support worker page', () => {
  cy.xpath('//div[contains(@class,"home-banner-top__form")]//h1')
  .should('have.css', 'font-size', '53px')
  .should('have.css', 'font-weight', '700')
  .should('have.css', 'color', 'rgb(255, 255, 255)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})

And('Find a support worker button is displayed correctly in support worker page', () => {
  cy.xpath('//div[contains(@class,"home-banner-top__form")]//a[text()="Find A Support Worker"]')
  .should('have.css', 'font-size', '18px')
  .should('have.css', 'font-weight', '400')
  .should('have.css', 'color', 'rgb(255, 255, 255)')
  .should('have.css', 'background-color', 'rgb(223, 114, 12)')
  .should('have.css', 'font-family', '"Sofia Pro", Arial, sans-serif');
})


