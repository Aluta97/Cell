var assert = require('assert');
var most_data = require('../most_data');
var least_data = require('../least_data');

arr = [ { name: 'Walter', MB: 67 },
        { name: 'Jesse', MB: 300 },
        { name: 'Saul', MB: 283 },
        { name: 'Gus', MB: 150 } ]


describe('cell test', function(){

  it('it should return who uses most data', function(){
    assert.equal(most_data(arr), 'Jesse')
  })
  it('it should return who uses least data', function(){
    assert.equal(least_data(arr), 'Walter')
  })
})
