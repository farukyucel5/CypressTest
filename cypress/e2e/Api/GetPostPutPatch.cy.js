const { should, expect } = require('chai');
const { describe } = require('mocha');


// Enable the `should` interface in the test file
should();


describe("get post put request", () => {


  //====================================== post request========================================\\

 let randomText=""
 let testEmail=""
 let userId=0
  it("Create a post request",()=>{

   let pattern="abcdefghijklmnop1234567890"
   for(let i = 0; i <pattern.length; i++){
    randomText = randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length))
   
    }
    testEmail= randomText+"@gmail.com"

   
   cy.fixture("CreateUser").then((payload)=>{
       
     cy.request({
       method : "POST",
       url: "https://gorest.co.in/public/v2/users",
       headers:{
         'Authorization':"Bearer 288b3cf32c0213ab2606de889be49ba07c85ff9fb3321de33b8b05ec94da503e"
       },
       body:{

         "name":payload.name,
         "gender": payload.gender,
         "email": testEmail,
         "status" :payload.status
       }
     }).then((res)=>{
         
        userId=res.body.id

         cy.log(JSON.stringify(res))
         expect(res.status).to.eq(201)
         expect(res.body).has.property("email",testEmail)
         expect(res.body).has.property("name",payload.name)

     })


   })
      




  })


  //===============================get request===================================================\\


    it("https://gorest.co.in/public/v2/users/x  get a specific user",() =>{
      
       cy.request({
        method : "GET",
        url: "https://gorest.co.in/public/v2/users/"+userId,
        headers:{
            'Authorization':"Bearer 288b3cf32c0213ab2606de889be49ba07c85ff9fb3321de33b8b05ec94da503e"
        }

       }).then((res)=>{
           expect(res.status).to.eq(200)
           expect(res.body.gender).to.eq("male")
           expect(res.body.status).to.eq("active")

    })


    })



    it("https://gorest.co.in/public/v2/users get users",()=>{
      cy.fixture("CreateUser").then((payload)=>{
        let expectedBody={
            "id":userId,
            "name": payload.name,
            "email":testEmail,
            "gender":payload.gender,
            "status": payload.status
        }
        cy.request({
          method : "GET",
          url: "https://gorest.co.in/public/v2/users",
          headers:{
            'Authorization':"Bearer 288b3cf32c0213ab2606de889be49ba07c85ff9fb3321de33b8b05ec94da503e"
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



 //=============================================deleteUser========================================================\\



 it("https://gorest.co.in/public/v2/users/x  get a specific user",() =>{
      
        cy.request({
            method : "DELETE",
            url: "https://gorest.co.in/public/v2/users/"+userId,
            headers:{
            'Authorization':"Bearer 288b3cf32c0213ab2606de889be49ba07c85ff9fb3321de33b8b05ec94da503e"
            }

 }).then((res)=>{
     expect(res.status).to.eq(204)

})


})


})