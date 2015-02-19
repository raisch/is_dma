/**
 * Provides a RegExp that can be used to validate a string as a three-digit DMA (Designated
 * Market Area) Identifier.
 *
 * See data/dmas.txt for list of valid ids.
 *
 * Also see DoubleClick Rich Media API Handbook - Designated Market Area® code key
 * https://support.google.com/richmedia/answer/2745487?hl=en
 */
'use strict';

var XRegExp=require('xregexp').XRegExp;

//@formatter:off
var dma_RE=XRegExp('\
    5               \
    (?: [0-5]\\d    \
    |   6[013-79]   \
    |   7[013-7]    \
    |   8[1-48]     \
    |   9[26-8]     \
    )               \
  |                 \
    6               \
    (?: 0[02-69]    \
    |   1[0-36-9]   \
    |   2[2-8]      \
    |   3\\d        \
    |   4[0-47-9]   \
    |   5[0-26-9]   \
    |   6[129]      \
    |   7[0135689]  \
    |   8[267]      \
    |   9[1-38]     \
    )               \
  |                 \
    7               \
    (?: 0[259]      \
    |   1[016-8]    \
    |   2[245]      \
    |   3[467]      \
    |   4[03-79]    \
    |   5[1-9]      \
    |   6[0245-7]   \
    |   7[013]      \
    |   89          \
    |   9[08]       \
    )               \
  |                 \
    8               \
    (?: 0[0-47]     \
    |   1[0139]     \
    |   2[0158]     \
    |   39          \
    |   55          \
    |   6[268]      \
    |   81          \
    )\
','x');
//@formatter:on

module.exports=dma_RE;
