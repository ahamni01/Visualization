define("css!src/composite/Dermatology",[],function(){}),function(t,e){"function"==typeof define&&define.amd?define("src/composite/Dermatology",["../layout/Border","../layout/Toolbar","../layout/Grid","../form/OnOff","../form/Button","../common/Icon","../other/PropertyEditor","css!./Dermatology"],e):t.composite_Dermatology=e(t.layout_Border,t.layout_Toolbar,t.layout_Grid,t.form_OnOff,t.form_Button,t.common_Icon,t.other_PropertyEditor)}(this,function(t,e,o,i,n,r,s){function a(){t.call(this),this._toolbar=(new e).title("Dermatology"),this._propEditor=(new s).show_settings(!0)}return a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.prototype._class+=" composite_Dermatology",a.prototype.publish("showToolbar",!0,"boolean","Show Toolbar"),a.prototype.publish("widget",null,"widget","Widget"),a.prototype.showProperties=function(t){if(!arguments.length)return this._showProperties;this._showProperties=t,this.rightPercentage(0).rightSize(this._showProperties?360:0).setContent("right",this._showProperties?this._propEditor:null);var e=this.widget();return e&&e.designMode&&e.designMode(this._showProperties),this},a.prototype.toggleProperties=function(){return this.showProperties(!this.showProperties())},a.prototype.enter=function(e,o){t.prototype.enter.apply(this,arguments),this.topPercentage(0).topSize(0).setContent("top",this._toolbar),this.getCell("top").surfaceShadow(!0);var n=this;this._propsButton=(new i).id(this.id()+"_props").value("Properties").on("click",function(){n.toggleProperties().render()}),this._toolbar.widgets([this._propsButton])},a.prototype.update=function(e,o){t.prototype.update.apply(this,arguments);var i=this.widget();o.style("background-color",i&&i.surfaceShadow?null:"white"),this.topPercentage(0).topSize(this.showToolbar()?32:0)},a.prototype.render=function(e){var o=this.widget();return o!==this._prevWidget&&(o&&o.surfaceShadow&&o.surfaceBackgroundColor_default("white"),this.setContent("center",o),this._propEditor.widget(o),this._prevWidget=o),t.prototype.render.apply(this,arguments)},a}),define("css!src/composite/MegaChart",[],function(){}),function(t,e){"function"==typeof define&&define.amd?define("src/composite/MegaChart",["d3","../layout/Border","../chart/MultiChart","../common/Text","../other/Legend","../layout/Toolbar","../form/Select","../form/Button","../form/Input","../common/Utility","css!./MegaChart"],e):t.composite_MegaChart=e(t.d3,t.layout_Border,t.chart_MultiChart,t.common_Text,t.other_Legend,t.layout_Toolbar,t.form_Select,t.form_Button,t.form_Input,t.common_Utility)}(this,function(t,e,o,i,n,r,s,a,l,p){function h(){e.call(this),this._tag="div",this._chart=new o;var t=this;this._chart.click=function(){t.click.apply(t,arguments)},this._chart.dblclick=function(){t.dblclick.apply(t,arguments)},this._toolbar=new r,this._valueTitle=new i,this._domainTitle=new i,this._legend=new n}return h.prototype=Object.create(e.prototype),h.prototype.constructor=h,h.prototype._class+=" composite_MegaChart",h.prototype._1DChartTypes=o.prototype._1DChartTypes,h.prototype._2DChartTypes=o.prototype._2DChartTypes,h.prototype._NDChartTypes=o.prototype._NDChartTypes,h.prototype._anyChartTypes=o.prototype._anyChartTypes,h.prototype._allChartTypes=o.prototype._allChartTypes,h.prototype.publishReset(),h.prototype.publish("showToolbar",!0,"boolean","Enable/Disable Toolbar widget",null,{tags:["Basic"]}),h.prototype.publishProxy("title","_toolbar","title"),h.prototype.publish("titleFontSize",null,"number","Title Font Size (px)",null,{tags:["Advanced"],optional:!0}),h.prototype.publish("titleFontColor",null,"html-color","Title Font Color",null,{tags:["Advanced"],optional:!0}),h.prototype.publish("titleFontFamily",null,"string","Title Font Family",null,{tags:["Advanced"],optional:!0}),h.prototype.publish("titleFontBold",!0,"boolean","Enable Bold Title Font",null,{tags:["Advanced"],optional:!0}),h.prototype.publish("titleBackgroundColor",null,"html-color","Background Color",null,{tags:["Intermediate"],optional:!0}),h.prototype.publish("maximizedBackgroundColor","#FFFFFF","html-color","Background Color while maximized",null,{tags:["Intermediate"],optional:!0}),h.prototype.publish("showChartSelect",!0,"boolean","Show/Hide the chartType dropdown in the toolbar",null,{tags:["Basic"]}),h.prototype.publish("showCSV",!0,"boolean","Show/Hide CSV button",null,{tags:["Basic"]}),h.prototype.publish("showMaximize",!1,"boolean","Show/Hide Maximize button",null,{tags:["Basic"]}),h.prototype.publish("toolbarShowLegend",!1,"boolean","Show/Hide Legend button",null,{tags:["Basic"]}),h.prototype.publish("showInfoButton",!1,"boolean","Show/Hide Info button in toolbar",null,{tags:["Basic"]}),h.prototype.publish("infoIcon","","string","Help Icon",null,{tags:["Basic"]}),h.prototype.publish("legendPosition","none","set","Position of the Legend widget",["none","top","right","bottom","left"],{tags:["Basic"]}),h.prototype.publishProxy("legendFormat","_legend","rainbowFormat"),h.prototype.publishProxy("legendBins","_legend","rainbowBins"),h.prototype.publishProxy("domainAxisTitle","_domainTitle","text"),h.prototype.publishProxy("valueAxisTitle","_valueTitle","text"),h.prototype.publishProxy("chartType","_chart","chartType"),h.prototype.publishProxy("chart","_chart","chart"),h.prototype.toolbarWidgets=function(t){return arguments.length?(this._toolbar.widgets(t),this):this._toolbar.widgets()},h.prototype.chartTypeDefaults=function(t){return arguments.length?(this._chart.chartTypeDefaults(t),this):this._chart.chartTypeDefaults()},h.prototype.chartTypeProperties=function(t){return arguments.length?(this._chart.chartTypeProperties(t),this):this._chart.chartTypeProperties()},h.prototype.fields=function(t){return arguments.length?(this._chart.fields(t),this):this._chart.fields()},h.prototype.columns=function(t,e){return arguments.length?(this._chart.columns(t,e),this):this._chart.columns()},h.prototype.data=function(t){return arguments.length?(this._chart.data(t),this):this._chart.data()},h.prototype.downloadCSV=function(){return p.downloadBlob("CSV",this._chart["export"]("CSV")),this},h.prototype.enter=function(o,i){e.prototype.enter.apply(this,arguments);var n=this;this.topShrinkWrap(!1).topPercentage(0).topSize(30),this._csvButton=(new a).classed({"composite_MegaChart-CSV":!0}).id(this.id()+"_csv").value("CSV"),this._csvButton.click=function(t){n.downloadCSV()},this._infoButton=(new a).classed({"composite_MegaChart-Info":!0}).id(this.id()+"_info").value(this.infoIcon()),this._maximizeButton=(new a).classed({"composite_MegaChart-Maximize":!0}).id(this.id()+"_maximize").value(""),this._maximizeButton.click=function(e){var o=n.target(),i=o,r=t.select(o).classed("__hpccisMaximized"),s=n.locateAncestor("layout_Grid");i=s?s.element().node():document.body;var a=t.select(n.target());if(r){var l=o.parentElement.getBoundingClientRect(),p=parseInt(getComputedStyle(o,null).getPropertyValue("padding-top").replace("px","")),h=parseInt(getComputedStyle(o,null).getPropertyValue("padding-left").replace("px","")),c=parseInt(getComputedStyle(o,null).getPropertyValue("padding-right").replace("px","")),d=parseInt(getComputedStyle(o,null).getPropertyValue("padding-bottom").replace("px",""));n.contentDiv.style("opacity",0).transition(100),a.transition().style({top:l.top+"px",left:l.left+"px",width:l.width-h-c+"px",height:l.height-p-d+"px"}).each("end",function(){a.style({position:o.__old_position,"z-index":o.__old_zindex,"background-color":o.__old_backgroundColor,"box-shadow":o.__old_boxshadow}),n.resize({width:l.width-h-c,height:l.height-p-d}).render(function(){n.contentDiv.transition().style("opacity",1)}),e.value("").render()})}else{o.__old_position=o.style.position,o.__old_zindex=o.style.zIndex,o.__old_boxshadow=o.style.boxShadow,o.__old_backgroundColor=n.element().style("background-color");var u=t.select(i).datum(),g=u.target(),y=u?g.getBoundingClientRect():i.getBoundingClientRect(),_=parseInt(getComputedStyle(g,null).getPropertyValue("padding-top").replace("px","")),m=parseInt(getComputedStyle(g,null).getPropertyValue("padding-left").replace("px","")),f=parseInt(getComputedStyle(g,null).getPropertyValue("padding-right").replace("px","")),b=parseInt(getComputedStyle(g,null).getPropertyValue("padding-bottom").replace("px",""));n.contentDiv.style("opacity",0).transition(100),a.style({position:"fixed","z-index":999999,"box-shadow":"0 8px 8px 0 rgba(0,0,0,.14),0 12px 4px -8px rgba(0,0,0,.2),0 4px 20px 0 rgba(0,0,0,.12)","background-color":o.__old_backgroundColor}).transition().style({top:y.top+_+"px",left:y.left+m+"px",width:y.width-m-f+"px",height:y.height-_-b+"px"}).each("end",function(){a.style({"background-color":n.maximizedBackgroundColor()}),n.resize({width:y.width-m-f,height:y.height-_-b}).render(function(){n.contentDiv.transition().style("opacity",1)}),e.value("").render()})}t.select(o).classed("__hpccisMaximized",!r)},this._legendButton=(new l).classed({"composite_MegaChart-legend":!0}).id(this.id()+"_legend").type("checkbox").inlineLabel("Legend:  "),this._legendButton.click=function(t){n.render()},this._chartTypeSelect=(new s).classed({"composite_MegaChart-chartType":!0}).id(this.id()+"_chartType").selectOptions(this._allChartTypes.map(function(t){return[t.id,t.display]})).value(this.chartType()),this._chartTypeSelect.change=function(t){n.chartType(t.value()).render()},this.setContent("center",this._chart),this._legend.fixedSize(!0).targetWidget(this._chart).orientation(-1!==["top","bottom"].indexOf(this.legendPosition())?"horizontal":"vertical"),this._prevLegendPosition=this.legendPosition(),this.valueAxisTitle()&&this.setContent("left",this._valueTitle.rotation(-90)).leftShrinkWrap(!0),this.domainAxisTitle()&&this.setContent("bottom",this._domainTitle).bottomShrinkWrap(!0),"none"!==this.legendPosition()&&this.setContent(this.legendPosition(),this._legend)[this.legendPosition()+"ShrinkWrap"](!0)},h.prototype.update=function(t,o){function i(t,e,o){if(o&&-1===t.indexOf(e))t.push(e);else if(!o){var i=t.indexOf(e);i>=0&&t.splice(i,1)}}this._chartTypeSelect.value(this.chartType());var r=this.toolbarWidgets();i(r,this._csvButton,this.showCSV()),i(r,this._maximizeButton,this.showMaximize()),i(r,this._legendButton,this.toolbarShowLegend()),i(r,this._chartTypeSelect,this.showChartSelect()),i(r,this._infoButton,this.showInfoButton()),this.toolbarWidgets(r),this._prevShowToolbar!==this.showToolbar()&&(this.setContent("top",this.showToolbar()?this._toolbar:null),this._prevShowToolbar=this.showToolbar()),this._toolbar.fontSize(this.titleFontSize()).fontColor(this.titleFontColor()).fontFamily(this.titleFontFamily()).fontBold(this.titleFontBold()).backgroundColor(this.titleBackgroundColor()),this._chart.data(this.data()),this._chart.chartType()!==this.chartType()&&this._chart.chartType(this.chartType());var s=this.legendPosition();this.toolbarShowLegend()&&!this._legendButton.checked()&&(s="none"),this._prevLegendPosition!==s&&("none"!==this._prevLegendPosition&&this.clearContent(this._prevLegendPosition),this._prevLegendPosition=s,"none"!==s&&(this._legend=(new n).fixedSize(!0).targetWidget(this.getContent("center")),this.setContent(s,this._legend),this._legend.orientation(-1!==["top","bottom"].indexOf(s)?"horizontal":"vertical"))),this._contentClasses=this.getContentClasses(),this.valueAxisTitle()&&"common_Text"!==this._contentClasses.left&&"left"!==s&&this.setContent("left",this._valueTitle.rotation(-90)),this.domainAxisTitle()&&"common_Text"!==this._contentClasses.bottom&&"bottom"!==s&&this.setContent("bottom",this._domainTitle).bottomShrinkWrap(!0),this._legend.dataFamily(this._chart.getChartDataFamily()),e.prototype.update.apply(this,arguments)},h.prototype.exit=function(t,o){e.prototype.exit.apply(this,arguments)},h.prototype.getContentClasses=function(){var t={},e=this.getContent("top"),o=this.getContent("right"),i=this.getContent("bottom"),n=this.getContent("left");return t.top=null!==e?e.classID():void 0,t.right=null!==o?o.classID():void 0,t.bottom=null!==i?i.classID():void 0,t.left=null!==n?n.classID():void 0,t},h.prototype.serializeState=function(){var t={title:this.title(),data:this.data()},e=this.chart();return e&&e.serializeState&&(t.chart=e.serializeState(),delete t.chart.data),t},h.prototype.deserializeState=function(t){if(t){this.title(t.title).data(t.data);var e=this.chart();e&&t.chart&&e.serializeState&&e.deserializeState(t.chart)}return this},h.prototype.click=function(t,e,o){console.log("Click:  "+JSON.stringify(t)+", "+e+", "+o)},h.prototype.dblclick=function(t,e,o){console.log("Double click:  "+JSON.stringify(t)+", "+e+", "+o)},h}),function(t){var e=document,o="appendChild",i="styleSheet",n=e.createElement("style");n.type="text/css",e.getElementsByTagName("head")[0][o](n),n[i]?n[i].cssText=t:n[o](e.createTextNode(t))}(".composite_Dermatology{background-color:#f8f8ff}.composite_Dermatology .common_Icon{background-color:red;opacity:.75}.composite_Dermatology .common_Icon .common_Shape{fill:#fff;stroke:#a9a9a9;cursor:pointer}.composite_Dermatology .common_Icon.show .common_Shape{fill:#d3d3d3}.composite_Dermatology .common_Icon .common_FAChar .common_Text{fill:#a9a9a9;cursor:pointer}.composite_Dermatology .other_PropertyEditor{font-family:sans-serif;font-size:11px}.composite_Dermatology .other_PropertyEditor input{font-family:sans-serif;font-size:11px;border:0}.composite_Dermatology .other_PropertyEditor .property-label{height:unset}.composite_MegaChart-Info,.composite_MegaChart-Info *,.composite_MegaChart-Maximize,.composite_MegaChart-Maximize *{font-family:FontAwesome}"),define("hpcc-viz-composite",function(){});