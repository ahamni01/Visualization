!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","../common/PropertyExt","../api/ITree","css!./Treemap"],e):t.tree_Treemap=e(t.d3,t.common_HTMLWidget,t.common_PropertyExt,t.api_ITree)}(this,function(t,e,n,i){function r(t){n.call(this),this._owner=t}function o(t){e.call(this),i.call(this)}return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype._class+=" tree_Dendrogram.Column",r.prototype.publish("column",null,"set","Field",function(){return this._owner?this._owner.columns():[]},{optional:!0}),o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.prototype._class+=" tree_Treemap",o.prototype["implements"](i.prototype),o.prototype.Column=r,o.prototype.publish("paletteID","default","set","Palette ID",o.prototype._palette["switch"](),{tags:["Basic","Shared"]}),o.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),o.prototype.publish("mappings",[],"propertyArray","Source Columns",null,{autoExpand:r}),o.prototype.publish("aggrType",null,"set","Aggregation Type",[null,"mean","median","sum","min","max"],{optional:!0}),o.prototype.publish("aggrColumn",null,"set","Aggregation Field",function(){return this.columns()},{optional:!0,disable:function(t){return!t.aggrType()}}),o.prototype.publish("fontSize",null,"number","Font Size",null,{optional:!0}),o.prototype.publish("transitionDuration",250,"number","Transition Duration"),o.prototype.treemapData=function(){function t(e){if("number"==typeof e.values)return{label:e.key,size:e.values};var n=e.values.filter(function(t){return!(t instanceof Array)}).map(function(e){return t(e)}),i={label:e.key};return n.length?i.children=n:i.size=22,i}if(!this.mappings().filter(function(t){return t.column()}).length)return this.data();var e=this._db.aggregateView(this.mappings().map(function(t){return t.column()}),this.aggrType(),this.aggrColumn()),n={key:"root",values:e.entries()};return t(n)},o.prototype.enter=function(n,i){e.prototype.enter.apply(this,arguments),this._d3Treemap=t.layout.treemap().value(function(t){return t.size||50}),this._elementDIV=i.append("div")},o.prototype.update=function(t,n){function i(t){if(t.children)return null;for(var e=t.label+" ("+t.value+")";t.parent&&t.parent.parent;)e=t.parent.label+" -> "+e,t=t.parent;return e}function r(t){this.style("left",function(t){return t.x+Math.max(0,t.dx-1)/2+"px"}).style("top",function(t){return t.y+Math.max(0,t.dy-1)/2+"px"}).style("width",function(t){return"0px"}).style("height",function(t){return"0px"})}function o(){this.style("left",function(t){return t.x+"px"}).style("top",function(t){return t.y+"px"}).style("width",function(t){return Math.max(0,t.dx-1)+"px"}).style("height",function(t){return Math.max(0,t.dy-1)+"px"})}e.prototype.update.apply(this,arguments),this._palette=this._palette["switch"](this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id()));var l=this._d3Treemap.size([this.width(),this.height()]).nodes(this.treemapData());this._elementDIV.style("font-size",this.fontSize_exists()?this.fontSize()+"px":null).style("line-height",this.fontSize_exists()?this.fontSize()+2+"px":null);var a=this,p=this._elementDIV.selectAll(".node").data(l);p.enter().append("div").attr("class","node").call(r),p.attr("title",i).text(function(t){return t.children?null:t.label}).style("background",function(t){return t.children?a._palette(t.label):null}).transition().duration(this.transitionDuration()).style("opacity",function(t){return t.children?1:null}).call(o),p.exit().transition().duration(this.transitionDuration()).style("opacity",0).remove()},o.prototype.exit=function(t,n){e.prototype.exit.apply(this,arguments)},o});