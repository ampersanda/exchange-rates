goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21843 = arguments.length;
var i__4532__auto___21844 = (0);
while(true){
if((i__4532__auto___21844 < len__4531__auto___21843)){
args__4534__auto__.push((arguments[i__4532__auto___21844]));

var G__21845 = (i__4532__auto___21844 + (1));
i__4532__auto___21844 = G__21845;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21841){
var G__21842 = cljs.core.first(seq21841);
var seq21841__$1 = cljs.core.next(seq21841);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21842,seq21841__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__21852){
var map__21853 = p__21852;
var map__21853__$1 = ((((!((map__21853 == null)))?(((((map__21853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21853):map__21853);
var src = map__21853__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21864 = cljs.core.seq(sources);
var chunk__21865 = null;
var count__21866 = (0);
var i__21867 = (0);
while(true){
if((i__21867 < count__21866)){
var map__21869 = chunk__21865.cljs$core$IIndexed$_nth$arity$2(null,i__21867);
var map__21869__$1 = ((((!((map__21869 == null)))?(((((map__21869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21869):map__21869);
var src = map__21869__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21869__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21869__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21869__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21869__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__21886 = seq__21864;
var G__21887 = chunk__21865;
var G__21888 = count__21866;
var G__21889 = (i__21867 + (1));
seq__21864 = G__21886;
chunk__21865 = G__21887;
count__21866 = G__21888;
i__21867 = G__21889;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21864);
if(temp__5457__auto__){
var seq__21864__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21864__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21864__$1);
var G__21890 = cljs.core.chunk_rest(seq__21864__$1);
var G__21891 = c__4351__auto__;
var G__21892 = cljs.core.count(c__4351__auto__);
var G__21893 = (0);
seq__21864 = G__21890;
chunk__21865 = G__21891;
count__21866 = G__21892;
i__21867 = G__21893;
continue;
} else {
var map__21874 = cljs.core.first(seq__21864__$1);
var map__21874__$1 = ((((!((map__21874 == null)))?(((((map__21874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21874):map__21874);
var src = map__21874__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__21896 = cljs.core.next(seq__21864__$1);
var G__21897 = null;
var G__21898 = (0);
var G__21899 = (0);
seq__21864 = G__21896;
chunk__21865 = G__21897;
count__21866 = G__21898;
i__21867 = G__21899;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21904 = cljs.core.seq(js_requires);
var chunk__21905 = null;
var count__21906 = (0);
var i__21907 = (0);
while(true){
if((i__21907 < count__21906)){
var js_ns = chunk__21905.cljs$core$IIndexed$_nth$arity$2(null,i__21907);
var require_str_21908 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21908);


var G__21909 = seq__21904;
var G__21910 = chunk__21905;
var G__21911 = count__21906;
var G__21912 = (i__21907 + (1));
seq__21904 = G__21909;
chunk__21905 = G__21910;
count__21906 = G__21911;
i__21907 = G__21912;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21904);
if(temp__5457__auto__){
var seq__21904__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21904__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21904__$1);
var G__21913 = cljs.core.chunk_rest(seq__21904__$1);
var G__21914 = c__4351__auto__;
var G__21915 = cljs.core.count(c__4351__auto__);
var G__21916 = (0);
seq__21904 = G__21913;
chunk__21905 = G__21914;
count__21906 = G__21915;
i__21907 = G__21916;
continue;
} else {
var js_ns = cljs.core.first(seq__21904__$1);
var require_str_21917 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21917);


var G__21918 = cljs.core.next(seq__21904__$1);
var G__21919 = null;
var G__21920 = (0);
var G__21921 = (0);
seq__21904 = G__21918;
chunk__21905 = G__21919;
count__21906 = G__21920;
i__21907 = G__21921;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__21922 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__21922) : callback.call(null,G__21922));
} else {
var G__21923 = shadow.cljs.devtools.client.env.files_url();
var G__21924 = ((function (G__21923){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__21923))
;
var G__21925 = "POST";
var G__21926 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__21927 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__21923,G__21924,G__21925,G__21926,G__21927);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__21929){
var map__21930 = p__21929;
var map__21930__$1 = ((((!((map__21930 == null)))?(((((map__21930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21930):map__21930);
var msg = map__21930__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21930__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21930__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__21932 = info;
var map__21932__$1 = ((((!((map__21932 == null)))?(((((map__21932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21932):map__21932);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21932__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21932__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__21932,map__21932__$1,sources,compiled,map__21930,map__21930__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21935(s__21936){
return (new cljs.core.LazySeq(null,((function (map__21932,map__21932__$1,sources,compiled,map__21930,map__21930__$1,msg,info,reload_info){
return (function (){
var s__21936__$1 = s__21936;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__21936__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__21942 = cljs.core.first(xs__6012__auto__);
var map__21942__$1 = ((((!((map__21942 == null)))?(((((map__21942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21942):map__21942);
var src = map__21942__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21942__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21942__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__21936__$1,map__21942,map__21942__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__21932,map__21932__$1,sources,compiled,map__21930,map__21930__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21935_$_iter__21937(s__21938){
return (new cljs.core.LazySeq(null,((function (s__21936__$1,map__21942,map__21942__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__21932,map__21932__$1,sources,compiled,map__21930,map__21930__$1,msg,info,reload_info){
return (function (){
var s__21938__$1 = s__21938;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__21938__$1);
if(temp__5457__auto____$1){
var s__21938__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21938__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21938__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21940 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21939 = (0);
while(true){
if((i__21939 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21939);
cljs.core.chunk_append(b__21940,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21969 = (i__21939 + (1));
i__21939 = G__21969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21940),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21935_$_iter__21937(cljs.core.chunk_rest(s__21938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21940),null);
}
} else {
var warning = cljs.core.first(s__21938__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21935_$_iter__21937(cljs.core.rest(s__21938__$2)));
}
} else {
return null;
}
break;
}
});})(s__21936__$1,map__21942,map__21942__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__21932,map__21932__$1,sources,compiled,map__21930,map__21930__$1,msg,info,reload_info))
,null,null));
});})(s__21936__$1,map__21942,map__21942__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__21932,map__21932__$1,sources,compiled,map__21930,map__21930__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21935(cljs.core.rest(s__21936__$1)));
} else {
var G__21970 = cljs.core.rest(s__21936__$1);
s__21936__$1 = G__21970;
continue;
}
} else {
var G__21971 = cljs.core.rest(s__21936__$1);
s__21936__$1 = G__21971;
continue;
}
} else {
return null;
}
break;
}
});})(map__21932,map__21932__$1,sources,compiled,map__21930,map__21930__$1,msg,info,reload_info))
,null,null));
});})(map__21932,map__21932__$1,sources,compiled,map__21930,map__21930__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__21944_21972 = cljs.core.seq(warnings);
var chunk__21945_21973 = null;
var count__21946_21974 = (0);
var i__21947_21975 = (0);
while(true){
if((i__21947_21975 < count__21946_21974)){
var map__21948_21976 = chunk__21945_21973.cljs$core$IIndexed$_nth$arity$2(null,i__21947_21975);
var map__21948_21977__$1 = ((((!((map__21948_21976 == null)))?(((((map__21948_21976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21948_21976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21948_21976):map__21948_21976);
var w_21978 = map__21948_21977__$1;
var msg_21979__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948_21977__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948_21977__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948_21977__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948_21977__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21982)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21980),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21981),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21979__$1)].join(''));


var G__21986 = seq__21944_21972;
var G__21987 = chunk__21945_21973;
var G__21988 = count__21946_21974;
var G__21989 = (i__21947_21975 + (1));
seq__21944_21972 = G__21986;
chunk__21945_21973 = G__21987;
count__21946_21974 = G__21988;
i__21947_21975 = G__21989;
continue;
} else {
var temp__5457__auto___21990 = cljs.core.seq(seq__21944_21972);
if(temp__5457__auto___21990){
var seq__21944_21991__$1 = temp__5457__auto___21990;
if(cljs.core.chunked_seq_QMARK_(seq__21944_21991__$1)){
var c__4351__auto___21992 = cljs.core.chunk_first(seq__21944_21991__$1);
var G__21993 = cljs.core.chunk_rest(seq__21944_21991__$1);
var G__21994 = c__4351__auto___21992;
var G__21995 = cljs.core.count(c__4351__auto___21992);
var G__21996 = (0);
seq__21944_21972 = G__21993;
chunk__21945_21973 = G__21994;
count__21946_21974 = G__21995;
i__21947_21975 = G__21996;
continue;
} else {
var map__21950_21997 = cljs.core.first(seq__21944_21991__$1);
var map__21950_21998__$1 = ((((!((map__21950_21997 == null)))?(((((map__21950_21997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21950_21997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21950_21997):map__21950_21997);
var w_21999 = map__21950_21998__$1;
var msg_22000__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21950_21998__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21950_21998__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21950_21998__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21950_21998__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22003)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22001),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22002),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22000__$1)].join(''));


var G__22004 = cljs.core.next(seq__21944_21991__$1);
var G__22005 = null;
var G__22006 = (0);
var G__22007 = (0);
seq__21944_21972 = G__22004;
chunk__21945_21973 = G__22005;
count__21946_21974 = G__22006;
i__21947_21975 = G__22007;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21932,map__21932__$1,sources,compiled,warnings,map__21930,map__21930__$1,msg,info,reload_info){
return (function (p__21952){
var map__21953 = p__21952;
var map__21953__$1 = ((((!((map__21953 == null)))?(((((map__21953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21953):map__21953);
var src = map__21953__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21953__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21953__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__21932,map__21932__$1,sources,compiled,warnings,map__21930,map__21930__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__21932,map__21932__$1,sources,compiled,warnings,map__21930,map__21930__$1,msg,info,reload_info){
return (function (p__21955){
var map__21956 = p__21955;
var map__21956__$1 = ((((!((map__21956 == null)))?(((((map__21956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21956):map__21956);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21956__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__21932,map__21932__$1,sources,compiled,warnings,map__21930,map__21930__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21932,map__21932__$1,sources,compiled,warnings,map__21930,map__21930__$1,msg,info,reload_info){
return (function (p__21958){
var map__21959 = p__21958;
var map__21959__$1 = ((((!((map__21959 == null)))?(((((map__21959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21959):map__21959);
var rc = map__21959__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21959__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__21932,map__21932__$1,sources,compiled,warnings,map__21930,map__21930__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__21932,map__21932__$1,sources,compiled,warnings,map__21930,map__21930__$1,msg,info,reload_info){
return (function (p1__21928_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21928_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__21932,map__21932__$1,sources,compiled,warnings,map__21930,map__21930__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__3938__auto__){
return rel_new;
} else {
return and__3938__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__3938__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__3938__auto____$1){
return new$;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__22008){
var map__22009 = p__22008;
var map__22009__$1 = ((((!((map__22009 == null)))?(((((map__22009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22009):map__22009);
var msg = map__22009__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22009__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__22011 = cljs.core.seq(updates);
var chunk__22013 = null;
var count__22014 = (0);
var i__22015 = (0);
while(true){
if((i__22015 < count__22014)){
var path = chunk__22013.cljs$core$IIndexed$_nth$arity$2(null,i__22015);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22017_22048 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22020_22049 = null;
var count__22021_22050 = (0);
var i__22022_22051 = (0);
while(true){
if((i__22022_22051 < count__22021_22050)){
var node_22052 = chunk__22020_22049.cljs$core$IIndexed$_nth$arity$2(null,i__22022_22051);
var path_match_22053 = shadow.cljs.devtools.client.browser.match_paths(node_22052.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22053)){
var new_link_22054 = (function (){var G__22026 = node_22052.cloneNode(true);
G__22026.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22053),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22026;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22053], 0));

goog.dom.insertSiblingAfter(new_link_22054,node_22052);

goog.dom.removeNode(node_22052);


var G__22055 = seq__22017_22048;
var G__22056 = chunk__22020_22049;
var G__22057 = count__22021_22050;
var G__22058 = (i__22022_22051 + (1));
seq__22017_22048 = G__22055;
chunk__22020_22049 = G__22056;
count__22021_22050 = G__22057;
i__22022_22051 = G__22058;
continue;
} else {
var G__22059 = seq__22017_22048;
var G__22060 = chunk__22020_22049;
var G__22061 = count__22021_22050;
var G__22062 = (i__22022_22051 + (1));
seq__22017_22048 = G__22059;
chunk__22020_22049 = G__22060;
count__22021_22050 = G__22061;
i__22022_22051 = G__22062;
continue;
}
} else {
var temp__5457__auto___22063 = cljs.core.seq(seq__22017_22048);
if(temp__5457__auto___22063){
var seq__22017_22064__$1 = temp__5457__auto___22063;
if(cljs.core.chunked_seq_QMARK_(seq__22017_22064__$1)){
var c__4351__auto___22065 = cljs.core.chunk_first(seq__22017_22064__$1);
var G__22066 = cljs.core.chunk_rest(seq__22017_22064__$1);
var G__22067 = c__4351__auto___22065;
var G__22068 = cljs.core.count(c__4351__auto___22065);
var G__22069 = (0);
seq__22017_22048 = G__22066;
chunk__22020_22049 = G__22067;
count__22021_22050 = G__22068;
i__22022_22051 = G__22069;
continue;
} else {
var node_22070 = cljs.core.first(seq__22017_22064__$1);
var path_match_22071 = shadow.cljs.devtools.client.browser.match_paths(node_22070.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22071)){
var new_link_22072 = (function (){var G__22030 = node_22070.cloneNode(true);
G__22030.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22071),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22030;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22071], 0));

goog.dom.insertSiblingAfter(new_link_22072,node_22070);

goog.dom.removeNode(node_22070);


var G__22073 = cljs.core.next(seq__22017_22064__$1);
var G__22074 = null;
var G__22075 = (0);
var G__22076 = (0);
seq__22017_22048 = G__22073;
chunk__22020_22049 = G__22074;
count__22021_22050 = G__22075;
i__22022_22051 = G__22076;
continue;
} else {
var G__22080 = cljs.core.next(seq__22017_22064__$1);
var G__22081 = null;
var G__22082 = (0);
var G__22083 = (0);
seq__22017_22048 = G__22080;
chunk__22020_22049 = G__22081;
count__22021_22050 = G__22082;
i__22022_22051 = G__22083;
continue;
}
}
} else {
}
}
break;
}


var G__22084 = seq__22011;
var G__22085 = chunk__22013;
var G__22086 = count__22014;
var G__22087 = (i__22015 + (1));
seq__22011 = G__22084;
chunk__22013 = G__22085;
count__22014 = G__22086;
i__22015 = G__22087;
continue;
} else {
var G__22088 = seq__22011;
var G__22089 = chunk__22013;
var G__22090 = count__22014;
var G__22091 = (i__22015 + (1));
seq__22011 = G__22088;
chunk__22013 = G__22089;
count__22014 = G__22090;
i__22015 = G__22091;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22011);
if(temp__5457__auto__){
var seq__22011__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22011__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22011__$1);
var G__22092 = cljs.core.chunk_rest(seq__22011__$1);
var G__22093 = c__4351__auto__;
var G__22094 = cljs.core.count(c__4351__auto__);
var G__22095 = (0);
seq__22011 = G__22092;
chunk__22013 = G__22093;
count__22014 = G__22094;
i__22015 = G__22095;
continue;
} else {
var path = cljs.core.first(seq__22011__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22031_22096 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22034_22097 = null;
var count__22035_22098 = (0);
var i__22036_22099 = (0);
while(true){
if((i__22036_22099 < count__22035_22098)){
var node_22102 = chunk__22034_22097.cljs$core$IIndexed$_nth$arity$2(null,i__22036_22099);
var path_match_22103 = shadow.cljs.devtools.client.browser.match_paths(node_22102.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22103)){
var new_link_22104 = (function (){var G__22042 = node_22102.cloneNode(true);
G__22042.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22103),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22042;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22103], 0));

goog.dom.insertSiblingAfter(new_link_22104,node_22102);

goog.dom.removeNode(node_22102);


var G__22105 = seq__22031_22096;
var G__22106 = chunk__22034_22097;
var G__22107 = count__22035_22098;
var G__22108 = (i__22036_22099 + (1));
seq__22031_22096 = G__22105;
chunk__22034_22097 = G__22106;
count__22035_22098 = G__22107;
i__22036_22099 = G__22108;
continue;
} else {
var G__22109 = seq__22031_22096;
var G__22110 = chunk__22034_22097;
var G__22111 = count__22035_22098;
var G__22112 = (i__22036_22099 + (1));
seq__22031_22096 = G__22109;
chunk__22034_22097 = G__22110;
count__22035_22098 = G__22111;
i__22036_22099 = G__22112;
continue;
}
} else {
var temp__5457__auto___22113__$1 = cljs.core.seq(seq__22031_22096);
if(temp__5457__auto___22113__$1){
var seq__22031_22114__$1 = temp__5457__auto___22113__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22031_22114__$1)){
var c__4351__auto___22115 = cljs.core.chunk_first(seq__22031_22114__$1);
var G__22116 = cljs.core.chunk_rest(seq__22031_22114__$1);
var G__22117 = c__4351__auto___22115;
var G__22118 = cljs.core.count(c__4351__auto___22115);
var G__22119 = (0);
seq__22031_22096 = G__22116;
chunk__22034_22097 = G__22117;
count__22035_22098 = G__22118;
i__22036_22099 = G__22119;
continue;
} else {
var node_22120 = cljs.core.first(seq__22031_22114__$1);
var path_match_22121 = shadow.cljs.devtools.client.browser.match_paths(node_22120.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22121)){
var new_link_22122 = (function (){var G__22043 = node_22120.cloneNode(true);
G__22043.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22121),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22043;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22121], 0));

goog.dom.insertSiblingAfter(new_link_22122,node_22120);

goog.dom.removeNode(node_22120);


var G__22123 = cljs.core.next(seq__22031_22114__$1);
var G__22124 = null;
var G__22125 = (0);
var G__22126 = (0);
seq__22031_22096 = G__22123;
chunk__22034_22097 = G__22124;
count__22035_22098 = G__22125;
i__22036_22099 = G__22126;
continue;
} else {
var G__22127 = cljs.core.next(seq__22031_22114__$1);
var G__22128 = null;
var G__22129 = (0);
var G__22130 = (0);
seq__22031_22096 = G__22127;
chunk__22034_22097 = G__22128;
count__22035_22098 = G__22129;
i__22036_22099 = G__22130;
continue;
}
}
} else {
}
}
break;
}


var G__22131 = cljs.core.next(seq__22011__$1);
var G__22132 = null;
var G__22133 = (0);
var G__22134 = (0);
seq__22011 = G__22131;
chunk__22013 = G__22132;
count__22014 = G__22133;
i__22015 = G__22134;
continue;
} else {
var G__22135 = cljs.core.next(seq__22011__$1);
var G__22136 = null;
var G__22137 = (0);
var G__22138 = (0);
seq__22011 = G__22135;
chunk__22013 = G__22136;
count__22014 = G__22137;
i__22015 = G__22138;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__22139){
var map__22140 = p__22139;
var map__22140__$1 = ((((!((map__22140 == null)))?(((((map__22140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22140):map__22140);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22140__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22140__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__22140,map__22140__$1,id,js){
return (function (){
return eval(js);
});})(map__22140,map__22140__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__22147){
var map__22148 = p__22147;
var map__22148__$1 = ((((!((map__22148 == null)))?(((((map__22148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22148):map__22148);
var msg = map__22148__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22148__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22148__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22148__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22148__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__22148,map__22148__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__22150){
var map__22151 = p__22150;
var map__22151__$1 = ((((!((map__22151 == null)))?(((((map__22151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22151):map__22151);
var src = map__22151__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22151__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__22148,map__22148__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__22148,map__22148__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__22148,map__22148__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__22158){
var map__22159 = p__22158;
var map__22159__$1 = ((((!((map__22159 == null)))?(((((map__22159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22159):map__22159);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__22159,map__22159__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__22159,map__22159__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__22164){
var map__22165 = p__22164;
var map__22165__$1 = ((((!((map__22165 == null)))?(((((map__22165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22165):map__22165);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__22169){
var map__22170 = p__22169;
var map__22170__$1 = ((((!((map__22170 == null)))?(((((map__22170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22170):map__22170);
var msg = map__22170__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22170__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__22172 = type;
var G__22172__$1 = (((G__22172 instanceof cljs.core.Keyword))?G__22172.fqn:null);
switch (G__22172__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__22180 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__22181 = ((function (G__22180){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__22180))
;
var G__22182 = "POST";
var G__22183 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__22184 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__22180,G__22181,G__22182,G__22183,G__22184);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e22186){var e = e22186;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___22187 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___22187)){
var s_22188 = temp__5457__auto___22187;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_22188.onclose = ((function (s_22188,temp__5457__auto___22187){
return (function (e){
return null;
});})(s_22188,temp__5457__auto___22187))
;

s_22188.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
