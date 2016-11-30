// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/dijit/ElevationProfile/ProfileChart","../_EventedWidget dojo/on dojo/mouse dojo/aspect dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/array dojo/number dijit/registry dojo/dom-geometry dojo/dom-style dojo/dom-class dojo/_base/Color dojo/colors dojo/fx/easing dojox/charting/Chart dojox/charting/axis2d/Default dojox/charting/plot2d/Grid dojox/charting/plot2d/Areas dojox/charting/action2d/MouseIndicator dojox/charting/action2d/TouchIndicator dojox/charting/themes/ThreeD ../../config ../../sniff ../../request ../Measurement ../../tasks/Geoprocessor ../../geometry/Polyline ../../symbols/SimpleLineSymbol ../../symbols/SimpleMarkerSymbol ../../graphic ../../layers/GraphicsLayer ../../tasks/FeatureSet ../../tasks/LinearUnit ../../geometry/geodesicUtils ../../geometry/webMercatorUtils ../../units ./UnitsConversion dojo/i18n!./nls/strings".split(" "),
function(v,h,q,w,x,c,G,d,k,y,r,H,I,l,J,K,z,L,A,s,m,n,B,M,C,N,O,P,Q,t,u,D,E,R,S,T,U,p,F,e){return x([v],{declaredClass:"esri.dijit.ElevationProfile.ProfileChart",baseClass:"esriProfileChart",SERIES_NAME_WATER:"Water",SERIES_NAME_ELEVATION:"Elevations",SERIES_NAME_DISTANCE:"Distances",_defaultDataRangeStats:{useCustom:!1,yMin:-10,yMax:100,yRange:110},_samplingPointCount:199,_elevationUnits:p.METERS,_distanceUnits:p.KILOMETERS,_sourceDataUnits:p.METERS,_chartRenderingOptions:null,_dataRangeStats:null,
_profileResults:null,_map:null,_unitConversion:null,_chart:null,_elevationIndicator:null,_elevationDiffIndicator:null,_distanceIndicator:null,_chartLocationGraphic:null,_posIndicator:null,_negIndicator:null,constructor:function(a,b){this._unitConversion=new F;this._dataRangeStats=c.mixin({},this._defaultDataRangeStats);a.hasOwnProperty("map")&&(this._map=a.map);a.hasOwnProperty("elevationUnits")&&(this._elevationUnits=a.elevationUnits);a.hasOwnProperty("distanceUnits")&&(this._distanceUnits=a.distanceUnits);
this._chartRenderingOptions=c.mixin({chartTitleFontSize:13,axisTitleFontSize:11,axisLabelFontSize:9,indicatorFontColor:"#eee",indicatorFillColor:"#666",titleFontColor:"#eee",axisFontColor:"#ccc",axisMajorTickColor:"#333",skyTopColor:"#B0E0E6",skyBottomColor:"#4682B4",waterLineColor:"#eee",waterTopColor:"#ADD8E6",waterBottomColor:"#0000FF",elevationLineColor:"#D2B48C",elevationTopColor:"#8B4513",elevationBottomColor:"#CD853F"},a.chartOptions||{});this._getDisplayValue=c.hitch(this,this._getDisplayValue)},
startup:function(){this.inherited(arguments);this._resetProfileResults();this._initializeChart()},postCreate:function(){this.inherited(arguments);this.own(w.after(y.getEnclosingWidget(this.domNode),"resize",c.hitch(this,this.resize),!0))},_setElevationRangeAttr:function(a,b){this._dataRangeStats={useCustom:!0,yMin:a,yMax:b,yRange:a-b}},_setDisplayUnitsAttr:function(a){this._elevationUnits=a.elevationUnits||this._elevationUnits;this._distanceUnits=a.distanceUnits||this._distanceUnits},_resetProfileResults:function(){this._profileResults=
{geometry:null};this._profileResults.samplingDistance=this._map?this._map.extent.getWidth()/this._samplingPointCount:100;this._profileResults.samplingDisplayDistance=this._convertDistancesArray([this._profileResults.samplingDistance])[0];this._profileResults.elevations=this._getFilledArray(this._samplingPointCount,this._profileResults.samplingDisplayDistance,!0);this._profileResults.distances=this._getFilledArray(this._samplingPointCount,this._profileResults.samplingDisplayDistance,!0);this._profileResults.waterData=
this._resetArray(this._profileResults.elevations,0);this._dataRangeStats=c.mixin({},this._defaultDataRangeStats);this._sourceProfileResults=c.clone(this._profileResults)},_updateProfileResults:function(a){this._sourceProfileResults=c.clone(a);this._profileResults={geometry:a.geometry};this._profileResults.samplingDistance=this._convertDistancesArray([a.samplingDistance])[0];this._profileResults.samplingDisplayDistance=this._convertDistancesArray([this._profileResults.samplingDistance])[0];this._profileResults.elevations=
this._convertElevationsInfoArray(a.elevations);this._profileResults.distances=this._convertDistancesArray(a.distances);this._profileResults.waterData=this._resetArray(a.elevations,0);if(!this._dataRangeStats.useCustom){a=this._getArrayMin(this._profileResults.elevations);var b=this._getArrayMax(this._profileResults.elevations);this._dataRangeStats.yRange=b-a;this._dataRangeStats.yMin=a-0.05*this._dataRangeStats.yRange;this._dataRangeStats.yMax=b+0.05*this._dataRangeStats.yRange}},clear:function(){this._displayChartLocation(-1);
this._resetProfileResults();this._clearIndicators();this._updateChart();this.emit("chart-clear")},refresh:function(){this.update(this._sourceProfileResults||this._profileResults);this.emit("chart-refresh")},update:function(a){a?(this._updateProfileResults(a),this._updateChart(),this._updateIndicators(),this.emit("chart-update",a)):this.emit("error",Error("ProfileChart.update(...) missing 'profileResults' parameter."))},_initializeChart:function(){if(1>r.position(this.domNode,!0).h)this.emit(Error(e.errors.InvalidConfiguration));
else{var a=new z(this.domNode,{title:this._chartRenderingOptions.title||e.chart.title,titlePos:"top",titleGap:10,titleFont:c.replace("normal normal bold {chartTitleFontSize}pt verdana",this._chartRenderingOptions),titleFontColor:this._chartRenderingOptions.titleFontColor});a.setTheme(B);a.fill="transparent";a.theme.axis.stroke.width=2;a.theme.axis.majorTick.color=l.named.white.concat(0.5);a.theme.axis.majorTick.width=1;a.theme.plotarea.fill={type:"linear",space:"plot",x1:50,y1:100,x2:50,y2:0,colors:[{offset:0,
color:this._chartRenderingOptions.skyTopColor},{offset:1,color:this._chartRenderingOptions.skyBottomColor}]};a.addAxis("y",{min:this._defaultDataRangeStats.yMin,max:this._defaultDataRangeStats.yMax,fontColor:this._chartRenderingOptions.axisFontColor,font:c.replace("normal normal bold {axisLabelFontSize}pt verdana",this._chartRenderingOptions),vertical:!0,natural:!0,fixed:!0,includeZero:!1,majorLabels:!0,minorLabels:!0,majorTicks:!0,minorTicks:!0,majorTick:{color:this._chartRenderingOptions.axisMajorTickColor,
length:6},title:c.replace(e.chart.elevationTitleTemplate,[this._unitConversion.getFullLabel(this._elevationUnits)]),titleGap:30,titleFont:c.replace("normal normal bold {axisTitleFontSize}pt verdana",this._chartRenderingOptions),titleFontColor:this._chartRenderingOptions.titleFontColor,titleOrientation:"axis"});a.addAxis("x",{fontColor:this._chartRenderingOptions.axisFontColor,font:c.replace("normal normal bold {axisLabelFontSize}pt verdana",this._chartRenderingOptions),natural:!0,fixed:!0,includeZero:!1,
majorLabels:!0,minorLabels:!0,majorTicks:!0,minorTicks:!0,majorTick:{color:this._chartRenderingOptions.axisMajorTickColor,length:6},title:c.replace(e.chart.distanceTitleTemplate,[this._unitConversion.getFullLabel(this._distanceUnits)]),titleGap:5,titleFont:c.replace("normal normal bold {axisTitleFontSize}pt verdana",this._chartRenderingOptions),titleFontColor:this._chartRenderingOptions.titleFontColor,titleOrientation:"away"});a.addPlot("grid",{type:A,hMajorLines:!0,hMinorLines:!1,vMajorLines:!1,
vMinorLines:!1});a.addPlot("default",{type:s,tension:"X"});a.addPlot("WaterPlot",{type:s});a.addSeries(this.SERIES_NAME_WATER,this._profileResults.waterData,{plot:"WaterPlot",stroke:{width:2,color:this._chartRenderingOptions.waterLineColor},fill:{type:"linear",space:"plot",x1:50,y1:0,x2:50,y2:100,colors:[{offset:0,color:this._chartRenderingOptions.waterTopColor},{offset:1,color:this._chartRenderingOptions.waterBottomColor}]}});a.addSeries(this.SERIES_NAME_ELEVATION,this._profileResults.elevations,
{plot:"default",stroke:{width:1.5,color:this._chartRenderingOptions.elevationLineColor},fill:{type:"linear",space:"plot",x1:50,y1:0,x2:50,y2:100,colors:[{offset:0,color:this._chartRenderingOptions.elevationTopColor},{offset:1,color:this._chartRenderingOptions.elevationBottomColor}]}});a.addSeries(this.SERIES_NAME_DISTANCE,this._profileResults.elevations,{plot:"default",stroke:{width:1.5,color:this._chartRenderingOptions.elevationLineColor},fill:{type:"linear",space:"plot",x1:50,y1:0,x2:50,y2:100,
colors:[{offset:0,color:this._chartRenderingOptions.elevationTopColor},{offset:1,color:this._chartRenderingOptions.elevationBottomColor}]}});a.render();this._chart=a}},_updateChart:function(){this._chart.getAxis("y").opt.min=this._dataRangeStats.yMin;this._chart.getAxis("y").opt.max=this._dataRangeStats.yMax;this._chart.getAxis("y").opt.title=c.replace(e.chart.elevationTitleTemplate,[this._unitConversion.getFullLabel(this._elevationUnits)]);this._chart.getAxis("x").opt.title=c.replace(e.chart.distanceTitleTemplate,
[this._unitConversion.getFullLabel(this._distanceUnits)]);this._chart.dirty=!0;this._chart.updateSeries(this.SERIES_NAME_WATER,this._profileResults.waterData);this._chart.updateSeries(this.SERIES_NAME_ELEVATION,this._profileResults.elevations);this._chart.updateSeries(this.SERIES_NAME_DISTANCE,this._profileResults.elevations);this._chart.render()},_clearIndicators:function(){this._elevationIndicator&&(this._elevationIndicator.destroy(),this._elevationIndicator=null);this._elevationDiffIndicator&&
(this._elevationDiffIndicator.destroy(),this._elevationDiffIndicator=null);this._distanceIndicator&&(this._distanceIndicator.destroy(),this._distanceIndicator=null)},_updateIndicators:function(){if(this._chart){this._clearIndicators();var a={places:1},b={series:this.SERIES_NAME_ELEVATION,mouseOver:!0,font:"normal normal bold 8pt Tahoma",fontColor:this._chartRenderingOptions.indicatorFontColor,fill:this._chartRenderingOptions.indicatorFillColor,offset:{y:25,x:30},markerFill:"none",markerStroke:{color:"red",
width:3},markerSymbol:"m -6 -6, l 12 12, m 0 -12, l -12 12",labelFunc:c.hitch(this,function(b){this._displayChartLocation(b.x);var g=this._unitConversion.getAbbrLabel(this._elevationUnits);b=k.format(b.y,a);return c.replace("{0} {1}",[b,g])})},f={series:this.SERIES_NAME_WATER,mouseOver:!0,font:"normal normal bold 8pt Tahoma",fontColor:this._chartRenderingOptions.indicatorFontColor,fill:this._chartRenderingOptions.indicatorFillColor,fillFunc:c.hitch(this,function(a){a=this._profileResults.distances.indexOf(a.x);
return-1!==a?this._profileResults.elevations[a].y>=this._profileResults.elevations[0].y?"green":"red":"red"}),offset:{y:45,x:30},labelFunc:c.hitch(this,function(b){b=this._profileResults.distances.indexOf(b.x);if(-1!==b){b=this._profileResults.elevations[b].y;var g=this._profileResults.elevations[0].y,f=k.format(b-g,a);return c.replace("{0}{1}",[0<b-g?"+":"",f])}return"0.0"})};this._posIndicator=c.clone(f);f.offset={y:45,x:-30};this._negIndicator=c.clone(f);var e={series:this.SERIES_NAME_DISTANCE,
mouseOver:!0,font:"normal normal bold 8pt Tahoma",fontColor:this._chartRenderingOptions.indicatorFontColor,fill:this._chartRenderingOptions.indicatorFillColor,offset:{y:0,x:0},labelFunc:c.hitch(this,function(b){var g=this._unitConversion.getAbbrLabel(this._distanceUnits);return c.replace("{0} {1}",[k.format(b.x,a),g])})};C("has-touch")?(this._elevationDiffIndicator=new n(this._chart,"default",f),this._elevationIndicator=new n(this._chart,"default",b),this._distanceIndicator=new n(this._chart,"default",
e),h(this.domNode,q.enter,c.hitch(this,this._displayChartLocation,null)),h(this.domNode,q.leave,c.hitch(this,this._displayChartLocation,null))):(this._elevationDiffIndicator=new m(this._chart,"default",f),this._elevationIndicator=new m(this._chart,"default",b),this._distanceIndicator=new m(this._chart,"default",e));this._chart.fullRender();h(this._chart.node,"mouseover",c.hitch(this,function(a){100>r.position(this._chart.node,!1).w-a.clientX?d.forEach([this._elevationDiffIndicator,this._elevationIndicator],
function(a){a&&0<a.opt.offset.x&&(a.opt.offset={y:a.opt.offset.y,x:-a.opt.offset.x})},this):d.forEach([this._elevationDiffIndicator,this._elevationIndicator],function(a){a&&0>a.opt.offset.x&&(a.opt.offset={y:a.opt.offset.y,x:Math.abs(a.opt.offset.x)})},this)}))}},_displayChartLocation:function(a){if(this._map&&this._profileResults.elevations&&this._profileResults.geometry){if(!this._chartLocationGraphic){var b=new l(l.named.red),c=new t(t.STYLE_SOLID,b,3),b=new u(u.STYLE_X,13,c,b);this._chartLocationGraphic=
new D(null,b);b=new E;this._map.addLayer(b);b.add(this._chartLocationGraphic)}a=this._profileResults.distances?d.indexOf(this._profileResults.distances,a):-1;0<=a?(a=this._profileResults.elevations[a],this._chartLocationGraphic.setGeometry(this._profileResults.geometry.getPoint(a.pathIdx,a.pointIdx))):this._chartLocationGraphic.setGeometry(null)}},_convertElevationsInfoArray:function(a){return d.map(a,c.hitch(this,function(a){return c.mixin(a,{x:this._getDisplayValue(a.x,this._distanceUnits),y:this._getDisplayValue(a.y,
this._elevationUnits)})}))},_convertDistancesArray:function(a){return d.map(a,c.hitch(this,function(a){return this._getDisplayValue(a,this._distanceUnits)}))},_getDisplayValue:function(a,b){return b===this._sourceDataUnits?a:this._unitConversion.convert(a,this._sourceDataUnits,b)},_getFilledArray:function(a,b,c){for(var e=Array(a),d=0;d<a;++d)e[d]={x:c?d*b:d,y:c?0:b||0};return e},_resetArray:function(a,b){return d.map(a,function(a){return{x:a.x,y:b}})},_getArrayMax:function(a){a=d.map(a,function(a){return a.y});
return Math.max.apply(Math,a)},_getArrayMin:function(a){a=d.map(a,function(a){return a.y});return Math.min.apply(Math,a)},resize:function(){this._chart&&this._chart.resize()},destroy:function(){this._chart&&this._chart.destroy();this.inherited(arguments)}})});