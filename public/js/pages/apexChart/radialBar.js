!function(e){var t={};function r(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=64)}({64:function(e,t,r){e.exports=r(65)},65:function(e,t){$(document).ready((function(){var e={chart:{height:350,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"70%"},dataLabels:{showOn:"always"}}},series:[70],labels:["Cricket"]};new ApexCharts(document.querySelector("#simpleRadialBar"),e).render();e={chart:{height:350,type:"radialBar"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return 249}}},endingShape:"rounded"}},stroke:{curve:"smooth",lineCap:"round"},series:[44,55,67,83],labels:["Apples","Oranges","Bananas","Berries"]};new ApexCharts(document.querySelector("#multipleRadialBar"),e).render();e={chart:{height:350,type:"radialBar"},plotOptions:{radialBar:{offsetY:-30,startAngle:0,endAngle:270,hollow:{margin:5,size:"30%",background:"transparent",image:void 0},dataLabels:{name:{show:!0},value:{show:!1}}}},colors:["#1ab7ea","#0084ff","#39539E","#0077B5"],series:[76,67,61,90],labels:["Vimeo","Messenger","Facebook","LinkedIn"],legend:{show:!0,floating:!0,fontSize:"16px",position:"bottom",offsetY:10,labels:{useSeriesColors:!0},markers:{size:0},formatter:function(e,t){return e+":  "+t.w.globals.series[t.seriesIndex]},itemMargin:{horizontal:1}},responsive:[{breakpoint:480,options:{legend:{show:!1}}}]};new ApexCharts(document.querySelector("#customAngleCircleChart"),e).render();e={chart:{height:350,type:"radialBar",toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",image:void 0,imageOffsetX:0,imageOffsetY:0,position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{showOn:"always",name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(e){return parseInt(e)},color:"#111",fontSize:"20px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#ABE5A1"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},series:[75],stroke:{lineCap:"round"},labels:["Percent"]};new ApexCharts(document.querySelector("#gradientRadial"),e).render();e={chart:{height:350,type:"radialBar"},plotOptions:{radialBar:{hollow:{margin:15,size:"70%",image:"../../dist-assets/images/products/watch-1.jpg",imageWidth:64,imageHeight:64,imageClipped:!1},dataLabels:{name:{show:!1,color:"#fff"},value:{show:!0,color:"#333",offsetY:50,fontSize:"22px"}}}},fill:{type:"image",image:{src:["../../dist-assets/images/products/watch-2.jpg"]}},series:[67],stroke:{lineCap:"round"},labels:["Volatility"]};new ApexCharts(document.querySelector("#radialbarswithImage"),e).render();e={chart:{height:350,type:"radialBar"},plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"16px",color:void 0,offsetY:120},value:{offsetY:76,fontSize:"22px",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},series:[67],labels:["Median Ratio"]};new ApexCharts(document.querySelector("#strokedangularGauge"),e).render();e={chart:{type:"radialBar"},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:15,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.4,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},series:[76],labels:["Average Results"]};new ApexCharts(document.querySelector("#semiCircleGauge"),e).render()}))}});