goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__13016){
var vec__13017 = p__13016;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__13025 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13025,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13025,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13025,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__13036 = arguments.length;
switch (G__13036) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__13073_13113 = clojure.data.equality_partition;
var G__13074_13114 = "null";
var G__13075_13115 = ((function (G__13073_13113,G__13074_13114){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__13073_13113,G__13074_13114))
;
goog.object.set(G__13073_13113,G__13074_13114,G__13075_13115);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__13077_13117 = clojure.data.equality_partition;
var G__13078_13118 = "string";
var G__13079_13119 = ((function (G__13077_13117,G__13078_13118){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__13077_13117,G__13078_13118))
;
goog.object.set(G__13077_13117,G__13078_13118,G__13079_13119);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__13080_13121 = clojure.data.equality_partition;
var G__13081_13122 = "number";
var G__13082_13123 = ((function (G__13080_13121,G__13081_13122){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__13080_13121,G__13081_13122))
;
goog.object.set(G__13080_13121,G__13081_13122,G__13082_13123);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__13086_13124 = clojure.data.equality_partition;
var G__13087_13125 = "array";
var G__13088_13126 = ((function (G__13086_13124,G__13087_13125){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__13086_13124,G__13087_13125))
;
goog.object.set(G__13086_13124,G__13087_13125,G__13088_13126);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__13092_13129 = clojure.data.equality_partition;
var G__13093_13130 = "function";
var G__13094_13131 = ((function (G__13092_13129,G__13093_13130){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__13092_13129,G__13093_13130))
;
goog.object.set(G__13092_13129,G__13093_13130,G__13094_13131);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__13096_13134 = clojure.data.equality_partition;
var G__13097_13135 = "boolean";
var G__13098_13136 = ((function (G__13096_13134,G__13097_13135){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__13096_13134,G__13097_13135))
;
goog.object.set(G__13096_13134,G__13097_13135,G__13098_13136);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__13101_13137 = clojure.data.equality_partition;
var G__13102_13138 = "_";
var G__13103_13139 = ((function (G__13101_13137,G__13102_13138){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__13101_13137,G__13102_13138))
;
goog.object.set(G__13101_13137,G__13102_13138,G__13103_13139);
goog.object.set(clojure.data.Diff,"null",true);

var G__13145_13185 = clojure.data.diff_similar;
var G__13146_13186 = "null";
var G__13147_13187 = ((function (G__13145_13185,G__13146_13186){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13145_13185,G__13146_13186))
;
goog.object.set(G__13145_13185,G__13146_13186,G__13147_13187);

goog.object.set(clojure.data.Diff,"string",true);

var G__13149_13188 = clojure.data.diff_similar;
var G__13150_13189 = "string";
var G__13151_13190 = ((function (G__13149_13188,G__13150_13189){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13149_13188,G__13150_13189))
;
goog.object.set(G__13149_13188,G__13150_13189,G__13151_13190);

goog.object.set(clojure.data.Diff,"number",true);

var G__13152_13197 = clojure.data.diff_similar;
var G__13154_13198 = "number";
var G__13155_13199 = ((function (G__13152_13197,G__13154_13198){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13152_13197,G__13154_13198))
;
goog.object.set(G__13152_13197,G__13154_13198,G__13155_13199);

goog.object.set(clojure.data.Diff,"array",true);

var G__13159_13200 = clojure.data.diff_similar;
var G__13160_13201 = "array";
var G__13161_13202 = ((function (G__13159_13200,G__13160_13201){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__13159_13200,G__13160_13201))
;
goog.object.set(G__13159_13200,G__13160_13201,G__13161_13202);

goog.object.set(clojure.data.Diff,"function",true);

var G__13170_13204 = clojure.data.diff_similar;
var G__13171_13205 = "function";
var G__13172_13206 = ((function (G__13170_13204,G__13171_13205){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13170_13204,G__13171_13205))
;
goog.object.set(G__13170_13204,G__13171_13205,G__13172_13206);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__13173_13211 = clojure.data.diff_similar;
var G__13174_13212 = "boolean";
var G__13175_13213 = ((function (G__13173_13211,G__13174_13212){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13173_13211,G__13174_13212))
;
goog.object.set(G__13173_13211,G__13174_13212,G__13175_13213);

goog.object.set(clojure.data.Diff,"_",true);

var G__13177_13214 = clojure.data.diff_similar;
var G__13178_13215 = "_";
var G__13179_13216 = ((function (G__13177_13214,G__13178_13215){
return (function (a,b){
var fexpr__13181 = (function (){var G__13183 = clojure.data.equality_partition(a);
var G__13183__$1 = (((G__13183 instanceof cljs.core.Keyword))?G__13183.fqn:null);
switch (G__13183__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13183__$1)].join('')));

}
})();
return (fexpr__13181.cljs$core$IFn$_invoke$arity$2 ? fexpr__13181.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__13181.call(null,a,b));
});})(G__13177_13214,G__13178_13215))
;
goog.object.set(G__13177_13214,G__13178_13215,G__13179_13216);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
