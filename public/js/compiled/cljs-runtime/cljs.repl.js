goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16666){
var map__16671 = p__16666;
var map__16671__$1 = ((((!((map__16671 == null)))?(((((map__16671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16671):map__16671);
var m = map__16671__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16688_16749 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16689_16750 = null;
var count__16690_16751 = (0);
var i__16691_16752 = (0);
while(true){
if((i__16691_16752 < count__16690_16751)){
var f_16753 = chunk__16689_16750.cljs$core$IIndexed$_nth$arity$2(null,i__16691_16752);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16753], 0));


var G__16754 = seq__16688_16749;
var G__16755 = chunk__16689_16750;
var G__16756 = count__16690_16751;
var G__16757 = (i__16691_16752 + (1));
seq__16688_16749 = G__16754;
chunk__16689_16750 = G__16755;
count__16690_16751 = G__16756;
i__16691_16752 = G__16757;
continue;
} else {
var temp__5457__auto___16761 = cljs.core.seq(seq__16688_16749);
if(temp__5457__auto___16761){
var seq__16688_16762__$1 = temp__5457__auto___16761;
if(cljs.core.chunked_seq_QMARK_(seq__16688_16762__$1)){
var c__4351__auto___16763 = cljs.core.chunk_first(seq__16688_16762__$1);
var G__16764 = cljs.core.chunk_rest(seq__16688_16762__$1);
var G__16765 = c__4351__auto___16763;
var G__16766 = cljs.core.count(c__4351__auto___16763);
var G__16767 = (0);
seq__16688_16749 = G__16764;
chunk__16689_16750 = G__16765;
count__16690_16751 = G__16766;
i__16691_16752 = G__16767;
continue;
} else {
var f_16768 = cljs.core.first(seq__16688_16762__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16768], 0));


var G__16770 = cljs.core.next(seq__16688_16762__$1);
var G__16771 = null;
var G__16772 = (0);
var G__16773 = (0);
seq__16688_16749 = G__16770;
chunk__16689_16750 = G__16771;
count__16690_16751 = G__16772;
i__16691_16752 = G__16773;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16774 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_16774], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_16774)))?cljs.core.second(arglists_16774):arglists_16774)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16705_16776 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16706_16777 = null;
var count__16707_16778 = (0);
var i__16708_16779 = (0);
while(true){
if((i__16708_16779 < count__16707_16778)){
var vec__16711_16780 = chunk__16706_16777.cljs$core$IIndexed$_nth$arity$2(null,i__16708_16779);
var name_16781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16711_16780,(0),null);
var map__16714_16782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16711_16780,(1),null);
var map__16714_16783__$1 = ((((!((map__16714_16782 == null)))?(((((map__16714_16782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16714_16782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16714_16782):map__16714_16782);
var doc_16784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16714_16783__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16714_16783__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16781], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16785], 0));

if(cljs.core.truth_(doc_16784)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16784], 0));
} else {
}


var G__16786 = seq__16705_16776;
var G__16787 = chunk__16706_16777;
var G__16788 = count__16707_16778;
var G__16789 = (i__16708_16779 + (1));
seq__16705_16776 = G__16786;
chunk__16706_16777 = G__16787;
count__16707_16778 = G__16788;
i__16708_16779 = G__16789;
continue;
} else {
var temp__5457__auto___16790 = cljs.core.seq(seq__16705_16776);
if(temp__5457__auto___16790){
var seq__16705_16791__$1 = temp__5457__auto___16790;
if(cljs.core.chunked_seq_QMARK_(seq__16705_16791__$1)){
var c__4351__auto___16792 = cljs.core.chunk_first(seq__16705_16791__$1);
var G__16793 = cljs.core.chunk_rest(seq__16705_16791__$1);
var G__16794 = c__4351__auto___16792;
var G__16795 = cljs.core.count(c__4351__auto___16792);
var G__16796 = (0);
seq__16705_16776 = G__16793;
chunk__16706_16777 = G__16794;
count__16707_16778 = G__16795;
i__16708_16779 = G__16796;
continue;
} else {
var vec__16730_16797 = cljs.core.first(seq__16705_16791__$1);
var name_16798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16730_16797,(0),null);
var map__16733_16799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16730_16797,(1),null);
var map__16733_16800__$1 = ((((!((map__16733_16799 == null)))?(((((map__16733_16799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16733_16799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16733_16799):map__16733_16799);
var doc_16801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16733_16800__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16733_16800__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16798], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16802], 0));

if(cljs.core.truth_(doc_16801)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16801], 0));
} else {
}


var G__16803 = cljs.core.next(seq__16705_16791__$1);
var G__16804 = null;
var G__16805 = (0);
var G__16806 = (0);
seq__16705_16776 = G__16803;
chunk__16706_16777 = G__16804;
count__16707_16778 = G__16805;
i__16708_16779 = G__16806;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__16735 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16736 = null;
var count__16737 = (0);
var i__16738 = (0);
while(true){
if((i__16738 < count__16737)){
var role = chunk__16736.cljs$core$IIndexed$_nth$arity$2(null,i__16738);
var temp__5457__auto___16807__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___16807__$1)){
var spec_16808 = temp__5457__auto___16807__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_16808)], 0));
} else {
}


var G__16809 = seq__16735;
var G__16810 = chunk__16736;
var G__16811 = count__16737;
var G__16812 = (i__16738 + (1));
seq__16735 = G__16809;
chunk__16736 = G__16810;
count__16737 = G__16811;
i__16738 = G__16812;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__16735);
if(temp__5457__auto____$1){
var seq__16735__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__16735__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__16735__$1);
var G__16813 = cljs.core.chunk_rest(seq__16735__$1);
var G__16814 = c__4351__auto__;
var G__16815 = cljs.core.count(c__4351__auto__);
var G__16816 = (0);
seq__16735 = G__16813;
chunk__16736 = G__16814;
count__16737 = G__16815;
i__16738 = G__16816;
continue;
} else {
var role = cljs.core.first(seq__16735__$1);
var temp__5457__auto___16817__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___16817__$2)){
var spec_16818 = temp__5457__auto___16817__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_16818)], 0));
} else {
}


var G__16819 = cljs.core.next(seq__16735__$1);
var G__16820 = null;
var G__16821 = (0);
var G__16822 = (0);
seq__16735 = G__16819;
chunk__16736 = G__16820;
count__16737 = G__16821;
i__16738 = G__16822;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
