!function(t,o){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","./HipieDDLMixin"],o):t.marshaller_TargetMarshaller=o(t.d3,t.common_HTMLWidget,t.marshaller_HipieDDLMixin)}(this,function(t,o,e){function i(){o.call(this),e.call(this),this._tag="div"}return i.prototype=Object.create(o.prototype),i.prototype.constructor=i,i.prototype.mixin(e),i.prototype._class+=" marshaller_TargetMarshaller",i.prototype.publish("configObject",{},"object","TargetMarshaller setup object",null,{tags:["Basic"]}),i.prototype.content=function(){return[]},i.prototype.populateContent=function(){var t=this.configObject();for(var o in this._ddlDashboards)this._ddlDashboards[o].visualizations.forEach(function(e,i){var r=t[e.id];void 0!==r?(void 0!==r.target?e.newWidgetSurface.target(r.target):(console.log("Target not specified for the following:"),console.log("this._ddlDashboards["+o+"].visualizations["+i+"].id = "+e.id)),"function"==typeof r.callback?r.callback(e.widget,e.newWidgetSurface):(console.warn("Callback not specified for the following:"),console.log("this._ddlDashboards["+o+"].visualizations["+i+"].id = "+e.id))):(console.warn("Config not specified for the following:"),console.log("this._ddlDashboards["+o+"].visualizations["+i+"].id = "+e.id))},this)},i.prototype.enter=function(t,e){o.prototype.enter.apply(this,arguments)},i.prototype.render=function(t){return this.marshallerRender(o.prototype,t),this},i.prototype.commsError=function(t,o){alert("Comms Error:\n"+t+"\n"+o)},i});