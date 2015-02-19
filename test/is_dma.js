/**
 * Created by raisch on 1/20/15.
 */
'use strict';

/* jshint node:true, mocha:true, quotmark:single */

/* global require, beforeEach */

var _ = require('lodash'),
    path = require('path'),
    fs = require('fs'),
    isDMA = require('../lib/is_dma');

describe('is_dma', function () {
  var dmas;

  beforeEach(function () {
    var src = fs.readFileSync(path.join(__dirname, '../data/dmas.txt')).toString();
    dmas = _.map(src.split(/\s*\n\s*/), function (line) {
      return line.split(/\s+/).shift().toString();
    });
  });

  it('should match all legal dmas', function () {
    dmas.forEach(function (value) {
      if (!isDMA(value)) throw new Error(value + ' is not a legal dma');
    });
  });

  it('should match exceptions',function(){
    var exceptions=[0,1,2];
    exceptions.forEach(function(value){
      if(!isDMA(value,exceptions)) throw new Error(value + 'is a legal exception');
    });
  });

  it('should match all legal dmas and exceptions',function(){
    var exceptions=[0,1,2],
        data= _.clone(dmas).concat(exceptions);
    data.forEach(function (value) {
      if (!isDMA(value,exceptions)) throw new Error(value + ' is not a legal dma');
    });
  })

  it('should not match illegal dmas',function(){
    var values=[];
    for(var i= 0,len=1000;i<len;i++){
      var value= i.toString();
      if(_.contains(dmas, value)) {
        continue;
      }
      values.push(value);
    }
    values.forEach(function(value){
      if(isDMA(value)) throw new Error(value + ' is a legal dma but should not be!');
    });
  })

});


