!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","d3-bullet","css!./Bullet"],e):t.chart_Bullet=e(t.d3,t.common_HTMLWidget,t.d3.bullet)}(this,function(t,e,l){function n(t){e.call(this)}return l=l||t.bullet||window.d3.bullet,n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype._class+=" chart_Bullet",n.prototype.publish("titleColumn",null,"set","Title Column",function(){return this.columns()},{optional:!0}),n.prototype.publish("subtitleColumn",null,"set","Subtitle Column",function(){return this.columns()},{optional:!0}),n.prototype.publish("rangesColumn",null,"set","Ranges Column",function(){return this.columns()},{optional:!0}),n.prototype.publish("measuresColumn",null,"set","Measures Column",function(){return this.columns()},{optional:!0}),n.prototype.publish("markersColumn",null,"set","Markers Column",function(){return this.columns()},{optional:!0}),n.prototype.bulletData=function(){function t(t,l){var n=e.indexOf(l);return n>=0?t[n]instanceof Array?t[n]:[t[n]]:[]}var e=this.columns();return this.data().map(function(e){return{title:t(e,this.titleColumn()),subtitle:t(e,this.subtitleColumn()),ranges:t(e,this.rangesColumn()),measures:t(e,this.measuresColumn()),markers:t(e,this.markersColumn())}},this)},n.prototype.enter=function(l,n){e.prototype.enter.apply(this,arguments),t.select(l.parentNode).style("overflow","auto")},n.prototype.update=function(n,o){e.prototype.update.apply(this,arguments);var r={top:8,right:16,bottom:20,left:16},s=this.width()-r.left-r.right,u=50-r.top-r.bottom,i=o.selectAll("svg").data(this.bulletData());i.enter().append("svg").attr("class","bullet").each(function(e){var l=t.select(this),n=l.append("g").attr("class","bulletBar"),o=n.append("g").attr("class","bulletTitle");o.append("text").attr("class","title"),o.append("text").attr("class","subtitle").attr("dy","1em")});var a=i.select(".bulletTitle").style("text-anchor","end").attr("transform","translate(-6,"+u/2+")");a.select(".title").text(function(t){return t.title}),a.select(".subtitle").text(function(t){return t.subtitle});var p=0;a.each(function(){var t=this.getBBox();t.width>p&&(p=t.width)});var c=(new l).width(s-p).height(u);i.attr("width",s).attr("height",u+r.top+r.bottom),i.select(".bulletBar").attr("transform","translate("+(p+r.left)+","+r.top+")").call(c),i.exit().remove()},n.prototype.exit=function(t,l){e.prototype.exit.apply(this,arguments)},n});