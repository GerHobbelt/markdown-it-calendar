"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}var _assign=require("babel-runtime/core-js/object/assign"),_assign2=_interopRequireDefault(_assign),_calendar=require("./calendar"),_calendar2=_interopRequireDefault(_calendar);require("./calendar.css"),module.exports=function(r,e){function t(e,t,n,a,i){var s=e[t].info,u=(0,_calendar2.default)(r,s);return'<div class="markdown-it-calendar '+("dark"===s.Style?"dark":"")+'">'+u+"</div>"}function n(r){try{var e=new Date(r.year,r.month-1,r.date);e.setFullYear(r.year);return!!(r.year===e.getFullYear()&&r.month===e.getMonth()+1&&r.date===e.getDate())&&e}catch(r){return!1}return!1}function a(r){if(r=r.match(p))try{var e=r[2],t=parseInt(r[3]),n=parseInt(r[4]);if(t>=0&&t<=1e5&&n>=1&&n<=12)return{style:e,year:t,month:n}}catch(r){return console.error("PARAMS_REGEX is invalid"),!1}return!1}function i(r,e,t){return!(r.substring(e,e+v.length).toLowerCase()!==v)&&a(r.substring(e+v.length,t))}function s(r,e,t){return r.substring(e,t).trim()==y}function u(r,e,t,a){var i=r.substring(e,t).trim(),s=i.match(g);if(s)try{var u=(0,_assign2.default)({},a);return u.date=parseInt(s[1]),{title:s[3],day:n(u)}}catch(r){return console.error("DATE_REGEX is invalid"),!1}return!1}function o(r,e,t){var n=r.substring(e,t).trim(),a=n.match(h);if(a)try{return{tag:a[1],description:a[2]}}catch(r){return console.error("EVENT_REGEX is invalid"),!1}return!1}function c(r,e,t,n){var a=e.substring(t,n);r.description+="\n"+a}function l(r,e){var t=r.push(e.type,e.tag||"div",e.nesting);return t.markup=e.markup||"",t.block=e.block||!0,t.content=e.content||"","info"in e&&(t.info=e.info),"map"in e&&(t.map=e.map),t}function d(r,e,t,n){var a=void 0,d=void 0,p=void 0,g=0,h=r.bMarks[e]+r.tShift[e],m=r.eMarks[e],_={Year:-1,Month:0,Days:{}},E=i(r.src,h,m);if(!E)return!1;if(n)return!0;for(_.Style=E.style,_.Year=E.year,_.Month=E.month,a=e+1;a<t;++a){h=r.bMarks[a]+r.tShift[a],m=r.eMarks[a];var b=u(r.src,h,m,E);if(b.day)p=void 0,d=b.day,_.Days[d]=_.Days[d]||{},_.Days[d].title=b.title,_.Days[d].startLine=a;else{var k=o(r.src,h,m);if(d&&k)p=k,p.startLine=a,_.Days[d].events=_.Days[d].events||[],_.Days[d].events.push(k);else{if(r.src[h]===y[0]&&s(r.src,h,m)){g=1;break}p&&c(p,r.src,h,m)}}}return r.line=a+g,_.startLine=e,_.endLine=a,l(r,{type:f,nesting:0,markup:v,info:_,map:[e,r.line],content:""}),!0}e=e||{};var f="calendar",v=e.startMarker||":::"+f,y=e.endMarker||":::",p=e.PARAMS_REGEX||/^(\((.*)\)){0,1}\s+(\d+)[ ]+(\d+)\s*$/,g=e.DATE_REGEX||/^[+*-]\s+(\d{1,2})(\s(.*))?$/,h=e.EVENT_REGEX||/^[-*+]\s*\[(.*?)\]\s*(.*)$/;e.render;r.block.ruler.before("fence",f,d,{alt:["paragraph","blockquote"]}),r.renderer.rules[f]=t};