!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=94)}({94:function(e,t,o){e.exports=o(95)},95:function(e,t){$(document).ready((function(){var e={position:"bottom",horizontalAlign:"left",offsetX:-12,offsetY:-10,fontFamily:"Roboto",markers:{height:12,width:12,radius:12},itemMargin:{horizontal:4,vertical:4}};$((function(){var e=moment().subtract(29,"days"),t=moment();function o(e,t){$("#reportrange span").html(e.format("MMM D")+" - "+t.format("MMM D"))}$("#reportrange").daterangepicker({startDate:e,endDate:t,ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]}},o),o(e,t)}));var t={series:[{name:"Income",data:[14,29,18,20,20,40,20]},{name:"Outcome",data:[12,20,14,25,17,35,30]}],chart:{height:350,type:"line",toolbar:{show:!1}},colors:["#5d78ff","#fbaf0f"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},title:{text:"",align:"left"},grid:{borderColor:"#fff",row:{colors:["#f3f3f3","transparent"],opacity:0}},markers:{size:5},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:""},axisBorder:{show:!1}},yaxis:{title:{text:""},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}};new ApexCharts(document.querySelector("#sales2"),t).render();t={chart:{type:"pie",width:"100%"},series:[44,55,41,17,15],labels:["USA","Brazil","India","Australia","Bangladesh"],colors:["#5d78ff","#fbaf0f","#1dc9b7","#fd397a"],legend:e,plotOptions:{pie:{dataLabels:{show:!1,offset:0,minAngleToShowLabel:1}}},responsive:[{breakpoint:480,options:{chart:{width:310},legend:Object.assign({},e,{horizontalAlign:"center"})}}]};new ApexCharts(document.querySelector("#salesByCountries"),t).render();t={series:[{name:"Organic",data:[11,100,80,20,51,42,109]},{name:"Direct",data:[31,90,32,40,90,34,52]}],chart:{height:350,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{startingShape:"rounded",endingShape:"rounded",columnWidth:"50%"}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:Object.assign({},e,{horizontalAlign:"center"}),grid:{borderColor:"transparent",row:{opacity:0}},colors:["#5d78ff","#fbaf0f","#1dc9b7","#fd397a"],xaxis:{categories:["Sat","Sun","Mon","Tue","Wed","Thu","Fri"],axisBorder:{show:!1},axisTicks:{show:!1}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}};new ApexCharts(document.querySelector("#sales2-2"),t).render()}))}});