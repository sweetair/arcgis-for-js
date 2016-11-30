// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/InterpolatePoints.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e \r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"createInterpolatedSurfaceIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.interpolatePoints}\x3c/td\x3e\r\n              \x3ctd\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                      \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e              \r\n                \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"\x3e \r\n       \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription" \x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e         \r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.selectAttributesLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"field"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n         \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n           \x3cselect class\x3d"esriLeadingMargin1 longInput"  style\x3d"margin-top:1.0em;width:68%;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_fieldSelect" data-dojo-attach-event\x3d"onChange:_handleFieldChange"\x3e\x3c/select\x3e\r\n         \x3c/td\x3e\r\n        \x3c/tr\x3e \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e         \r\n         \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.optimizeFor}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"interpolateOption"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-props\x3d"value:5,intermediateChanges:false,showButtons:true,minimum:1,maximum:9,discreteValues:3,pageIncrement:1" style\x3d"width:90%;" data-dojo-attach-point\x3d"_optimizeSlider" data-dojo-attach-event\x3d"onChange:_handleOptimizeSliderChange" type\x3d"range" data-dojo-type\x3d"dijit/form/HorizontalSlider"\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/HorizontalRule" data-dojo-props\x3d"container: \'topDecoration\',count: 3,style: \'height: 0.5em;\'"\x3e\x3c/div\x3e\r\n               \x3col data-dojo-type\x3d"dijit/form/HorizontalRuleLabels"  data-dojo-attach-point\x3d"_liveTimeRuleLabels" data-dojo-props\x3d"container: \'bottomDecoration\', count:3" style\x3d"margin-top:5px;height: 1em;"\x3e\r\n                  \x3cli\x3e${i18n.speed}\x3c/li\x3e\r\n                  \x3cli\x3e\x3c/li\x3e\r\n                  \x3cli\x3e${i18n.accuracy}\x3c/li\x3e\r\n                \x3c/ol\x3e  \r\n            \x3c/div\x3e\r\n             \x3c!-- create rules and labels below horizontal slider --\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n         \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1 esriSelectLabel"\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_outoutPredictionsErrCheck"\x3e\x3c/div\x3e\r\n              ${i18n.outputPredictionErrors}\r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputPredictionError"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n         \x3c/tr\x3e \r\n        \x3ctr data-dojo-attach-point\x3d"_optionsRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"optionsTd"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1 optionsClose" data-dojo-attach-point\x3d"_optionsDiv"\x3e\r\n              \x3cdiv class\x3d"dijitTreeExpando" data-dojo-attach-event\x3d"onclick:_handleOptionsBtnClick"\x3e\x3clabel class\x3d"esriLeadingMargin2 noWrapLabel"\x3e${i18n.Options}\x3c/label\x3e\x3c/div\x3e\r\n              \x3ctable class\x3d"esriFormTable optionsTable"\x3e\r\n                \x3ctbody\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.interpolateWithin}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"boundingPolygonLayer"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e                    \r\n                  \x3c/tr\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2" style\x3d"width:40%;"\x3e\r\n                      \x3cselect class\x3d"esriLeadingMargin2 longInput esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_boundingAreaSelect" data-dojo-attach-event\x3d"onChange:_handleBoundingSelectChange"\x3e\x3c/select\x3e                      \r\n                    \x3c/td\x3e\r\n                    \x3ctd style\x3d"width:9%;"\x3e\r\n                      \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" data-dojo-attach-point\x3d"_bndgPolyDrawBtn" class\x3d"esriFloatLeading esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon polygonIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handleBoundingBtnChange"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e \r\n                  \x3c/tr\x3e      \r\n                  \r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.classifyLabel}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"classificationType"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0.25;"\x3e\r\n                      \x3cselect class\x3d"esriLeadingMargin2 longInput esriLongLabel"  data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_classifySelect" data-dojo-attach-event\x3d"onChange:_handleClassifySelectChange" style\x3d"width:68%"\x3e\r\n                        \x3coption value\x3d"GeometricInterval"\x3e${i18n.geometricInterval}\x3c/option\x3e\r\n                        \x3coption value\x3d"EqualArea"\x3e ${i18n.quantile}\x3c/option\x3e\r\n                        \x3coption value\x3d"EqualInterval"\x3e${i18n.equalInterval}\x3c/option\x3e\r\n                        \x3coption value\x3d"Manual"\x3e${i18n.manual}\x3c/option\x3e\r\n                      \x3c/select\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr data-dojo-attach-point\x3d"_classifyOtherOptionLabelRow"\x3e \r\n                    \x3ctd colspan\x3d"2" style\x3d"padding-top:0.25;padding-bottom:0.25;"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.classesCountLabel}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput" style\x3d"padding-top:0;padding-bottom:0;"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"numClasses"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr data-dojo-attach-point\x3d"_classifyOtherOptionInputRow"\x3e\r\n                     \x3ctd colspan\x3d"3" style\x3d"padding-top:0.25;"\x3e\r\n                       \x3cinput data-dojo-type\x3d"dijit/form/NumberSpinner"  class\x3d "esriMediumlabel esriLeadingMargin2"  data-dojo-attach-point\x3d"_numClassesInput" data-dojo-props\x3d"value:${numClasses}, style: \'width:25%\',smallDelta:1,constraints: {places:0}"/\x3e\r\n                     \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr data-dojo-attach-point\x3d"_manualOptionLabelRow" style\x3d"display:none;"\x3e\r\n                    \x3ctd colspan\x3d"2" style\x3d"padding-top:0.25;padding-bottom:0.25;"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.classBreakValues}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput" style\x3d"padding-top:0;padding-bottom:0;"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"classBreaks"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr  data-dojo-attach-point\x3d"_manualOptionInputRow" style\x3d"display:none;"\x3e\r\n                    \x3ctd colspan\x3d"3" style\x3d"padding-top:0.25;"\x3e\r\n                      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"intermediateChanges:true" data-dojo-attach-point\x3d"_classBreaksInput" class\x3d"esriLeadingMargin2"\x3e\r\n                      \x3cdiv\x3e\r\n                        \x3clabel class\x3d"esriLeadingMargin2 esriSmallLabel"\x3e${i18n.classBreaksHelp}\x3c/label\x3e\r\n                      \x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e                  \r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2" style\x3d"width:40%;"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.predictLocLabel}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"predictAtPointLayer"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e                    \r\n                  \x3c/tr\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                        \x3cselect class\x3d"esriLeadingMargin2 longInput esriLongLabel"  data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_predictPointSelect" data-dojo-attach-event\x3d"onChange:_handlePredictPointSelectChange"\x3e\x3c/select\x3e\r\n                    \x3c/td\x3e   \r\n                    \x3ctd\x3e\r\n                      \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton"  data-dojo-attach-point\x3d"_predictPointDrawBtn"  class\x3d"esriFloatLeading esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon esriPointIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handlePredictPointChange"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e \r\n                  \x3c/tr\x3e                               \r\n                \x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n     \x3c/table\x3e\r\n   \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n     \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n       \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n         ${i18n.useMapExtent}\r\n     \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n        ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/InterpolatePoints","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Color dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/NumberSpinner dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../toolbars/draw ../PopupTemplate ../../layers/FeatureLayer ../../graphic ./utils ./CreditEstimator ../../symbols/PictureMarkerSymbol dijit/form/HorizontalSlider dijit/form/HorizontalRule dijit/form/HorizontalRuleLabels dojo/i18n!../../nls/jsapi dojo/text!./templates/InterpolatePoints.html".split(" "),
function(r,y,f,h,m,z,l,A,M,s,d,B,N,O,e,n,C,D,E,F,G,P,Q,R,S,T,U,V,W,X,Y,Z,H,p,I,J,t,u,q,$,v,w,g,aa,K,ba,ca,da,x,L){r=y([C,D,E,F,G,J,I],{declaredClass:"esri.dijit.analysis.InterpolatePoints",templateString:L,widgetsInTemplate:!0,inputLayer:null,field:null,interpolateOption:1,classificationType:"GeometricalInterval",numClasses:10,maxClasses:32,minClasses:3,boundingPolygonLayer:null,predictAtPointLayer:null,outputPredictionError:!1,outputLayerName:null,classBreaks:null,i18n:null,map:null,toolName:"InterpolatePoints",
helpFileName:"InterpolatePoints",resultParameter:"resultLayer",constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);h.forEach(this._pbConnects,m.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);f.mixin(this.i18n,x.findHotSpotsTool);f.mixin(this.i18n,x.interpolatePointsTool);this.set("drawLayerName",this.i18n.blayerName);this.set("drawPointLayerName",this.i18n.pointlayerName)},
postCreate:function(){this.inherited(arguments);e.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",f.hitch(this,this.validateServiceName));this._classBreaksInput.set("validator",f.hitch(this,this.validateClassBreaks));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._featureLayer&&(this.map.removeLayer(this._featureLayer),h.forEach(this.boundingPolygonLayers,function(a,c){a===this._featureLayer&&(this._boundingAreaSelect.removeOption({value:c+1,label:this._featureLayer.name}),
this.boundingPolygonLayers.splice(c,1))},this)),this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),h.forEach(this.predictAtPointLayers,function(a,c){a===this._pointfeatureLayer&&(this._predictPointSelect.removeOption({value:c+1,label:this._pointfeatureLayer.name}),this.predictAtPointLayers.splice(c,1))},this)));this._handleBoundingBtnChange(!1);this._handlePredictPointChange(!1);this.emit("close",{save:!a})},clear:function(){this._featureLayer&&(this.map.removeLayer(this._featureLayer),
h.forEach(this.boundingPolygonLayers,function(a,b){a===this._featureLayer&&(this._boundingAreaSelect.removeOption({value:b+1,label:this._featureLayer.name}),this.boundingPolygonLayers.splice(b,1))},this));this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),h.forEach(this.predictAtPointLayers,function(a,b){a===this._pointfeatureLayer&&(this._predictPointSelect.removeOption({value:b+1,label:this._pointfeatureLayer.name}),this.predictAtPointLayers.splice(b,1))},this));this._handleBoundingBtnChange(!1);
this._handlePredictPointChange(!1)},_handleShowCreditsClick:function(a){a.preventDefault();a={};this._form.validate()&&(a.inputLayer=l.toJson(g.constructAnalysisInputLyrObj(this.get("inputLayer"))),a.field=this.get("field"),a.interpolateOption=this.get("interpolateOption"),a.classificationType=this.get("classificationType"),"Manual"!==this.classificationType?a.numClasses=this.get("numClasses"):a.classBreaks=this.get("classBreaks"),this.get("boundingPolygonLayer")&&(a.boundingPolygonLayer=l.toJson(g.constructAnalysisInputLyrObj(this.boundingPolygonLayer))),
this.get("predictAtPointLayer")&&(a.predictAtPointLayer=l.toJson(g.constructAnalysisInputLyrObj(this.predictAtPointLayer))),a.outputPredictionError=this.get("outputPredictionError"),this.returnFeatureCollection||(a.OutputName=l.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=l.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(f.hitch(this,function(a){this._usageForm.set("content",
a);this._usageDialog.show()})))},_handleSaveBtnClick:function(a){if(this._form.validate()){this._saveBtn.set("disabled",!0);a={};var b={},c;a.inputLayer=l.toJson(g.constructAnalysisInputLyrObj(this.get("inputLayer")));a.field=this.get("field");a.interpolateOption=this.get("interpolateOption");a.classificationType=this.get("classificationType");"Manual"!==this.classificationType?a.numClasses=this.get("numClasses"):a.classBreaks=this.get("classBreaks");this.get("boundingPolygonLayer")&&(a.boundingPolygonLayer=
l.toJson(g.constructAnalysisInputLyrObj(this.boundingPolygonLayer)));this.get("predictAtPointLayer")&&(a.predictAtPointLayer=l.toJson(g.constructAnalysisInputLyrObj(this.predictAtPointLayer)));a.outputPredictionError=this.get("outputPredictionError");this.predictAtPointLayer&&this.get("outputPredictionError")?this.resultParameter=["predictedPointLayer","resultLayer","predictionError"]:this.predictAtPointLayer&&!this.get("outputPredictionError")?this.resultParameter=["predictedPointLayer","resultLayer"]:
!this.predictAtPointLayer&&this.get("outputPredictionError")&&(this.resultParameter=["resultLayer","predictionError"]);this.returnFeatureCollection||(a.OutputName=l.toJson({serviceProperties:{name:this.get("outputLayerName")}}));this.showChooseExtent&&!this.get("DisableExtent")&&this._useExtentCheck.get("checked")&&(a.context=l.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&
(c.extent=this.map.extent._normalize(!0)),a.context=l.toJson(c));a.returnFeatureCollection=this.returnFeatureCollection;b.jobParams=a;b.itemParams={description:this.i18n.itemDescription,tags:s.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,fieldname:!a.field?"":a.field}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.execute(b)}},_save:function(){},_buildUI:function(){var a;a=!0;this._loadConnections();this.signInPromise.then(f.hitch(this,
g.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this.get("showSelectAnalysisLayer")&&(!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),g.populateAnalysisLayers(this,"inputLayer","inputLayers"));this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.inputLayer&&this._updateAnalysisLayerUI(a);this.classificationType&&this._classifySelect.set("value",this.classificationType);this.outputPredictionError&&
this._outoutPredictionsErrCheck.set("checked",this.outputPredictionError);if(this.boundingPolygonLayers){this._boundingAreaSelect.addOption({value:"-1",label:this.i18n.defaultBoundingOption,selected:!0});var b=!1;h.forEach(this.boundingPolygonLayers,function(a,k){"esriGeometryPolygon"===a.geometryType&&(b=this.get("boundingPolygonLayer")&&this.get("boundingPolygonLayer").name===a.name,this._boundingAreaSelect.addOption({value:k+1,label:a.name,selected:b}))},this)}g.addReadyToUseLayerOption(this,[this._analysisSelect,
this._boundingAreaSelect]);this.classBreaks&&this._classBreaksInput.set("value",this.classBreaks.join().replace(/,/g," "));this.maxClasses&&(a=this._numClassesInput.get("constraints"),a.max=this.maxClasses,this._numClassesInput.set("constraints",a));this.minClasses&&(a=this._numClassesInput.get("constraints"),a.min=this.minClasses,this._numClassesInput.set("constraints",a));d.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(f.hitch(this,
function(a){this.folderStore=a;g.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));d.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");d.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none")},_updateAnalysisLayerUI:function(a){this.inputLayer&&(B.set(this._interpolateToolDescription,"innerHTML",s.substitute(this.i18n.toolDefine,
{layername:this.inputLayer.name})),a&&(this.outputLayerName=s.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputLayerName),this.set("fields",this.inputLayer),this.predictAtPointLayers&&(this._predictPointSelect.removeOption(this._predictPointSelect.getOptions()),this._predictPointSelect.addOption({value:"-1",label:this.i18n.choosePointLayer,selected:!0}),h.forEach(this.predictAtPointLayers,function(a,c){if("esriGeometryPoint"===a.geometryType&&
a!==this.inputLayer){var k=this.get("predictAtPointLayer")&&this.get("predictAtPointLayer").name===a.name;this._predictPointSelect.addOption({value:c+1,label:a.name,selected:k})}},this)))},_handleAnalysisLayerChange:function(a){"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"point"'),this._isAnalysisSelect=!0,this._browsedlg.show()):(this.inputLayer=this.inputLayers[a],this._updateAnalysisLayerUI(!0))},
_handleBrowseItemsSelect:function(a){a&&a.selection&&g.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this.boundingPolygonLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._boundingAreaSelect,posIncrement:this._isAnalysisSelect?0:1,browseDialog:this._browsedlg,widget:this}).always(f.hitch(this,this._updateAnalysisLayerUI,!0))},_handleMethodChange:function(a){"NN"===a?(e.add(this._optionsDiv,"disabled"),e.contains(this._optionsDiv,"optionsOpen")&&
(e.remove(this._optionsDiv,"optionsOpen"),e.add(this._optionsDiv,"optionsClose"))):(e.contains(this._optionsDiv,"disabled")&&e.remove(this._optionsDiv,"disabled"),"KG"===a?(d.set(this._barrierLabelRow,"display","none"),d.set(this._barrierSelectRow,"display","none"),d.set(this._speedLabelRow,"display",""),d.set(this._speedSliderRow,"display","")):"LP"===a&&(d.set(this._barrierLabelRow,"display",""),d.set(this._barrierSelectRow,"display",""),d.set(this._speedLabelRow,"display","none"),d.set(this._speedSliderRow,
"display","none")))},_handleOptimizeSliderChange:function(a){console.log(a,this._optimizeSlider.get("value"));this.set("interpolateOption",this._optimizeSlider.get("value"))},_handleFieldChange:function(a){},_handleOptionsBtnClick:function(){e.contains(this._optionsDiv,"disabled")||(e.contains(this._optionsDiv,"optionsClose")?(e.remove(this._optionsDiv,"optionsClose"),e.add(this._optionsDiv,"optionsOpen")):e.contains(this._optionsDiv,"optionsOpen")&&(e.remove(this._optionsDiv,"optionsOpen"),e.add(this._optionsDiv,
"optionsClose")))},_handleBoundingSelectChange:function(a){"browse"===a&&(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"polygon"'),this._isAnalysisSelect=!1,this._browsedlg.show())},_handleClick:function(a){},_handlePredictPointSelectChange:function(a){},_handleBoundingBtnChange:function(a){a?(this.emit("drawtool-activate",{}),this._featureLayer||this._createBoundingPolyFeatColl(),this._predictPointDrawBtn.set("checked",
!1),this._toolbar.activate(q.POLYGON)):(this._toolbar.deactivate(),this._predictPointDrawBtn.get("checked")||this.emit("drawtool-deactivate",{}))},_handlePredictPointChange:function(a){a?(this.emit("drawtool-activate",{}),this._pointfeatureLayer||this._createPointFeatColl(),this._pointtoolbar.activate(q.POINT),this._bndgPolyDrawBtn.set("checked",!1)):(this._pointtoolbar.deactivate(),this._bndgPolyDrawBtn.get("checked")||this.emit("drawtool-deactivate",{}))},_handleClassifySelectChange:function(a){d.set(this._classifyOtherOptionLabelRow,
"display","Manual"===a?"none":"block");d.set(this._classifyOtherOptionInputRow,"display","Manual"===a?"none":"block");d.set(this._manualOptionInputRow,"display","Manual"===a?"block":"none");d.set(this._manualOptionLabelRow,"display","Manual"===a?"block":"none")},_loadConnections:function(){this.on("start",f.hitch(this,"_onClose",!1));this._connect(this._closeBtn,"onclick",f.hitch(this,"_onClose",!0))},_createBoundingPolyFeatColl:function(){var a=g.createPolygonFeatureCollection(this.drawLayerName);
this._featureLayer=new v(a,{id:this.drawLayerName});this.map.addLayer(this._featureLayer);m.connect(this._featureLayer,"onClick",f.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])}))},_addFeatures:function(a){var b=[],c={},k=new t(t.STYLE_NULL,new u(u.STYLE_SOLID,new z([0,0,0]),4));a=new w(a,k);this.map.graphics.add(a);c.description="blayer desc";c.title="blayer";a.setAttributes(c);b.push(a);this._featureLayer.applyEdits(b,null,null);if(0===this.boundingPolygonLayers.length||this.boundingPolygonLayers[this.boundingPolygonLayers.length-
1]!==this._featureLayer)b=this.boundingPolygonLayers.push(this._featureLayer),c=this._boundingAreaSelect.getOptions(),this._boundingAreaSelect.removeOption(c),c=h.map(c,function(a){a.selected=!1;return a}),c.push({value:b,label:this._featureLayer.name,selected:!0}),this._boundingAreaSelect.addOption(c)},_createPointFeatColl:function(){var a=g.createPointFeatureCollection(this.drawPointLayerName);this._pointfeatureLayer=new v(a,{id:this.drawPointLayerName});this.map.addLayer(this._pointfeatureLayer);
m.connect(this._pointfeatureLayer,"onClick",f.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])}))},_addPointFeatures:function(a){var b=[],c={},k=(new K({height:24,width:24,contentType:"image/png",type:"esriPMS",url:"http://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png"})).setOffset(0,12);a=new w(a,k);this.map.graphics.add(a);c.description="blayer desc";c.title="blayer";a.setAttributes(c);b.push(a);this._pointfeatureLayer.applyEdits(b,null,null);if(0===this.predictAtPointLayers.length||
this.predictAtPointLayers[this.predictAtPointLayers.length-1]!==this._pointfeatureLayer)b=this.predictAtPointLayers.push(this._pointfeatureLayer),c=this._predictPointSelect.getOptions(),this._predictPointSelect.removeOption(c),c=h.map(c,function(a){a.selected=!1;return a}),this._predictPointSelect.addOption({value:b,label:this._pointfeatureLayer.name,selected:!0}),this._predictPointSelect.addOption(c)},validateServiceName:function(a){return g.validateServiceName(a,{textInput:this._outputLayerInput})},
validateClassBreaks:function(){var a,b=[],c=[],k,d;a=f.trim(this._classBreaksInput.get("value")).split(" ");if("Manual"!==this.get("classificationType"))return!0;if(!a&&"Manual"===this.get("classificationType")||2>a.length||a.length>this.maxClasses)return!1;h.some(a,function(e,g){e=n.parse(e);if(isNaN(e))return b.push(0),!1;if(c[a[g]])return c[a[g]]=!1,b.push(0),!1;c[a[g]]=!0;k=n.format(e,{locale:"root"});p.isDefined(k)?p.isDefined(k)||(k=n.format(e,{locale:"en-us"})):k=n.format(e,{locale:"en"});
p.isDefined(k)&&(d=f.trim(k).match(/\D/g));d&&0<d.length&&d&&h.forEach(d,function(a,c){"."===a||","===a||"-"===a&&0===c?b.push(1):b.push(0)})});return-1!==h.indexOf(b,0)?!1:!0},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(a){this.inputLayers=a},_setFieldsAttr:function(a){var b=a.fields,
c,d;this._fieldSelect&&this._fieldSelect.removeOption(this._fieldSelect.getOptions());h.forEach(b,function(b,e){b.name!==a.objectIdField&&-1!==h.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],b.type)&&(c={value:b.name,label:p.isDefined(b.alias)&&""!==b.alias?b.alias:b.name},this.field&&c.value===this.field&&(c.selected="selected",d=b.name),this._fieldSelect.addOption(c))},this);d&&this._fieldSelect.set("value",d)},_setFieldAttr:function(a){this.field=
a},_getFieldAttr:function(){this._fieldSelect&&(this.field=this._fieldSelect.get("value"));return this.field},_setInterpolateOptionAttr:function(a){this.interpolateOption=a},_getInterpolateOptionAttr:function(){this._optimizeSlider&&(this.interpolateOption=Math.floor(this._optimizeSlider.get("value")));return this.interpolateOption},_setClassificationTypeAttr:function(a){this.classificationType=a},_getClassificationTypeAttr:function(){this._classifySelect&&(this.classificationType=this._classifySelect.get("value"));
return this.classificationType},_getNumClassesAttr:function(){this._numClassesInput&&(this.numClasses=this._numClassesInput.get("value"));return this.numClasses},_setNumClassesAttr:function(a){this.numClasses=a},_setMaxClassesAttr:function(a){this.maxClasses=a},_getMaxClassesAttr:function(){return this.maxClasses},_setMinClassesAttr:function(a){this.minClasses=a},_getMinClassesAttr:function(){return this.minClasses},_getClassBreaksAttr:function(){if(this._classBreaksInput){var a=f.trim(this._classBreaksInput.get("value")).split(" "),
b=[];h.forEach(a,function(a){b.push(n.parse(a))});this.classBreaks=b}return this.classBreaks},_setClassBreaksAttr:function(a){a&&(this.classBreaks=a)},_getBoundingPolygonLayerAttr:function(){this._boundingAreaSelect&&(this.boundingPolygonLayer=null,"-1"!==this._boundingAreaSelect.get("value")&&(this.boundingPolygonLayer=this.boundingPolygonLayers[this._boundingAreaSelect.get("value")-1]));return this.boundingPolygonLayer},_setBoundingPolygonLayerAttr:function(a){this.boundingPolygonLayer=a},_setBoundingPolygonLayersAttr:function(a){this.boundingPolygonLayers=
a},_getPredictAtPointLayerAttr:function(){this._predictPointSelect&&(this.predictAtPointLayer=null,"-1"!==this._predictPointSelect.get("value")&&(this.predictAtPointLayer=this.predictAtPointLayers[this._predictPointSelect.get("value")-1]));return this.predictAtPointLayer},_setPredictAtPointLayerAttr:function(a){this.predictAtPointLayer=a},_setPredictAtPointLayersAttr:function(a){this.predictAtPointLayers=a},_getOutputPredictionErrorAttr:function(){this._outoutPredictionsErrCheck&&(this.outputPredictionError=
this._outoutPredictionsErrCheck.get("checked"));return this.outputPredictionError},_setOutputPredictionErrorAttr:function(a){this.outputPredictionError=a},_getOutputLayerNameAttr:function(){this._outputLayerInput&&(this.outputLayerName=this._outputLayerInput.get("value"));return this.outputLayerName},_setOutputLayerNameAttr:function(a){this.outputLayerName=a},_setMapAttr:function(a){this.map=a;this._toolbar=new q(this.map);m.connect(this._toolbar,"onDrawEnd",f.hitch(this,this._addFeatures));this._pointtoolbar=
new q(this.map);m.connect(this._pointtoolbar,"onDrawEnd",f.hitch(this,this._addPointFeatures))},_getMapAttr:function(){return this.map},_setDrawLayerNameAttr:function(a){this.drawLayerName=a},_getDrawLayerNameAttr:function(){return this._featureLayer.name},_setDrawPointLayerNameAttr:function(a){this.drawPointLayerName=a},_getDrawPointLayerNameAttr:function(){return this._pointfeatureLayer.name},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_getDrawLayerAttr:function(){var a=
[];this._featureLayer&&a.push(this._featureLayer);this._pointfeatureLayer&&a.push(this._pointfeatureLayer);return a},_setDisableExtentAttr:function(a){this._useExtentCheck.set("checked",!a);this._useExtentCheck.set("disabled",a)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_connect:function(a,b,c){this._pbConnects.push(m.connect(a,b,c))}});A("extend-esri")&&f.setObject("dijit.analysis.InterpolatePoints",r,H);return r});