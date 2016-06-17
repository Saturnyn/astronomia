/* globals describe, it */

'use strict'

var assert = require('assert')
var VSOP = require('../lib/vsop87')

describe('#VSOP87', function () {
  it.skip('can load EARTH data', function (done) {
    // skip - requires VSOP87B.ear in package
    var earth = new VSOP('EARTH')
    earth.load(function () {
      assert.equal(typeof earth.data.L, 'object')
      assert.equal(typeof earth.data.B, 'object')
      assert.equal(typeof earth.data.R, 'object')
      assert.equal(earth.data.L[0].length, 623)
      assert.equal(earth.data.L[0][0].length, 3)
      assert.equal(earth.data.L[5].length, 4)
      assert.equal(earth.data.B[0].length, 184)
      assert.equal(earth.data.B[5].length, 2)
      assert.equal(earth.data.R[0].length, 523)
      assert.equal(earth.data.R[5].length, 2)
      done()
    })
  })

  it('throws on unknown planet', function (done) {
    var p // eslint-disable-line
    assert.throws(function () {
      p = new VSOP('vogsphere')
    }, /Invalid planet vogsphere/)
    done()
  })
})