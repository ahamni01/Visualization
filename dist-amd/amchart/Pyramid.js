!function(t,e){"function"==typeof define&&define.amd?define(["d3","./CommonFunnel","amcharts.funnel","../api/I2DChart"],e):t.amchart_Pyramid=e(t.d3,t.amchart_CommonFunnel,t.amcharts,t.api_I2DChart)}(this,function(t,e,p,o){function a(){e.call(this),this._tag="div"}return a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.prototype._class+=" amchart_Pyramid",a.prototype["implements"](o.prototype),a.prototype.publish("paletteID","default","set","Palette ID",a.prototype._palette["switch"](),{tags:["Basic","Shared"]}),a.prototype.enter=function(t,p){e.prototype.enter.apply(this,arguments)},a.prototype.updateChartOptions=function(){e.prototype.updateChartOptions.apply(this,arguments)},a.prototype.update=function(t,p){e.prototype.update.apply(this,arguments)},a});