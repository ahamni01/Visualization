//  dojo  ---
// import "dojo/has!webpack?dojo-webpack-plugin/amd/dojoES6Promise";

import * as declare from "dojo/_base/declare";
import * as _Deferred from "dojo/Deferred";
import * as _domConstruct from "dojo/dom-construct";
export const Deferred: any = _Deferred;
export const domConstruct: any = _domConstruct;

//  dstore  ---
import * as _Memory from "dojo-dstore/Memory";
import * as _QueryResults from "dojo-dstore/QueryResults";
export const Memory: any = _Memory;
export const QueryResults: any = _QueryResults;

//  dgrid  ---
import * as _Grid from "dgrid/Grid";
// import * as List from "dgrid/List";
import * as OnDemandGrid from "dgrid/OnDemandGrid";

import * as Keyboard from "dgrid/Keyboard";
import * as Selection from "dgrid/Selection";

import * as ColumnHider from "dgrid/extensions/ColumnHider";
import * as ColumnResizer from "dgrid/extensions/ColumnResizer";
import * as CompoundColumns from "dgrid/extensions/CompoundColumns";
import * as nlsPagination from "dgrid/extensions/nls/pagination";
import * as Pagination from "dgrid/extensions/Pagination";

//  Other ---
import { GridHelper } from "./gridHelper";

export const Grid = declare([OnDemandGrid, Keyboard, Selection, ColumnHider, ColumnResizer, CompoundColumns, GridHelper]);
Grid.prototype.i18nPagination = nlsPagination.root;

export const PagingGrid = declare([_Grid, Pagination, Keyboard, Selection, ColumnHider, ColumnResizer, CompoundColumns, GridHelper]);
PagingGrid.prototype.i18nPagination = nlsPagination.root;
