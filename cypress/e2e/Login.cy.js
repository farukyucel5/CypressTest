describe("Login Tests",()=>{
  
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit("https://trendlifebuy.com")
        cy.xpath("(//i[@class='ti-close'])[2]", { timeout: 10000 }).should('be.visible');
        cy.xpath("(//i[@class='ti-close'])[2]").click()
        cy.xpath("(//a[text()='Login'])[1]").click()
        
    })

    it("Wrong credentials login test",()=>{
        cy.get("#text").type("userf@trendlifebuy.com")
        cy.get("#password").type("Trendlife123")
        cy.get("#sign_in_btn").click()
        cy.xpath("//span[text()='These credentials do not match our records.']").should('be.visible');
    })

    it("What if space is typed in email box ",()=>{
        cy.get("#text").type(" ")
        cy.get("#password").type("Trendlife123")
        cy.get("#sign_in_btn").click()
        cy.xpath("//span[text()='The username field is required.']").should('be.visible');
    })

    it("What if nothing is typed in email box ",()=>{
        cy.get("#password").type("Trendlife123")
        cy.get("#sign_in_btn").click()
        cy.xpath("//span[text()='The email or phone field is required.']").should('be.visible');
    })


})