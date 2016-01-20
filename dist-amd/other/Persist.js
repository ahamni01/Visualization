(function(e,t){typeof define=="function"&&define.amd?define(["../common/Utility"],t):e.other_Persist=t(e.common_Utility)})(this,function(e){function t(e){var t=[];return e.publishedProperties().forEach(function(n){var r=e,i=n;if(i.type){while(i.type==="proxy")r=r[i.proxy],i=r.publishedProperty(i.method);i.id!==e.publishedProperty(n.id).id&&(i=JSON.parse(JSON.stringify(i)),i.id=e.publishedProperty(n.id).id),t.push(i)}},this),t}function n(e,r){if(!e)return;r(e);var i=t(e);for(var s=0;s<i.length;++s){var o=i[s];switch(o.type){case"widget":n(e[o.id](),r);break;case"widgetArray":case"propertyArray":var u=e[o.id]();u.forEach(function(e){n(e,r)})}}}function r(e,t){if(!e)return;e.forEach(function(e){n(e,t)})}function i(e,n,r){var i=t(e);for(var s=0;s<i.length;++s){var o=i[s];(typeof n!="function"||!n(e,o))&&r(e,o)}}function s(e,t,r){n(e,function(e){i(e,t,r)})}return{discover:t,widgetWalker:n,widgetArrayWalker:r,propertyWalker:i,widgetPropertyWalker:s,serializeTheme:function(e,t){return JSON.stringify(this.serializeThemeToObject(e,t))},serializeThemeToObject:function(e,t){function r(e,t){var n=!1;for(var r in t)if(e.indexOf(t[r])!==-1){n=!0;break}return n}t=t||["surface","Color","Font","palette"];var n={};return s(e,null,function(e,i){if(e[i.id+"_modified"]()||e.publishedProperties(i.id).origDefaultValue!==e.publishedProperties(i.id).defaultValue)if(r(i.id,t)){var s=e._class.trim().split(" ");for(var o in s){n[s[o]]===undefined&&(n[s[o]]={});if(n[s[o]][i.id]===undefined){n[s[o]][i.id]=e[i.id]();break}if(n[s[o]][i.id]===e[i.id]())break}}}),n},removeTheme:function(e,t){s(e,null,function(e,t){e.publishedProperties(t.id).defaultValue=e.publishedProperties(t.id).origDefaultValue}),typeof t=="function"&&t.call(this)},applyTheme:function(e,t,n){var r=this;s(e,null,function(e,n){switch(n.type){case"widget":return r.applyTheme(e[n.id](),t),!0;case"widgetArray":var i=e[n.id]();return i.forEach(function(e){r.applyTheme(e,t)},this),!0;default:e.applyTheme(t)}}),typeof n=="function"&&n.call(this)},serializeToObject:function(e,t,n){var r={__version:3,__class:e.classID(),__properties:{}};e._id.indexOf("_w")!==0&&(r.__id=e._id);var s=this;i(e,t,function(e,t){if(e[t.id+"_modified"]())switch(t.type){case"widget":return r.__properties[t.id]=s.serializeToObject(e[t.id](),null,n),!0;case"widgetArray":case"propertyArray":r.__properties[t.id]=[];var i=e[t.id]();return i.forEach(function(e,i){r.__properties[t.id].push(s.serializeToObject(e,null,n))}),!0;default:r.__properties[t.id]=e[t.id]()}});if(e.classID()==="marshaller_Graph"){var o=e.data().vertices;o&&(this.__vertices=o.map(function(e){return this.serializeToObject(e,null,n)},this))}return n&&e.data&&(r.__data={},r.__data.data=e.data()),r},serialize:function(e,t,n){return JSON.stringify(this.serializeToObject(e,t,n))},deserializeFromObject:function(e,t,n){var r=0,i=this;s(e,null,function(e,n){e[n.id+"_reset"]();if(t.__properties[n.id]!==undefined)switch(n.type){case"widget":++r;var s=n.id;i.create(t.__properties[n.id],function(t){e[s](t),--r});break;case"widgetArray":case"propertyArray":var o=n.id,u=t.__properties[n.id];if(u.length){++r;var a=[];a.length=u.length;var f=0;u.forEach(function(t,n){++f,i.create(t,function(e){a[n]=e,--f});var s=setInterval(function(){f<=0&&(clearInterval(s),f=undefined,e[o](a),--r)},20)})}break;default:e[n.id](t.__properties[n.id])}});var o=setInterval(function(){if(r<=0){clearInterval(o),r=undefined;if(t.__data)for(var i in t.__data)e[i](t.__data[i]);n(e)}},20)},deserialize:function(e,t,n){typeof t=="string"&&(t=JSON.parse(t)),t.__id&&t.__id.indexOf("_w")!==0&&e._id!==t.__id&&console.log("Deserialize:  IDs do not match - "+e._id),this.deserializeFromObject(e,t,n)},create:function(t,n){typeof t=="string"&&(t=JSON.parse(t));var r=this;e.requireWidget(t.__class).then(function(e){var i=new e;t.__id&&t.__id.indexOf("_w")!==0&&t.__id.indexOf("_pe")!==0&&(i._id=t.__id),r.deserializeFromObject(i,t,n)})},clone:function(e,t){this.create(this.serializeToObject(e,[],!0),t)}}});