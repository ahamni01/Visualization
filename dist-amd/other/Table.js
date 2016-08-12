!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","./Paginator","../common/Utility","../common/Widget","css!./Table"],e):t.other_Table=e(t.d3,t.common_HTMLWidget,t.other_Paginator,t.common_Utility,t.common_Widget)}(this,function(t,e,o,i,l){function s(){e.call(this),this._tag="div",this.columns([]),this._paginator=new o,this._selectionBag=new i.Selection,this._selectionPrevClick=null,this._paginatorTableSpacing=4}function n(t,e){return e instanceof l?"Widget with class: "+e.classID():e}s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.prototype._class+=" other_Table",s.prototype.publish("renderHtmlDataCells",!1,"boolean","enable or disable HTML within cells",null,{tags:["Private"]}),s.prototype.publish("pagination",!0,"boolean","Enable or disable pagination",null,{tags:["Private"]}),s.prototype.publish("paginationLimit",null,"number","Maximum number of rows allowed before pagination defaults to on",null,{tags:["Private"]}),s.prototype.publishProxy("itemsPerPage","_paginator"),s.prototype.publishProxy("pageNumber","_paginator","pageNumber",1),s.prototype.publishProxy("adjacentPages","_paginator"),s.prototype.publish("topN",null,"number","Total number or rows of data to be displayed in the table",null,{tags:["Private"]}),s.prototype.publish("pivot",!1,"boolean","Pivot Table"),s.prototype.publish("showHeader",!0,"boolean","Show or hide the table header",null,{tags:["Private"]}),s.prototype.publish("fixedHeader",!0,"boolean","Enable or disable fixed table header",null,{tags:["Private"]}),s.prototype.publish("fixedColumn",!1,"boolean","Enable or disable fixed first column",null,{tags:["Private"]}),s.prototype.publish("multiSelect",!1,"boolean","Multiple Selection",null,{tags:["Basic"]}),s.prototype.publish("fixedSize",!1,"boolean","Fix Size to Min Width/Height"),s.prototype.publish("theadFontSize",null,"string","Table head font size",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFontSize",null,"string","Table body font size",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootFontSize",null,"string","Table body font size",null,{tags:["Basic"],optional:!0}),s.prototype.publish("theadFontColor",null,"html-color","Table head font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFontColor",null,"html-color","Table body font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootFontColor",null,"html-color","Table body font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("theadFontFamily",null,"string","Table head font family",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFontFamily",null,"string","Table body font family",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootFontFamily",null,"string","Table body font family",null,{tags:["Basic"],optional:!0}),s.prototype.publish("theadCellBorderColor",null,"html-color","Table head cell border color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootCellBorderColor",null,"html-color","Table head cell border color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("theadRowBackgroundColor",null,"html-color","Table head row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootRowBackgroundColor",null,"html-color","Table head row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyCellBorderColor",null,"html-color","Table body cell border color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyRowBackgroundColor",null,"html-color","Table body row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFirstColFontColor",null,"html-color","Table body first column font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFirstColBackgroundColor",null,"html-color","Table body first column background color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyHoverRowFontColor",null,"html-color","Table body hover row font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyHoverRowBackgroundColor",null,"html-color","Table body hover row background color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodySelectedRowFontColor",null,"html-color","Table body selected row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodySelectedRowBackgroundColor",null,"html-color","Table body selected row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tableZebraColor",null,"html-color","Table zebra row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("totalledColumns",[],"array","Array of indices of the columns to be totalled",null,{tags:["Basic"],optional:!0,disable:function(t){return t.pivot()}}),s.prototype.publish("totalledLabel",null,"string","Adds a label to the first column of the 'Totalled' row",null,{tags:["Basic"],optional:!0,disable:function(t){return t.pivot()}}),s.prototype.publish("stringAlign","left","set","Array of alignment positions for strings",["left","right","center"],{tags:["Basic"],optional:!0}),s.prototype.publish("numberAlign","right","set","Array of alignment positions for numbers",["left","right","center"],{tags:["Basic"],optional:!0}),s.prototype.publish("minWidgetWidth",320,"number","Minimum width of a child widget",null,{tags:["Basic"],optional:!0}),s.prototype.publish("minWidgetHeight",240,"number","Minimum height of a child widget",null,{tags:["Basic"],optional:!0}),s.prototype.publish("sortByFieldIndex",null,"number","Index for the field/column to sort the data",null,{tags:["Basic"],optional:!0}),s.prototype.publish("descending",!1,"boolean","Direction for sorting the data: ascending (true) or descending (false)",null,{tags:["Basic"],optional:!0}),s.prototype.size=function(t){var o=e.prototype.size.apply(this,arguments);if(arguments.length&&this.tableDiv){var i=this.showHeader()&&this.fixedHeader()?this.thead.property("offsetHeight"):0;this.tableDiv.style("width",this._size.width+"px").style("height",this._size.height-i+"px"),this._element.style("width",this._size.width+"px").style("height",this._size.height+"px")}return o},s.prototype.tableColumns=function(t){var e=s.prototype.columns.apply(this,arguments);return!arguments.length&&this.pivot()?this._db.column(0):e},s.prototype.tableData=function(t){var e=s.prototype.data.apply(this,arguments);return!arguments.length&&this.pivot()?this._db.columns().filter(function(t,e){return e>0}):e};var r={transform:function(t){return t}};return s.prototype.field=function(t,e){return this.pivot()?0===e?r:this.fields()[t+1]:-1===t?r:this.fields()[e]},s.prototype.enter=function(t,o){e.prototype.enter.apply(this,arguments),this._parentElement.style("overflow","hidden"),this.tableDiv=o.append("div").attr("class","tableDiv"),this.table=this.tableDiv.append("table"),this.fixedHead=o.append("div").classed("header-wrapper",!0),this.fixedHeadTable=this.fixedHead.append("table"),this.fixedThead=this.fixedHeadTable.append("thead").append("tr"),this.unfixedThead=this.table.append("thead").append("tr"),this.tbody=this.table.append("tbody"),this.tfoot=this.table.append("tfoot").append("tr"),this.fixedCol=o.append("div").classed("rows-wrapper",!0),this.fixedColTable=this.fixedCol.append("table"),this.fixedColHead=this.fixedColTable.append("thead"),this.fixedColHeadRow=this.fixedColHead.append("tr"),this.fixedColBody=this.fixedColTable.append("tbody"),this.fixedColFoot=this.fixedColTable.append("tfoot"),this.fixedColFootRow=this.fixedColFoot.append("tr"),this.tableDiv.style("overflow","auto")},s.prototype.update=function(o,s){function n(){var t=z.width;A=a.tbody.property("offsetWidth")+1,D=t>A?A:t,D=D}function r(){W=a.tbody.property("offsetHeight")+T,W=W}e.prototype.update.apply(this,arguments);var a=this,d=a.tableColumns(),h=a.tableData();this.element().selectAll("table,tbody,th,td").style("width",null),!this.sortByFieldIndex_exists()||this._prevSortByFieldIndex===this.sortByFieldIndex()&&this._prevDescending===this.descending()||(i.multiSort(h,[{idx:this.sortByFieldIndex(),reverse:this.descending()}]),this._prevSortByFieldIndex=this.sortByFieldIndex(),this._prevDescending=this.descending()),this._hasChildWidgets=!1,this.fixedHeader()?this.thead=this.fixedThead:this.thead=this.unfixedThead,this.fixedHead.style("display",this.fixedHeader()?"table-row":"none"),this.unfixedThead.style("display",this.fixedHeader()?"none":"table-row");var p=this.thead.selectAll("th").data(this.showHeader()?d:[]);if(p.enter().append("th").each(function(e){var o=t.select(this);o.append("span").attr("class","thText"),o.append("span").attr("class","thIcon")}).on("click",function(t,e){a.headerClick(t,e)}),p.style("background-color",this.theadRowBackgroundColor()).style("border-color",this.theadCellBorderColor()).style("color",this.theadFontColor()).style("font-size",this.theadFontSize()),p.select(".thText").style("font-family",this.theadFontFamily()).text(function(t,e){return a.field(-1,e).transform(t)}),p.select(".thIcon").text(function(t,e){return a.descending()?a.sortByFieldIndex()===e?"":"":a.sortByFieldIndex()===e?"":""}),p.exit().remove(),p.order(),this.paginationLimit()&&this.pagination(h.length>=parseInt(this.paginationLimit())?!0:!1),this.pagination()){null===this._paginator.target()&&this._paginator.target(s.node());var c=this._calcRowsPerPage(p);this.itemsPerPage(c),this._paginator.numItems(h.length),this._tNumPages=Math.ceil(this._paginator.numItems()/this.itemsPerPage())||1,(this.pageNumber()>this._tNumPages||this.pageNumber()<=0)&&this.pageNumber(1),this._paginator._onSelect=function(t,e){a.pageNumber(t),a.render()}}else this._paginator.numItems(0);var u=this.pageNumber()-1,y=this.itemsPerPage(),f=u*y,g=parseInt(u*y)+parseInt(y),b=null;b=this.topN()?h.slice(0,this.topN()):this.pagination()?h.slice(f,g):h;var m=[this.totalledLabel()?this.totalledLabel():null];if(0!==this.totalledColumns().length){for(var x=0;x<this.totalledColumns().length;x++)this.totalledColumns()[x]=+this.totalledColumns()[x];for(var v=1;v<d.length;v++){var w=0;if(-1!==this.totalledColumns().indexOf(v)){for(var C=0;C<b.length;C++)w+=b[C][v];m.push(w)}else m.push("")}var _=this.tfoot.selectAll("td").data(m);_.enter().append("td"),_[this.renderHtmlDataCells()?"html":"text"](function(t,e){return a.fields()[e].transform(t)}),_.exit().remove(),_.style("background-color",this.tfootRowBackgroundColor()).style("border-color",this.tfootCellBorderColor()).style("color",this.tfootFontColor()).style("font-size",this.tfootFontSize())}var B=this.tbody.selectAll("tr.tr_"+this.id()).data(b.map(function(t,e){for(var o=0;o<t.length;++o)void 0===t[o]&&(t[o]=null);return{rowIdx:e,row:t}}));B.enter().append("tr").attr("class","tr_"+this.id()).on("click.selectionBag",function(t){if(t.row){var e=t.row,o=t.rowIdx;a.selectionBagClick(e,o),a.applyRowStyles(a.getBodyRow(o)),a.applyFirstColRowStyles(a.getFixedRow(o)),a.click(a.rowToObj(e),o,a._selectionBag.isSelected(a._createSelectionObject(e)))}}).on("dblclick",function(t){if(t.row){var e=t.row,o=t.rowIdx;a.dblclick(a.rowToObj(e),o,a._selectionBag.isSelected(a._createSelectionObject(e)))}}).on("mouseover",function(t){if(t.row){var e=t.rowIdx,o=a.getFixedRow(e);o.empty()||o.classed("hover",!0);var i=a.getBodyRow(e);i.classed("hover",!0),a.applyStyleToRows(i),a.applyFirstColRowStyles(o)}}).on("mouseout",function(t){if(t.row){var e=t.rowIdx,o=a.getFixedRow(e);o.classed("hover",!1);var i=a.getBodyRow(e);i.classed("hover",!1),a.applyStyleToRows(i),a.applyFirstColRowStyles(o)}}),B.classed("selected",function(t){var e=t.row;return a._selectionBag.isSelected(a._createSelectionObject(e))}).classed("trId"+this._id,!0),B.exit().remove(),this.applyStyleToRows(B);var S=B.selectAll(".td_"+this.id()).data(function(t,e){return t.row.filter(function(t,e){return e<d.length}).map(function(o,i){return{trIdx:e,rowIdx:t.rowIdx,colIdx:i,cell:o}})});S.enter().append("td").attr("class","td_"+this.id()).each(function(e,o){var i=a.getColumnAlignment(e.rowIdx,e.colIdx,e.cell),l=t.select(this);l.style({height:null,"text-align":i}).classed("tr-"+e.trIdx+"-td-"+o,!0)}),S.each(function(e){var o=t.select(this);if(e.cell instanceof l){o[a.renderHtmlDataCells()?"html":"text"](null);var i=o.selectAll(".div_"+a.id()).data([e.cell],function(t){return t.id()});i.exit().each(function(t){t.target(null)}).remove(),i.enter().append("div").attr("class","div_"+a.id()).style({width:a.minWidgetWidth()+"px",height:a.minWidgetHeight()+"px"}).each(function(e){var o=t.select(this);e._parentWidget=a,e._class.indexOf("childWidget")<0&&(e._class="childWidget "+e._class),e.target(null).target(o.node())}),i.each(function(t){t.resize().lazyRender(),a._hasChildWidgets=!0})}else o.selectAll(".div_"+a.id()).remove(),o[a.renderHtmlDataCells()?"html":"text"](a.field(e.rowIdx,e.colIdx).transform(e.cell))}),S.exit().remove();var T=parseInt(this.thead.node().offsetHeight);this.pagination()&&this._hasChildWidgets?(this.tableDiv.style("overflow-y","auto"),this.table.style("margin-bottom","50px"),console.log("Warning: displaying another widget in the table may cause problems with pagination")):(this.tableDiv.style("overflow-y",null),this.table.style("margin-bottom",null)),this.size(this._size);var F=0,H=this.fixedColHeadRow.selectAll("th").data(this.fixedColumn()&&this.showHeader()?[d[0]]:[]);H.enter().append("th").each(function(e){var o=t.select(this);o.append("span").attr("class","thText"),o.append("span").attr("class","thIcon")}).on("click",function(t,e){a.headerClick(t,e)}),H.style("background-color",this.theadRowBackgroundColor()).style("border-color",this.theadCellBorderColor()).style("color",this.theadFontColor()).style("font-size",this.theadFontSize()),H.select(".thText").style("font-family",this.theadFontFamily()).text(function(t){return t}),H.select(".thIcon").text(function(t,e){return a.descending()?a.sortByFieldIndex()===e?"":"":a.sortByFieldIndex()===e?"":""}),H.exit().remove();var R=this.fixedColBody.selectAll("tr").data(this.fixedColumn()?b:[]);R.enter().append("tr").attr("class",function(){return"trId"+a._id}),R.on("click",function(e,o){t.select(B[0][o]).on("click.selectionBag")(B.data()[o],o)}).on("mouseover",function(e,o){t.select(B[0][o]).on("mouseover")(B.data()[o],o)}).on("mouseout",function(e,o){t.select(B[0][o]).on("mouseout")(B.data()[o],o)}).classed("selected",function(t){return a._selectionBag.isSelected(a._createSelectionObject(t))}),R.exit().remove();var k=R.selectAll("td").data(function(t,e){return[t[0]]});k.enter().append("td"),k[this.renderHtmlDataCells()?"html":"text"](function(t){return"string"==typeof t?t.trim():"number"==typeof t?t:""}),k.exit().remove();var I=this.fixedColFootRow.selectAll("td").data(this.fixedColumn()&&this.totalledLabel()?[this.totalledLabel()]:[]);if(I.enter().append("td"),I[this.renderHtmlDataCells()?"html":"text"](function(t){return"string"==typeof t?t.trim():"number"==typeof t?t:""}),I.exit().remove(),this.fixedColumn()&&!this.fixedSize()&&k.length&&(F=this.showHeader()?k.property("offsetWidth")>H.property("offsetWidth")?k.property("offsetWidth"):H.property("offsetWidth"):k.property("offsetWidth"),this.fixedCol.style("position","absolute").style("margin-top",-this.tableDiv.property("scrollTop")+T+"px"),k.style("width",F+"px"),this.fixedColHead.style("position","absolute").style("margin-top",(this.fixedHeader()?this.tableDiv.property("scrollTop"):0)-T+"px"),H.style("width",F+"px"),B.each(function(e,o){var i=t.select(this).select("td").property("offsetHeight");t.select(k[o][0]).style("height",i+"px")})),this.table.style("margin-left",-F+"px"),this.tableDiv.style("margin-left",F+"px").style("width",this.width()-F+"px"),this._paginator.render(),this._paginator.right((this.hasVScroll(this.tableDiv)?this.getScrollbarWidth():0)+this._paginatorTableSpacing).bottom((this.hasHScroll(this.tableDiv)?this.getScrollbarWidth():0)+this._paginatorTableSpacing).render(),B.empty()||this.setColumnWidths(B),this.fixedSize()){var P=t.select(".tableDiv > table").node();if(P){var W,D,A,z=P.getBoundingClientRect();0!==z.width&&0!==z.height?(n(),r()):(z.height-T<=a.tableDiv.property("offsetHeight")?r():a.fixedHeader()?(W=a.property("offsetHeight"),W+="px"):W="100%",z.width-F<a.tableDiv.property("offsetWidth")?n():a.fixedColumn()?(D=a.property("offsetWidth")-F,D+="px"):D="100%"),s.classed("childWidget")&&(a._parentElement.style("width",D+"px").style("height",W+"px"),a.tableDiv.style("overflow","hidden")),a.size({width:D,height:W})}}this.setOnScrollEvents(this.tableDiv.node(),T)},s.prototype.exit=function(t,o){this._paginator.target(null),e.prototype.exit.apply(this,arguments)},s.prototype.setColumnWidths=function(e){var o=this,i=e.filter(function(t,e){return 0===e}),l=[];i.each(function(e){l=t.selectAll(this.childNodes)});var s=this.fixedHeader()?this.thead.property("offsetHeight"):0,n=1,r={};l.each(function(t,e){r[e]=this.offsetWidth});var a=this.thead.selectAll("th");a.each(function(t,e){var o=this.offsetWidth,i=l.empty()?0:r[e],s=o>=i?o:i;this.style.width=s+"px",!l.empty()&&l[0][e]&&(l[0][e].style.width=s+"px"),n+=s}),this.thead.style("position",this.fixedHeader()?"absolute":"relative").style("width",n+"px").style("margin-top","0px"),this.table.style("width",n+"px"),this.tableDiv.style("margin-top",(o.fixedHeader()?s:0)+"px"),this.tbody.style("width",n+"px")},s.prototype.getBodyRow=function(t){return this.table.selectAll("tbody tr.trId"+this._id).filter(function(e,o){return o===t})},s.prototype.getFixedRow=function(t){return this._element.selectAll(".rows-wrapper tbody tr").filter(function(e,o){return o===t})},s.prototype.setOnScrollEvents=function(t,e){var o=this;t.onscroll=function(t){var i=t.target.scrollTop,l=t.target.scrollLeft;o.fixedHeader()&&o.thead.style("margin-left",-l+"px"),o.fixedColumn()&&(o.fixedCol.style("margin-top",-i+e+"px"),o.fixedHeader()&&o.fixedColHead.style("margin-top",i-e+"px"))}},s.prototype._generateTempRow=function(){var t=this.tbody.append("tr");return t.append("td").text("QQQ"),t},s.prototype._createSelectionObject=function(e){var o=this;return{_id:e,element:function(){return o.tbody?o.tbody.selectAll("tr").filter(function(t){return t===e}):t.select()}}},s.prototype._calcRowsPerPage=function(t){0===this._paginator.numItems()&&(this._paginator.numItems(1),this.itemsPerPage(1)),this._paginator.render();var e=this.thead.selectAll("th").node()?this.thead.selectAll("th").node().clientHeight:0,o=this.tfoot.selectAll("td").node()?this.tfoot.selectAll("td").node().clientHeight:0,i=this._generateTempRow(),l=i.node().clientHeight;i.remove();var s=this.calcHeight(this._paginator.element()),n=Math.floor((this.height()-e-o-s-(this.table.style("width")>=this.table.style("width")?this.getScrollbarWidth():0)-2*this._paginatorTableSpacing)/l)||1;return n},s.prototype.sort=function(t){return this.sortByFieldIndex()!==t?this.descending(!1):this.descending(!this.descending()),this.sortByFieldIndex(t),this},s.prototype.selection=function(t){return arguments.length?(this._selectionBag.set(t.map(function(t){return this._createSelectionObject(t)},this)),this):this._selectionBag.get().map(function(t){return t._id})},s.prototype.selectionBagClick=function(e,o){if(this.multiSelect()&&t.event.shiftKey&&this._selectionPrevClick){var i=!1,l=[],s=this.tableData().filter(function(t,o){var s=!1;return(t===e||t===this._selectionPrevClick)&&(i&&(s=!0),i=!i,l.push(o)),i||s},this);this.selection(s)}else if(this.multiSelect())this._selectionBag.click(this._createSelectionObject(e),t.event),this._selectionPrevClick=e;else{var n=this._createSelectionObject(e);this._selectionBag.click(n,{ctrlKey:this._selectionBag.isSelected(n)}),this._selectionPrevClick=e}this.render()},s.prototype.applyHoverRowStyles=function(t){var e=this;t.style("color",e.tbodyHoverRowFontColor()).style("background-color",e.tbodyHoverRowBackgroundColor())},s.prototype.applySelectedRowStyles=function(t){var e=this;t.style("color",e.tbodySelectedRowFontColor()).style("background-color",e.tbodySelectedRowBackgroundColor())},s.prototype.applyRowStyles=function(t,e){var o=t.datum().row;t.style("color",e?this.tbodyFirstColFontColor():this.tbodyFontColor()).style("background-color",e?this.tbodyFirstColBackgroundColor():this.tableZebraColor_exists()&&this.tableData().indexOf(o)%2?this.tbodyRowBackgroundColor():this.tableZebraColor())},s.prototype.applyFirstColRowStyles=function(t){this.applyStyleToRows(t,!0)},s.prototype.applyStyleToRows=function(e,o){o="undefined"!=typeof o?o:!1;var i=this;e.each(function(){var e=t.select(this);e.classed("hover")?i.applyHoverRowStyles(e):e.classed("selected")?i.applySelectedRowStyles(e):i.applyRowStyles(e,o)})},s.prototype.getColumnAlignment=function(t,e,o){var i=this.field(t,e);switch(i.__prop_type){case"string":return this.stringAlign();case"number":return this.numberAlign();case"":case void 0:switch(typeof o){case"string":return this.stringAlign();case"number":return this.numberAlign()}}return null},s.prototype.serializeState=function(){return{selection:this._selectionBag.get().map(function(t){return t._id}),data:this.data()}},s.prototype.deserializeState=function(t){if(t){if(t.selection){var e=this;this._selectionBag.set(t.selection.map(function(t){return e._createSelectionObject(t)}))}t.data&&this.data(t.data)}return this},s.prototype.click=function(t,e,o){console.log("click:  "+JSON.stringify(t,n)+", "+e+","+o)},s.prototype.dblclick=function(t,e,o){console.log("dblclick:  "+JSON.stringify(t,n)+", "+e+","+o)},s.prototype.headerClick=function(t,e){this.sort(e).render()},s});