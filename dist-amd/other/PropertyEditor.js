!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","../other/Persist","../layout/Grid","../common/Widget","css!./PropertyEditor"],e):t.other_PropertyEditor=e(t.d3,t.common_HTMLWidget,t.other_Persist,t.layout_Grid,t.common_Widget)}(this,function(t,e,i,r,s){function a(t){switch(t){case"widget":case"widgetArray":case"propertyArray":return!0}return!1}function n(){e.call(this),this._parentPropertyEditor=null,this._tag="div",this._show_settings=!1}n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype._class+=" other_PropertyEditor",n.prototype.publish("showFields",!1,"boolean","If true, widget.fields() will display as if it was a publish parameter.",null,{tags:["Basic"]}),n.prototype.publish("showData",!1,"boolean","If true, widget.data() will display as if it was a publish parameter.",null,{tags:["Basic"]}),n.prototype.publish("sorting","none","set","Specify the sorting type",["none","A-Z","Z-A","type"],{tags:["Basic"],icons:["fa-sort","fa-sort-alpha-asc","fa-sort-alpha-desc","fa-sort-amount-asc"]}),n.prototype.publish("hideNonWidgets",!1,"boolean","Hides non-widget params (at this tier only)",null,{tags:["Basic"]}),n.prototype.publish("label","","string","Label to display in header of property editor table",null,{tags:["Basic"]}),n.prototype.publish("filterTags","","set","Only show Publish Params of this type",["Basic","Intermediate","Advance",""],{}),n.prototype.publish("excludeTags",[],"array","Exclude this array of tags",null,{}),n.prototype.publish("excludeParams",[],"array","Exclude this array of params (widget.param)",null,{}),n.prototype.publish("widget",null,"widget","Widget",null,{tags:["Basic"],render:!1}),n.prototype.parentPropertyEditor=function(t){return arguments.length?(this._parentPropertyEditor=t,this):this._parentPropertyEditor},n.prototype._widgetOrig=n.prototype.widget,n.prototype.widget=function(t){if(arguments.length&&this._widgetOrig()===t)return this;var e=n.prototype._widgetOrig.apply(this,arguments);if(arguments.length&&(this.watchWidget(t),t instanceof r)){var i=this;t.postSelectionChange=function(){i._selectedItems=t._selectionBag.get().map(function(t){return t.widget}),i.render()}}return e},n.prototype.show_settings=function(t){return arguments.length?(this._show_settings=t,this):this._show_settings},n.prototype.rootWidgets=function(){return this._selectedItems&&this._selectedItems.length?this._selectedItems:this.show_settings()?[this]:this.widget()?[this.widget()]:[]},n.prototype.update=function(i,r){e.prototype.update.apply(this,arguments);var s=this,a=this.rootWidgets().filter(function(t){return t._owningWidget&&t._owningWidget.excludeObjs instanceof Array&&-1!==t._owningWidget.excludeObjs.indexOf(t.classID())?!1:!0}),n=r.selectAll(".table"+this.id()).data(a,function(t){return t.id()});n.enter().append("table").attr("class","property-table table"+this.id()).each(function(e){var i=t.select(this);i.append("thead").append("tr").append("th").datum(i).attr("colspan","2").each(function(e){var i=t.select(this);i.append("span"),s.thButtons(i)}),i.append("tbody")}),n.each(function(e){var i=t.select(this);i.select("thead > tr > th > span").text(function(t){var e="";return s.label()&&(e+=s.label()),e}),i.selectAll("i").classed("fa-eye",!s.hideNonWidgets()).classed("fa-eye-slash",s.hideNonWidgets()),s.renderInputs(i.select("tbody"),e)}),n.exit().each(function(t){s.renderInputs(r.select("tbody"),null)}).remove()},n.prototype.exit=function(t,i){e.prototype.exit.apply(this,arguments),this.watchWidget(null)};var o=0;return n.prototype.watchWidget=function(t){if(this._watch&&(window.__hpcc_debug&&(--o,console.log("watchDepth:  "+o)),this._watch.remove(),delete this._watch),t){var e=this;this._watch=t.monitor(function(t,i,r){r!==i&&e.lazyRender()}),window.__hpcc_debug&&(++o,console.log("watchDepth:  "+o))}},n.prototype.thButtons=function(t){var e=this,i=t.append("i").attr("class","fa fa-minus-square-o").on("click",function(t){t.classed("property-table-collapsed",!t.classed("property-table-collapsed")),i.classed("fa-minus-square-o",!t.classed("property-table-collapsed")).classed("fa-plus-square-o",t.classed("property-table-collapsed"))});if(null===this.parentPropertyEditor()){var r=t.append("i").attr("class","fa "+e.__meta_sorting.ext.icons[e.sorting_options().indexOf(e.sorting())]).on("click",function(){var t=e.sorting(),i=e.sorting_options(),s=e.__meta_sorting.ext.icons;r.classed(s[i.indexOf(t)],!1).classed(s[(i.indexOf(t)+1)%i.length],!0),e.sorting(i[(i.indexOf(t)+1)%i.length]).render()}),s=t.append("i").attr("class","fa "+(e.hideNonWidgets()?"fa-eye-slash":"fa-eye")).on("click",function(){s.classed("fa-eye",e.hideNonWidgets()).classed("fa-eye-slash",!e.hideNonWidgets()),e.hideNonWidgets(!e.hideNonWidgets()).render()});s.classed("fa-eye",!e.hideNonWidgets()).classed("fa-eye-slash",e.hideNonWidgets())}},n.prototype.gatherDataTree=function(t){if(!t)return null;var e={label:t.id()+" ("+t.classID()+")",children:[]},r=i.discover(t);return r.forEach(function(i){var r={label:i.id,children:[]};switch(i.type){case"widget":r.children.push(this.gatherDataTree(t[i.id]()));break;case"widgetArray":case"propertyArray":var s=t[i.id]();s&&s.forEach(function(t){r.children.push(this.gatherDataTree(t))},this)}e.children.push(r)},this),e},n.prototype.getDataTree=function(){return this.gatherDataTree(this.rootWidget())},n.prototype._rowSorting=function(t){if("type"===this.sorting()){var e=["boolean","number","string","html-color","array","object","widget","widgetArray","propertyArray"];t.sort(function(t,i){return t.type===i.type?t.id<i.id?-1:1:e.indexOf(t.type)<e.indexOf(i.type)?-1:1})}else"A-Z"===this.sorting()?t.sort(function(t,e){return t.id<e.id?-1:1}):"Z-A"===this.sorting()&&t.sort(function(t,e){return t.id>e.id?-1:1})},n.prototype.filterInputs=function(t){var e=i.discover(t);if((this.filterTags()||this.excludeTags().length>0||this.excludeParams.length>0)&&t instanceof n==!1){var r=this;return e.filter(function(e,i){for(var s=0;s<r.excludeParams().length;s++){var a,n,o,d=r.excludeParams()[s].split(".");if(d.length>2?(a=d[0],n=d[1],o=d[2]):(a=d[0],o=d[1]),-1!==t["class"]().indexOf(a))return e.id===o?!1:!0}return r.excludeTags().length>0&&e.ext&&e.ext.tags&&e.ext.tags.some(function(t){return r.excludeTags().indexOf(t)>-1})?!1:r.filterTags()&&e.ext&&e.ext.tags&&-1!==e.ext.tags.indexOf(r.filterTags())||!r.filterTags()?!0:!1})}return e},n.prototype.renderInputs=function(e,i){var r=this,s=[],n=!this.show_settings()&&this.showFields();i&&(s=this.filterInputs(i).filter(function(t){return"fields"!==t.id?!0:n}),!this.show_settings()&&this.showData()&&i.data&&s.push({id:"data",type:"array"}),this.hideNonWidgets()&&(s=s.filter(function(t){return a(t.type)})),this._rowSorting(s));var o=e.selectAll("tr.prop"+this.id()).data(s,function(t){return t.id});o.enter().append("tr").attr("class","property-wrapper prop"+this.id()).each(function(e){var s=t.select(this);if(a(e.type))s.classed("property-widget-wrapper",!0),s.append("td").attr("colspan","2");else{s.classed("property-input-wrapper",!0),s.append("td").classed("property-label",!0).text(e.id);var n=s.append("td").classed("property-input-cell",!0);r.enterInputs(i,n,e)}}),o.each(function(e){var s=t.select(this);s.classed("disabled",i[e.id+"_disabled"]&&i[e.id+"_disabled"]()),a(e.type)?r.updateWidgetRow(i,s.select("td"),e):r.updateInputs(i,e)}),o.exit().each(function(e){var s=t.select(this);a(e.type)&&r.updateWidgetRow(i,s.select("td"),null)}).remove(),o.order()},n.prototype.updateWidgetRow=function(e,i,r){var s=[];e&&r&&(s=e[r.id]()||[]);var a=s instanceof Array?s:[s];if(r&&r.ext&&r.ext.autoExpand){var o=!0,d=a.filter(function(t,i){return o=t.publishedModified(),t._owner=e,o||i===a.length-1},this),p=a.length-d.length;o&&(p=!0,d.push(new r.ext.autoExpand(e))),p&&(e[r.id](d),a=d)}var l=this,c=i.selectAll("div.propEditor"+this.id()).data(a,function(t){return t.id()});c.enter().append("div").attr("class","property-input-cell propEditor"+this.id()).each(function(e){t.select(this).attr("data-widgetid",e.id()).property("data-propEditor",(new n).label(r.id).target(this))}),c.each(function(e){t.select(this).property("data-propEditor").parentPropertyEditor(l).showFields(l.showFields()).showData(l.showData()).sorting(l.sorting()).filterTags(l.filterTags()).excludeTags(l.excludeTags()).excludeParams(l.excludeParams()).hideNonWidgets(l.hideNonWidgets()&&e._class.indexOf("layout_")>=0).widget(e).render()}),c.exit().each(function(e){var i=t.select(this);i.property("data-propEditor").widget(null).render().target(null),i.property("data-propEditor",null)}).remove()},n.prototype.setProperty=function(t,e,i){for(var r=this;r&&t;)if(r===this&&t[e](i),t.render){var s=r;t.render(function(t){s.render()}),r=null}else r=r.parentPropertyEditor(),t=r.widget()},n.prototype.enterInputs=function(e,i,r){i.classed(r.type+"-cell",!0);var s=this;switch(r.type){case"boolean":i.append("input").attr("id",this.id()+"_"+r.id).classed("property-input",!0).attr("type","checkbox").on("change",function(){s.setProperty(e,r.id,this.checked)});break;case"set":i.append("select").attr("id",this.id()+"_"+r.id).classed("property-input",!0).on("change",function(){s.setProperty(e,r.id,this.value)}).each(function(i){for(var s=t.select(this),a=e[r.id+"_options"](),n=0;n<a.length;n++)s.append("option").attr("value",a[n]).text(a[n])});break;case"array":case"object":i.append("textarea").attr("id",this.id()+"_"+r.id).classed("property-input",!0).on("change",function(){s.setProperty(e,r.id,JSON.parse(this.value))});break;default:i.append("input").attr("id",this.id()+"_"+r.id).classed("property-input",!0).on("change",function(){s.setProperty(e,r.id,this.value)}),"html-color"!==r.type||this.isIE||i.append("input").attr("id",this.id()+"_"+r.id+"_2").classed("property-input",!0).attr("type","color").on("change",function(){s.setProperty(e,r.id,this.value)})}},n.prototype.updateInputs=function(e,r){var a=t.selectAll("#"+this.id()+"_"+r.id+", #"+this.id()+"_"+r.id+"_2"),n=e?e[r.id]():"";switch(a.property("disabled",e[r.id+"_disabled"]&&e[r.id+"_disabled"]()),r.type){case"array":case"object":a.property("value",JSON.stringify(n,function(t,e){return e instanceof s?i.serialize(e):e}));break;case"boolean":a.property("checked",n);break;default:a.property("value",n)}},n});