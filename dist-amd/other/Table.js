(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","./Paginator","../common/Utility","../common/Widget","css!./Table"],t):e.other_Table=t(e.d3,e.common_HTMLWidget,e.other_Paginator,e.common_Utility,e.common_Widget)})(this,function(e,t,n,r,i){function s(){t.call(this),this._tag="div",this.columns([]),this._paginator=new n,this._selectionBag=new r.Selection,this._selectionPrevClick=null,this._paginatorTableSpacing=4}s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.prototype._class+=" other_Table",s.prototype.publish("renderHtmlDataCells",!1,"boolean","enable or disable HTML within cells",null,{tags:["Private"]}),s.prototype.publish("pagination",!1,"boolean","Enable or disable pagination",null,{tags:["Private"]}),s.prototype.publish("paginationLimit",null,"number","Maximum number of rows allowed before pagination defaults to on",null,{tags:["Private"]}),s.prototype.publishProxy("itemsPerPage","_paginator"),s.prototype.publishProxy("pageNumber","_paginator","pageNumber",1),s.prototype.publishProxy("adjacentPages","_paginator"),s.prototype.publish("topN",null,"number","Total number or rows of data to be displayed in the table",null,{tags:["Private"]}),s.prototype.publish("pivot",!1,"boolean","Pivot Table"),s.prototype.publish("showHeader",!0,"boolean","Show or hide the table header",null,{tags:["Private"]}),s.prototype.publish("fixedHeader",!0,"boolean","Enable or disable fixed table header",null,{tags:["Private"]}),s.prototype.publish("fixedColumn",!1,"boolean","Enable or disable fixed first column",null,{tags:["Private"]}),s.prototype.publish("multiSelect",!1,"boolean","Multiple Selection",null,{tags:["Basic"]}),s.prototype.publish("fixedSize",!1,"boolean","Fix Size to Min Width/Height"),s.prototype.publish("theadFontSize",null,"string","Table head font size",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFontSize",null,"string","Table body font size",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootFontSize",null,"string","Table body font size",null,{tags:["Basic"],optional:!0}),s.prototype.publish("theadFontColor",null,"html-color","Table head font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFontColor",null,"html-color","Table body font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootFontColor",null,"html-color","Table body font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("theadFontFamily",null,"string","Table head font family",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFontFamily",null,"string","Table body font family",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootFontFamily",null,"string","Table body font family",null,{tags:["Basic"],optional:!0}),s.prototype.publish("theadCellBorderColor",null,"html-color","Table head cell border color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootCellBorderColor",null,"html-color","Table head cell border color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("theadRowBackgroundColor",null,"html-color","Table head row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tfootRowBackgroundColor",null,"html-color","Table head row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyCellBorderColor",null,"html-color","Table body cell border color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyRowBackgroundColor",null,"html-color","Table body row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFirstColFontColor",null,"html-color","Table body first column font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyFirstColBackgroundColor",null,"html-color","Table body first column background color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyHoverRowFontColor",null,"html-color","Table body hover row font color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodyHoverRowBackgroundColor",null,"html-color","Table body hover row background color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodySelectedRowFontColor",null,"html-color","Table body selected row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tbodySelectedRowBackgroundColor",null,"html-color","Table body selected row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("tableZebraColor",null,"html-color","Table zebra row color",null,{tags:["Basic"],optional:!0}),s.prototype.publish("totalledColumns",[],"array","Array of indices of the columns to be totalled",null,{tags:["Basic"],optional:!0,disable:function(e){return e.pivot()}}),s.prototype.publish("totalledLabel",null,"string","Adds a label to the first column of the 'Totalled' row",null,{tags:["Basic"],optional:!0,disable:function(e){return e.pivot()}}),s.prototype.publish("stringAlign","left","set","Array of alignment positions for strings",["left","right","center"],{tags:["Basic"],optional:!0}),s.prototype.publish("numberAlign","right","set","Array of alignment positions for numbers",["left","right","center"],{tags:["Basic"],optional:!0}),s.prototype.publish("minWidgetWidth",null,"number","Minimum width of a child widget",null,{tags:["Basic"],optional:!0}),s.prototype.publish("minWidgetHeight",null,"number","Minimum height of a child widget",null,{tags:["Basic"],optional:!0}),s.prototype.publish("sortByFieldIndex",null,"number","Index for the field/column to sort the data",null,{tags:["Basic"],optional:!0}),s.prototype.publish("descending",!1,"boolean","Direction for sorting the data: ascending (true) or descending (false)",null,{tags:["Basic"],optional:!0}),s.prototype.size=function(e){var n=t.prototype.size.apply(this,arguments);if(arguments.length&&this.tableDiv){var r=this.showHeader()&&this.fixedHeader()?this.thead.property("offsetHeight"):0;this.tableDiv.style("width",this._size.width+"px").style("height",this._size.height-r+"px"),this._element.style("width",this._size.width+"px").style("height",this._size.height+"px")}return n};var o=s.prototype.columns;s.prototype.columns=function(e){var t=o.apply(this,arguments);return!arguments.length&&this.pivot()?this._db.column(0):t};var u=s.prototype.data;s.prototype.data=function(e){var t=u.apply(this,arguments);return!arguments.length&&this.pivot()?this._db.columns().filter(function(e,t){return t>0}):t};var a={transform:function(e){return e}};return s.prototype.field=function(e,t){return this.pivot()?t===0?a:this.fields()[e+1]:e===-1?a:this.fields()[t]},s.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),this._parentElement.style("overflow","hidden"),this.tableDiv=n.append("div").attr("class","tableDiv"),this.table=this.tableDiv.append("table"),this.fixedHead=n.append("div").classed("header-wrapper",!0),this.fixedHeadTable=this.fixedHead.append("table"),this.fixedThead=this.fixedHeadTable.append("thead").append("tr"),this.unfixedThead=this.table.append("thead").append("tr"),this.tbody=this.table.append("tbody"),this.tfoot=this.table.append("tfoot").append("tr"),this.fixedCol=n.append("div").classed("rows-wrapper",!0),this.fixedColTable=this.fixedCol.append("table"),this.fixedColHead=this.fixedColTable.append("thead"),this.fixedColHeadRow=this.fixedColHead.append("tr"),this.fixedColBody=this.fixedColTable.append("tbody"),this.fixedColFoot=this.fixedColTable.append("tfoot"),this.fixedColFootRow=this.fixedColFoot.append("tr"),this.tableDiv.style("overflow","auto"),this._childWidgets=[]},s.prototype.update=function(n,s){function _(){var e=L.width;M=o.tbody.property("offsetWidth")+1,O=e>M?M:e,O=O}function D(){A=o.tbody.property("offsetHeight")+S,A=A}t.prototype.update.apply(this,arguments);var o=this;this.element().selectAll("table,tbody,th,td").style("width",null),this.sortByFieldIndex_exists()&&(this._prevSortByFieldIndex!==this.sortByFieldIndex()||this._prevDescending!==this.descending())&&(r.multiSort(this.data(),[{idx:this.sortByFieldIndex(),reverse:this.descending()}]),this._prevSortByFieldIndex=this.sortByFieldIndex(),this._prevDescending=this.descending()),this._childWidgets.forEach(function(e,t){e.target(null)}),this._childWidgets=[],this.fixedHeader()?this.thead=this.fixedThead:this.thead=this.unfixedThead,this.fixedHead.style("display",this.fixedHeader()?"table-row":"none"),this.unfixedThead.style("display",this.fixedHeader()?"none":"table-row");var u=this.thead.selectAll("th").data(this.showHeader()?this.columns():[],function(e){return e});u.enter().append("th").each(function(t){var n=e.select(this);n.append("span").attr("class","thText"),n.append("span").attr("class","thIcon")}).on("click",function(e,t){o.headerClick(e,t)}),u.style("background-color",this.theadRowBackgroundColor()).style("border-color",this.theadCellBorderColor()).style("color",this.theadFontColor()).style("font-size",this.theadFontSize()),u.select(".thText").style("font-family",this.theadFontFamily()).text(function(e,t){return o.field(-1,t).transform(e)}),u.select(".thIcon").text(function(e,t){return o.descending()?o.sortByFieldIndex()===t?"":"":o.sortByFieldIndex()===t?"":""}),u.exit().remove(),u.order(),this.paginationLimit()&&this.pagination(this.data().length>=parseInt(this.paginationLimit())?!0:!1);if(this.pagination()){this._paginator.target()===null&&this._paginator.target(s.node());var a=this._calcRowsPerPage(u);this.itemsPerPage(a),this._paginator.numItems(this.data().length),this._tNumPages=Math.ceil(this._paginator.numItems()/this.itemsPerPage())||1,(this.pageNumber()>this._tNumPages||this.pageNumber()<=0)&&this.pageNumber(1),this._paginator._onSelect=function(e,t){o.pageNumber(e),o.render();return}}else this._paginator.numItems(0);var f=this.pageNumber()-1,l=this.itemsPerPage(),c=f*l,h=parseInt(f*l)+parseInt(l),p=null;this.topN()?p=this.data().slice(0,this.topN()):this.pagination()?p=this.data().slice(c,h):p=this.data();var d=[this.totalledLabel()?this.totalledLabel():null];if(o.totalledColumns().length!==0){for(var v=0;v<o.totalledColumns().length;v++)o.totalledColumns()[v]=+o.totalledColumns()[v];for(var m=1;m<o.columns().length;m++){var g=0;if(o.totalledColumns().indexOf(m)!==-1){for(var y=0;y<p.length;y++)g+=p[y][m];d.push(g)}else d.push("")}var b=this.tfoot.selectAll("td").data(d);b.enter().append("td"),b[this.renderHtmlDataCells()?"html":"text"](function(e,t){return o.fields()[t].transform(e)}),b.exit().remove(),b.style("background-color",this.tfootRowBackgroundColor()).style("border-color",this.tfootCellBorderColor()).style("color",this.tfootFontColor()).style("font-size",this.tfootFontSize())}var w=this.tbody.selectAll("tr").data(p.map(function(e,t){return{rowIdx:t,row:e}}));w.enter().append("tr").on("click.selectionBag",function(e){var t=e.row,n=e.rowIdx;o.selectionBagClick(t,n),o.applyRowStyles(o.getBodyRow(n)),o.applyFirstColRowStyles(o.getFixedRow(n)),o.click(o.rowToObj(t),n,o._selectionBag.isSelected(o._createSelectionObject(t)))}).on("mouseover",function(e){var t=e.rowIdx,n=o.getFixedRow(t);n.empty()||n.classed("hover",!0);var r=o.getBodyRow(t);r.classed("hover",!0),o.applyStyleToRows(r),o.applyFirstColRowStyles(n)}).on("mouseout",function(e){var t=e.rowIdx,n=o.getFixedRow(t);n.classed("hover",!1);var r=o.getBodyRow(t);r.classed("hover",!1),o.applyStyleToRows(r),o.applyFirstColRowStyles(n)}),w.classed("selected",function(e){var t=e.row;return o._selectionBag.isSelected(o._createSelectionObject(t))}).classed("trId"+o._id,!0),w.exit().remove();var E=w.selectAll("td").data(function(e){return e.row.filter(function(e,t){return t<o.columns().length}).map(function(t,n){return{rowIdx:e.rowIdx,colIdx:n,cell:t}})});E.enter().append("td"),E[this.renderHtmlDataCells()?"html":"text"](function(e,t){if(e.cell instanceof i)return;return o.field(e.rowIdx,e.colIdx).transform(e.cell)}),E.exit().remove(),w.each(function(t,n){var r=e.select(this);r.selectAll("td").each(function(t,r){var s=o.getColumnAlignment(t.rowIdx,t.colIdx,t.cell),u=e.select(this);u.style({height:null,"text-align":s}).classed("tr-"+n+"-td-"+r,!0),t.cell instanceof i&&(o.pagination()&&console.log("Warning: displaying another widget in the table may cause problems with pagination"),t.cell.size().height===0&&(t.cell.height(o.minWidgetHeight()),t.cell.width(this.offsetWidth>o.minWidgetWidth()?this.offsetWidth:o.minWidgetWidth())),t.cell.target(null),t.cell.target(this),t.cell._parentWidget=o,t.cell._class.indexOf("childWidget")<0&&(t.cell._class="childWidget "+t._class),t.cell.render(),o._childWidgets.push(t.cell))}),o.applyStyleToRows(r)});var S=parseInt(this.thead.node().offsetHeight);this.pagination()&&this._childWidgets.length?(this.tableDiv.style("overflow-y","auto"),this.table.style("margin-bottom","50px")):(this.tableDiv.style("overflow-y",null),this.table.style("margin-bottom",null)),this.size(this._size);var x=0,T=this.fixedColHeadRow.selectAll("th").data(this.fixedColumn()&&this.showHeader()?[this.columns()[0]]:[]);T.enter().append("th").each(function(t){var n=e.select(this);n.append("span").attr("class","thText"),n.append("span").attr("class","thIcon")}).on("click",function(e,t){o.headerClick(e,t)}),T.style("background-color",this.theadRowBackgroundColor()).style("border-color",this.theadCellBorderColor()).style("color",this.theadFontColor()).style("font-size",this.theadFontSize()),T.select(".thText").style("font-family",this.theadFontFamily()).text(function(e){return e}),T.select(".thIcon").text(function(e,t){return o.descending()?o.sortByFieldIndex()===t?"":"":o.sortByFieldIndex()===t?"":""}),T.exit().remove();var N=this.fixedColBody.selectAll("tr").data(this.fixedColumn()?p:[]);N.enter().append("tr").attr("class",function(){return"trId"+o._id}),N.on("click",function(t,n){e.select(w[0][n]).on("click.selectionBag")(w.data()[n],n)}).on("mouseover",function(t,n){e.select(w[0][n]).on("mouseover")(w.data()[n],n)}).on("mouseout",function(t,n){e.select(w[0][n]).on("mouseout")(w.data()[n],n)}).classed("selected",function(e){return o._selectionBag.isSelected(o._createSelectionObject(e))}),N.exit().remove();var C=N.selectAll("td").data(function(e,t){return[e[0]]});C.enter().append("td"),C[this.renderHtmlDataCells()?"html":"text"](function(e){return typeof e=="string"?e.trim():typeof e=="number"?e:""}),C.exit().remove();var k=this.fixedColFootRow.selectAll("td").data(this.fixedColumn()&&this.totalledLabel()?[this.totalledLabel()]:[]);k.enter().append("td"),k[this.renderHtmlDataCells()?"html":"text"](function(e){return typeof e=="string"?e.trim():typeof e=="number"?e:""}),k.exit().remove(),this.fixedColumn()&&!this.fixedSize()&&C.length&&(this.showHeader()?x=C.property("offsetWidth")>T.property("offsetWidth")?C.property("offsetWidth"):T.property("offsetWidth"):x=C.property("offsetWidth"),this.fixedCol.style("position","absolute").style("margin-top",-this.tableDiv.property("scrollTop")+S+"px"),C.style("width",x+"px"),this.fixedColHead.style("position","absolute").style("margin-top",(this.fixedHeader()?this.tableDiv.property("scrollTop"):0)-S+"px"),T.style("width",x+"px"),w.each(function(t,n){var r=e.select(this).select("td").property("offsetHeight");e.select(C[n][0]).style("height",r+"px")})),this.table.style("margin-left",-x+"px"),this.tableDiv.style("margin-left",x+"px").style("width",this.width()-x+"px"),this._paginator.render(),this._paginator.right((this.hasVScroll(this.tableDiv)?this.getScrollbarWidth():0)+this._paginatorTableSpacing).bottom((this.hasHScroll(this.tableDiv)?this.getScrollbarWidth():0)+this._paginatorTableSpacing).render(),w.empty()||this.setColumnWidths(w);if(this.fixedSize()){var L=e.select(".tableDiv > table").node().getBoundingClientRect(),A,O,M;L.width!==0&&L.height!==0?(_(),D()):(L.height-S<=o.tableDiv.property("offsetHeight")?D():o.fixedHeader()?(A=o.property("offsetHeight"),A+="px"):A="100%",L.width-x<o.tableDiv.property("offsetWidth")?_():o.fixedColumn()?(O=o.property("offsetWidth")-x,O+="px"):O="100%"),s.classed("childWidget")&&(o._parentElement.style("width",O+"px").style("height",A+"px"),o.tableDiv.style("overflow","hidden")),o.size({width:O,height:A})}this.setOnScrollEvents(this.tableDiv.node(),S)},s.prototype.exit=function(e,n){this._paginator.target(null),t.prototype.exit.apply(this,arguments)},s.prototype.setColumnWidths=function(t){var n=this,r=t.filter(function(e,t){return t===0}),i=[];r.each(function(t){i=e.selectAll(this.childNodes)});var s=this.fixedHeader()?this.thead.property("offsetHeight"):0,o=1,u={};i.each(function(e,t){u[t]=this.offsetWidth});var a=this.thead.selectAll("th");a.each(function(e,t){var n=this.offsetWidth,r=i.empty()?0:u[t],s=n>=r?n:r;this.style.width=s+"px",!i.empty()&&i[0][t]&&(i[0][t].style.width=s+"px"),o+=s}),this.thead.style("position",this.fixedHeader()?"absolute":"relative").style("width",o+"px").style("margin-top","0px"),this.table.style("width",o+"px"),this.tableDiv.style("margin-top",(n.fixedHeader()?s:0)+"px"),this.tbody.style("width",o+"px")},s.prototype.getBodyRow=function(e){return this.table.selectAll("tbody tr.trId"+this._id).filter(function(t,n){return n===e})},s.prototype.getFixedRow=function(e){return this._element.selectAll(".rows-wrapper tbody tr").filter(function(t,n){return n===e})},s.prototype.setOnScrollEvents=function(e,t){var n=this;e.onscroll=function(e){var r=e.target.scrollTop,i=e.target.scrollLeft;n.fixedHeader()&&n.thead.style("margin-left",-i+"px"),n.fixedColumn()&&(n.fixedCol.style("margin-top",-r+t+"px"),n.fixedHeader()&&n.fixedColHead.style("margin-top",r-t+"px"))}},s.prototype._generateTempRow=function(){var e=this.tbody.append("tr");return e.append("td").text("QQQ"),e},s.prototype._createSelectionObject=function(t){var n=this;return{_id:t,element:function(){return n.tbody?n.tbody.selectAll("tr").filter(function(e){return e===t}):e.select()}}},s.prototype._calcRowsPerPage=function(e){this._paginator.numItems()===0&&(this._paginator.numItems(1),this.itemsPerPage(1)),this._paginator.render();var t=this.thead.selectAll("th").node()?this.thead.selectAll("th").node().clientHeight:0,n=this.tfoot.selectAll("td").node()?this.tfoot.selectAll("td").node().clientHeight:0,r=this._generateTempRow(),i=r.node().clientHeight;r.remove();var s=this.calcHeight(this._paginator.element()),o=Math.floor((this.height()-t-n-s-(this.table.style("width")>=this.table.style("width")?this.getScrollbarWidth():0)-this._paginatorTableSpacing*2)/i)||1;return o},s.prototype.sort=function(e){return this.sortByFieldIndex()!==e?this.descending(!1):this.descending(!this.descending()),this.sortByFieldIndex(e),this},s.prototype.selection=function(e){return arguments.length?(this._selectionBag.set(e.map(function(e){return this._createSelectionObject(e)},this)),this):this._selectionBag.get().map(function(e){return e._id})},s.prototype.selectionBagClick=function(t,n){if(this.multiSelect()&&e.event.shiftKey&&this._selectionPrevClick){var r=!1,i=[],s=this.data().filter(function(e,n){var s=!1;if(e===t||e===this._selectionPrevClick)r&&(s=!0),r=!r,i.push(n);return r||s},this);this.selection(s)}else if(this.multiSelect())this._selectionBag.click(this._createSelectionObject(t),e.event),this._selectionPrevClick=t;else{var o=this._createSelectionObject(t);this._selectionBag.click(o,{ctrlKey:this._selectionBag.isSelected(o)}),this._selectionPrevClick=t}this.render()},s.prototype.applyHoverRowStyles=function(e){var t=this;e.style("color",t.tbodyHoverRowFontColor()).style("background-color",t.tbodyHoverRowBackgroundColor())},s.prototype.applySelectedRowStyles=function(e){var t=this;e.style("color",t.tbodySelectedRowFontColor()).style("background-color",t.tbodySelectedRowBackgroundColor())},s.prototype.applyRowStyles=function(e,t){e.style("color",t?this.tbodyFirstColFontColor():this.tbodyFontColor()).style("background-color",t?this.tbodyFirstColBackgroundColor():this.tableZebraColor_exists()&&this.data().indexOf(e.datum())%2?this.tbodyRowBackgroundColor():this.tableZebraColor())},s.prototype.applyFirstColRowStyles=function(e){this.applyStyleToRows(e,!0)},s.prototype.applyStyleToRows=function(t,n){n=typeof n!="undefined"?n:!1;var r=this;t.each(function(){var t=e.select(this);t.classed("hover")?r.applyHoverRowStyles(t):t.classed("selected")?r.applySelectedRowStyles(t):r.applyRowStyles(t,n)})},s.prototype.getColumnAlignment=function(e,t,n){var r=this.field(e,t);switch(r.__prop_type){case"string":return this.stringAlign();case"number":return this.numberAlign();case"":case undefined:switch(typeof n){case"string":return this.stringAlign();case"number":return this.numberAlign()}}return null},s.prototype.click=function(e,t,n){function r(e,t){return t instanceof i?"Widget with class: "+t.classID():t}console.log("Click:  "+JSON.stringify(e,r)+", "+t+","+n)},s.prototype.headerClick=function(e,t){this.sort(t).render()},s});