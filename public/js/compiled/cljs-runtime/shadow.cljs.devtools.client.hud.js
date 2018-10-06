goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__18240__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto__,req){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto__,req){
return (function (state_21708){
var state_val_21709 = (state_21708[(1)]);
if((state_val_21709 === (7))){
var state_21708__$1 = state_21708;
var statearr_21710_21736 = state_21708__$1;
(statearr_21710_21736[(2)] = false);

(statearr_21710_21736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (1))){
var state_21708__$1 = state_21708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21708__$1,(2),req);
} else {
if((state_val_21709 === (4))){
var inst_21672 = (state_21708[(7)]);
var inst_21678 = (inst_21672 == null);
var inst_21679 = cljs.core.not(inst_21678);
var state_21708__$1 = state_21708;
if(inst_21679){
var statearr_21711_21737 = state_21708__$1;
(statearr_21711_21737[(1)] = (6));

} else {
var statearr_21712_21738 = state_21708__$1;
(statearr_21712_21738[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (15))){
var state_21708__$1 = state_21708;
var statearr_21713_21739 = state_21708__$1;
(statearr_21713_21739[(2)] = null);

(statearr_21713_21739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (13))){
var inst_21672 = (state_21708[(7)]);
var state_21708__$1 = state_21708;
var statearr_21714_21740 = state_21708__$1;
(statearr_21714_21740[(2)] = inst_21672);

(statearr_21714_21740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (6))){
var inst_21672 = (state_21708[(7)]);
var inst_21681 = inst_21672.cljs$lang$protocol_mask$partition0$;
var inst_21682 = (inst_21681 & (64));
var inst_21683 = inst_21672.cljs$core$ISeq$;
var inst_21684 = (cljs.core.PROTOCOL_SENTINEL === inst_21683);
var inst_21685 = ((inst_21682) || (inst_21684));
var state_21708__$1 = state_21708;
if(cljs.core.truth_(inst_21685)){
var statearr_21715_21741 = state_21708__$1;
(statearr_21715_21741[(1)] = (9));

} else {
var statearr_21716_21742 = state_21708__$1;
(statearr_21716_21742[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (17))){
var inst_21704 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21717_21743 = state_21708__$1;
(statearr_21717_21743[(2)] = inst_21704);

(statearr_21717_21743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (3))){
var state_21708__$1 = state_21708;
var statearr_21718_21744 = state_21708__$1;
(statearr_21718_21744[(2)] = null);

(statearr_21718_21744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (12))){
var inst_21672 = (state_21708[(7)]);
var inst_21694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21672);
var state_21708__$1 = state_21708;
var statearr_21719_21745 = state_21708__$1;
(statearr_21719_21745[(2)] = inst_21694);

(statearr_21719_21745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (2))){
var inst_21672 = (state_21708[(7)]);
var inst_21672__$1 = (state_21708[(2)]);
var inst_21673 = (inst_21672__$1 == null);
var state_21708__$1 = (function (){var statearr_21720 = state_21708;
(statearr_21720[(7)] = inst_21672__$1);

return statearr_21720;
})();
if(cljs.core.truth_(inst_21673)){
var statearr_21721_21746 = state_21708__$1;
(statearr_21721_21746[(1)] = (3));

} else {
var statearr_21722_21747 = state_21708__$1;
(statearr_21722_21747[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (11))){
var inst_21689 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21723_21748 = state_21708__$1;
(statearr_21723_21748[(2)] = inst_21689);

(statearr_21723_21748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (9))){
var state_21708__$1 = state_21708;
var statearr_21724_21749 = state_21708__$1;
(statearr_21724_21749[(2)] = true);

(statearr_21724_21749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (5))){
var inst_21706 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21708__$1,inst_21706);
} else {
if((state_val_21709 === (14))){
var inst_21697 = (state_21708[(8)]);
var inst_21697__$1 = (state_21708[(2)]);
var inst_21698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21697__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_21699 = (inst_21698 === (0));
var state_21708__$1 = (function (){var statearr_21725 = state_21708;
(statearr_21725[(8)] = inst_21697__$1);

return statearr_21725;
})();
if(cljs.core.truth_(inst_21699)){
var statearr_21726_21750 = state_21708__$1;
(statearr_21726_21750[(1)] = (15));

} else {
var statearr_21727_21751 = state_21708__$1;
(statearr_21727_21751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (16))){
var inst_21697 = (state_21708[(8)]);
var inst_21702 = console.warn("file open failed",inst_21697);
var state_21708__$1 = state_21708;
var statearr_21728_21752 = state_21708__$1;
(statearr_21728_21752[(2)] = inst_21702);

(statearr_21728_21752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (10))){
var state_21708__$1 = state_21708;
var statearr_21729_21753 = state_21708__$1;
(statearr_21729_21753[(2)] = false);

(statearr_21729_21753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (8))){
var inst_21692 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
if(cljs.core.truth_(inst_21692)){
var statearr_21730_21754 = state_21708__$1;
(statearr_21730_21754[(1)] = (12));

} else {
var statearr_21731_21755 = state_21708__$1;
(statearr_21731_21755[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18240__auto__,req))
;
return ((function (switch__18068__auto__,c__18240__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto____0 = (function (){
var statearr_21732 = [null,null,null,null,null,null,null,null,null];
(statearr_21732[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto__);

(statearr_21732[(1)] = (1));

return statearr_21732;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto____1 = (function (state_21708){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_21708);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e21733){if((e21733 instanceof Object)){
var ex__18072__auto__ = e21733;
var statearr_21734_21756 = state_21708;
(statearr_21734_21756[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21757 = state_21708;
state_21708 = G__21757;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto__ = function(state_21708){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto____1.call(this,state_21708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto__,req))
})();
var state__18242__auto__ = (function (){var statearr_21735 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_21735[(6)] = c__18240__auto__);

return statearr_21735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto__,req))
);

return c__18240__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__21759 = arguments.length;
switch (G__21759) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___21761 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___21761 == null)){
} else {
var x_21762 = temp__5461__auto___21761;
shadow.dom.remove(x_21762);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__18240__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto__,el,container_el,temp__5461__auto__){
return (function (state_21775){
var state_val_21776 = (state_21775[(1)]);
if((state_val_21776 === (1))){
var inst_21763 = cljs.core.async.timeout((250));
var state_21775__$1 = state_21775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21775__$1,(2),inst_21763);
} else {
if((state_val_21776 === (2))){
var inst_21765 = (state_21775[(2)]);
var inst_21766 = [el];
var inst_21767 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_21768 = [inst_21767];
var inst_21769 = cljs.core.PersistentHashMap.fromArrays(inst_21766,inst_21768);
var inst_21770 = shadow.animate.start((250),inst_21769);
var state_21775__$1 = (function (){var statearr_21777 = state_21775;
(statearr_21777[(7)] = inst_21765);

return statearr_21777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21775__$1,(3),inst_21770);
} else {
if((state_val_21776 === (3))){
var inst_21772 = (state_21775[(2)]);
var inst_21773 = shadow.dom.remove(container_el);
var state_21775__$1 = (function (){var statearr_21778 = state_21775;
(statearr_21778[(8)] = inst_21772);

return statearr_21778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21775__$1,inst_21773);
} else {
return null;
}
}
}
});})(c__18240__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__18068__auto__,c__18240__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto____0 = (function (){
var statearr_21779 = [null,null,null,null,null,null,null,null,null];
(statearr_21779[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto__);

(statearr_21779[(1)] = (1));

return statearr_21779;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto____1 = (function (state_21775){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_21775);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e21780){if((e21780 instanceof Object)){
var ex__18072__auto__ = e21780;
var statearr_21781_21783 = state_21775;
(statearr_21781_21783[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21780;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21784 = state_21775;
state_21775 = G__21784;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto__ = function(state_21775){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto____1.call(this,state_21775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto__,el,container_el,temp__5461__auto__))
})();
var state__18242__auto__ = (function (){var statearr_21782 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_21782[(6)] = c__18240__auto__);

return statearr_21782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto__,el,container_el,temp__5461__auto__))
);

return c__18240__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4324__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__21785(s__21786){
return (new cljs.core.LazySeq(null,(function (){
var s__21786__$1 = s__21786;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__21786__$1);
if(temp__5457__auto__){
var s__21786__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21786__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21786__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21788 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21787 = (0);
while(true){
if((i__21787 < size__4323__auto__)){
var vec__21789 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21787);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21789,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21789,(1),null);
cljs.core.chunk_append(b__21788,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__21792 = "%4d | %s";
var G__21793 = (((1) + idx) + start_idx);
var G__21794 = text;
return goog.string.format(G__21792,G__21793,G__21794);
})()], null));

var G__21801 = (i__21787 + (1));
i__21787 = G__21801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21788),shadow$cljs$devtools$client$hud$source_line_html_$_iter__21785(cljs.core.chunk_rest(s__21786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21788),null);
}
} else {
var vec__21795 = cljs.core.first(s__21786__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21795,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21795,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__21798 = "%4d | %s";
var G__21799 = (((1) + idx) + start_idx);
var G__21800 = text;
return goog.string.format(G__21798,G__21799,G__21800);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__21785(cljs.core.rest(s__21786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__21803 = arguments.length;
switch (G__21803) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__21805){
var map__21806 = p__21805;
var map__21806__$1 = ((((!((map__21806 == null)))?(((((map__21806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21806):map__21806);
var warning = map__21806__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__21806,map__21806__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__21806,map__21806__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__21808){
var map__21809 = p__21808;
var map__21809__$1 = ((((!((map__21809 == null)))?(((((map__21809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21809):map__21809);
var warning = map__21809__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__21811 = source_excerpt;
var map__21811__$1 = ((((!((map__21811 == null)))?(((((map__21811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21811):map__21811);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21811__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21811__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21811__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21811__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__3949__auto__ = column;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__21814){
var map__21815 = p__21814;
var map__21815__$1 = ((((!((map__21815 == null)))?(((((map__21815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21815):map__21815);
var msg = map__21815__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__21817 = info;
var map__21817__$1 = ((((!((map__21817 == null)))?(((((map__21817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21817):map__21817);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21817__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21817,map__21817__$1,sources,map__21815,map__21815__$1,msg,type,info){
return (function (p1__21813_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__21813_SHARP_));
});})(map__21817,map__21817__$1,sources,map__21815,map__21815__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4324__auto__ = ((function (map__21817,map__21817__$1,sources,sources_with_warnings,map__21815,map__21815__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__21819(s__21820){
return (new cljs.core.LazySeq(null,((function (map__21817,map__21817__$1,sources,sources_with_warnings,map__21815,map__21815__$1,msg,type,info){
return (function (){
var s__21820__$1 = s__21820;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__21820__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__21825 = cljs.core.first(xs__6012__auto__);
var map__21825__$1 = ((((!((map__21825 == null)))?(((((map__21825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21825):map__21825);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21825__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4320__auto__ = ((function (s__21820__$1,map__21825,map__21825__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__21817,map__21817__$1,sources,sources_with_warnings,map__21815,map__21815__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__21819_$_iter__21821(s__21822){
return (new cljs.core.LazySeq(null,((function (s__21820__$1,map__21825,map__21825__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__21817,map__21817__$1,sources,sources_with_warnings,map__21815,map__21815__$1,msg,type,info){
return (function (){
var s__21822__$1 = s__21822;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__21822__$1);
if(temp__5457__auto____$1){
var s__21822__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21822__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21822__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21824 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21823 = (0);
while(true){
if((i__21823 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21823);
cljs.core.chunk_append(b__21824,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__21828 = (i__21823 + (1));
i__21823 = G__21828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21824),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__21819_$_iter__21821(cljs.core.chunk_rest(s__21822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21824),null);
}
} else {
var warning = cljs.core.first(s__21822__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__21819_$_iter__21821(cljs.core.rest(s__21822__$2)));
}
} else {
return null;
}
break;
}
});})(s__21820__$1,map__21825,map__21825__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__21817,map__21817__$1,sources,sources_with_warnings,map__21815,map__21815__$1,msg,type,info))
,null,null));
});})(s__21820__$1,map__21825,map__21825__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__21817,map__21817__$1,sources,sources_with_warnings,map__21815,map__21815__$1,msg,type,info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__21819(cljs.core.rest(s__21820__$1)));
} else {
var G__21829 = cljs.core.rest(s__21820__$1);
s__21820__$1 = G__21829;
continue;
}
} else {
return null;
}
break;
}
});})(map__21817,map__21817__$1,sources,sources_with_warnings,map__21815,map__21815__$1,msg,type,info))
,null,null));
});})(map__21817,map__21817__$1,sources,sources_with_warnings,map__21815,map__21815__$1,msg,type,info))
;
return iter__4324__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__21830){
var map__21831 = p__21830;
var map__21831__$1 = ((((!((map__21831 == null)))?(((((map__21831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21831):map__21831);
var msg = map__21831__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21831__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var x = temp__5461__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
