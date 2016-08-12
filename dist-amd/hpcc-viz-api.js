// Copyright (c) 2013 Justin Palmer

!function(t,e){"function"==typeof define&&define.amd?define("src/api/I1DChart",["../common/Palette"],e):t.api_I1DChart=e(t.common_Palette)}(this,function(t){function e(){}return e.prototype._palette=t.rainbow("default"),e.prototype.click=function(t,e,o){console.log("Click:  "+JSON.stringify(t)+", "+e+", "+o)},e}),function(t,e){"function"==typeof define&&define.amd?define("src/api/I2DChart",["../common/Palette"],e):t.api_I2DChart=e(t.common_Palette)}(this,function(t){function e(){}return e.prototype._palette=t.ordinal("default"),e.prototype.click=function(t,e,o){console.log("Click:  "+JSON.stringify(t)+", "+e+", "+o)},e}),function(t,e){"function"==typeof define&&define.amd?define("src/api/IGraph",[],e):t.api_IGraph=e()}(this,function(){function t(){}return t.prototype.vertex_click=function(t){console.log("Vertex Click: "+t.id())},t.prototype.edge_click=function(t){console.log("Edge Click: "+t.id())},t}),function(t,e){"function"==typeof define&&define.amd?define("src/api/IInput",["../common/Widget"],e):t.api_IInput=e(t.common_Widget)}(this,function(t){function e(){t.call(this)}return e.prototype=Object.create(t.prototype),e.prototype.publish("name","","string","HTML name for the input"),e.prototype.publish("label","","string","Descriptive label"),e.prototype.publish("value","","string","Input Current Value"),e.prototype.publish("validate",null,"string","Input Validation"),e.prototype.isValid=function(){if(this.validate()){var t=new RegExp(this.validate());if(!t.test(this.value()))return!1}return!0},e.prototype.hasValue=function(){if("function"==typeof this.type){switch(this.type()){case"radio":case"checkbox":if(this.value()&&"false"!==this.value())return!0;break;default:if(this.value())return!0}return!1}return""!==this.value()},e.prototype.blur=function(t){},e.prototype.click=function(t){},e.prototype.change=function(t){},e.prototype.resetValue=function(t){t.value(t._inputElement[0].node().value)},e.prototype.disable=function(t){this._inputElement.forEach(function(e,o){e.attr("disabled",t?"disabled":null)})},e}),function(t,e){"function"==typeof define&&define.amd?define("src/api/INDChart",["../common/Palette"],e):t.api_INDChart=e(t.common_Palette)}(this,function(t){function e(){}return e.prototype._palette=t.ordinal("default"),e.prototype.click=function(t,e,o){console.log("Click:  "+JSON.stringify(t)+", "+e+", "+o)},e}),function(t,e){"function"==typeof define&&define.amd?define("d3-tip",["d3"],e):"object"==typeof module&&module.exports?module.exports=function(t){return t.tip=e(t),t.tip}:t.d3.tip=e(t.d3)}(this,function(t){return function(){function e(t){C=h(t),w=C.createSVGPoint(),document.body.appendChild(b)}function o(){return"n"}function n(){return[0,0]}function i(){return" "}function r(){var t=m();return{top:t.n.y-b.offsetHeight,left:t.n.x-b.offsetWidth/2}}function l(){var t=m();return{top:t.s.y,left:t.s.x-b.offsetWidth/2}}function p(){var t=m();return{top:t.e.y-b.offsetHeight/2,left:t.e.x}}function a(){var t=m();return{top:t.w.y-b.offsetHeight/2,left:t.w.x-b.offsetWidth}}function s(){var t=m();return{top:t.nw.y-b.offsetHeight,left:t.nw.x-b.offsetWidth}}function u(){var t=m();return{top:t.ne.y-b.offsetHeight,left:t.ne.x}}function c(){var t=m();return{top:t.sw.y,left:t.sw.x-b.offsetWidth}}function f(){var t=m();return{top:t.se.y,left:t.e.x}}function d(){var e=t.select(document.createElement("div"));return e.style({position:"absolute",top:0,opacity:0,"pointer-events":"none","box-sizing":"border-box"}),e.node()}function h(t){return t=t.node(),"svg"===t.tagName.toLowerCase()?t:t.ownerSVGElement}function y(){return null===b&&(b=d(),document.body.appendChild(b)),t.select(b)}function m(){for(var e=T||t.event.target;"undefined"==typeof e.getScreenCTM&&"undefined"===e.parentNode;)e=e.parentNode;var o={},n=e.getScreenCTM(),i=e.getBBox(),r=i.width,l=i.height,p=i.x,a=i.y;return w.x=p,w.y=a,o.nw=w.matrixTransform(n),w.x+=r,o.ne=w.matrixTransform(n),w.y+=l,o.se=w.matrixTransform(n),w.x-=r,o.sw=w.matrixTransform(n),w.y-=l/2,o.w=w.matrixTransform(n),w.x+=r,o.e=w.matrixTransform(n),w.x-=r/2,w.y-=l/2,o.n=w.matrixTransform(n),w.y+=l,o.s=w.matrixTransform(n),o}var g=o,v=n,x=i,b=d(),C=null,w=null,T=null;e.show=function(){var t=Array.prototype.slice.call(arguments);t[t.length-1]instanceof SVGElement&&(T=t.pop());var o,n=x.apply(this,t),i=v.apply(this,t),r=g.apply(this,t),l=y(),p=k.length,a=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.scrollLeft||document.body.scrollLeft;for(l.html(n).style({opacity:1,"pointer-events":"all"});p--;)l.classed(k[p],!1);return o=_.get(r).apply(this),l.classed(r,!0).style({top:o.top+i[0]+a+"px",left:o.left+i[1]+s+"px"}),e},e.hide=function(){var t=y();return t.style({opacity:0,"pointer-events":"none"}),e},e.attr=function(o,n){if(arguments.length<2&&"string"==typeof o)return y().attr(o);var i=Array.prototype.slice.call(arguments);return t.selection.prototype.attr.apply(y(),i),e},e.style=function(o,n){if(arguments.length<2&&"string"==typeof o)return y().style(o);var i=Array.prototype.slice.call(arguments);return t.selection.prototype.style.apply(y(),i),e},e.direction=function(o){return arguments.length?(g=null==o?o:t.functor(o),e):g},e.offset=function(o){return arguments.length?(v=null==o?o:t.functor(o),e):v},e.html=function(o){return arguments.length?(x=null==o?o:t.functor(o),e):x},e.destroy=function(){return b&&(y().remove(),b=null),e};var _=t.map({n:r,s:l,e:p,w:a,nw:s,ne:u,sw:c,se:f}),k=_.keys();return e}}),define("css!src/api/ITooltip",[],function(){}),function(t,e){"function"==typeof define&&define.amd?define("src/api/ITooltip",["d3","d3-tip","../common/Widget","css!./ITooltip"],e):t.api_ITooltip=e(t.d3,t.d3.tip,t.common_Widget)}(this,function(t,e,o,n,i){function r(){if(o.call(this),this._valueFormatter=t.format(this.tooltipValueFormat()),this.layerEnter){var e=this.layerEnter;this.layerEnter=function(t,o,n){this.tooltipEnter(o),e.apply(this,arguments)};var n=this.layerUpdate;this.layerUpdate=function(t){n.apply(this,arguments),this.tooltipUpdate()};var i=this.layerExit;this.layerExit=function(t){i.apply(this,arguments),this.tooltipExit()}}else{var r=this.enter;this.enter=function(t,e){this.tooltipEnter(e),r.apply(this,arguments)};var l=this.update;this.update=function(t,e){l.apply(this,arguments),this.tooltipUpdate()};var p=this.exit;this.exit=function(t,e){p.apply(this,arguments),this.tooltipExit()}}}r.prototype=Object.create(o.prototype),r.prototype.publish("tooltipStyle","default","set","Style",["default","none"],{}),r.prototype.publish("tooltipValueFormat",",.2f","string","Value Format",null,{}),r.prototype.publish("tooltipSeriesColor","#EAFFFF","html-color","Series Color",null,{}),r.prototype.publish("tooltipLabelColor","#CCFFFF","html-color","Label Color",null,{}),r.prototype.publish("tooltipValueColor","white","html-color","Value Color",null,{}),r.prototype.publish("tooltipTick",!0,"boolean","Show tooltip tick",null,{}),r.prototype.publish("tooltipOffset",8,"number","Offset from the cursor",null,{}),r.prototype.tooltipEnter=function(t){var o=this;this.tooltip=e().attr("class","d3-tip").offset(function(t){switch(o.tooltip.direction()()){case"e":return[0,o.tooltipOffset()];default:return[-o.tooltipOffset(),0]}}),t.call(this.tooltip)},r.prototype.tooltipUpdate=function(){var t=this.tooltip.attr("class");t=t.split(" notick").join("")+(this.tooltipTick()?"":" notick")+("none"===this.tooltipStyle()?" hidden":""),this.tooltip.attr("class",t)},r.prototype.tooltipExit=function(){this.tooltip&&this.tooltip.destroy()};var l=r.prototype.tooltipValueFormat;return r.prototype.tooltipValueFormat=function(e){var o=l.apply(this,arguments);return arguments.length&&(this._valueFormatter=t.format(e)),o},r.prototype._tooltipHTML=function(t){return t},r.prototype.tooltipHTML=function(t){return this.tooltip.html(t)},r.prototype.tooltipFormat=function(t){switch(t=t||{},t.label=t.label||"",t.series=t.series||"",t.value instanceof Date?t.value=t.value||"":t.value=this._valueFormatter(t.value)||"",this.tooltipStyle()){case"none":break;default:return t.series?"<span style='color:"+this.tooltipSeriesColor()+"'>"+t.series+"</span> / <span style='color:"+this.tooltipLabelColor()+"'>"+t.label+"</span>:  <span style='color:"+this.tooltipValueColor()+"'>"+t.value+"</span>":"<span style='color:"+this.tooltipLabelColor()+"'>"+t.label+"</span>:  <span style='color:"+this.tooltipValueColor()+"'>"+t.value+"</span>"}},r}),function(t,e){"function"==typeof define&&define.amd?define("src/api/ITree",["../common/Palette"],e):t.api_ITree=e(t.common_Palette)}(this,function(t){function e(){}return e.prototype._palette=t.ordinal("default"),e.prototype.click=function(t){console.log("Click:  "+t.label)},e}),function(t){var e=document,o="appendChild",n="styleSheet",i=e.createElement("style");i.type="text/css",e.getElementsByTagName("head")[0][o](i),i[n]?i[n].cssText=t:i[o](e.createTextNode(t))}('.d3-tip,.d3-tip:after{line-height:1;pointer-events:none!important}.d3-tip{font-weight:700;padding:12px;background:rgba(0,0,0,.66);color:#fff;border-radius:2px;z-index:10}.d3-tip.hidden{visibility:hidden}.d3-tip:after{box-sizing:border-box;display:inline;font-size:10px;width:100%;color:rgba(0,0,0,.66);position:absolute}.d3-tip.n:after{content:"\\25BC";margin:-1px 0 0;top:100%;left:0;text-align:center}.d3-tip.e:after{content:"\\25C0";margin:-4px 0 0;top:50%;left:-8px}.d3-tip.s:after{content:"\\25B2";margin:0 0 1px;top:-8px;left:0;text-align:center}.d3-tip.w:after{content:"\\25B6";margin:-4px 0 0 -1px;top:50%;left:100%}.d3-tip.notick:after{content:""!important}.common_Widget .over{stroke:rgba(0,0,0,.66);opacity:.66}'),define("hpcc-viz-api",function(){});