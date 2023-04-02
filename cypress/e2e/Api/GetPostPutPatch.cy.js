

describe("get request", () => {

    it("https://gorest.co.in/public/v2/users/665620",() =>{

    cy.request({
        method : "GET",
        url: "https://gorest.co.in/public/v2/users/665620",
        Headers:{
            'authorization':"Bearer f057f4dd41b1f826a534feb56c0ae6e1e7b869dd681f7ba3314a0db2104c5c96"
        }

    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.gender).to.eq("female")
        expect(res.body.status).to.eq("inactive")

    })


    })

    it("https://gorest.co.in/public/v2/users",()=>{

   cy.request({
        method : "GET",
        url: "https://gorest.co.in/public/v2/users",
        Headers:{
            'authorization':"Bearer f057f4dd41b1f826a534feb56c0ae6e1e7b869dd681f7ba3314a0db2104c5c96"
        }

    }).then((res)=>{
        //expect(res.body).to.have.lengthOf(10)
        res.body.forEach(element => {
            expect(element.id).to.be.greaterThan(600000)
        });
    })
    

   


    })




})