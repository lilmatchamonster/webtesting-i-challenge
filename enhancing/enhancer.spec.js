const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!

describe('Test Modules for Succeed, Fail, Repaire, and Get', () => {

  describe('Testing Repair Module', () => {
    it('Should return durability of 100% When passed a valid object', () => {
      
      const item = {
        name: "Robin Hood", 
        durability: 45,
        enhancement: 15
      }

      //Arrange
      const expected = {
        name: "Robin Hood",
        durability: 100,
        enhancement: 15
      }

      //Act
      const returnedItem = repair(item);

      //Assert
      expect(returnedItem).toEqual(expected);

    })

    it('Should return null when passed no arguments', () => {

      //Arrange
      const expected = null;

      //Act
      const returnedItem = repair();

      //Assert
      expect(returnedItem).toEqual(expected);
    })

    it('Should return null when passed an invalid object', () => {
      const item = {
        name: "Robin Hood", 
        durability: 45,
        magic: 15
      }

      //Assert
      expect(repair(1)).toBeNull();
      expect(repair('cat')).toBeNull();
      expect(repair(item)).toBeNull();
      expect(repair([])).toBeNull();
    })
  });

  describe('Testing the Succeed Module', () => {
    it('Should increase enhancement by 1', () => {

      const item = {
        name: "Robin Hood", 
        durability: 45,
        enhancement: 15
      }

      //Arrange
      const expected = {
        name: "Robin Hood", 
        durability: 45,
        enhancement: 16
      }

      //Act
      const enhancedItem = succeed(item);

      //Assert
      expect(enhancedItem).toEqual(expected);
    })

    it('Should return null when not passed and item', () => {
      //Assert
      expect(succeed()).toBeNull();
    })

    it('Should return null when passed an invalid object', () => {
      const item = {
        name: "Robin Hood", 
        durability: 45,
        magic: 15
      }

      //Assert
      expect(succeed(1)).toBeNull();
      expect(succeed('cat')).toBeNull();
      expect(succeed(item)).toBeNull();
      expect(succeed([])).toBeNull();
    })

    it("Should return unchanged if enhancment is 20", () => {
      const item = {
        name: "Robin Hood", 
        durability: 45,
        enhancement: 20
      }

      //Assert
      expect(succeed(item)).toEqual(item);
    })
  })

  describe('Testing Fail Module', () => {

    it('Should decrease durability by 5 if the enhancement is less than 15', () => {
      const item = {
        name: "Robin Hood", 
        durability: 45,
        enhancement: 14
      }
  
      //Arrange
      const expected = {
        name: "Robin Hood",
        durability: 40,
        enhancement: 14
      }
  
      //Assert
      expect(fail(item)).toEqual(expected);
    })

    it('Should return null when passed an invalid object', () => {
      const item = {
        name: "Robin Hood", 
        durability: 45,
        magic: 15
      }

      //Assert
      expect(fail(1)).toBeNull();
      expect(fail('cat')).toBeNull();
      expect(fail(item)).toBeNull();
      expect(fail([])).toBeNull();
    })

    it('Should return null when not passed and item', () => {
      //Assert
      expect(fail()).toBeNull();
    })

    it('Should decrease duability by 10 when enhancement is greater than or equal to 15', () => {
      const item = {
        name: "Robin Hood", 
        durability: 45,
        enhancement: 15
      }
  
      //Arrange
      const expected = {
        name: "Robin Hood",
        durability: 35,
        enhancement: 15
      }

      //Assert
      expect(fail(item)).toEqual(expected);
    })

    it('Should decrease enhancement by 1 if enhancemnt is greater than 16', () => {
      const item = {
        name: "Robin Hood", 
        durability: 45,
        enhancement: 17
      }
  
      //Arrange
      const expected = {
        name: "Robin Hood",
        durability: 35,
        enhancement: 16
      }

      //Assert
      expect(fail(item)).toEqual(expected);
    })
  })
  
});