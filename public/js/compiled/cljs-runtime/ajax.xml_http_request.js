goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__11992 = e.target.readyState;
var fexpr__11991 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__11991.cljs$core$IFn$_invoke$arity$1 ? fexpr__11991.cljs$core$IFn$_invoke$arity$1(G__11992) : fexpr__11991.call(null,G__11992));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12004,handler){
var map__12005 = p__12004;
var map__12005__$1 = ((((!((map__12005 == null)))?(((((map__12005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12005):map__12005);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12005__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12005__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12005__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12005__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12005__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12005__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12005__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12005,map__12005__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__12003_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__12003_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__12005,map__12005__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___12033 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___12033)){
var response_type_12034 = temp__5457__auto___12033;
this$__$1.responseType = cljs.core.name(response_type_12034);
} else {
}

var seq__12009_12035 = cljs.core.seq(headers);
var chunk__12010_12036 = null;
var count__12011_12037 = (0);
var i__12012_12038 = (0);
while(true){
if((i__12012_12038 < count__12011_12037)){
var vec__12014_12050 = chunk__12010_12036.cljs$core$IIndexed$_nth$arity$2(null,i__12012_12038);
var k_12051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12014_12050,(0),null);
var v_12052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12014_12050,(1),null);
this$__$1.setRequestHeader(k_12051,v_12052);


var G__12053 = seq__12009_12035;
var G__12054 = chunk__12010_12036;
var G__12055 = count__12011_12037;
var G__12056 = (i__12012_12038 + (1));
seq__12009_12035 = G__12053;
chunk__12010_12036 = G__12054;
count__12011_12037 = G__12055;
i__12012_12038 = G__12056;
continue;
} else {
var temp__5457__auto___12057 = cljs.core.seq(seq__12009_12035);
if(temp__5457__auto___12057){
var seq__12009_12058__$1 = temp__5457__auto___12057;
if(cljs.core.chunked_seq_QMARK_(seq__12009_12058__$1)){
var c__4351__auto___12059 = cljs.core.chunk_first(seq__12009_12058__$1);
var G__12060 = cljs.core.chunk_rest(seq__12009_12058__$1);
var G__12061 = c__4351__auto___12059;
var G__12062 = cljs.core.count(c__4351__auto___12059);
var G__12063 = (0);
seq__12009_12035 = G__12060;
chunk__12010_12036 = G__12061;
count__12011_12037 = G__12062;
i__12012_12038 = G__12063;
continue;
} else {
var vec__12020_12064 = cljs.core.first(seq__12009_12058__$1);
var k_12065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020_12064,(0),null);
var v_12066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020_12064,(1),null);
this$__$1.setRequestHeader(k_12065,v_12066);


var G__12071 = cljs.core.next(seq__12009_12058__$1);
var G__12072 = null;
var G__12073 = (0);
var G__12074 = (0);
seq__12009_12035 = G__12071;
chunk__12010_12036 = G__12072;
count__12011_12037 = G__12073;
i__12012_12038 = G__12074;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
