(function(e,t){typeof define=="function"&&define.amd?define(["d3","./GMap","../common/SVGWidget"],t):e.map_GMapLayered=t(e.d3,e.map_GMap,e.common_SVGWidget)})(this,function(e,t,n){function s(){n.call(this),this._drawStartPos="origin"}function o(){t.call(this),this._layers=[]}var r=1/16,i=4096;return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.prototype._class+=" map_Layered",s.prototype.enter=function(t,r){n.prototype.enter.apply(this,arguments),this._zoom=e.behavior.zoom().translate([0,0]).scale(1),this._d3GeoProjection=e.geo.mercator().scale(i/2/Math.PI).translate([0,0]),this._d3GeoPath=e.geo.path().projection(this._d3GeoProjection)},s.prototype.update=function(e,t){n.prototype.update.apply(this,arguments),this._hasZoomed=!0,this._hasRendered?this.zoomed():this.fullRender()},s.prototype.fullRender=function(){if(!this._hasZoomed)return;this._hasRendered=!0,this.size(this.gmap.size());var t=this._element.selectAll(".layerContainer").data(this.gmap.layers(),function(e){return e.id()}),n=this;t.enter().append("g").attr("class","layerContainer").each(function(t){var r=e.select(this),i=n._parentOverlay.append("div");t.layerEnter(n,r,i)}),t.each(function(e){e.layerUpdate(n)}),t.exit().each(function(e){e.layerExit(n)}).remove(),this.zoomed()},s.prototype.zoomed=function(){var e=this.gmap._overlay.getProjection();if(e){var t=new google.maps.LatLng(0,0),n=e.fromLatLngToDivPixel(t),i=parseFloat(this.surface.widgetX()),s=parseFloat(this.surface.widgetY()),o=[n.x-i,n.y-s],u=this.gmap._googleMap.getZoom();this._zoom.scale(r*(1<<u)).translate(o);var a=this._element.selectAll(".layerContainer"),f=this;a.each(function(e){e.layerZoomed(f)})}},s.prototype.projection=function(){return"mercator"},s.prototype.project=function(e,t){var n=this.surface.project(e,t);return[n.x,n.y]},o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.prototype._class+=" map_GMapLayered",o.prototype.layers=function(e){return arguments.length?(this._layers=e,this):this._layers},o.prototype.enter=function(){t.prototype.enter.apply(this,arguments),this.layered=new s,this.layered.gmap=this,this.layered.surface=this._viewportSurface,this.layered.surface.widget(this.layered).render()},o.prototype.render=function(e){var n=t.prototype.render.apply(this,arguments);return this.layered.fullRender(),n},o});