import assert from "assert";
import isWeekday from "../isWeekday.js"

describe("Testing the isWeekday function", function(){
    it("The function should identify day of the week whether it's weekend or weekday", function(){
        assert.equal(true, isWeekday('Monday'))
    })

    it("The function should identify day of the week whether it's weekend or weekday", function(){
        assert.equal(true, isWeekday('Tuesday'))
    })

    it("The function should identify day of the week whether it's weekend or weekday", function(){
        assert.equal(false, isWeekday('Saturday'))
    })

    it("The function should identify day of the week whether it's weekend or weekday", function(){
        assert.equal(false, isWeekday('Sunday'))
    })
});