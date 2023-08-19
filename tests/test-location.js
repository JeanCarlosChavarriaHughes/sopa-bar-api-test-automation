const expect = require('chai').expect;
const request = require('request');
require('dotenv').config()

// Global Variables
const domain = process.env.DOMAIN;

// Test Description
describe("Location Province Feature", function(){
  
  let url = domain + "location/provincia";
  // specific scenarios for this feature
  describe("Province Location Endpoint Success", function(){
    it("should return status code 200", function(done){
        request.get(url, function(req, res, body){
            expect(res.statusCode).to.be.equal(200);
            done();
        })
    })
  })
  describe("Province Location returned content", function(){
    it("should return an array with 7 elements", function(done){
        request.get(url, function(req, res, body){
            expect(JSON.parse(body)).to.be.an('array');
            expect(JSON.parse(body)).to.have.lengthOf(7);
            done();
        })
    })
  })
})

describe("Location Canton Feature", function(){
  let url = domain + "location/canton?codigo_provincia=1";

  describe("Canton Location Endpoint Success", function(){
    it("should return status code 200", function(done){
      request.get(url, function(req, res, body){
        expect(res.statusCode).to.be.equal(200);
        done();
      })
    })   
  })

  describe("Canton Location returned content" , function(){
    it("should return an array with 20 elements", function(done){
      request(url, function(req, res, body){
        expect(JSON.parse(body)).to.be.an('array');
        expect(JSON.parse(body)).to.have.lengthOf(20);
        done();
      })
    })
  })
})
