goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__20208 = coll;
var G__20209 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__20208,G__20209) : shadow.dom.lazy_native_coll_seq.call(null,G__20208,G__20209));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__20242 = arguments.length;
switch (G__20242) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__20246 = arguments.length;
switch (G__20246) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__20252 = arguments.length;
switch (G__20252) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__20264 = arguments.length;
switch (G__20264) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__20267 = arguments.length;
switch (G__20267) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__20268 = document;
var G__20269 = shadow.dom.dom_node(el);
return goog.dom.contains(G__20268,G__20269);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__20271 = shadow.dom.dom_node(parent);
var G__20272 = shadow.dom.dom_node(el);
return goog.dom.contains(G__20271,G__20272);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__20277 = shadow.dom.dom_node(el);
var G__20278 = cls;
return goog.dom.classlist.add(G__20277,G__20278);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__20279 = shadow.dom.dom_node(el);
var G__20280 = cls;
return goog.dom.classlist.remove(G__20279,G__20280);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20282 = arguments.length;
switch (G__20282) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__20283 = shadow.dom.dom_node(el);
var G__20284 = cls;
return goog.dom.classlist.toggle(G__20283,G__20284);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20290){if((e20290 instanceof Object)){
var e = e20290;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20290;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20294 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20295 = null;
var count__20296 = (0);
var i__20297 = (0);
while(true){
if((i__20297 < count__20296)){
var el = chunk__20295.cljs$core$IIndexed$_nth$arity$2(null,i__20297);
var handler_20304__$1 = ((function (seq__20294,chunk__20295,count__20296,i__20297,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20294,chunk__20295,count__20296,i__20297,el))
;
var G__20298_20305 = el;
var G__20299_20306 = cljs.core.name(ev);
var G__20300_20307 = handler_20304__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20298_20305,G__20299_20306,G__20300_20307) : shadow.dom.dom_listen.call(null,G__20298_20305,G__20299_20306,G__20300_20307));


var G__20308 = seq__20294;
var G__20309 = chunk__20295;
var G__20310 = count__20296;
var G__20311 = (i__20297 + (1));
seq__20294 = G__20308;
chunk__20295 = G__20309;
count__20296 = G__20310;
i__20297 = G__20311;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20294);
if(temp__5457__auto__){
var seq__20294__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20294__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20294__$1);
var G__20312 = cljs.core.chunk_rest(seq__20294__$1);
var G__20313 = c__4351__auto__;
var G__20314 = cljs.core.count(c__4351__auto__);
var G__20315 = (0);
seq__20294 = G__20312;
chunk__20295 = G__20313;
count__20296 = G__20314;
i__20297 = G__20315;
continue;
} else {
var el = cljs.core.first(seq__20294__$1);
var handler_20316__$1 = ((function (seq__20294,chunk__20295,count__20296,i__20297,el,seq__20294__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20294,chunk__20295,count__20296,i__20297,el,seq__20294__$1,temp__5457__auto__))
;
var G__20301_20317 = el;
var G__20302_20318 = cljs.core.name(ev);
var G__20303_20319 = handler_20316__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20301_20317,G__20302_20318,G__20303_20319) : shadow.dom.dom_listen.call(null,G__20301_20317,G__20302_20318,G__20303_20319));


var G__20320 = cljs.core.next(seq__20294__$1);
var G__20321 = null;
var G__20322 = (0);
var G__20323 = (0);
seq__20294 = G__20320;
chunk__20295 = G__20321;
count__20296 = G__20322;
i__20297 = G__20323;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__20325 = arguments.length;
switch (G__20325) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__20326 = shadow.dom.dom_node(el);
var G__20327 = cljs.core.name(ev);
var G__20328 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20326,G__20327,G__20328) : shadow.dom.dom_listen.call(null,G__20326,G__20327,G__20328));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__20330 = shadow.dom.dom_node(el);
var G__20331 = cljs.core.name(ev);
var G__20332 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__20330,G__20331,G__20332) : shadow.dom.dom_listen_remove.call(null,G__20330,G__20331,G__20332));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20333 = cljs.core.seq(events);
var chunk__20334 = null;
var count__20335 = (0);
var i__20336 = (0);
while(true){
if((i__20336 < count__20335)){
var vec__20337 = chunk__20334.cljs$core$IIndexed$_nth$arity$2(null,i__20336);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20337,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20343 = seq__20333;
var G__20344 = chunk__20334;
var G__20345 = count__20335;
var G__20346 = (i__20336 + (1));
seq__20333 = G__20343;
chunk__20334 = G__20344;
count__20335 = G__20345;
i__20336 = G__20346;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20333);
if(temp__5457__auto__){
var seq__20333__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20333__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20333__$1);
var G__20347 = cljs.core.chunk_rest(seq__20333__$1);
var G__20348 = c__4351__auto__;
var G__20349 = cljs.core.count(c__4351__auto__);
var G__20350 = (0);
seq__20333 = G__20347;
chunk__20334 = G__20348;
count__20335 = G__20349;
i__20336 = G__20350;
continue;
} else {
var vec__20340 = cljs.core.first(seq__20333__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20340,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20351 = cljs.core.next(seq__20333__$1);
var G__20352 = null;
var G__20353 = (0);
var G__20354 = (0);
seq__20333 = G__20351;
chunk__20334 = G__20352;
count__20335 = G__20353;
i__20336 = G__20354;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20355 = cljs.core.seq(styles);
var chunk__20356 = null;
var count__20357 = (0);
var i__20358 = (0);
while(true){
if((i__20358 < count__20357)){
var vec__20359 = chunk__20356.cljs$core$IIndexed$_nth$arity$2(null,i__20358);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20359,(1),null);
var G__20362_20371 = dom;
var G__20363_20372 = cljs.core.name(k);
var G__20364_20373 = (((v == null))?"":v);
goog.style.setStyle(G__20362_20371,G__20363_20372,G__20364_20373);


var G__20374 = seq__20355;
var G__20375 = chunk__20356;
var G__20376 = count__20357;
var G__20377 = (i__20358 + (1));
seq__20355 = G__20374;
chunk__20356 = G__20375;
count__20357 = G__20376;
i__20358 = G__20377;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20355);
if(temp__5457__auto__){
var seq__20355__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20355__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20355__$1);
var G__20378 = cljs.core.chunk_rest(seq__20355__$1);
var G__20379 = c__4351__auto__;
var G__20380 = cljs.core.count(c__4351__auto__);
var G__20381 = (0);
seq__20355 = G__20378;
chunk__20356 = G__20379;
count__20357 = G__20380;
i__20358 = G__20381;
continue;
} else {
var vec__20365 = cljs.core.first(seq__20355__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365,(1),null);
var G__20368_20382 = dom;
var G__20369_20383 = cljs.core.name(k);
var G__20370_20384 = (((v == null))?"":v);
goog.style.setStyle(G__20368_20382,G__20369_20383,G__20370_20384);


var G__20385 = cljs.core.next(seq__20355__$1);
var G__20386 = null;
var G__20387 = (0);
var G__20388 = (0);
seq__20355 = G__20385;
chunk__20356 = G__20386;
count__20357 = G__20387;
i__20358 = G__20388;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20389_20390 = key;
var G__20389_20391__$1 = (((G__20389_20390 instanceof cljs.core.Keyword))?G__20389_20390.fqn:null);
switch (G__20389_20391__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20393 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_20393,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_20393,"aria-");
}
})())){
el.setAttribute(ks_20393,value);
} else {
(el[ks_20393] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__20394 = shadow.dom.dom_node(el);
var G__20395 = cls;
return goog.dom.classlist.contains(G__20394,G__20395);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20396){
var map__20397 = p__20396;
var map__20397__$1 = ((((!((map__20397 == null)))?(((((map__20397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20397):map__20397);
var props = map__20397__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20399 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20399,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20399,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20399,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20402 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20402,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20402;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20404 = arguments.length;
switch (G__20404) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20406){
var vec__20407 = p__20406;
var seq__20408 = cljs.core.seq(vec__20407);
var first__20409 = cljs.core.first(seq__20408);
var seq__20408__$1 = cljs.core.next(seq__20408);
var nn = first__20409;
var first__20409__$1 = cljs.core.first(seq__20408__$1);
var seq__20408__$2 = cljs.core.next(seq__20408__$1);
var np = first__20409__$1;
var nc = seq__20408__$2;
var node = vec__20407;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20410 = nn;
var G__20411 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20410,G__20411) : create_fn.call(null,G__20410,G__20411));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20412 = nn;
var G__20413 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20412,G__20413) : create_fn.call(null,G__20412,G__20413));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20414 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20414,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20414,(1),null);
var seq__20417_20433 = cljs.core.seq(node_children);
var chunk__20418_20434 = null;
var count__20419_20435 = (0);
var i__20420_20436 = (0);
while(true){
if((i__20420_20436 < count__20419_20435)){
var child_struct_20437 = chunk__20418_20434.cljs$core$IIndexed$_nth$arity$2(null,i__20420_20436);
var children_20438 = shadow.dom.dom_node(child_struct_20437);
if(cljs.core.seq_QMARK_(children_20438)){
var seq__20421_20439 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20438));
var chunk__20423_20440 = null;
var count__20424_20441 = (0);
var i__20425_20442 = (0);
while(true){
if((i__20425_20442 < count__20424_20441)){
var child_20443 = chunk__20423_20440.cljs$core$IIndexed$_nth$arity$2(null,i__20425_20442);
if(cljs.core.truth_(child_20443)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20443);


var G__20444 = seq__20421_20439;
var G__20445 = chunk__20423_20440;
var G__20446 = count__20424_20441;
var G__20447 = (i__20425_20442 + (1));
seq__20421_20439 = G__20444;
chunk__20423_20440 = G__20445;
count__20424_20441 = G__20446;
i__20425_20442 = G__20447;
continue;
} else {
var G__20448 = seq__20421_20439;
var G__20449 = chunk__20423_20440;
var G__20450 = count__20424_20441;
var G__20451 = (i__20425_20442 + (1));
seq__20421_20439 = G__20448;
chunk__20423_20440 = G__20449;
count__20424_20441 = G__20450;
i__20425_20442 = G__20451;
continue;
}
} else {
var temp__5457__auto___20452 = cljs.core.seq(seq__20421_20439);
if(temp__5457__auto___20452){
var seq__20421_20453__$1 = temp__5457__auto___20452;
if(cljs.core.chunked_seq_QMARK_(seq__20421_20453__$1)){
var c__4351__auto___20454 = cljs.core.chunk_first(seq__20421_20453__$1);
var G__20455 = cljs.core.chunk_rest(seq__20421_20453__$1);
var G__20456 = c__4351__auto___20454;
var G__20457 = cljs.core.count(c__4351__auto___20454);
var G__20458 = (0);
seq__20421_20439 = G__20455;
chunk__20423_20440 = G__20456;
count__20424_20441 = G__20457;
i__20425_20442 = G__20458;
continue;
} else {
var child_20459 = cljs.core.first(seq__20421_20453__$1);
if(cljs.core.truth_(child_20459)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20459);


var G__20460 = cljs.core.next(seq__20421_20453__$1);
var G__20461 = null;
var G__20462 = (0);
var G__20463 = (0);
seq__20421_20439 = G__20460;
chunk__20423_20440 = G__20461;
count__20424_20441 = G__20462;
i__20425_20442 = G__20463;
continue;
} else {
var G__20464 = cljs.core.next(seq__20421_20453__$1);
var G__20465 = null;
var G__20466 = (0);
var G__20467 = (0);
seq__20421_20439 = G__20464;
chunk__20423_20440 = G__20465;
count__20424_20441 = G__20466;
i__20425_20442 = G__20467;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20438);
}


var G__20468 = seq__20417_20433;
var G__20469 = chunk__20418_20434;
var G__20470 = count__20419_20435;
var G__20471 = (i__20420_20436 + (1));
seq__20417_20433 = G__20468;
chunk__20418_20434 = G__20469;
count__20419_20435 = G__20470;
i__20420_20436 = G__20471;
continue;
} else {
var temp__5457__auto___20472 = cljs.core.seq(seq__20417_20433);
if(temp__5457__auto___20472){
var seq__20417_20473__$1 = temp__5457__auto___20472;
if(cljs.core.chunked_seq_QMARK_(seq__20417_20473__$1)){
var c__4351__auto___20474 = cljs.core.chunk_first(seq__20417_20473__$1);
var G__20475 = cljs.core.chunk_rest(seq__20417_20473__$1);
var G__20476 = c__4351__auto___20474;
var G__20477 = cljs.core.count(c__4351__auto___20474);
var G__20478 = (0);
seq__20417_20433 = G__20475;
chunk__20418_20434 = G__20476;
count__20419_20435 = G__20477;
i__20420_20436 = G__20478;
continue;
} else {
var child_struct_20479 = cljs.core.first(seq__20417_20473__$1);
var children_20480 = shadow.dom.dom_node(child_struct_20479);
if(cljs.core.seq_QMARK_(children_20480)){
var seq__20427_20481 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20480));
var chunk__20429_20482 = null;
var count__20430_20483 = (0);
var i__20431_20484 = (0);
while(true){
if((i__20431_20484 < count__20430_20483)){
var child_20485 = chunk__20429_20482.cljs$core$IIndexed$_nth$arity$2(null,i__20431_20484);
if(cljs.core.truth_(child_20485)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20485);


var G__20486 = seq__20427_20481;
var G__20487 = chunk__20429_20482;
var G__20488 = count__20430_20483;
var G__20489 = (i__20431_20484 + (1));
seq__20427_20481 = G__20486;
chunk__20429_20482 = G__20487;
count__20430_20483 = G__20488;
i__20431_20484 = G__20489;
continue;
} else {
var G__20490 = seq__20427_20481;
var G__20491 = chunk__20429_20482;
var G__20492 = count__20430_20483;
var G__20493 = (i__20431_20484 + (1));
seq__20427_20481 = G__20490;
chunk__20429_20482 = G__20491;
count__20430_20483 = G__20492;
i__20431_20484 = G__20493;
continue;
}
} else {
var temp__5457__auto___20494__$1 = cljs.core.seq(seq__20427_20481);
if(temp__5457__auto___20494__$1){
var seq__20427_20495__$1 = temp__5457__auto___20494__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20427_20495__$1)){
var c__4351__auto___20496 = cljs.core.chunk_first(seq__20427_20495__$1);
var G__20497 = cljs.core.chunk_rest(seq__20427_20495__$1);
var G__20498 = c__4351__auto___20496;
var G__20499 = cljs.core.count(c__4351__auto___20496);
var G__20500 = (0);
seq__20427_20481 = G__20497;
chunk__20429_20482 = G__20498;
count__20430_20483 = G__20499;
i__20431_20484 = G__20500;
continue;
} else {
var child_20501 = cljs.core.first(seq__20427_20495__$1);
if(cljs.core.truth_(child_20501)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20501);


var G__20502 = cljs.core.next(seq__20427_20495__$1);
var G__20503 = null;
var G__20504 = (0);
var G__20505 = (0);
seq__20427_20481 = G__20502;
chunk__20429_20482 = G__20503;
count__20430_20483 = G__20504;
i__20431_20484 = G__20505;
continue;
} else {
var G__20506 = cljs.core.next(seq__20427_20495__$1);
var G__20507 = null;
var G__20508 = (0);
var G__20509 = (0);
seq__20427_20481 = G__20506;
chunk__20429_20482 = G__20507;
count__20430_20483 = G__20508;
i__20431_20484 = G__20509;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20480);
}


var G__20510 = cljs.core.next(seq__20417_20473__$1);
var G__20511 = null;
var G__20512 = (0);
var G__20513 = (0);
seq__20417_20433 = G__20510;
chunk__20418_20434 = G__20511;
count__20419_20435 = G__20512;
i__20420_20436 = G__20513;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__20514 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__20514);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20516 = cljs.core.seq(node);
var chunk__20517 = null;
var count__20518 = (0);
var i__20519 = (0);
while(true){
if((i__20519 < count__20518)){
var n = chunk__20517.cljs$core$IIndexed$_nth$arity$2(null,i__20519);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20520 = seq__20516;
var G__20521 = chunk__20517;
var G__20522 = count__20518;
var G__20523 = (i__20519 + (1));
seq__20516 = G__20520;
chunk__20517 = G__20521;
count__20518 = G__20522;
i__20519 = G__20523;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20516);
if(temp__5457__auto__){
var seq__20516__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20516__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20516__$1);
var G__20524 = cljs.core.chunk_rest(seq__20516__$1);
var G__20525 = c__4351__auto__;
var G__20526 = cljs.core.count(c__4351__auto__);
var G__20527 = (0);
seq__20516 = G__20524;
chunk__20517 = G__20525;
count__20518 = G__20526;
i__20519 = G__20527;
continue;
} else {
var n = cljs.core.first(seq__20516__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20528 = cljs.core.next(seq__20516__$1);
var G__20529 = null;
var G__20530 = (0);
var G__20531 = (0);
seq__20516 = G__20528;
chunk__20517 = G__20529;
count__20518 = G__20530;
i__20519 = G__20531;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__20532 = shadow.dom.dom_node(new$);
var G__20533 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__20532,G__20533);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20535 = arguments.length;
switch (G__20535) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20538 = arguments.length;
switch (G__20538) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20541 = arguments.length;
switch (G__20541) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20548 = arguments.length;
var i__4532__auto___20549 = (0);
while(true){
if((i__4532__auto___20549 < len__4531__auto___20548)){
args__4534__auto__.push((arguments[i__4532__auto___20549]));

var G__20550 = (i__4532__auto___20549 + (1));
i__4532__auto___20549 = G__20550;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20544_20551 = cljs.core.seq(nodes);
var chunk__20545_20552 = null;
var count__20546_20553 = (0);
var i__20547_20554 = (0);
while(true){
if((i__20547_20554 < count__20546_20553)){
var node_20555 = chunk__20545_20552.cljs$core$IIndexed$_nth$arity$2(null,i__20547_20554);
fragment.appendChild(shadow.dom._to_dom(node_20555));


var G__20556 = seq__20544_20551;
var G__20557 = chunk__20545_20552;
var G__20558 = count__20546_20553;
var G__20559 = (i__20547_20554 + (1));
seq__20544_20551 = G__20556;
chunk__20545_20552 = G__20557;
count__20546_20553 = G__20558;
i__20547_20554 = G__20559;
continue;
} else {
var temp__5457__auto___20560 = cljs.core.seq(seq__20544_20551);
if(temp__5457__auto___20560){
var seq__20544_20561__$1 = temp__5457__auto___20560;
if(cljs.core.chunked_seq_QMARK_(seq__20544_20561__$1)){
var c__4351__auto___20562 = cljs.core.chunk_first(seq__20544_20561__$1);
var G__20563 = cljs.core.chunk_rest(seq__20544_20561__$1);
var G__20564 = c__4351__auto___20562;
var G__20565 = cljs.core.count(c__4351__auto___20562);
var G__20566 = (0);
seq__20544_20551 = G__20563;
chunk__20545_20552 = G__20564;
count__20546_20553 = G__20565;
i__20547_20554 = G__20566;
continue;
} else {
var node_20567 = cljs.core.first(seq__20544_20561__$1);
fragment.appendChild(shadow.dom._to_dom(node_20567));


var G__20568 = cljs.core.next(seq__20544_20561__$1);
var G__20569 = null;
var G__20570 = (0);
var G__20571 = (0);
seq__20544_20551 = G__20568;
chunk__20545_20552 = G__20569;
count__20546_20553 = G__20570;
i__20547_20554 = G__20571;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq20543){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20543));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20572_20586 = cljs.core.seq(scripts);
var chunk__20573_20587 = null;
var count__20574_20588 = (0);
var i__20575_20589 = (0);
while(true){
if((i__20575_20589 < count__20574_20588)){
var vec__20576_20590 = chunk__20573_20587.cljs$core$IIndexed$_nth$arity$2(null,i__20575_20589);
var script_tag_20591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20576_20590,(0),null);
var script_body_20592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20576_20590,(1),null);
eval(script_body_20592);


var G__20593 = seq__20572_20586;
var G__20594 = chunk__20573_20587;
var G__20595 = count__20574_20588;
var G__20596 = (i__20575_20589 + (1));
seq__20572_20586 = G__20593;
chunk__20573_20587 = G__20594;
count__20574_20588 = G__20595;
i__20575_20589 = G__20596;
continue;
} else {
var temp__5457__auto___20597 = cljs.core.seq(seq__20572_20586);
if(temp__5457__auto___20597){
var seq__20572_20598__$1 = temp__5457__auto___20597;
if(cljs.core.chunked_seq_QMARK_(seq__20572_20598__$1)){
var c__4351__auto___20599 = cljs.core.chunk_first(seq__20572_20598__$1);
var G__20600 = cljs.core.chunk_rest(seq__20572_20598__$1);
var G__20601 = c__4351__auto___20599;
var G__20602 = cljs.core.count(c__4351__auto___20599);
var G__20603 = (0);
seq__20572_20586 = G__20600;
chunk__20573_20587 = G__20601;
count__20574_20588 = G__20602;
i__20575_20589 = G__20603;
continue;
} else {
var vec__20579_20604 = cljs.core.first(seq__20572_20598__$1);
var script_tag_20605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20579_20604,(0),null);
var script_body_20606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20579_20604,(1),null);
eval(script_body_20606);


var G__20607 = cljs.core.next(seq__20572_20598__$1);
var G__20608 = null;
var G__20609 = (0);
var G__20610 = (0);
seq__20572_20586 = G__20607;
chunk__20573_20587 = G__20608;
count__20574_20588 = G__20609;
i__20575_20589 = G__20610;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__20582){
var vec__20583 = p__20582;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20583,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20583,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__20611 = shadow.dom.dom_node(el);
var G__20612 = cls;
return goog.dom.getAncestorByClass(G__20611,G__20612);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20614 = arguments.length;
switch (G__20614) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__20615 = shadow.dom.dom_node(el);
var G__20616 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__20615,G__20616);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__20617 = shadow.dom.dom_node(el);
var G__20618 = cljs.core.name(tag);
var G__20619 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__20617,G__20618,G__20619);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__20621 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__20621);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__20622 = shadow.dom.dom_node(dom);
var G__20623 = value;
return goog.dom.forms.setValue(G__20622,G__20623);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20624 = cljs.core.seq(style_keys);
var chunk__20625 = null;
var count__20626 = (0);
var i__20627 = (0);
while(true){
if((i__20627 < count__20626)){
var it = chunk__20625.cljs$core$IIndexed$_nth$arity$2(null,i__20627);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20628 = seq__20624;
var G__20629 = chunk__20625;
var G__20630 = count__20626;
var G__20631 = (i__20627 + (1));
seq__20624 = G__20628;
chunk__20625 = G__20629;
count__20626 = G__20630;
i__20627 = G__20631;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20624);
if(temp__5457__auto__){
var seq__20624__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20624__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20624__$1);
var G__20632 = cljs.core.chunk_rest(seq__20624__$1);
var G__20633 = c__4351__auto__;
var G__20634 = cljs.core.count(c__4351__auto__);
var G__20635 = (0);
seq__20624 = G__20632;
chunk__20625 = G__20633;
count__20626 = G__20634;
i__20627 = G__20635;
continue;
} else {
var it = cljs.core.first(seq__20624__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20636 = cljs.core.next(seq__20624__$1);
var G__20637 = null;
var G__20638 = (0);
var G__20639 = (0);
seq__20624 = G__20636;
chunk__20625 = G__20637;
count__20626 = G__20638;
i__20627 = G__20639;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k20641,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__20645 = k20641;
var G__20645__$1 = (((G__20645 instanceof cljs.core.Keyword))?G__20645.fqn:null);
switch (G__20645__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20641,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20640){
var self__ = this;
var G__20640__$1 = this;
return (new cljs.core.RecordIter((0),G__20640__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__20646 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__20646(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20642,other20643){
var self__ = this;
var this20642__$1 = this;
return ((!((other20643 == null))) && ((this20642__$1.constructor === other20643.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20642__$1.x,other20643.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20642__$1.y,other20643.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20642__$1.__extmap,other20643.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__20640){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__20647 = cljs.core.keyword_identical_QMARK_;
var expr__20648 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__20650 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__20651 = expr__20648;
return (pred__20647.cljs$core$IFn$_invoke$arity$2 ? pred__20647.cljs$core$IFn$_invoke$arity$2(G__20650,G__20651) : pred__20647.call(null,G__20650,G__20651));
})())){
return (new shadow.dom.Coordinate(G__20640,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20652 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__20653 = expr__20648;
return (pred__20647.cljs$core$IFn$_invoke$arity$2 ? pred__20647.cljs$core$IFn$_invoke$arity$2(G__20652,G__20653) : pred__20647.call(null,G__20652,G__20653));
})())){
return (new shadow.dom.Coordinate(self__.x,G__20640,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__20640),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__20640){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20640,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20644){
var extmap__4236__auto__ = (function (){var G__20654 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20644,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20644)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20654);
} else {
return G__20654;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20644),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20644),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__20656 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__20656);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__20657 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__20657);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__20658 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__20658);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k20660,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__20664 = k20660;
var G__20664__$1 = (((G__20664 instanceof cljs.core.Keyword))?G__20664.fqn:null);
switch (G__20664__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20660,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20659){
var self__ = this;
var G__20659__$1 = this;
return (new cljs.core.RecordIter((0),G__20659__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__20665 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__20665(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20661,other20662){
var self__ = this;
var this20661__$1 = this;
return ((!((other20662 == null))) && ((this20661__$1.constructor === other20662.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20661__$1.w,other20662.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20661__$1.h,other20662.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20661__$1.__extmap,other20662.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__20659){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__20666 = cljs.core.keyword_identical_QMARK_;
var expr__20667 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__20669 = new cljs.core.Keyword(null,"w","w",354169001);
var G__20670 = expr__20667;
return (pred__20666.cljs$core$IFn$_invoke$arity$2 ? pred__20666.cljs$core$IFn$_invoke$arity$2(G__20669,G__20670) : pred__20666.call(null,G__20669,G__20670));
})())){
return (new shadow.dom.Size(G__20659,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20671 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__20672 = expr__20667;
return (pred__20666.cljs$core$IFn$_invoke$arity$2 ? pred__20666.cljs$core$IFn$_invoke$arity$2(G__20671,G__20672) : pred__20666.call(null,G__20671,G__20672));
})())){
return (new shadow.dom.Size(self__.w,G__20659,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__20659),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__20659){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20659,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20663){
var extmap__4236__auto__ = (function (){var G__20673 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20663,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20663)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20673);
} else {
return G__20673;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20663),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20663),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__20675 = shadow.dom.dom_node(el);
return goog.style.getSize(G__20675);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__20676 = (i + (1));
var G__20677 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20676;
ret = G__20677;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20678){
var vec__20679 = p__20678;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20679,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20679,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20683 = arguments.length;
switch (G__20683) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__20685_20687 = new_node;
var G__20686_20688 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__20685_20687,G__20686_20688);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__20689_20691 = new_node;
var G__20690_20692 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__20689_20691,G__20690_20692);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__20693 = ps;
var G__20694 = (i + (1));
el__$1 = G__20693;
i = G__20694;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__20695 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__20695);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__20696 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__20696);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__20697 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__20697);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20698 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20698,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20698,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20698,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20701_20711 = cljs.core.seq(props);
var chunk__20702_20712 = null;
var count__20703_20713 = (0);
var i__20704_20714 = (0);
while(true){
if((i__20704_20714 < count__20703_20713)){
var vec__20705_20715 = chunk__20702_20712.cljs$core$IIndexed$_nth$arity$2(null,i__20704_20714);
var k_20716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705_20715,(0),null);
var v_20717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705_20715,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_20716);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20716),v_20717);


var G__20718 = seq__20701_20711;
var G__20719 = chunk__20702_20712;
var G__20720 = count__20703_20713;
var G__20721 = (i__20704_20714 + (1));
seq__20701_20711 = G__20718;
chunk__20702_20712 = G__20719;
count__20703_20713 = G__20720;
i__20704_20714 = G__20721;
continue;
} else {
var temp__5457__auto___20722 = cljs.core.seq(seq__20701_20711);
if(temp__5457__auto___20722){
var seq__20701_20723__$1 = temp__5457__auto___20722;
if(cljs.core.chunked_seq_QMARK_(seq__20701_20723__$1)){
var c__4351__auto___20724 = cljs.core.chunk_first(seq__20701_20723__$1);
var G__20725 = cljs.core.chunk_rest(seq__20701_20723__$1);
var G__20726 = c__4351__auto___20724;
var G__20727 = cljs.core.count(c__4351__auto___20724);
var G__20728 = (0);
seq__20701_20711 = G__20725;
chunk__20702_20712 = G__20726;
count__20703_20713 = G__20727;
i__20704_20714 = G__20728;
continue;
} else {
var vec__20708_20729 = cljs.core.first(seq__20701_20723__$1);
var k_20730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20708_20729,(0),null);
var v_20731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20708_20729,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_20730);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20730),v_20731);


var G__20732 = cljs.core.next(seq__20701_20723__$1);
var G__20733 = null;
var G__20734 = (0);
var G__20735 = (0);
seq__20701_20711 = G__20732;
chunk__20702_20712 = G__20733;
count__20703_20713 = G__20734;
i__20704_20714 = G__20735;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20737 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20737,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20737,(1),null);
var seq__20740_20758 = cljs.core.seq(node_children);
var chunk__20742_20759 = null;
var count__20743_20760 = (0);
var i__20744_20761 = (0);
while(true){
if((i__20744_20761 < count__20743_20760)){
var child_struct_20762 = chunk__20742_20759.cljs$core$IIndexed$_nth$arity$2(null,i__20744_20761);
if(!((child_struct_20762 == null))){
if(typeof child_struct_20762 === 'string'){
var text_20763 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20763),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_20762)].join(''));
} else {
var children_20764 = shadow.dom.svg_node(child_struct_20762);
if(cljs.core.seq_QMARK_(children_20764)){
var seq__20746_20765 = cljs.core.seq(children_20764);
var chunk__20748_20766 = null;
var count__20749_20767 = (0);
var i__20750_20768 = (0);
while(true){
if((i__20750_20768 < count__20749_20767)){
var child_20769 = chunk__20748_20766.cljs$core$IIndexed$_nth$arity$2(null,i__20750_20768);
if(cljs.core.truth_(child_20769)){
node.appendChild(child_20769);


var G__20770 = seq__20746_20765;
var G__20771 = chunk__20748_20766;
var G__20772 = count__20749_20767;
var G__20773 = (i__20750_20768 + (1));
seq__20746_20765 = G__20770;
chunk__20748_20766 = G__20771;
count__20749_20767 = G__20772;
i__20750_20768 = G__20773;
continue;
} else {
var G__20774 = seq__20746_20765;
var G__20775 = chunk__20748_20766;
var G__20776 = count__20749_20767;
var G__20777 = (i__20750_20768 + (1));
seq__20746_20765 = G__20774;
chunk__20748_20766 = G__20775;
count__20749_20767 = G__20776;
i__20750_20768 = G__20777;
continue;
}
} else {
var temp__5457__auto___20778 = cljs.core.seq(seq__20746_20765);
if(temp__5457__auto___20778){
var seq__20746_20779__$1 = temp__5457__auto___20778;
if(cljs.core.chunked_seq_QMARK_(seq__20746_20779__$1)){
var c__4351__auto___20780 = cljs.core.chunk_first(seq__20746_20779__$1);
var G__20781 = cljs.core.chunk_rest(seq__20746_20779__$1);
var G__20782 = c__4351__auto___20780;
var G__20783 = cljs.core.count(c__4351__auto___20780);
var G__20784 = (0);
seq__20746_20765 = G__20781;
chunk__20748_20766 = G__20782;
count__20749_20767 = G__20783;
i__20750_20768 = G__20784;
continue;
} else {
var child_20785 = cljs.core.first(seq__20746_20779__$1);
if(cljs.core.truth_(child_20785)){
node.appendChild(child_20785);


var G__20786 = cljs.core.next(seq__20746_20779__$1);
var G__20787 = null;
var G__20788 = (0);
var G__20789 = (0);
seq__20746_20765 = G__20786;
chunk__20748_20766 = G__20787;
count__20749_20767 = G__20788;
i__20750_20768 = G__20789;
continue;
} else {
var G__20790 = cljs.core.next(seq__20746_20779__$1);
var G__20791 = null;
var G__20792 = (0);
var G__20793 = (0);
seq__20746_20765 = G__20790;
chunk__20748_20766 = G__20791;
count__20749_20767 = G__20792;
i__20750_20768 = G__20793;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20764);
}
}


var G__20794 = seq__20740_20758;
var G__20795 = chunk__20742_20759;
var G__20796 = count__20743_20760;
var G__20797 = (i__20744_20761 + (1));
seq__20740_20758 = G__20794;
chunk__20742_20759 = G__20795;
count__20743_20760 = G__20796;
i__20744_20761 = G__20797;
continue;
} else {
var G__20798 = seq__20740_20758;
var G__20799 = chunk__20742_20759;
var G__20800 = count__20743_20760;
var G__20801 = (i__20744_20761 + (1));
seq__20740_20758 = G__20798;
chunk__20742_20759 = G__20799;
count__20743_20760 = G__20800;
i__20744_20761 = G__20801;
continue;
}
} else {
var temp__5457__auto___20802 = cljs.core.seq(seq__20740_20758);
if(temp__5457__auto___20802){
var seq__20740_20803__$1 = temp__5457__auto___20802;
if(cljs.core.chunked_seq_QMARK_(seq__20740_20803__$1)){
var c__4351__auto___20804 = cljs.core.chunk_first(seq__20740_20803__$1);
var G__20805 = cljs.core.chunk_rest(seq__20740_20803__$1);
var G__20806 = c__4351__auto___20804;
var G__20807 = cljs.core.count(c__4351__auto___20804);
var G__20808 = (0);
seq__20740_20758 = G__20805;
chunk__20742_20759 = G__20806;
count__20743_20760 = G__20807;
i__20744_20761 = G__20808;
continue;
} else {
var child_struct_20809 = cljs.core.first(seq__20740_20803__$1);
if(!((child_struct_20809 == null))){
if(typeof child_struct_20809 === 'string'){
var text_20810 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20810),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_20809)].join(''));
} else {
var children_20811 = shadow.dom.svg_node(child_struct_20809);
if(cljs.core.seq_QMARK_(children_20811)){
var seq__20752_20812 = cljs.core.seq(children_20811);
var chunk__20754_20813 = null;
var count__20755_20814 = (0);
var i__20756_20815 = (0);
while(true){
if((i__20756_20815 < count__20755_20814)){
var child_20816 = chunk__20754_20813.cljs$core$IIndexed$_nth$arity$2(null,i__20756_20815);
if(cljs.core.truth_(child_20816)){
node.appendChild(child_20816);


var G__20817 = seq__20752_20812;
var G__20818 = chunk__20754_20813;
var G__20819 = count__20755_20814;
var G__20820 = (i__20756_20815 + (1));
seq__20752_20812 = G__20817;
chunk__20754_20813 = G__20818;
count__20755_20814 = G__20819;
i__20756_20815 = G__20820;
continue;
} else {
var G__20821 = seq__20752_20812;
var G__20822 = chunk__20754_20813;
var G__20823 = count__20755_20814;
var G__20824 = (i__20756_20815 + (1));
seq__20752_20812 = G__20821;
chunk__20754_20813 = G__20822;
count__20755_20814 = G__20823;
i__20756_20815 = G__20824;
continue;
}
} else {
var temp__5457__auto___20825__$1 = cljs.core.seq(seq__20752_20812);
if(temp__5457__auto___20825__$1){
var seq__20752_20826__$1 = temp__5457__auto___20825__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20752_20826__$1)){
var c__4351__auto___20827 = cljs.core.chunk_first(seq__20752_20826__$1);
var G__20828 = cljs.core.chunk_rest(seq__20752_20826__$1);
var G__20829 = c__4351__auto___20827;
var G__20830 = cljs.core.count(c__4351__auto___20827);
var G__20831 = (0);
seq__20752_20812 = G__20828;
chunk__20754_20813 = G__20829;
count__20755_20814 = G__20830;
i__20756_20815 = G__20831;
continue;
} else {
var child_20832 = cljs.core.first(seq__20752_20826__$1);
if(cljs.core.truth_(child_20832)){
node.appendChild(child_20832);


var G__20833 = cljs.core.next(seq__20752_20826__$1);
var G__20834 = null;
var G__20835 = (0);
var G__20836 = (0);
seq__20752_20812 = G__20833;
chunk__20754_20813 = G__20834;
count__20755_20814 = G__20835;
i__20756_20815 = G__20836;
continue;
} else {
var G__20837 = cljs.core.next(seq__20752_20826__$1);
var G__20838 = null;
var G__20839 = (0);
var G__20840 = (0);
seq__20752_20812 = G__20837;
chunk__20754_20813 = G__20838;
count__20755_20814 = G__20839;
i__20756_20815 = G__20840;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20811);
}
}


var G__20841 = cljs.core.next(seq__20740_20803__$1);
var G__20842 = null;
var G__20843 = (0);
var G__20844 = (0);
seq__20740_20758 = G__20841;
chunk__20742_20759 = G__20842;
count__20743_20760 = G__20843;
i__20744_20761 = G__20844;
continue;
} else {
var G__20845 = cljs.core.next(seq__20740_20803__$1);
var G__20846 = null;
var G__20847 = (0);
var G__20848 = (0);
seq__20740_20758 = G__20845;
chunk__20742_20759 = G__20846;
count__20743_20760 = G__20847;
i__20744_20761 = G__20848;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__20849_20855 = shadow.dom._to_svg;
var G__20850_20856 = "string";
var G__20851_20857 = ((function (G__20849_20855,G__20850_20856){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__20849_20855,G__20850_20856))
;
goog.object.set(G__20849_20855,G__20850_20856,G__20851_20857);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__20852_20858 = shadow.dom._to_svg;
var G__20853_20859 = "null";
var G__20854_20860 = ((function (G__20852_20858,G__20853_20859){
return (function (_){
return null;
});})(G__20852_20858,G__20853_20859))
;
goog.object.set(G__20852_20858,G__20853_20859,G__20854_20860);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20863 = arguments.length;
var i__4532__auto___20864 = (0);
while(true){
if((i__4532__auto___20864 < len__4531__auto___20863)){
args__4534__auto__.push((arguments[i__4532__auto___20864]));

var G__20865 = (i__4532__auto___20864 + (1));
i__4532__auto___20864 = G__20865;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq20861){
var G__20862 = cljs.core.first(seq20861);
var seq20861__$1 = cljs.core.next(seq20861);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20862,seq20861__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20867 = arguments.length;
switch (G__20867) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__20868_20883 = shadow.dom.dom_node(el);
var G__20869_20884 = cljs.core.name(event);
var G__20870_20885 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__20868_20883,G__20869_20884,G__20870_20885) : shadow.dom.dom_listen.call(null,G__20868_20883,G__20869_20884,G__20870_20885));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__18240__auto___20886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___20886,buf,chan,event_fn){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___20886,buf,chan,event_fn){
return (function (state_20875){
var state_val_20876 = (state_20875[(1)]);
if((state_val_20876 === (1))){
var state_20875__$1 = state_20875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20875__$1,(2),once_or_cleanup);
} else {
if((state_val_20876 === (2))){
var inst_20872 = (state_20875[(2)]);
var inst_20873 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20875__$1 = (function (){var statearr_20877 = state_20875;
(statearr_20877[(7)] = inst_20872);

return statearr_20877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20875__$1,inst_20873);
} else {
return null;
}
}
});})(c__18240__auto___20886,buf,chan,event_fn))
;
return ((function (switch__18068__auto__,c__18240__auto___20886,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__18069__auto__ = null;
var shadow$dom$state_machine__18069__auto____0 = (function (){
var statearr_20878 = [null,null,null,null,null,null,null,null];
(statearr_20878[(0)] = shadow$dom$state_machine__18069__auto__);

(statearr_20878[(1)] = (1));

return statearr_20878;
});
var shadow$dom$state_machine__18069__auto____1 = (function (state_20875){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_20875);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e20879){if((e20879 instanceof Object)){
var ex__18072__auto__ = e20879;
var statearr_20880_20887 = state_20875;
(statearr_20880_20887[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20879;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20888 = state_20875;
state_20875 = G__20888;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
shadow$dom$state_machine__18069__auto__ = function(state_20875){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__18069__auto____0.call(this);
case 1:
return shadow$dom$state_machine__18069__auto____1.call(this,state_20875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__18069__auto____0;
shadow$dom$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__18069__auto____1;
return shadow$dom$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___20886,buf,chan,event_fn))
})();
var state__18242__auto__ = (function (){var statearr_20881 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_20881[(6)] = c__18240__auto___20886);

return statearr_20881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___20886,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
