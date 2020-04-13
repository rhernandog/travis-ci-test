const assert = require("chai").assert;
const users = require("../src/users");

describe("Users Tests", function(){
	
	it("Should test the test method from the users module", function(){
		const myString = users.testMethod("Homer Jay");
		assert.equal(myString, "Hello Homer Jay");
	});

});
