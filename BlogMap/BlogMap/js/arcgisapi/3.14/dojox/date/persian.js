//>>built
define("dojox/date/persian",["..","dojo/_base/lang","dojo/date","./persian/Date"],function(l,m,n,k){var g=m.getObject("date.persian",!0,l);g.getDaysInMonth=function(a){return a.getDaysInPersianMonth(a.getMonth(),a.getFullYear())};g.compare=function(a,e,c){a instanceof k&&(a=a.toGregorian());e instanceof k&&(e=e.toGregorian());return n.compare.apply(null,arguments)};g.add=function(a,e,c){var d=new k(a);switch(e){case "day":d.setDate(a.getDate()+c);break;case "weekday":var b=a.getDay();if(5>b+c&&0<
b+c)d.setDate(a.getDate()+c);else{var f=e=0;5==b?(b=4,f=0<c?-1:1):6==b&&(b=4,f=0<c?-2:2);var b=0<c?5-b-1:-b,h=c-b,g=parseInt(h/5);0!=h%5&&(e=0<c?2:-2);d.setDate(a.getDate()+(e+7*g+h%5+b)+f)}break;case "year":d.setFullYear(a.getFullYear()+c);break;case "week":d.setDate(a.getDate()+7*c);break;case "month":a=a.getMonth();d.setMonth(a+c);break;case "hour":d.setHours(a.getHours()+c);break;case "minute":d._addMinutes(c);break;case "second":d._addSeconds(c);break;case "millisecond":d._addMilliseconds(c)}return d};
g.difference=function(a,e,c){e=e||new k;c=c||"day";var d=e.getFullYear()-a.getFullYear(),b=1;switch(c){case "weekday":d=Math.round(g.difference(a,e,"day"));b=parseInt(g.difference(a,e,"week"));c=d%7;if(0==c)d=5*b;else{var f=0,h=a.getDay();e=e.getDay();b=parseInt(d/7);c=d%7;a=new k(a);a.setDate(a.getDate()+7*b);a=a.getDay();if(0<d)switch(!0){case 5==h:f=-1;break;case 6==h:f=0;break;case 5==e:f=-1;break;case 6==e:f=-2;break;case 5<a+c:f=-2}else if(0>d)switch(!0){case 5==h:f=0;break;case 6==h:f=1;break;
case 5==e:f=2;break;case 6==e:f=1;break;case 0>a+c:f=2}d=d+f-2*b}b=d;break;case "year":b=d;break;case "month":c=e.toGregorian()>a.toGregorian()?e:a;f=e.toGregorian()>a.toGregorian()?a:e;b=c.getMonth();h=f.getMonth();if(0==d)b=c.getMonth()-f.getMonth();else{b=12-h+b;d=f.getFullYear()+1;c=c.getFullYear();for(d;d<c;d++)b+=12}e.toGregorian()<a.toGregorian()&&(b=-b);break;case "week":b=parseInt(g.difference(a,e,"day")/7);break;case "day":b/=24;case "hour":b/=60;case "minute":b/=60;case "second":b/=1E3;
case "millisecond":b*=e.toGregorian().getTime()-a.toGregorian().getTime()}return Math.round(b)};return g});