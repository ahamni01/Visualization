!function(t,a){"function"==typeof define&&define.amd?define(["d3","../common/Class","../common/PropertyExt","../common/Utility","./HipieDDL","../other/Persist","../layout/Surface","./FlyoutButton"],a):t.marshaller_HipieDDLMixin=a(t.d3,t.common_Class,t.common_PropertyExt,t.common_PropertyExt,t.common_Utility,t.other_Persist,t.layout_Surface,t.marshaller_FlyoutButton)}(this,function(t,a,i,e,r,s,o,n){function l(){a.call(this),i.call(this)}l.prototype=Object.create(a.prototype),l.prototype.constructor=l,l.prototype.mixin(i),l.prototype._class+=" marshaller_HipieDDLMixin",l.prototype.publish("ddlUrl","","string","DDL URL",null,{tags:["Private"]}),l.prototype.publish("databomb","","string","Data Bomb",null,{tags:["Private"]}),l.prototype.publish("proxyMappings",{},"object","Proxy Mappings",null,{tags:["Private"]}),l.prototype.publish("clearDataOnUpdate",!0,"boolean","Clear data prior to refresh",null),l.prototype.publish("propogateClear",!1,"boolean","Propogate clear to dependent visualizations",null),l.prototype.publish("missingDataString","***MISSING***","string","Missing data display string"),l.prototype.selection=function(t){return arguments.length?(this._marshaller&&this._marshaller.fetchData(t,!0),this):this._marshaller?this._marshaller.request:null},l.prototype._gatherDashboards=function(t,a){a instanceof Object||a&&(a=JSON.parse(a)),this._ddlDashboards=[],this._ddlVisualizations=[],this._ddlPopupVisualizations=[];var i=this,e=null;t.accept({visit:function(t){t instanceof r.Dashboard?(e={dashboard:t,visualizations:[],popupVisualizations:[]},i._ddlDashboards.push(e)):t instanceof r.DataSource?t.databomb&&a[t.id]&&t.comms.databomb(a[t.id]):t instanceof r.Output?t.dataSource.databomb&&t.dataSource.comms.databombOutput(t.from,t.id):t instanceof r.Visualization&&t.widget&&(t.properties.flyout?(e.popupVisualizations.push(t),i._ddlPopupVisualizations.push(t)):(e.visualizations.push(t),i._ddlVisualizations.push(t)))}})},l.prototype._marshallerRender=function(a,i){function e(){h._gatherDashboards(h._marshaller,h.databomb()),h._ddlVisualizations.forEach(function(t){p.remove(t.id),h._marshaller.widgetMappings().get(t.id)||(t.newWidgetSurface=null,t.widget instanceof o||"composite_MegaChart"===t.widget.classID()?t.newWidgetSurface=t.widget:t.newWidgetSurface=(new o).widget(t.widget),t.newWidgetSurface.title(t.title),t.widget.size({width:0,height:0}))}),h._ddlPopupVisualizations.forEach(function(t){p.remove(t.id);var a=t.events.getUpdatesVisualizations();a.forEach(function(a){switch(a.widget.classID()){case"composite_MegaChart":var i=(new n).title(t.title).widget(t.widget);a.widget.toolbarWidgets().push(i)}})}),p.forEach(function(t,a){h.clearContent(a)}),h.populateContent(),a.render.call(h,function(t){for(var a in h._ddlDashboards)for(var e in h._ddlDashboards[a].dashboard.datasources)h._ddlDashboards[a].dashboard.datasources[e].fetchData({},!0);var r=0,s=setInterval(function(){(h._marshaller.commsDataLoaded()||++r>120)&&(clearInterval(s),i&&i(t))},500)})}if(""===this.ddlUrl()||this.ddlUrl()===this._prev_ddlUrl&&this.databomb()===this._prev_databomb)return this._marshaller&&this._marshaller.proxyMappings(this.proxyMappings()).clearDataOnUpdate(this.clearDataOnUpdate()).propogateClear(this.propogateClear()).missingDataString(this.missingDataString()),a.render.call(this,function(t){i&&i(t)});this._prev_ddlUrl&&this._prev_ddlUrl!==this.ddlUrl()&&this.clearContent(),this._prev_ddlUrl=this.ddlUrl(),this._prev_databomb=this.databomb();var l=[];s.widgetArrayWalker(this.content(),function(t){l.push(t)});var d=t.map(l,function(t){return t.id()}),p=t.map(l.filter(function(t){return 0!==t.id().indexOf(t._idSeed)&&0!==t.id().indexOf("_pe")}),function(t){return t.id()}),h=this;this._marshaller=(new r.Marshaller).proxyMappings(this.proxyMappings()).clearDataOnUpdate(this.clearDataOnUpdate()).propogateClear(this.propogateClear()).missingDataString(this.missingDataString()).widgetMappings(d).on("commsEvent",function(t,a){h.commsEvent.apply(h,arguments)}).on("vizEvent",function(){h.vizEvent.apply(h,arguments)}),this.firstRender=!0,"["===this.ddlUrl()[0]||"{"===this.ddlUrl()[0]?this._marshaller.parse(this.ddlUrl(),e):this._marshaller.url(this.ddlUrl(),e)},l.prototype.dashboards=function(){var t={};for(var a in this._marshaller.dashboards)t[a]={},this._marshaller.dashboards[a].visualizations.forEach(function(i){t[a][i.id]=i.widget},this);return t},l.prototype.visualizations=function(){return this._marshaller._visualizationArray.map(function(t){return t.newWidgetSurface||t.widget})};var d="<!doctype html><html><head><meta charset='utf-8'><script src='http://viz.hpccsystems.com/v1.14.0-rc5/dist-amd/hpcc-viz.js'></script><script src='http://viz.hpccsystems.com/v1.14.0-rc5/dist-amd/hpcc-viz-common.js'></script></head><body style='padding:0px; margin:0px; overflow:hidden'><div id='placeholder' style='width:100%; height:100vh'></div><script>   require(['src/other/Persist'], function (Persist) {\n       Persist.create({STATE}, function(widget) {\n           widget\n               .target('placeholder')\n               .ddlUrl('{DDL}')\n               .databomb('{DATABOMB}')\n               .render()\n           ;\n       });\n   });</script></body></html>";return l.prototype.generateTestPage=function(){if(this._marshaller){var t=this,a=s.serialize(t,function(t,a){return"databomb"===a.id||"ddlUrl"===a.id?!0:!1}),i=this._marshaller.createDatabomb(),r=d.replace("{VERSION}",t.version()).replace("{STATE}",a).replace("{DDL}",t._marshaller._json.replace("WUID","databomb")).replace("{DATABOMB}",JSON.stringify(i));e.downloadBlob("html",r,"test")}},l.prototype.vizEvent=function(t,a,i,e,r){},l.prototype.commsEvent=function(t,a,i,e){},l});