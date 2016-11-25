// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/srv/templates/ContainsOperations.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'srv:containsOperations\',maxOccurs:\'unbounded\',\r\n      label:\'${i18nIso.SV_ServiceIdentification.containsOperations}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n      data-dojo-props\x3d"target:\'srv:SV_OperationMetadata\',minOccurs:0"\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'srv:operationName\',\r\n          label:\'${i18nIso.SV_OperationMetadata.operationName}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n          data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n        data-dojo-props\x3d"target:\'srv:DCP\',maxOccurs:\'unbounded\',\r\n          label:\'${i18nIso.SV_OperationMetadata.DCP}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement"\r\n          data-dojo-props\x3d"target:\'srv:DCPList\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\r\n            data-dojo-props\x3d"value:\'http://www.fgdc.gov/nap/metadata/register/codelists.html#IC_112\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                  data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                  data-dojo-props\x3d"label:\'${i18nIso.DCPList.XML}\',value:\'XML\'"\x3e\x3c/div\x3e  \r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                  data-dojo-props\x3d"label:\'${i18nIso.DCPList.CORBA}\',value:\'CORBA\'"\x3e\x3c/div\x3e  \r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                  data-dojo-props\x3d"label:\'${i18nIso.DCPList.JAVA}\',value:\'JAVA\'"\x3e\x3c/div\x3e  \r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                  data-dojo-props\x3d"label:\'${i18nIso.DCPList.COM}\',value:\'COM\'"\x3e\x3c/div\x3e  \r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                  data-dojo-props\x3d"label:\'${i18nIso.DCPList.SQL}\',value:\'SQL\'"\x3e\x3c/div\x3e  \r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n                  data-dojo-props\x3d"label:\'${i18nIso.DCPList.WebServices}\',value:\'WebServices\',selected:true"\x3e\x3c/div\x3e                                                \r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e      \r\n      \x3c/div\x3e  \r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n        data-dojo-props\x3d"target:\'srv:connectPoint\',maxOccurs:\'unbounded\',\r\n          label:\'${i18nIso.SV_OperationMetadata.connectPoint}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n          data-dojo-props\x3d"target:\'gmd:CI_OnlineResource\',minOccurs:0"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'gmd:linkage\',\r\n              label:\'${i18nIso.CI_OnlineResource.linkage}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n              data-dojo-props\x3d"target:\'gmd:URL\'"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n            data-dojo-props\x3d"target:\'gmd:function\',\r\n              label:\'${i18nIso.CI_OnlineResource.sFunction}\',minOccurs:0"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/CI_OnlineFunctionCode"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e                          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e  \r\n      \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/srv/ContainsOperations","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputSelectOne ../../../form/Options ../../../form/Option ../../../form/iso/AbstractObject ../../../form/iso/CodeListAttribute ../../../form/iso/CodeListValueAttribute ../../../form/iso/CodeListElement ../../../form/iso/CodeListReference ../../../form/iso/CodeSpaceAttribute ../../../form/iso/GcoElement ../../../form/iso/ObjectReference ../gmd/citation/CI_OnlineFunctionCode dojo/text!./templates/ContainsOperations.html ../../../../../kernel".split(" "),
function(a,b,c,d,g,h,k,l,m,n,p,q,r,s,t,u,v,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.srv.ContainsOperations",a,f);return a});