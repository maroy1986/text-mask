!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,l=e.rawValue,s=e.placeholderChar,f=e.placeholder,d=e.indexesOfPipedChars,c=void 0===d?n:d,p=e.caretTrapIndexes,v=void 0===p?n:p;if(0===a)return 0;var h=l.length,m=t.length,g=f.length,b=u.length,y=h-m,C=y>0,P=0===m,x=y>1&&!C&&!P;if(x)return a;var k=C&&(t===u||u===f),O=0;if(k?O=a-y:!function(){for(var e=u.toLowerCase(),r=l.toLowerCase(),t=r.substr(0,a).split(o),n=t.filter(function(r){return e.indexOf(r)!==-1}),i=n[n.length-1],d=c.map(function(r){return e[r]}),p=d.filter(function(e){return e===i}).length,v=n.filter(function(e){return e===i}).length,h=f.substr(0,f.indexOf(s)).split(o).filter(function(e,r){return e===i&&l[r]!==e}).length,m=h+v+p,g=0,y=0;y<b;y++){var C=e[y];if(O=y+1,C===i&&g++,g>=m)break}}(),C){for(var j=O,M=O;M<=g;M++)if(f[M]===s&&(j=M),f[M]===s||v.indexOf(M)!==-1||M===g)return j}else for(var T=O;T>=0;T--)if(f[T-1]===s||v.indexOf(T)!==-1||0===T)return T}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,s=void 0===l?a:l,f=t.placeholderChar,d=void 0===f?i.placeholderChar:f,c=t.placeholder,p=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,v=t.currentCaretPosition,h=t.keepCharPositions,m=u===!1&&void 0!==s,g=e.length,b=s.length,y=p.length,C=r.length,P=g-b,x=P>0,k=v+(x?-P:0),O=k+Math.abs(P);if(h===!0&&!x){for(var j=a,M=k;M<O;M++)p[M]===d&&(j+=d);e=e.slice(0,k)+j+e.slice(k,g)}for(var T=e.split(a).map(function(e,r){return{char:e,isNew:r>=k&&r<O}}),_=g-1;_>=0;_--){var w=T[_].char;if(w!==d){var S=_>=k&&b===C;w===p[S?_-P:_]&&T.splice(_,1)}}var V=a,N=!1;e:for(var E=0;E<y;E++){var R=p[E];if(R===d){if(T.length>0)for(;T.length>0;){var A=T.shift(),I=A.char,J=A.isNew;if(I===d&&m!==!0){V+=d;continue e}if(r[E].test(I)){if(h===!0&&J!==!1&&s!==a&&u!==!1&&x){for(var L=T.length,W=null,q=0;q<L;q++){var z=T[q];if(z.char!==d&&z.isNew===!1)break;if(z.char===d){W=q;break}}null!==W?(V+=I,T.splice(W,1)):E--}else V+=I;continue e}N=!0}m===!1&&(V+=p.substr(E,y));break}V+=R}if(m&&x===!1){for(var B=null,D=0;D<V.length;D++)p[D]===d&&(B=D);V=null!==B?V.substr(0,B+1):a}return{conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(s),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],s="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r=e.inputElement,t=e.mask,n=e.guide,o=e.pipe,s=e.placeholderChar,d=void 0===s?v.placeholderChar:s,g=e.keepCharPositions,y=void 0!==g&&g;("undefined"==typeof t?"undefined":l(t))===b&&void 0!==t.pipe&&void 0!==t.mask&&(o=t.pipe,t=t.mask);var C={previousConformedValue:m},P=void 0,x=void 0;return t instanceof Array&&(P=(0,p.convertMaskToPlaceholder)(t,d)),{state:C,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.value;if(t!==!1&&e!==C.previousConformedValue){var s=a(e),v=r.selectionStart,g=C.previousConformedValue,b=void 0;if(("undefined"==typeof t?"undefined":l(t))===h){if(x=t(s,{currentCaretPosition:v,previousConformedValue:g,placeholderChar:d}),x===!1)return;var k=(0,p.processCaretTraps)(x),O=k.maskWithoutCaretTraps,j=k.indexes;x=O,b=j,P=(0,p.convertMaskToPlaceholder)(x,d)}else x=t;var M={previousConformedValue:g,guide:n,placeholderChar:d,pipe:o,placeholder:P,currentCaretPosition:v,keepCharPositions:y},T=(0,c.default)(s,x,M),_=T.conformedValue,w=("undefined"==typeof o?"undefined":l(o))===h,S={};w&&(S=o(_,u({rawValue:s},M)),S===!1?S={value:g,rejected:!0}:(0,p.isString)(S)&&(S={value:S}));var V=w?S.value:_,N=(0,f.default)({previousConformedValue:g,conformedValue:V,placeholder:P,rawValue:s,currentCaretPosition:v,placeholderChar:d,indexesOfPipedChars:S.indexesOfPipedChars,caretTrapIndexes:b}),E=V===P&&0===N,R=E?m:V;C.previousConformedValue=R,r.value!==R&&(r.value=R,i(r,N))}}}}function i(e,r){document.activeElement===e&&(y?setTimeout(function(){return e.setSelectionRange(r,r,g)},0):e.setSelectionRange(r,r,g))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="function",m="",g="none",b="object",y=/Android/i.test(navigator&&navigator.userAgent)}])});