describe("As a user I should be able to access the home page",() => {
    beforeEach(() => {

        cy.visit("https://trendlifebuy.com")
        cy.xpath("(//i[@class='ti-close'])[2]", { timeout: 10000 }).should('be.visible');
        cy.xpath("(//i[@class='ti-close'])[2]").click()
       
    })

    it("The home page must be accessible when the URL is entered",() => {
        
        let expectedUrl="https://trendlifebuy.com"
        cy.url().should("include",expectedUrl) // Yields the current URL as a string
        
    })

    it("When going to the site, it should be verified that the title is Trendlifebuy Online Shopping",()=>{
        let expectedTitle="Trendlifebuy Online Shopping"
         cy.title().should("eq",expectedTitle)

    })





})