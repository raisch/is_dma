# is_dma
Checks if a value is a legal Designated Market Area.

### Usage

		var is_dma=require('is_dma'),
        exceptions=[0],
				value=500;

		if(is_dma(value,execptions)) {
			console.log('%s is a dma or exception', value);
    }

### Description

Provides a simple XRegExp-backed function to determine if a provided value is a 
legal Designated Market Area or contained within a provided list of exceptional
values.

Legal DMAs were retrieved from DoubleClick's [Rich Media API Handbook - Designated Market Area® code key](https://support.google.com/richmedia/answer/2745487?hl=en).
