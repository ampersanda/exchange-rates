goog.provide('exhangeratesapi.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
exhangeratesapi.core.default_base = "USD";
if((typeof exhangeratesapi !== 'undefined') && (typeof exhangeratesapi.core !== 'undefined') && (typeof exhangeratesapi.core.app_state !== 'undefined')){
} else {
exhangeratesapi.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"base","base",185279322),exhangeratesapi.core.default_base,new cljs.core.Keyword(null,"last-update-date","last-update-date",-1420841099),null,new cljs.core.Keyword(null,"bases","bases",-1036892420),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rates","rates",-990130920),null,new cljs.core.Keyword(null,"added-rates","added-rates",-992001970),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null));
}
exhangeratesapi.core.exchange_rates = (function exhangeratesapi$core$exchange_rates(){
var base_placeholder = "Please select currecy base..";
var api_url = "https://api.exchangeratesapi.io/latest";
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"exchange-rates",new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),((function (base_placeholder,api_url){
return (function (this$){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(exhangeratesapi.core.app_state)))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (base_placeholder,api_url){
return (function (r){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(exhangeratesapi.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"last-update-date","last-update-date",-1420841099)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date"], null)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(exhangeratesapi.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"bases","bases",-1036892420)], null),cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rates"], null))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(exhangeratesapi.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"rates","rates",-990130920)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rates"], null)));
});})(base_placeholder,api_url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (base_placeholder,api_url){
return (function (p__11823){
var map__11824 = p__11823;
var map__11824__$1 = ((((!((map__11824 == null)))?(((((map__11824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11824):map__11824);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11824__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11824__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
console.error(["Something Bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));

return alert((function (){var G__11826 = status;
switch (G__11826) {
case (0):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text_SLASH_),"Please check you internet connection"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11826)].join('')));

}
})());
});})(base_placeholder,api_url))
], null)], 0));
});})(base_placeholder,api_url))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){var selected_option = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(exhangeratesapi.core.default_base);
return ((function (selected_option,base_placeholder,api_url){
return (function (){
var exchange = new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(exhangeratesapi.core.app_state));
var base = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(exchange);
var rates = new cljs.core.Keyword(null,"rates","rates",-990130920).cljs$core$IFn$_invoke$arity$1(exchange);
var bases = new cljs.core.Keyword(null,"bases","bases",-1036892420).cljs$core$IFn$_invoke$arity$1(exchange);
var added_rates = new cljs.core.Keyword(null,"added-rates","added-rates",-992001970).cljs$core$IFn$_invoke$arity$1(exchange);
var date = new cljs.core.Keyword(null,"last-update-date","last-update-date",-1420841099).cljs$core$IFn$_invoke$arity$1(exchange);
var value_to_exchange = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(exchange);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bases","div.bases",140641311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["latest update date -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"base-value"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),(1),new cljs.core.Keyword(null,"max-length","max-length",-254826109),(10),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Input number to exchange",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url){
return (function (p1__11820_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(exhangeratesapi.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__11820_SHARP_.currentTarget.value);
});})(exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url))
], null)], null),base,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"add-base"], null),"Add Currency"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"add-base",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url){
return (function (e){
var v = e.target.value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_placeholder,v)){
return exhangeratesapi.core.default_base;
} else {
return cljs.core.reset_BANG_(selected_option,v);
}
});})(exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),base_placeholder], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url){
return (function (p1__11821_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__11821_SHARP_], null),p1__11821_SHARP_],null));
});})(exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url))
,bases)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(exhangeratesapi.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"added-rates","added-rates",-992001970)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base","base",185279322),cljs.core.deref(selected_option),new cljs.core.Keyword(null,"rate","rate",-1428659698),cljs.core.get.cljs$core$IFn$_invoke$arity$2(rates,cljs.core.deref(selected_option))], null)], 0));
});})(exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url))
], null),"Add"], null),(cljs.core.truth_(added_rates)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url){
return (function (p1__11822_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__11822_SHARP_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((value_to_exchange * new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(p1__11822_SHARP_)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__11822_SHARP_))].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(exhangeratesapi.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"added-rates","added-rates",-992001970)], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__11822_SHARP_),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(p1__11822_SHARP_)], null)], 0));
});})(exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url))
], null),"delete"], null)], null)],null));
});})(exchange,base,rates,bases,added_rates,date,value_to_exchange,selected_option,base_placeholder,api_url))
,added_rates)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"no rates"], null))], null)], null);
});
;})(selected_option,base_placeholder,api_url))
})()], null));
});
exhangeratesapi.core.start = (function exhangeratesapi$core$start(){
var G__11828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exhangeratesapi.core.exchange_rates], null);
var G__11829 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11828,G__11829) : reagent.core.render_component.call(null,G__11828,G__11829));
});
exhangeratesapi.core.init = (function exhangeratesapi$core$init(){
return exhangeratesapi.core.start();
});
goog.exportSymbol('exhangeratesapi.core.init', exhangeratesapi.core.init);
exhangeratesapi.core.stop = (function exhangeratesapi$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=exhangeratesapi.core.js.map
