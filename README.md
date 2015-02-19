# is_dma
Checks if a value is a legal Designated Market Area.

### Usage

    var is_dma=require('is_dma'),
        exceptions=[0],
        value=500;

    if(is_dma(value,exceptions)) {
      console.log('%s is a DMA or exception', value);
    }

### Description

Provides a simple XRegExp-backed function to determine if a provided value is a 
legal Designated Market Area or contained within a provided list of exceptional
values.

The intent of the `exceptions` array is to allow special values to validate
even if they are not DMAs. Many GEO-IP services return '0' for non-matching
DMAs so adding that value to exceptions will validate all possible values.

The list of legal DMAs from which this module was constructed were retrieved 
from DoubleClick's [Rich Media API Handbook - Designated Market Area® code key](https://support.google.com/richmedia/answer/2745487?hl=en).

NOTE: The term "Designated Market Area" is a registered trademark of DoubleClick.


