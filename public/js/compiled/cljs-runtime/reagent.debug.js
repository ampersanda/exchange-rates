goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21591__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21592__i = 0, G__21592__a = new Array(arguments.length -  0);
while (G__21592__i < G__21592__a.length) {G__21592__a[G__21592__i] = arguments[G__21592__i + 0]; ++G__21592__i;}
  args = new cljs.core.IndexedSeq(G__21592__a,0,null);
} 
return G__21591__delegate.call(this,args);};
G__21591.cljs$lang$maxFixedArity = 0;
G__21591.cljs$lang$applyTo = (function (arglist__21593){
var args = cljs.core.seq(arglist__21593);
return G__21591__delegate(args);
});
G__21591.cljs$core$IFn$_invoke$arity$variadic = G__21591__delegate;
return G__21591;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21594__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21595__i = 0, G__21595__a = new Array(arguments.length -  0);
while (G__21595__i < G__21595__a.length) {G__21595__a[G__21595__i] = arguments[G__21595__i + 0]; ++G__21595__i;}
  args = new cljs.core.IndexedSeq(G__21595__a,0,null);
} 
return G__21594__delegate.call(this,args);};
G__21594.cljs$lang$maxFixedArity = 0;
G__21594.cljs$lang$applyTo = (function (arglist__21596){
var args = cljs.core.seq(arglist__21596);
return G__21594__delegate(args);
});
G__21594.cljs$core$IFn$_invoke$arity$variadic = G__21594__delegate;
return G__21594;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
