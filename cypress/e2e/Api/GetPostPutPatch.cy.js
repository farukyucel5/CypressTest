const { should, expect } = require('chai');

// Enable the `should` interface in the test file
should();

describe("get request", () => {

    it("https://gorest.co.in/public/v2/users/x",() =>{

       cy.request({
        method : "GET",
        url: "https://gorest.co.in/public/v2/users/668611",
        Headers:{
            'authorization':"Bearer f057f4dd41b1f826a534feb56c0ae6e1e7b869dd681f7ba3314a0db2104c5c96"
        }

       }).then((res)=>{
           expect(res.status).to.eq(200)
           expect(res.body.gender).to.eq("male")
           expect(res.body.status).to.eq("inactive")

    })


    })

    it("https://gorest.co.in/public/v2/users",()=>{
        let expectedBody={
            "id":668611,
            "name": "Ganaka Khatri",
            "email":"khatri_ganaka@hettinger-braun.io",
            "gender":"male",
            "status": "inactive"
        }
        cy.request({
          method : "GET",
          url: "https://gorest.co.in/public/v2/users",
          Headers:{
            'authorization':"Bearer f057f4dd41b1f826a534feb56c0ae6e1e7b869dd681f7ba3314a0db2104c5c96"
          }

        }).then((res)=>{
            console.log(res);
            expect(res.body).to.have.lengthOf(10)
            const actualArray = res.body;
            expect(actualArray).to.deep.include(expectedBody);
            res.body.forEach(element => {
            expect(element.id).to.be.greaterThan(600000)
             });
       })
    
 })


     




})