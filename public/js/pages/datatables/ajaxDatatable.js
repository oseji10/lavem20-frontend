!function(t){var e={};function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=96)}({96:function(t,e,a){t.exports=a(97)},97:function(t,e){var a={init:function(){$("#javascriptDatatable").DataTable({responsive:!0,ajax:"../../assets/js/data/datatable.json",columns:[{data:"id"},{data:"name"},{data:"position"},{data:"office"},{data:"extn"},{data:"start_date"},{data:"salary"}],rowReorder:{dataSrc:"id"},language:{paginate:{first:'<i style="transform:rotate(180deg)" class="material-icons">double_arrow</i>',next:'<i class="material-icons">keyboard_arrow_right</i>',previous:'<i class="material-icons">keyboard_arrow_left</i>',last:'<i class="material-icons">double_arrow</i>'}}})}};jQuery(document).ready((function(){a.init()}))}});