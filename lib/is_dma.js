'use strict';

var RE=require('./dma_regexp');

/**
 * Returns true if value is a legal DMA or if value is contained within exceptions
 * @param {*} value - the value to test
 * @param {array} [exceptions] - exceptions to allow
 * @returns {boolean}
 */
module.exports=function(value,exceptions){
  exceptions=(exceptions||[]).map(function(e){ return e.toString(); });
  if(exceptions.indexOf(value.toString()) > -1){
    return true;
  }
	return RE.exec(value.toString()) ? true : false;
};
