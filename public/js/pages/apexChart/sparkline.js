!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=68)}({68:function(e,t,r){e.exports=r(69)},69:function(e,t){$(document).ready((function(){window.Apex={stroke:{width:1},markers:{size:0},tooltip:{fixed:{enabled:!0}}};var e=function(e){for(var t,r,n=e.slice(),a=n.length;0!==a;)r=Math.floor(Math.random()*a),t=n[a-=1],n[a]=n[r],n[r]=t;return n},t=[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,93,53,61,27,54,43,19,46],r={chart:{type:"area",height:160,sparkline:{enabled:!0}},stroke:{curve:"straight"},fill:{opacity:.3},series:[{data:e(t)}],yaxis:{min:0},colors:["#DCE6EC"]},n={chart:{type:"area",height:160,sparkline:{enabled:!0}},stroke:{curve:"straight"},fill:{opacity:.3},series:[{data:e(t)}],yaxis:{min:0},colors:["#639"]},a={chart:{type:"area",height:160,sparkline:{enabled:!0}},stroke:{curve:"straight"},fill:{opacity:.3},series:[{data:e(t)}],xaxis:{crosshairs:{width:1}},yaxis:{min:0}};(r=new ApexCharts(document.querySelector("#spark1"),r)).render(),(n=new ApexCharts(document.querySelector("#spark2"),n)).render(),(a=new ApexCharts(document.querySelector("#spark3"),a)).render();new ApexCharts(document.querySelector("#chart1"),{chart:{type:"line",width:"100%",height:160,sparkline:{enabled:!0}},series:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}).render(),new ApexCharts(document.querySelector("#chart2"),{chart:{type:"line",width:"100%",height:160,sparkline:{enabled:!0}},series:[{data:[12,14,2,47,42,15,47,75,65,19,14]}],stroke:{curve:"smooth",lineCap:"round"},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}).render(),new ApexCharts(document.querySelector("#chart3"),{chart:{type:"line",width:"100%",height:160,sparkline:{enabled:!0}},series:[{data:[47,45,74,14,56,74,14,11,7,39,82]}],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}).render(),new ApexCharts(document.querySelector("#chart4"),{chart:{type:"line",width:"100%",height:160,sparkline:{enabled:!0}},stroke:{curve:"smooth",lineCap:"round"},series:[{data:[15,75,47,65,14,2,41,54,4,27,15]}],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}).render(),new ApexCharts(document.querySelector("#chart5"),{chart:{type:"bar",width:"100%",height:160,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"60%",endingShape:"rounded"}},colors:["#72c2ff"],series:[{data:[25,66,41,89,63,25,44,12,36,9,54,30,40,50]}],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}).render(),new ApexCharts(document.querySelector("#chart6"),{chart:{type:"bar",width:"100%",height:160,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"60%"}},colors:["#08e5e8"],series:[{data:[12,14,2,47,42,15,47,75,65,19,14,30,50]}],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}).render(),new ApexCharts(document.querySelector("#chart7"),{chart:{type:"bar",width:"100%",height:160,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"80%",endingShape:"rounded"}},colors:["#a890d3"],series:[{data:[47,45,74,14,56,74,14,11,7,39,82]}],labels:[1,2,3,4,5,6,7,8,9,10,11],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}).render(),new ApexCharts(document.querySelector("#chart8"),{chart:{type:"bar",width:"100%",height:160,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"50%",endingShape:"rounded"}},colors:["#dd5e89"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#dd5e89"],shadeIntensity:1,opacityFrom:.7,opacityTo:.9}},series:[{data:[25,66,41,89,63,25,44,12,36,9,54,40,60,20]}],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}).render()}))}});