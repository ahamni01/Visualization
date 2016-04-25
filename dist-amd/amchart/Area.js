(function(e,t){typeof define=="function"&&define.amd?define(["d3","./CommonSerial","amcharts.serial","../api/INDChart","css!./Area"],t):e.amchart_Area=t(e.d3,e.amchart_CommonSerial,e.amcharts,e.api_INDChart)})(this,function(e,t,n,r){function i(){t.call(this),this._tag="div",this._gType="line"}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.prototype._class+=" amchart_Area",i.prototype.implements(r.prototype),i.prototype.publish("paletteID","default","set","Palette ID",i.prototype._palette.switch(),{tags:["Basic","Shared"]}),i.prototype.publish("stacked",!1,"boolean","Stack Chart",null,{tags:["Basic","Shared"]}),i.prototype.publish("fillOpacity",.7,"number","Opacity of The Fill Color",null,{min:0,max:1,step:.001,inputType:"range",tags:["Intermediate","Shared"]}),i.prototype.publish("stackType","regular","set","Stack Type",["none","regular","100%"],{tags:["Basic"]}),i.prototype.publish("bulletSize",6,"number","Bullet Size",null,{tags:["Intermediate"]}),i.prototype.publish("bulletType","round","set","Bullet Type",["none","round","square","triangleUp","triangleDown","triangleLeft","triangleRight","bubble","diamond"],{tags:["Basic"]}),i.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments)},i.prototype.updateChartOptions=function(){return t.prototype.updateChartOptions.apply(this,arguments),this.stacked()?this._chart.valueAxes[0].stackType=this.stackType():this._chart.valueAxes[0].stackType="none",this.buildGraphs(this._gType),this._chart},i.prototype.buildGraphs=function(e){function s(e,t){return e.fillAlphas=this.fillOpacity(),e.bullet=this.bulletType(),e.bulletSize=this.bulletSize(),e}this._chart.graphs=[];for(var n=0;n<this.columns().length-1;n++){var r=t.prototype.buildGraphObj.call(this,e,n),i=s.call(this,r,n);this._chart.addGraph(i)}},i.prototype.update=function(e,n){t.prototype.update.apply(this,arguments),this.updateChartOptions(),this._chart.validateNow(),this._chart.validateData()},i});