'use strict';

var _=require('lodash'),
    RE=require('./dma_regexp');

/**
 * Returns true if value is a legal DMA or if value is contained within exceptions
 * @param {*} value - the value to test
 * @param {array} [exceptions] - exceptions to allow
 * @returns {boolean}
 */
module.exports=function(value,exceptions){
  try{
    value=value.toString();
  }
  catch(e){
    throw new Error('value must be able to be converted into a string: '+e);
  }
  exceptions=exceptions||[];
  if(!_.isString(value)){
    throw new Error('value ('+value+') must be able to be converted into a string');
  }
  if(!_.isArray(exceptions)){
    throw new Error('if provided, exceptions must be an array');
  }
  var exps= _.map(exceptions,function(e){ return e.toString() });
	return exps.indexOf(value) > -1 ? true : RE.exec(value) ? true : false;
};
