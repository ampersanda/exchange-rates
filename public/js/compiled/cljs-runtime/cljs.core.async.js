goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18298 = arguments.length;
switch (G__18298) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18299 = (function (f,blockable,meta18300){
this.f = f;
this.blockable = blockable;
this.meta18300 = meta18300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18301,meta18300__$1){
var self__ = this;
var _18301__$1 = this;
return (new cljs.core.async.t_cljs$core$async18299(self__.f,self__.blockable,meta18300__$1));
});

cljs.core.async.t_cljs$core$async18299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18301){
var self__ = this;
var _18301__$1 = this;
return self__.meta18300;
});

cljs.core.async.t_cljs$core$async18299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18300","meta18300",-1125504815,null)], null);
});

cljs.core.async.t_cljs$core$async18299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18299";

cljs.core.async.t_cljs$core$async18299.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18299");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18299.
 */
cljs.core.async.__GT_t_cljs$core$async18299 = (function cljs$core$async$__GT_t_cljs$core$async18299(f__$1,blockable__$1,meta18300){
return (new cljs.core.async.t_cljs$core$async18299(f__$1,blockable__$1,meta18300));
});

}

return (new cljs.core.async.t_cljs$core$async18299(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18305 = arguments.length;
switch (G__18305) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18308 = arguments.length;
switch (G__18308) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18311 = arguments.length;
switch (G__18311) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18313 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18313) : fn1.call(null,val_18313));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18313,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18313) : fn1.call(null,val_18313));
});})(val_18313,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18315 = arguments.length;
switch (G__18315) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___18317 = n;
var x_18318 = (0);
while(true){
if((x_18318 < n__4408__auto___18317)){
(a[x_18318] = (0));

var G__18319 = (x_18318 + (1));
x_18318 = G__18319;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__18320 = (i + (1));
i = G__18320;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18321 = (function (flag,meta18322){
this.flag = flag;
this.meta18322 = meta18322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18323,meta18322__$1){
var self__ = this;
var _18323__$1 = this;
return (new cljs.core.async.t_cljs$core$async18321(self__.flag,meta18322__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18323){
var self__ = this;
var _18323__$1 = this;
return self__.meta18322;
});})(flag))
;

cljs.core.async.t_cljs$core$async18321.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18321.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18322","meta18322",1009586005,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18321";

cljs.core.async.t_cljs$core$async18321.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18321");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18321.
 */
cljs.core.async.__GT_t_cljs$core$async18321 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18321(flag__$1,meta18322){
return (new cljs.core.async.t_cljs$core$async18321(flag__$1,meta18322));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18321(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18324 = (function (flag,cb,meta18325){
this.flag = flag;
this.cb = cb;
this.meta18325 = meta18325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18326,meta18325__$1){
var self__ = this;
var _18326__$1 = this;
return (new cljs.core.async.t_cljs$core$async18324(self__.flag,self__.cb,meta18325__$1));
});

cljs.core.async.t_cljs$core$async18324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18326){
var self__ = this;
var _18326__$1 = this;
return self__.meta18325;
});

cljs.core.async.t_cljs$core$async18324.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async18324.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18325","meta18325",1665483945,null)], null);
});

cljs.core.async.t_cljs$core$async18324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18324";

cljs.core.async.t_cljs$core$async18324.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18324");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18324.
 */
cljs.core.async.__GT_t_cljs$core$async18324 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18324(flag__$1,cb__$1,meta18325){
return (new cljs.core.async.t_cljs$core$async18324(flag__$1,cb__$1,meta18325));
});

}

return (new cljs.core.async.t_cljs$core$async18324(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18327_SHARP_){
var G__18329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18327_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18329) : fret.call(null,G__18329));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18328_SHARP_){
var G__18330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18328_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18330) : fret.call(null,G__18330));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18331 = (i + (1));
i = G__18331;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18337 = arguments.length;
var i__4532__auto___18338 = (0);
while(true){
if((i__4532__auto___18338 < len__4531__auto___18337)){
args__4534__auto__.push((arguments[i__4532__auto___18338]));

var G__18339 = (i__4532__auto___18338 + (1));
i__4532__auto___18338 = G__18339;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18334){
var map__18335 = p__18334;
var map__18335__$1 = ((((!((map__18335 == null)))?(((((map__18335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18335):map__18335);
var opts = map__18335__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18332){
var G__18333 = cljs.core.first(seq18332);
var seq18332__$1 = cljs.core.next(seq18332);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18333,seq18332__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18341 = arguments.length;
switch (G__18341) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18240__auto___18387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___18387){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___18387){
return (function (state_18365){
var state_val_18366 = (state_18365[(1)]);
if((state_val_18366 === (7))){
var inst_18361 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18367_18388 = state_18365__$1;
(statearr_18367_18388[(2)] = inst_18361);

(statearr_18367_18388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (1))){
var state_18365__$1 = state_18365;
var statearr_18368_18389 = state_18365__$1;
(statearr_18368_18389[(2)] = null);

(statearr_18368_18389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (4))){
var inst_18344 = (state_18365[(7)]);
var inst_18344__$1 = (state_18365[(2)]);
var inst_18345 = (inst_18344__$1 == null);
var state_18365__$1 = (function (){var statearr_18369 = state_18365;
(statearr_18369[(7)] = inst_18344__$1);

return statearr_18369;
})();
if(cljs.core.truth_(inst_18345)){
var statearr_18370_18390 = state_18365__$1;
(statearr_18370_18390[(1)] = (5));

} else {
var statearr_18371_18391 = state_18365__$1;
(statearr_18371_18391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (13))){
var state_18365__$1 = state_18365;
var statearr_18372_18392 = state_18365__$1;
(statearr_18372_18392[(2)] = null);

(statearr_18372_18392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (6))){
var inst_18344 = (state_18365[(7)]);
var state_18365__$1 = state_18365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18365__$1,(11),to,inst_18344);
} else {
if((state_val_18366 === (3))){
var inst_18363 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18365__$1,inst_18363);
} else {
if((state_val_18366 === (12))){
var state_18365__$1 = state_18365;
var statearr_18373_18393 = state_18365__$1;
(statearr_18373_18393[(2)] = null);

(statearr_18373_18393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (2))){
var state_18365__$1 = state_18365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18365__$1,(4),from);
} else {
if((state_val_18366 === (11))){
var inst_18354 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
if(cljs.core.truth_(inst_18354)){
var statearr_18374_18394 = state_18365__$1;
(statearr_18374_18394[(1)] = (12));

} else {
var statearr_18375_18395 = state_18365__$1;
(statearr_18375_18395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (9))){
var state_18365__$1 = state_18365;
var statearr_18376_18396 = state_18365__$1;
(statearr_18376_18396[(2)] = null);

(statearr_18376_18396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (5))){
var state_18365__$1 = state_18365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18377_18397 = state_18365__$1;
(statearr_18377_18397[(1)] = (8));

} else {
var statearr_18378_18398 = state_18365__$1;
(statearr_18378_18398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (14))){
var inst_18359 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18379_18399 = state_18365__$1;
(statearr_18379_18399[(2)] = inst_18359);

(statearr_18379_18399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (10))){
var inst_18351 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18380_18400 = state_18365__$1;
(statearr_18380_18400[(2)] = inst_18351);

(statearr_18380_18400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18366 === (8))){
var inst_18348 = cljs.core.async.close_BANG_(to);
var state_18365__$1 = state_18365;
var statearr_18381_18401 = state_18365__$1;
(statearr_18381_18401[(2)] = inst_18348);

(statearr_18381_18401[(1)] = (10));


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
});})(c__18240__auto___18387))
;
return ((function (switch__18068__auto__,c__18240__auto___18387){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_18382 = [null,null,null,null,null,null,null,null];
(statearr_18382[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_18382[(1)] = (1));

return statearr_18382;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_18365){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18365);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18383){if((e18383 instanceof Object)){
var ex__18072__auto__ = e18383;
var statearr_18384_18402 = state_18365;
(statearr_18384_18402[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18403 = state_18365;
state_18365 = G__18403;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_18365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_18365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___18387))
})();
var state__18242__auto__ = (function (){var statearr_18385 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18385[(6)] = c__18240__auto___18387);

return statearr_18385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___18387))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__18404){
var vec__18405 = p__18404;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(1),null);
var job = vec__18405;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18240__auto___18576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___18576,res,vec__18405,v,p,job,jobs,results){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___18576,res,vec__18405,v,p,job,jobs,results){
return (function (state_18412){
var state_val_18413 = (state_18412[(1)]);
if((state_val_18413 === (1))){
var state_18412__$1 = state_18412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18412__$1,(2),res,v);
} else {
if((state_val_18413 === (2))){
var inst_18409 = (state_18412[(2)]);
var inst_18410 = cljs.core.async.close_BANG_(res);
var state_18412__$1 = (function (){var statearr_18414 = state_18412;
(statearr_18414[(7)] = inst_18409);

return statearr_18414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18412__$1,inst_18410);
} else {
return null;
}
}
});})(c__18240__auto___18576,res,vec__18405,v,p,job,jobs,results))
;
return ((function (switch__18068__auto__,c__18240__auto___18576,res,vec__18405,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0 = (function (){
var statearr_18415 = [null,null,null,null,null,null,null,null];
(statearr_18415[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__);

(statearr_18415[(1)] = (1));

return statearr_18415;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1 = (function (state_18412){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18412);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18416){if((e18416 instanceof Object)){
var ex__18072__auto__ = e18416;
var statearr_18417_18577 = state_18412;
(statearr_18417_18577[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18578 = state_18412;
state_18412 = G__18578;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = function(state_18412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1.call(this,state_18412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___18576,res,vec__18405,v,p,job,jobs,results))
})();
var state__18242__auto__ = (function (){var statearr_18418 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18418[(6)] = c__18240__auto___18576);

return statearr_18418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___18576,res,vec__18405,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18419){
var vec__18420 = p__18419;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18420,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18420,(1),null);
var job = vec__18420;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___18579 = n;
var __18580 = (0);
while(true){
if((__18580 < n__4408__auto___18579)){
var G__18423_18581 = type;
var G__18423_18582__$1 = (((G__18423_18581 instanceof cljs.core.Keyword))?G__18423_18581.fqn:null);
switch (G__18423_18582__$1) {
case "compute":
var c__18240__auto___18584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18580,c__18240__auto___18584,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (__18580,c__18240__auto___18584,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async){
return (function (state_18436){
var state_val_18437 = (state_18436[(1)]);
if((state_val_18437 === (1))){
var state_18436__$1 = state_18436;
var statearr_18438_18585 = state_18436__$1;
(statearr_18438_18585[(2)] = null);

(statearr_18438_18585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (2))){
var state_18436__$1 = state_18436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18436__$1,(4),jobs);
} else {
if((state_val_18437 === (3))){
var inst_18434 = (state_18436[(2)]);
var state_18436__$1 = state_18436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18436__$1,inst_18434);
} else {
if((state_val_18437 === (4))){
var inst_18426 = (state_18436[(2)]);
var inst_18427 = process(inst_18426);
var state_18436__$1 = state_18436;
if(cljs.core.truth_(inst_18427)){
var statearr_18439_18586 = state_18436__$1;
(statearr_18439_18586[(1)] = (5));

} else {
var statearr_18440_18587 = state_18436__$1;
(statearr_18440_18587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (5))){
var state_18436__$1 = state_18436;
var statearr_18441_18588 = state_18436__$1;
(statearr_18441_18588[(2)] = null);

(statearr_18441_18588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (6))){
var state_18436__$1 = state_18436;
var statearr_18442_18589 = state_18436__$1;
(statearr_18442_18589[(2)] = null);

(statearr_18442_18589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (7))){
var inst_18432 = (state_18436[(2)]);
var state_18436__$1 = state_18436;
var statearr_18443_18590 = state_18436__$1;
(statearr_18443_18590[(2)] = inst_18432);

(statearr_18443_18590[(1)] = (3));


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
});})(__18580,c__18240__auto___18584,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async))
;
return ((function (__18580,switch__18068__auto__,c__18240__auto___18584,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0 = (function (){
var statearr_18444 = [null,null,null,null,null,null,null];
(statearr_18444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__);

(statearr_18444[(1)] = (1));

return statearr_18444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1 = (function (state_18436){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18436);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18445){if((e18445 instanceof Object)){
var ex__18072__auto__ = e18445;
var statearr_18446_18591 = state_18436;
(statearr_18446_18591[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18592 = state_18436;
state_18436 = G__18592;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = function(state_18436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1.call(this,state_18436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__;
})()
;})(__18580,switch__18068__auto__,c__18240__auto___18584,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async))
})();
var state__18242__auto__ = (function (){var statearr_18447 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18447[(6)] = c__18240__auto___18584);

return statearr_18447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(__18580,c__18240__auto___18584,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async))
);


break;
case "async":
var c__18240__auto___18593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18580,c__18240__auto___18593,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (__18580,c__18240__auto___18593,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async){
return (function (state_18460){
var state_val_18461 = (state_18460[(1)]);
if((state_val_18461 === (1))){
var state_18460__$1 = state_18460;
var statearr_18462_18594 = state_18460__$1;
(statearr_18462_18594[(2)] = null);

(statearr_18462_18594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (2))){
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18460__$1,(4),jobs);
} else {
if((state_val_18461 === (3))){
var inst_18458 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18460__$1,inst_18458);
} else {
if((state_val_18461 === (4))){
var inst_18450 = (state_18460[(2)]);
var inst_18451 = async(inst_18450);
var state_18460__$1 = state_18460;
if(cljs.core.truth_(inst_18451)){
var statearr_18463_18595 = state_18460__$1;
(statearr_18463_18595[(1)] = (5));

} else {
var statearr_18464_18596 = state_18460__$1;
(statearr_18464_18596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (5))){
var state_18460__$1 = state_18460;
var statearr_18465_18597 = state_18460__$1;
(statearr_18465_18597[(2)] = null);

(statearr_18465_18597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (6))){
var state_18460__$1 = state_18460;
var statearr_18466_18598 = state_18460__$1;
(statearr_18466_18598[(2)] = null);

(statearr_18466_18598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (7))){
var inst_18456 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
var statearr_18467_18599 = state_18460__$1;
(statearr_18467_18599[(2)] = inst_18456);

(statearr_18467_18599[(1)] = (3));


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
});})(__18580,c__18240__auto___18593,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async))
;
return ((function (__18580,switch__18068__auto__,c__18240__auto___18593,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0 = (function (){
var statearr_18468 = [null,null,null,null,null,null,null];
(statearr_18468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__);

(statearr_18468[(1)] = (1));

return statearr_18468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1 = (function (state_18460){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18460);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18469){if((e18469 instanceof Object)){
var ex__18072__auto__ = e18469;
var statearr_18470_18600 = state_18460;
(statearr_18470_18600[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18601 = state_18460;
state_18460 = G__18601;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = function(state_18460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1.call(this,state_18460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__;
})()
;})(__18580,switch__18068__auto__,c__18240__auto___18593,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async))
})();
var state__18242__auto__ = (function (){var statearr_18471 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18471[(6)] = c__18240__auto___18593);

return statearr_18471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(__18580,c__18240__auto___18593,G__18423_18581,G__18423_18582__$1,n__4408__auto___18579,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18423_18582__$1)].join('')));

}

var G__18602 = (__18580 + (1));
__18580 = G__18602;
continue;
} else {
}
break;
}

var c__18240__auto___18603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___18603,jobs,results,process,async){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___18603,jobs,results,process,async){
return (function (state_18493){
var state_val_18494 = (state_18493[(1)]);
if((state_val_18494 === (1))){
var state_18493__$1 = state_18493;
var statearr_18495_18604 = state_18493__$1;
(statearr_18495_18604[(2)] = null);

(statearr_18495_18604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18494 === (2))){
var state_18493__$1 = state_18493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18493__$1,(4),from);
} else {
if((state_val_18494 === (3))){
var inst_18491 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18493__$1,inst_18491);
} else {
if((state_val_18494 === (4))){
var inst_18474 = (state_18493[(7)]);
var inst_18474__$1 = (state_18493[(2)]);
var inst_18475 = (inst_18474__$1 == null);
var state_18493__$1 = (function (){var statearr_18496 = state_18493;
(statearr_18496[(7)] = inst_18474__$1);

return statearr_18496;
})();
if(cljs.core.truth_(inst_18475)){
var statearr_18497_18605 = state_18493__$1;
(statearr_18497_18605[(1)] = (5));

} else {
var statearr_18498_18606 = state_18493__$1;
(statearr_18498_18606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18494 === (5))){
var inst_18477 = cljs.core.async.close_BANG_(jobs);
var state_18493__$1 = state_18493;
var statearr_18499_18607 = state_18493__$1;
(statearr_18499_18607[(2)] = inst_18477);

(statearr_18499_18607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18494 === (6))){
var inst_18474 = (state_18493[(7)]);
var inst_18479 = (state_18493[(8)]);
var inst_18479__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18481 = [inst_18474,inst_18479__$1];
var inst_18482 = (new cljs.core.PersistentVector(null,2,(5),inst_18480,inst_18481,null));
var state_18493__$1 = (function (){var statearr_18500 = state_18493;
(statearr_18500[(8)] = inst_18479__$1);

return statearr_18500;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18493__$1,(8),jobs,inst_18482);
} else {
if((state_val_18494 === (7))){
var inst_18489 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
var statearr_18501_18608 = state_18493__$1;
(statearr_18501_18608[(2)] = inst_18489);

(statearr_18501_18608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18494 === (8))){
var inst_18479 = (state_18493[(8)]);
var inst_18484 = (state_18493[(2)]);
var state_18493__$1 = (function (){var statearr_18502 = state_18493;
(statearr_18502[(9)] = inst_18484);

return statearr_18502;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18493__$1,(9),results,inst_18479);
} else {
if((state_val_18494 === (9))){
var inst_18486 = (state_18493[(2)]);
var state_18493__$1 = (function (){var statearr_18503 = state_18493;
(statearr_18503[(10)] = inst_18486);

return statearr_18503;
})();
var statearr_18504_18609 = state_18493__$1;
(statearr_18504_18609[(2)] = null);

(statearr_18504_18609[(1)] = (2));


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
});})(c__18240__auto___18603,jobs,results,process,async))
;
return ((function (switch__18068__auto__,c__18240__auto___18603,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0 = (function (){
var statearr_18505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18505[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__);

(statearr_18505[(1)] = (1));

return statearr_18505;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1 = (function (state_18493){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18493);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18506){if((e18506 instanceof Object)){
var ex__18072__auto__ = e18506;
var statearr_18507_18610 = state_18493;
(statearr_18507_18610[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18611 = state_18493;
state_18493 = G__18611;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = function(state_18493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1.call(this,state_18493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___18603,jobs,results,process,async))
})();
var state__18242__auto__ = (function (){var statearr_18508 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18508[(6)] = c__18240__auto___18603);

return statearr_18508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___18603,jobs,results,process,async))
);


var c__18240__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto__,jobs,results,process,async){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto__,jobs,results,process,async){
return (function (state_18546){
var state_val_18547 = (state_18546[(1)]);
if((state_val_18547 === (7))){
var inst_18542 = (state_18546[(2)]);
var state_18546__$1 = state_18546;
var statearr_18548_18612 = state_18546__$1;
(statearr_18548_18612[(2)] = inst_18542);

(statearr_18548_18612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (20))){
var state_18546__$1 = state_18546;
var statearr_18549_18613 = state_18546__$1;
(statearr_18549_18613[(2)] = null);

(statearr_18549_18613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (1))){
var state_18546__$1 = state_18546;
var statearr_18550_18614 = state_18546__$1;
(statearr_18550_18614[(2)] = null);

(statearr_18550_18614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (4))){
var inst_18511 = (state_18546[(7)]);
var inst_18511__$1 = (state_18546[(2)]);
var inst_18512 = (inst_18511__$1 == null);
var state_18546__$1 = (function (){var statearr_18551 = state_18546;
(statearr_18551[(7)] = inst_18511__$1);

return statearr_18551;
})();
if(cljs.core.truth_(inst_18512)){
var statearr_18552_18615 = state_18546__$1;
(statearr_18552_18615[(1)] = (5));

} else {
var statearr_18553_18616 = state_18546__$1;
(statearr_18553_18616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (15))){
var inst_18524 = (state_18546[(8)]);
var state_18546__$1 = state_18546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18546__$1,(18),to,inst_18524);
} else {
if((state_val_18547 === (21))){
var inst_18537 = (state_18546[(2)]);
var state_18546__$1 = state_18546;
var statearr_18554_18617 = state_18546__$1;
(statearr_18554_18617[(2)] = inst_18537);

(statearr_18554_18617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (13))){
var inst_18539 = (state_18546[(2)]);
var state_18546__$1 = (function (){var statearr_18555 = state_18546;
(statearr_18555[(9)] = inst_18539);

return statearr_18555;
})();
var statearr_18556_18618 = state_18546__$1;
(statearr_18556_18618[(2)] = null);

(statearr_18556_18618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (6))){
var inst_18511 = (state_18546[(7)]);
var state_18546__$1 = state_18546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18546__$1,(11),inst_18511);
} else {
if((state_val_18547 === (17))){
var inst_18532 = (state_18546[(2)]);
var state_18546__$1 = state_18546;
if(cljs.core.truth_(inst_18532)){
var statearr_18557_18619 = state_18546__$1;
(statearr_18557_18619[(1)] = (19));

} else {
var statearr_18558_18620 = state_18546__$1;
(statearr_18558_18620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (3))){
var inst_18544 = (state_18546[(2)]);
var state_18546__$1 = state_18546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18546__$1,inst_18544);
} else {
if((state_val_18547 === (12))){
var inst_18521 = (state_18546[(10)]);
var state_18546__$1 = state_18546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18546__$1,(14),inst_18521);
} else {
if((state_val_18547 === (2))){
var state_18546__$1 = state_18546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18546__$1,(4),results);
} else {
if((state_val_18547 === (19))){
var state_18546__$1 = state_18546;
var statearr_18559_18621 = state_18546__$1;
(statearr_18559_18621[(2)] = null);

(statearr_18559_18621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (11))){
var inst_18521 = (state_18546[(2)]);
var state_18546__$1 = (function (){var statearr_18560 = state_18546;
(statearr_18560[(10)] = inst_18521);

return statearr_18560;
})();
var statearr_18561_18622 = state_18546__$1;
(statearr_18561_18622[(2)] = null);

(statearr_18561_18622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (9))){
var state_18546__$1 = state_18546;
var statearr_18562_18623 = state_18546__$1;
(statearr_18562_18623[(2)] = null);

(statearr_18562_18623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (5))){
var state_18546__$1 = state_18546;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18563_18624 = state_18546__$1;
(statearr_18563_18624[(1)] = (8));

} else {
var statearr_18564_18625 = state_18546__$1;
(statearr_18564_18625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (14))){
var inst_18526 = (state_18546[(11)]);
var inst_18524 = (state_18546[(8)]);
var inst_18524__$1 = (state_18546[(2)]);
var inst_18525 = (inst_18524__$1 == null);
var inst_18526__$1 = cljs.core.not(inst_18525);
var state_18546__$1 = (function (){var statearr_18565 = state_18546;
(statearr_18565[(11)] = inst_18526__$1);

(statearr_18565[(8)] = inst_18524__$1);

return statearr_18565;
})();
if(inst_18526__$1){
var statearr_18566_18626 = state_18546__$1;
(statearr_18566_18626[(1)] = (15));

} else {
var statearr_18567_18627 = state_18546__$1;
(statearr_18567_18627[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (16))){
var inst_18526 = (state_18546[(11)]);
var state_18546__$1 = state_18546;
var statearr_18568_18628 = state_18546__$1;
(statearr_18568_18628[(2)] = inst_18526);

(statearr_18568_18628[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (10))){
var inst_18518 = (state_18546[(2)]);
var state_18546__$1 = state_18546;
var statearr_18569_18629 = state_18546__$1;
(statearr_18569_18629[(2)] = inst_18518);

(statearr_18569_18629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (18))){
var inst_18529 = (state_18546[(2)]);
var state_18546__$1 = state_18546;
var statearr_18570_18630 = state_18546__$1;
(statearr_18570_18630[(2)] = inst_18529);

(statearr_18570_18630[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18547 === (8))){
var inst_18515 = cljs.core.async.close_BANG_(to);
var state_18546__$1 = state_18546;
var statearr_18571_18631 = state_18546__$1;
(statearr_18571_18631[(2)] = inst_18515);

(statearr_18571_18631[(1)] = (10));


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
}
}
}
}
});})(c__18240__auto__,jobs,results,process,async))
;
return ((function (switch__18068__auto__,c__18240__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0 = (function (){
var statearr_18572 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__);

(statearr_18572[(1)] = (1));

return statearr_18572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1 = (function (state_18546){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18546);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18573){if((e18573 instanceof Object)){
var ex__18072__auto__ = e18573;
var statearr_18574_18632 = state_18546;
(statearr_18574_18632[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18573;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18633 = state_18546;
state_18546 = G__18633;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__ = function(state_18546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1.call(this,state_18546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto__,jobs,results,process,async))
})();
var state__18242__auto__ = (function (){var statearr_18575 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18575[(6)] = c__18240__auto__);

return statearr_18575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto__,jobs,results,process,async))
);

return c__18240__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18635 = arguments.length;
switch (G__18635) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18638 = arguments.length;
switch (G__18638) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18641 = arguments.length;
switch (G__18641) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18240__auto___18690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___18690,tc,fc){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___18690,tc,fc){
return (function (state_18667){
var state_val_18668 = (state_18667[(1)]);
if((state_val_18668 === (7))){
var inst_18663 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18669_18691 = state_18667__$1;
(statearr_18669_18691[(2)] = inst_18663);

(statearr_18669_18691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (1))){
var state_18667__$1 = state_18667;
var statearr_18670_18692 = state_18667__$1;
(statearr_18670_18692[(2)] = null);

(statearr_18670_18692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (4))){
var inst_18644 = (state_18667[(7)]);
var inst_18644__$1 = (state_18667[(2)]);
var inst_18645 = (inst_18644__$1 == null);
var state_18667__$1 = (function (){var statearr_18671 = state_18667;
(statearr_18671[(7)] = inst_18644__$1);

return statearr_18671;
})();
if(cljs.core.truth_(inst_18645)){
var statearr_18672_18693 = state_18667__$1;
(statearr_18672_18693[(1)] = (5));

} else {
var statearr_18673_18694 = state_18667__$1;
(statearr_18673_18694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (13))){
var state_18667__$1 = state_18667;
var statearr_18674_18695 = state_18667__$1;
(statearr_18674_18695[(2)] = null);

(statearr_18674_18695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (6))){
var inst_18644 = (state_18667[(7)]);
var inst_18650 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18644) : p.call(null,inst_18644));
var state_18667__$1 = state_18667;
if(cljs.core.truth_(inst_18650)){
var statearr_18675_18696 = state_18667__$1;
(statearr_18675_18696[(1)] = (9));

} else {
var statearr_18676_18697 = state_18667__$1;
(statearr_18676_18697[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (3))){
var inst_18665 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18667__$1,inst_18665);
} else {
if((state_val_18668 === (12))){
var state_18667__$1 = state_18667;
var statearr_18677_18698 = state_18667__$1;
(statearr_18677_18698[(2)] = null);

(statearr_18677_18698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (2))){
var state_18667__$1 = state_18667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18667__$1,(4),ch);
} else {
if((state_val_18668 === (11))){
var inst_18644 = (state_18667[(7)]);
var inst_18654 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18667__$1,(8),inst_18654,inst_18644);
} else {
if((state_val_18668 === (9))){
var state_18667__$1 = state_18667;
var statearr_18678_18699 = state_18667__$1;
(statearr_18678_18699[(2)] = tc);

(statearr_18678_18699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (5))){
var inst_18647 = cljs.core.async.close_BANG_(tc);
var inst_18648 = cljs.core.async.close_BANG_(fc);
var state_18667__$1 = (function (){var statearr_18679 = state_18667;
(statearr_18679[(8)] = inst_18647);

return statearr_18679;
})();
var statearr_18680_18700 = state_18667__$1;
(statearr_18680_18700[(2)] = inst_18648);

(statearr_18680_18700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (14))){
var inst_18661 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18681_18701 = state_18667__$1;
(statearr_18681_18701[(2)] = inst_18661);

(statearr_18681_18701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (10))){
var state_18667__$1 = state_18667;
var statearr_18682_18702 = state_18667__$1;
(statearr_18682_18702[(2)] = fc);

(statearr_18682_18702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (8))){
var inst_18656 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
if(cljs.core.truth_(inst_18656)){
var statearr_18683_18703 = state_18667__$1;
(statearr_18683_18703[(1)] = (12));

} else {
var statearr_18684_18704 = state_18667__$1;
(statearr_18684_18704[(1)] = (13));

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
});})(c__18240__auto___18690,tc,fc))
;
return ((function (switch__18068__auto__,c__18240__auto___18690,tc,fc){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_18685 = [null,null,null,null,null,null,null,null,null];
(statearr_18685[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_18685[(1)] = (1));

return statearr_18685;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_18667){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18667);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18686){if((e18686 instanceof Object)){
var ex__18072__auto__ = e18686;
var statearr_18687_18705 = state_18667;
(statearr_18687_18705[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18706 = state_18667;
state_18667 = G__18706;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_18667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_18667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___18690,tc,fc))
})();
var state__18242__auto__ = (function (){var statearr_18688 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18688[(6)] = c__18240__auto___18690);

return statearr_18688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___18690,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18240__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto__){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto__){
return (function (state_18727){
var state_val_18728 = (state_18727[(1)]);
if((state_val_18728 === (7))){
var inst_18723 = (state_18727[(2)]);
var state_18727__$1 = state_18727;
var statearr_18729_18747 = state_18727__$1;
(statearr_18729_18747[(2)] = inst_18723);

(statearr_18729_18747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (1))){
var inst_18707 = init;
var state_18727__$1 = (function (){var statearr_18730 = state_18727;
(statearr_18730[(7)] = inst_18707);

return statearr_18730;
})();
var statearr_18731_18748 = state_18727__$1;
(statearr_18731_18748[(2)] = null);

(statearr_18731_18748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (4))){
var inst_18710 = (state_18727[(8)]);
var inst_18710__$1 = (state_18727[(2)]);
var inst_18711 = (inst_18710__$1 == null);
var state_18727__$1 = (function (){var statearr_18732 = state_18727;
(statearr_18732[(8)] = inst_18710__$1);

return statearr_18732;
})();
if(cljs.core.truth_(inst_18711)){
var statearr_18733_18749 = state_18727__$1;
(statearr_18733_18749[(1)] = (5));

} else {
var statearr_18734_18750 = state_18727__$1;
(statearr_18734_18750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (6))){
var inst_18714 = (state_18727[(9)]);
var inst_18707 = (state_18727[(7)]);
var inst_18710 = (state_18727[(8)]);
var inst_18714__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18707,inst_18710) : f.call(null,inst_18707,inst_18710));
var inst_18715 = cljs.core.reduced_QMARK_(inst_18714__$1);
var state_18727__$1 = (function (){var statearr_18735 = state_18727;
(statearr_18735[(9)] = inst_18714__$1);

return statearr_18735;
})();
if(inst_18715){
var statearr_18736_18751 = state_18727__$1;
(statearr_18736_18751[(1)] = (8));

} else {
var statearr_18737_18752 = state_18727__$1;
(statearr_18737_18752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (3))){
var inst_18725 = (state_18727[(2)]);
var state_18727__$1 = state_18727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18727__$1,inst_18725);
} else {
if((state_val_18728 === (2))){
var state_18727__$1 = state_18727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18727__$1,(4),ch);
} else {
if((state_val_18728 === (9))){
var inst_18714 = (state_18727[(9)]);
var inst_18707 = inst_18714;
var state_18727__$1 = (function (){var statearr_18738 = state_18727;
(statearr_18738[(7)] = inst_18707);

return statearr_18738;
})();
var statearr_18739_18753 = state_18727__$1;
(statearr_18739_18753[(2)] = null);

(statearr_18739_18753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (5))){
var inst_18707 = (state_18727[(7)]);
var state_18727__$1 = state_18727;
var statearr_18740_18754 = state_18727__$1;
(statearr_18740_18754[(2)] = inst_18707);

(statearr_18740_18754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (10))){
var inst_18721 = (state_18727[(2)]);
var state_18727__$1 = state_18727;
var statearr_18741_18755 = state_18727__$1;
(statearr_18741_18755[(2)] = inst_18721);

(statearr_18741_18755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18728 === (8))){
var inst_18714 = (state_18727[(9)]);
var inst_18717 = cljs.core.deref(inst_18714);
var state_18727__$1 = state_18727;
var statearr_18742_18756 = state_18727__$1;
(statearr_18742_18756[(2)] = inst_18717);

(statearr_18742_18756[(1)] = (10));


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
});})(c__18240__auto__))
;
return ((function (switch__18068__auto__,c__18240__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18069__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18069__auto____0 = (function (){
var statearr_18743 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18743[(0)] = cljs$core$async$reduce_$_state_machine__18069__auto__);

(statearr_18743[(1)] = (1));

return statearr_18743;
});
var cljs$core$async$reduce_$_state_machine__18069__auto____1 = (function (state_18727){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18727);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18744){if((e18744 instanceof Object)){
var ex__18072__auto__ = e18744;
var statearr_18745_18757 = state_18727;
(statearr_18745_18757[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18758 = state_18727;
state_18727 = G__18758;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18069__auto__ = function(state_18727){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18069__auto____1.call(this,state_18727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18069__auto____0;
cljs$core$async$reduce_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18069__auto____1;
return cljs$core$async$reduce_$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto__))
})();
var state__18242__auto__ = (function (){var statearr_18746 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18746[(6)] = c__18240__auto__);

return statearr_18746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto__))
);

return c__18240__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18240__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto__,f__$1){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto__,f__$1){
return (function (state_18764){
var state_val_18765 = (state_18764[(1)]);
if((state_val_18765 === (1))){
var inst_18759 = cljs.core.async.reduce(f__$1,init,ch);
var state_18764__$1 = state_18764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18764__$1,(2),inst_18759);
} else {
if((state_val_18765 === (2))){
var inst_18761 = (state_18764[(2)]);
var inst_18762 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18761) : f__$1.call(null,inst_18761));
var state_18764__$1 = state_18764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18764__$1,inst_18762);
} else {
return null;
}
}
});})(c__18240__auto__,f__$1))
;
return ((function (switch__18068__auto__,c__18240__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18069__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18069__auto____0 = (function (){
var statearr_18766 = [null,null,null,null,null,null,null];
(statearr_18766[(0)] = cljs$core$async$transduce_$_state_machine__18069__auto__);

(statearr_18766[(1)] = (1));

return statearr_18766;
});
var cljs$core$async$transduce_$_state_machine__18069__auto____1 = (function (state_18764){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18764);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18767){if((e18767 instanceof Object)){
var ex__18072__auto__ = e18767;
var statearr_18768_18770 = state_18764;
(statearr_18768_18770[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18771 = state_18764;
state_18764 = G__18771;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18069__auto__ = function(state_18764){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18069__auto____1.call(this,state_18764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18069__auto____0;
cljs$core$async$transduce_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18069__auto____1;
return cljs$core$async$transduce_$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto__,f__$1))
})();
var state__18242__auto__ = (function (){var statearr_18769 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18769[(6)] = c__18240__auto__);

return statearr_18769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto__,f__$1))
);

return c__18240__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18773 = arguments.length;
switch (G__18773) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18240__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto__){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto__){
return (function (state_18798){
var state_val_18799 = (state_18798[(1)]);
if((state_val_18799 === (7))){
var inst_18780 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18800_18821 = state_18798__$1;
(statearr_18800_18821[(2)] = inst_18780);

(statearr_18800_18821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (1))){
var inst_18774 = cljs.core.seq(coll);
var inst_18775 = inst_18774;
var state_18798__$1 = (function (){var statearr_18801 = state_18798;
(statearr_18801[(7)] = inst_18775);

return statearr_18801;
})();
var statearr_18802_18822 = state_18798__$1;
(statearr_18802_18822[(2)] = null);

(statearr_18802_18822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (4))){
var inst_18775 = (state_18798[(7)]);
var inst_18778 = cljs.core.first(inst_18775);
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18798__$1,(7),ch,inst_18778);
} else {
if((state_val_18799 === (13))){
var inst_18792 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18803_18823 = state_18798__$1;
(statearr_18803_18823[(2)] = inst_18792);

(statearr_18803_18823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (6))){
var inst_18783 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
if(cljs.core.truth_(inst_18783)){
var statearr_18804_18824 = state_18798__$1;
(statearr_18804_18824[(1)] = (8));

} else {
var statearr_18805_18825 = state_18798__$1;
(statearr_18805_18825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (3))){
var inst_18796 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18798__$1,inst_18796);
} else {
if((state_val_18799 === (12))){
var state_18798__$1 = state_18798;
var statearr_18806_18826 = state_18798__$1;
(statearr_18806_18826[(2)] = null);

(statearr_18806_18826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (2))){
var inst_18775 = (state_18798[(7)]);
var state_18798__$1 = state_18798;
if(cljs.core.truth_(inst_18775)){
var statearr_18807_18827 = state_18798__$1;
(statearr_18807_18827[(1)] = (4));

} else {
var statearr_18808_18828 = state_18798__$1;
(statearr_18808_18828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (11))){
var inst_18789 = cljs.core.async.close_BANG_(ch);
var state_18798__$1 = state_18798;
var statearr_18809_18829 = state_18798__$1;
(statearr_18809_18829[(2)] = inst_18789);

(statearr_18809_18829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (9))){
var state_18798__$1 = state_18798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18810_18830 = state_18798__$1;
(statearr_18810_18830[(1)] = (11));

} else {
var statearr_18811_18831 = state_18798__$1;
(statearr_18811_18831[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (5))){
var inst_18775 = (state_18798[(7)]);
var state_18798__$1 = state_18798;
var statearr_18812_18832 = state_18798__$1;
(statearr_18812_18832[(2)] = inst_18775);

(statearr_18812_18832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (10))){
var inst_18794 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18813_18833 = state_18798__$1;
(statearr_18813_18833[(2)] = inst_18794);

(statearr_18813_18833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (8))){
var inst_18775 = (state_18798[(7)]);
var inst_18785 = cljs.core.next(inst_18775);
var inst_18775__$1 = inst_18785;
var state_18798__$1 = (function (){var statearr_18814 = state_18798;
(statearr_18814[(7)] = inst_18775__$1);

return statearr_18814;
})();
var statearr_18815_18834 = state_18798__$1;
(statearr_18815_18834[(2)] = null);

(statearr_18815_18834[(1)] = (2));


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
});})(c__18240__auto__))
;
return ((function (switch__18068__auto__,c__18240__auto__){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_18816 = [null,null,null,null,null,null,null,null];
(statearr_18816[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_18816[(1)] = (1));

return statearr_18816;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_18798){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18798);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e18817){if((e18817 instanceof Object)){
var ex__18072__auto__ = e18817;
var statearr_18818_18835 = state_18798;
(statearr_18818_18835[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18817;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18836 = state_18798;
state_18798 = G__18836;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_18798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_18798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto__))
})();
var state__18242__auto__ = (function (){var statearr_18819 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_18819[(6)] = c__18240__auto__);

return statearr_18819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto__))
);

return c__18240__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18837 = (function (ch,cs,meta18838){
this.ch = ch;
this.cs = cs;
this.meta18838 = meta18838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18839,meta18838__$1){
var self__ = this;
var _18839__$1 = this;
return (new cljs.core.async.t_cljs$core$async18837(self__.ch,self__.cs,meta18838__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18839){
var self__ = this;
var _18839__$1 = this;
return self__.meta18838;
});})(cs))
;

cljs.core.async.t_cljs$core$async18837.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18837.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18837.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18837.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18837.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18837.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18837.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18838","meta18838",1713517641,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18837";

cljs.core.async.t_cljs$core$async18837.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18837");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18837.
 */
cljs.core.async.__GT_t_cljs$core$async18837 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18837(ch__$1,cs__$1,meta18838){
return (new cljs.core.async.t_cljs$core$async18837(ch__$1,cs__$1,meta18838));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18837(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18240__auto___19059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___19059,cs,m,dchan,dctr,done){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___19059,cs,m,dchan,dctr,done){
return (function (state_18974){
var state_val_18975 = (state_18974[(1)]);
if((state_val_18975 === (7))){
var inst_18970 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_18976_19060 = state_18974__$1;
(statearr_18976_19060[(2)] = inst_18970);

(statearr_18976_19060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (20))){
var inst_18873 = (state_18974[(7)]);
var inst_18885 = cljs.core.first(inst_18873);
var inst_18886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18885,(0),null);
var inst_18887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18885,(1),null);
var state_18974__$1 = (function (){var statearr_18977 = state_18974;
(statearr_18977[(8)] = inst_18886);

return statearr_18977;
})();
if(cljs.core.truth_(inst_18887)){
var statearr_18978_19061 = state_18974__$1;
(statearr_18978_19061[(1)] = (22));

} else {
var statearr_18979_19062 = state_18974__$1;
(statearr_18979_19062[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (27))){
var inst_18915 = (state_18974[(9)]);
var inst_18842 = (state_18974[(10)]);
var inst_18922 = (state_18974[(11)]);
var inst_18917 = (state_18974[(12)]);
var inst_18922__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18915,inst_18917);
var inst_18923 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18922__$1,inst_18842,done);
var state_18974__$1 = (function (){var statearr_18980 = state_18974;
(statearr_18980[(11)] = inst_18922__$1);

return statearr_18980;
})();
if(cljs.core.truth_(inst_18923)){
var statearr_18981_19063 = state_18974__$1;
(statearr_18981_19063[(1)] = (30));

} else {
var statearr_18982_19064 = state_18974__$1;
(statearr_18982_19064[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (1))){
var state_18974__$1 = state_18974;
var statearr_18983_19065 = state_18974__$1;
(statearr_18983_19065[(2)] = null);

(statearr_18983_19065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (24))){
var inst_18873 = (state_18974[(7)]);
var inst_18892 = (state_18974[(2)]);
var inst_18893 = cljs.core.next(inst_18873);
var inst_18851 = inst_18893;
var inst_18852 = null;
var inst_18853 = (0);
var inst_18854 = (0);
var state_18974__$1 = (function (){var statearr_18984 = state_18974;
(statearr_18984[(13)] = inst_18853);

(statearr_18984[(14)] = inst_18851);

(statearr_18984[(15)] = inst_18852);

(statearr_18984[(16)] = inst_18854);

(statearr_18984[(17)] = inst_18892);

return statearr_18984;
})();
var statearr_18985_19066 = state_18974__$1;
(statearr_18985_19066[(2)] = null);

(statearr_18985_19066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (39))){
var state_18974__$1 = state_18974;
var statearr_18989_19067 = state_18974__$1;
(statearr_18989_19067[(2)] = null);

(statearr_18989_19067[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (4))){
var inst_18842 = (state_18974[(10)]);
var inst_18842__$1 = (state_18974[(2)]);
var inst_18843 = (inst_18842__$1 == null);
var state_18974__$1 = (function (){var statearr_18990 = state_18974;
(statearr_18990[(10)] = inst_18842__$1);

return statearr_18990;
})();
if(cljs.core.truth_(inst_18843)){
var statearr_18991_19068 = state_18974__$1;
(statearr_18991_19068[(1)] = (5));

} else {
var statearr_18992_19069 = state_18974__$1;
(statearr_18992_19069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (15))){
var inst_18853 = (state_18974[(13)]);
var inst_18851 = (state_18974[(14)]);
var inst_18852 = (state_18974[(15)]);
var inst_18854 = (state_18974[(16)]);
var inst_18869 = (state_18974[(2)]);
var inst_18870 = (inst_18854 + (1));
var tmp18986 = inst_18853;
var tmp18987 = inst_18851;
var tmp18988 = inst_18852;
var inst_18851__$1 = tmp18987;
var inst_18852__$1 = tmp18988;
var inst_18853__$1 = tmp18986;
var inst_18854__$1 = inst_18870;
var state_18974__$1 = (function (){var statearr_18993 = state_18974;
(statearr_18993[(13)] = inst_18853__$1);

(statearr_18993[(14)] = inst_18851__$1);

(statearr_18993[(15)] = inst_18852__$1);

(statearr_18993[(16)] = inst_18854__$1);

(statearr_18993[(18)] = inst_18869);

return statearr_18993;
})();
var statearr_18994_19070 = state_18974__$1;
(statearr_18994_19070[(2)] = null);

(statearr_18994_19070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (21))){
var inst_18896 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_18998_19071 = state_18974__$1;
(statearr_18998_19071[(2)] = inst_18896);

(statearr_18998_19071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (31))){
var inst_18922 = (state_18974[(11)]);
var inst_18926 = done(null);
var inst_18927 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18922);
var state_18974__$1 = (function (){var statearr_18999 = state_18974;
(statearr_18999[(19)] = inst_18926);

return statearr_18999;
})();
var statearr_19000_19072 = state_18974__$1;
(statearr_19000_19072[(2)] = inst_18927);

(statearr_19000_19072[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (32))){
var inst_18915 = (state_18974[(9)]);
var inst_18914 = (state_18974[(20)]);
var inst_18917 = (state_18974[(12)]);
var inst_18916 = (state_18974[(21)]);
var inst_18929 = (state_18974[(2)]);
var inst_18930 = (inst_18917 + (1));
var tmp18995 = inst_18915;
var tmp18996 = inst_18914;
var tmp18997 = inst_18916;
var inst_18914__$1 = tmp18996;
var inst_18915__$1 = tmp18995;
var inst_18916__$1 = tmp18997;
var inst_18917__$1 = inst_18930;
var state_18974__$1 = (function (){var statearr_19001 = state_18974;
(statearr_19001[(9)] = inst_18915__$1);

(statearr_19001[(20)] = inst_18914__$1);

(statearr_19001[(12)] = inst_18917__$1);

(statearr_19001[(22)] = inst_18929);

(statearr_19001[(21)] = inst_18916__$1);

return statearr_19001;
})();
var statearr_19002_19073 = state_18974__$1;
(statearr_19002_19073[(2)] = null);

(statearr_19002_19073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (40))){
var inst_18942 = (state_18974[(23)]);
var inst_18946 = done(null);
var inst_18947 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18942);
var state_18974__$1 = (function (){var statearr_19003 = state_18974;
(statearr_19003[(24)] = inst_18946);

return statearr_19003;
})();
var statearr_19004_19074 = state_18974__$1;
(statearr_19004_19074[(2)] = inst_18947);

(statearr_19004_19074[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (33))){
var inst_18933 = (state_18974[(25)]);
var inst_18935 = cljs.core.chunked_seq_QMARK_(inst_18933);
var state_18974__$1 = state_18974;
if(inst_18935){
var statearr_19005_19075 = state_18974__$1;
(statearr_19005_19075[(1)] = (36));

} else {
var statearr_19006_19076 = state_18974__$1;
(statearr_19006_19076[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (13))){
var inst_18863 = (state_18974[(26)]);
var inst_18866 = cljs.core.async.close_BANG_(inst_18863);
var state_18974__$1 = state_18974;
var statearr_19007_19077 = state_18974__$1;
(statearr_19007_19077[(2)] = inst_18866);

(statearr_19007_19077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (22))){
var inst_18886 = (state_18974[(8)]);
var inst_18889 = cljs.core.async.close_BANG_(inst_18886);
var state_18974__$1 = state_18974;
var statearr_19008_19078 = state_18974__$1;
(statearr_19008_19078[(2)] = inst_18889);

(statearr_19008_19078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (36))){
var inst_18933 = (state_18974[(25)]);
var inst_18937 = cljs.core.chunk_first(inst_18933);
var inst_18938 = cljs.core.chunk_rest(inst_18933);
var inst_18939 = cljs.core.count(inst_18937);
var inst_18914 = inst_18938;
var inst_18915 = inst_18937;
var inst_18916 = inst_18939;
var inst_18917 = (0);
var state_18974__$1 = (function (){var statearr_19009 = state_18974;
(statearr_19009[(9)] = inst_18915);

(statearr_19009[(20)] = inst_18914);

(statearr_19009[(12)] = inst_18917);

(statearr_19009[(21)] = inst_18916);

return statearr_19009;
})();
var statearr_19010_19079 = state_18974__$1;
(statearr_19010_19079[(2)] = null);

(statearr_19010_19079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (41))){
var inst_18933 = (state_18974[(25)]);
var inst_18949 = (state_18974[(2)]);
var inst_18950 = cljs.core.next(inst_18933);
var inst_18914 = inst_18950;
var inst_18915 = null;
var inst_18916 = (0);
var inst_18917 = (0);
var state_18974__$1 = (function (){var statearr_19011 = state_18974;
(statearr_19011[(9)] = inst_18915);

(statearr_19011[(20)] = inst_18914);

(statearr_19011[(12)] = inst_18917);

(statearr_19011[(21)] = inst_18916);

(statearr_19011[(27)] = inst_18949);

return statearr_19011;
})();
var statearr_19012_19080 = state_18974__$1;
(statearr_19012_19080[(2)] = null);

(statearr_19012_19080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (43))){
var state_18974__$1 = state_18974;
var statearr_19013_19081 = state_18974__$1;
(statearr_19013_19081[(2)] = null);

(statearr_19013_19081[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (29))){
var inst_18958 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19014_19082 = state_18974__$1;
(statearr_19014_19082[(2)] = inst_18958);

(statearr_19014_19082[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (44))){
var inst_18967 = (state_18974[(2)]);
var state_18974__$1 = (function (){var statearr_19015 = state_18974;
(statearr_19015[(28)] = inst_18967);

return statearr_19015;
})();
var statearr_19016_19083 = state_18974__$1;
(statearr_19016_19083[(2)] = null);

(statearr_19016_19083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (6))){
var inst_18906 = (state_18974[(29)]);
var inst_18905 = cljs.core.deref(cs);
var inst_18906__$1 = cljs.core.keys(inst_18905);
var inst_18907 = cljs.core.count(inst_18906__$1);
var inst_18908 = cljs.core.reset_BANG_(dctr,inst_18907);
var inst_18913 = cljs.core.seq(inst_18906__$1);
var inst_18914 = inst_18913;
var inst_18915 = null;
var inst_18916 = (0);
var inst_18917 = (0);
var state_18974__$1 = (function (){var statearr_19017 = state_18974;
(statearr_19017[(9)] = inst_18915);

(statearr_19017[(20)] = inst_18914);

(statearr_19017[(29)] = inst_18906__$1);

(statearr_19017[(12)] = inst_18917);

(statearr_19017[(21)] = inst_18916);

(statearr_19017[(30)] = inst_18908);

return statearr_19017;
})();
var statearr_19018_19084 = state_18974__$1;
(statearr_19018_19084[(2)] = null);

(statearr_19018_19084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (28))){
var inst_18914 = (state_18974[(20)]);
var inst_18933 = (state_18974[(25)]);
var inst_18933__$1 = cljs.core.seq(inst_18914);
var state_18974__$1 = (function (){var statearr_19019 = state_18974;
(statearr_19019[(25)] = inst_18933__$1);

return statearr_19019;
})();
if(inst_18933__$1){
var statearr_19020_19085 = state_18974__$1;
(statearr_19020_19085[(1)] = (33));

} else {
var statearr_19021_19086 = state_18974__$1;
(statearr_19021_19086[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (25))){
var inst_18917 = (state_18974[(12)]);
var inst_18916 = (state_18974[(21)]);
var inst_18919 = (inst_18917 < inst_18916);
var inst_18920 = inst_18919;
var state_18974__$1 = state_18974;
if(cljs.core.truth_(inst_18920)){
var statearr_19022_19087 = state_18974__$1;
(statearr_19022_19087[(1)] = (27));

} else {
var statearr_19023_19088 = state_18974__$1;
(statearr_19023_19088[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (34))){
var state_18974__$1 = state_18974;
var statearr_19024_19089 = state_18974__$1;
(statearr_19024_19089[(2)] = null);

(statearr_19024_19089[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (17))){
var state_18974__$1 = state_18974;
var statearr_19025_19090 = state_18974__$1;
(statearr_19025_19090[(2)] = null);

(statearr_19025_19090[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (3))){
var inst_18972 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18974__$1,inst_18972);
} else {
if((state_val_18975 === (12))){
var inst_18901 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19026_19091 = state_18974__$1;
(statearr_19026_19091[(2)] = inst_18901);

(statearr_19026_19091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (2))){
var state_18974__$1 = state_18974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18974__$1,(4),ch);
} else {
if((state_val_18975 === (23))){
var state_18974__$1 = state_18974;
var statearr_19027_19092 = state_18974__$1;
(statearr_19027_19092[(2)] = null);

(statearr_19027_19092[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (35))){
var inst_18956 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19028_19093 = state_18974__$1;
(statearr_19028_19093[(2)] = inst_18956);

(statearr_19028_19093[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (19))){
var inst_18873 = (state_18974[(7)]);
var inst_18877 = cljs.core.chunk_first(inst_18873);
var inst_18878 = cljs.core.chunk_rest(inst_18873);
var inst_18879 = cljs.core.count(inst_18877);
var inst_18851 = inst_18878;
var inst_18852 = inst_18877;
var inst_18853 = inst_18879;
var inst_18854 = (0);
var state_18974__$1 = (function (){var statearr_19029 = state_18974;
(statearr_19029[(13)] = inst_18853);

(statearr_19029[(14)] = inst_18851);

(statearr_19029[(15)] = inst_18852);

(statearr_19029[(16)] = inst_18854);

return statearr_19029;
})();
var statearr_19030_19094 = state_18974__$1;
(statearr_19030_19094[(2)] = null);

(statearr_19030_19094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (11))){
var inst_18851 = (state_18974[(14)]);
var inst_18873 = (state_18974[(7)]);
var inst_18873__$1 = cljs.core.seq(inst_18851);
var state_18974__$1 = (function (){var statearr_19031 = state_18974;
(statearr_19031[(7)] = inst_18873__$1);

return statearr_19031;
})();
if(inst_18873__$1){
var statearr_19032_19095 = state_18974__$1;
(statearr_19032_19095[(1)] = (16));

} else {
var statearr_19033_19096 = state_18974__$1;
(statearr_19033_19096[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (9))){
var inst_18903 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19034_19097 = state_18974__$1;
(statearr_19034_19097[(2)] = inst_18903);

(statearr_19034_19097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (5))){
var inst_18849 = cljs.core.deref(cs);
var inst_18850 = cljs.core.seq(inst_18849);
var inst_18851 = inst_18850;
var inst_18852 = null;
var inst_18853 = (0);
var inst_18854 = (0);
var state_18974__$1 = (function (){var statearr_19035 = state_18974;
(statearr_19035[(13)] = inst_18853);

(statearr_19035[(14)] = inst_18851);

(statearr_19035[(15)] = inst_18852);

(statearr_19035[(16)] = inst_18854);

return statearr_19035;
})();
var statearr_19036_19098 = state_18974__$1;
(statearr_19036_19098[(2)] = null);

(statearr_19036_19098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (14))){
var state_18974__$1 = state_18974;
var statearr_19037_19099 = state_18974__$1;
(statearr_19037_19099[(2)] = null);

(statearr_19037_19099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (45))){
var inst_18964 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19038_19100 = state_18974__$1;
(statearr_19038_19100[(2)] = inst_18964);

(statearr_19038_19100[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (26))){
var inst_18906 = (state_18974[(29)]);
var inst_18960 = (state_18974[(2)]);
var inst_18961 = cljs.core.seq(inst_18906);
var state_18974__$1 = (function (){var statearr_19039 = state_18974;
(statearr_19039[(31)] = inst_18960);

return statearr_19039;
})();
if(inst_18961){
var statearr_19040_19101 = state_18974__$1;
(statearr_19040_19101[(1)] = (42));

} else {
var statearr_19041_19102 = state_18974__$1;
(statearr_19041_19102[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (16))){
var inst_18873 = (state_18974[(7)]);
var inst_18875 = cljs.core.chunked_seq_QMARK_(inst_18873);
var state_18974__$1 = state_18974;
if(inst_18875){
var statearr_19042_19103 = state_18974__$1;
(statearr_19042_19103[(1)] = (19));

} else {
var statearr_19043_19104 = state_18974__$1;
(statearr_19043_19104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (38))){
var inst_18953 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19044_19105 = state_18974__$1;
(statearr_19044_19105[(2)] = inst_18953);

(statearr_19044_19105[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (30))){
var state_18974__$1 = state_18974;
var statearr_19045_19106 = state_18974__$1;
(statearr_19045_19106[(2)] = null);

(statearr_19045_19106[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (10))){
var inst_18852 = (state_18974[(15)]);
var inst_18854 = (state_18974[(16)]);
var inst_18862 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18852,inst_18854);
var inst_18863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18862,(0),null);
var inst_18864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18862,(1),null);
var state_18974__$1 = (function (){var statearr_19046 = state_18974;
(statearr_19046[(26)] = inst_18863);

return statearr_19046;
})();
if(cljs.core.truth_(inst_18864)){
var statearr_19047_19107 = state_18974__$1;
(statearr_19047_19107[(1)] = (13));

} else {
var statearr_19048_19108 = state_18974__$1;
(statearr_19048_19108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (18))){
var inst_18899 = (state_18974[(2)]);
var state_18974__$1 = state_18974;
var statearr_19049_19109 = state_18974__$1;
(statearr_19049_19109[(2)] = inst_18899);

(statearr_19049_19109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (42))){
var state_18974__$1 = state_18974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18974__$1,(45),dchan);
} else {
if((state_val_18975 === (37))){
var inst_18842 = (state_18974[(10)]);
var inst_18933 = (state_18974[(25)]);
var inst_18942 = (state_18974[(23)]);
var inst_18942__$1 = cljs.core.first(inst_18933);
var inst_18943 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18942__$1,inst_18842,done);
var state_18974__$1 = (function (){var statearr_19050 = state_18974;
(statearr_19050[(23)] = inst_18942__$1);

return statearr_19050;
})();
if(cljs.core.truth_(inst_18943)){
var statearr_19051_19110 = state_18974__$1;
(statearr_19051_19110[(1)] = (39));

} else {
var statearr_19052_19111 = state_18974__$1;
(statearr_19052_19111[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18975 === (8))){
var inst_18853 = (state_18974[(13)]);
var inst_18854 = (state_18974[(16)]);
var inst_18856 = (inst_18854 < inst_18853);
var inst_18857 = inst_18856;
var state_18974__$1 = state_18974;
if(cljs.core.truth_(inst_18857)){
var statearr_19053_19112 = state_18974__$1;
(statearr_19053_19112[(1)] = (10));

} else {
var statearr_19054_19113 = state_18974__$1;
(statearr_19054_19113[(1)] = (11));

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
});})(c__18240__auto___19059,cs,m,dchan,dctr,done))
;
return ((function (switch__18068__auto__,c__18240__auto___19059,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18069__auto__ = null;
var cljs$core$async$mult_$_state_machine__18069__auto____0 = (function (){
var statearr_19055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19055[(0)] = cljs$core$async$mult_$_state_machine__18069__auto__);

(statearr_19055[(1)] = (1));

return statearr_19055;
});
var cljs$core$async$mult_$_state_machine__18069__auto____1 = (function (state_18974){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_18974);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e19056){if((e19056 instanceof Object)){
var ex__18072__auto__ = e19056;
var statearr_19057_19114 = state_18974;
(statearr_19057_19114[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19115 = state_18974;
state_18974 = G__19115;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18069__auto__ = function(state_18974){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18069__auto____1.call(this,state_18974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18069__auto____0;
cljs$core$async$mult_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18069__auto____1;
return cljs$core$async$mult_$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___19059,cs,m,dchan,dctr,done))
})();
var state__18242__auto__ = (function (){var statearr_19058 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_19058[(6)] = c__18240__auto___19059);

return statearr_19058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___19059,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19117 = arguments.length;
switch (G__19117) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19129 = arguments.length;
var i__4532__auto___19130 = (0);
while(true){
if((i__4532__auto___19130 < len__4531__auto___19129)){
args__4534__auto__.push((arguments[i__4532__auto___19130]));

var G__19131 = (i__4532__auto___19130 + (1));
i__4532__auto___19130 = G__19131;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19123){
var map__19124 = p__19123;
var map__19124__$1 = ((((!((map__19124 == null)))?(((((map__19124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19124):map__19124);
var opts = map__19124__$1;
var statearr_19126_19132 = state;
(statearr_19126_19132[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__19124,map__19124__$1,opts){
return (function (val){
var statearr_19127_19133 = state;
(statearr_19127_19133[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19124,map__19124__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_19128_19134 = state;
(statearr_19128_19134[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19119){
var G__19120 = cljs.core.first(seq19119);
var seq19119__$1 = cljs.core.next(seq19119);
var G__19121 = cljs.core.first(seq19119__$1);
var seq19119__$2 = cljs.core.next(seq19119__$1);
var G__19122 = cljs.core.first(seq19119__$2);
var seq19119__$3 = cljs.core.next(seq19119__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19120,G__19121,G__19122,seq19119__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19135 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19136){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19136 = meta19136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19137,meta19136__$1){
var self__ = this;
var _19137__$1 = this;
return (new cljs.core.async.t_cljs$core$async19135(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19136__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19137){
var self__ = this;
var _19137__$1 = this;
return self__.meta19136;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19135.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19135.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta19136","meta19136",297147631,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19135";

cljs.core.async.t_cljs$core$async19135.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19135");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19135.
 */
cljs.core.async.__GT_t_cljs$core$async19135 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19135(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19136){
return (new cljs.core.async.t_cljs$core$async19135(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19136));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19135(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18240__auto___19299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___19299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___19299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19239){
var state_val_19240 = (state_19239[(1)]);
if((state_val_19240 === (7))){
var inst_19154 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19241_19300 = state_19239__$1;
(statearr_19241_19300[(2)] = inst_19154);

(statearr_19241_19300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (20))){
var inst_19166 = (state_19239[(7)]);
var state_19239__$1 = state_19239;
var statearr_19242_19301 = state_19239__$1;
(statearr_19242_19301[(2)] = inst_19166);

(statearr_19242_19301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (27))){
var state_19239__$1 = state_19239;
var statearr_19243_19302 = state_19239__$1;
(statearr_19243_19302[(2)] = null);

(statearr_19243_19302[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (1))){
var inst_19141 = (state_19239[(8)]);
var inst_19141__$1 = calc_state();
var inst_19143 = (inst_19141__$1 == null);
var inst_19144 = cljs.core.not(inst_19143);
var state_19239__$1 = (function (){var statearr_19244 = state_19239;
(statearr_19244[(8)] = inst_19141__$1);

return statearr_19244;
})();
if(inst_19144){
var statearr_19245_19303 = state_19239__$1;
(statearr_19245_19303[(1)] = (2));

} else {
var statearr_19246_19304 = state_19239__$1;
(statearr_19246_19304[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (24))){
var inst_19213 = (state_19239[(9)]);
var inst_19190 = (state_19239[(10)]);
var inst_19199 = (state_19239[(11)]);
var inst_19213__$1 = (inst_19190.cljs$core$IFn$_invoke$arity$1 ? inst_19190.cljs$core$IFn$_invoke$arity$1(inst_19199) : inst_19190.call(null,inst_19199));
var state_19239__$1 = (function (){var statearr_19247 = state_19239;
(statearr_19247[(9)] = inst_19213__$1);

return statearr_19247;
})();
if(cljs.core.truth_(inst_19213__$1)){
var statearr_19248_19305 = state_19239__$1;
(statearr_19248_19305[(1)] = (29));

} else {
var statearr_19249_19306 = state_19239__$1;
(statearr_19249_19306[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (4))){
var inst_19157 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19157)){
var statearr_19250_19307 = state_19239__$1;
(statearr_19250_19307[(1)] = (8));

} else {
var statearr_19251_19308 = state_19239__$1;
(statearr_19251_19308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (15))){
var inst_19184 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19184)){
var statearr_19252_19309 = state_19239__$1;
(statearr_19252_19309[(1)] = (19));

} else {
var statearr_19253_19310 = state_19239__$1;
(statearr_19253_19310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (21))){
var inst_19189 = (state_19239[(12)]);
var inst_19189__$1 = (state_19239[(2)]);
var inst_19190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19189__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19189__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19189__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19239__$1 = (function (){var statearr_19254 = state_19239;
(statearr_19254[(13)] = inst_19191);

(statearr_19254[(10)] = inst_19190);

(statearr_19254[(12)] = inst_19189__$1);

return statearr_19254;
})();
return cljs.core.async.ioc_alts_BANG_(state_19239__$1,(22),inst_19192);
} else {
if((state_val_19240 === (31))){
var inst_19221 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19221)){
var statearr_19255_19311 = state_19239__$1;
(statearr_19255_19311[(1)] = (32));

} else {
var statearr_19256_19312 = state_19239__$1;
(statearr_19256_19312[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (32))){
var inst_19198 = (state_19239[(14)]);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19239__$1,(35),out,inst_19198);
} else {
if((state_val_19240 === (33))){
var inst_19189 = (state_19239[(12)]);
var inst_19166 = inst_19189;
var state_19239__$1 = (function (){var statearr_19257 = state_19239;
(statearr_19257[(7)] = inst_19166);

return statearr_19257;
})();
var statearr_19258_19313 = state_19239__$1;
(statearr_19258_19313[(2)] = null);

(statearr_19258_19313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (13))){
var inst_19166 = (state_19239[(7)]);
var inst_19173 = inst_19166.cljs$lang$protocol_mask$partition0$;
var inst_19174 = (inst_19173 & (64));
var inst_19175 = inst_19166.cljs$core$ISeq$;
var inst_19176 = (cljs.core.PROTOCOL_SENTINEL === inst_19175);
var inst_19177 = ((inst_19174) || (inst_19176));
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19177)){
var statearr_19259_19314 = state_19239__$1;
(statearr_19259_19314[(1)] = (16));

} else {
var statearr_19260_19315 = state_19239__$1;
(statearr_19260_19315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (22))){
var inst_19198 = (state_19239[(14)]);
var inst_19199 = (state_19239[(11)]);
var inst_19197 = (state_19239[(2)]);
var inst_19198__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19197,(0),null);
var inst_19199__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19197,(1),null);
var inst_19200 = (inst_19198__$1 == null);
var inst_19201 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19199__$1,change);
var inst_19202 = ((inst_19200) || (inst_19201));
var state_19239__$1 = (function (){var statearr_19261 = state_19239;
(statearr_19261[(14)] = inst_19198__$1);

(statearr_19261[(11)] = inst_19199__$1);

return statearr_19261;
})();
if(cljs.core.truth_(inst_19202)){
var statearr_19262_19316 = state_19239__$1;
(statearr_19262_19316[(1)] = (23));

} else {
var statearr_19263_19317 = state_19239__$1;
(statearr_19263_19317[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (36))){
var inst_19189 = (state_19239[(12)]);
var inst_19166 = inst_19189;
var state_19239__$1 = (function (){var statearr_19264 = state_19239;
(statearr_19264[(7)] = inst_19166);

return statearr_19264;
})();
var statearr_19265_19318 = state_19239__$1;
(statearr_19265_19318[(2)] = null);

(statearr_19265_19318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (29))){
var inst_19213 = (state_19239[(9)]);
var state_19239__$1 = state_19239;
var statearr_19266_19319 = state_19239__$1;
(statearr_19266_19319[(2)] = inst_19213);

(statearr_19266_19319[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (6))){
var state_19239__$1 = state_19239;
var statearr_19267_19320 = state_19239__$1;
(statearr_19267_19320[(2)] = false);

(statearr_19267_19320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (28))){
var inst_19209 = (state_19239[(2)]);
var inst_19210 = calc_state();
var inst_19166 = inst_19210;
var state_19239__$1 = (function (){var statearr_19268 = state_19239;
(statearr_19268[(7)] = inst_19166);

(statearr_19268[(15)] = inst_19209);

return statearr_19268;
})();
var statearr_19269_19321 = state_19239__$1;
(statearr_19269_19321[(2)] = null);

(statearr_19269_19321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (25))){
var inst_19235 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19270_19322 = state_19239__$1;
(statearr_19270_19322[(2)] = inst_19235);

(statearr_19270_19322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (34))){
var inst_19233 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19271_19323 = state_19239__$1;
(statearr_19271_19323[(2)] = inst_19233);

(statearr_19271_19323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (17))){
var state_19239__$1 = state_19239;
var statearr_19272_19324 = state_19239__$1;
(statearr_19272_19324[(2)] = false);

(statearr_19272_19324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (3))){
var state_19239__$1 = state_19239;
var statearr_19273_19325 = state_19239__$1;
(statearr_19273_19325[(2)] = false);

(statearr_19273_19325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (12))){
var inst_19237 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19239__$1,inst_19237);
} else {
if((state_val_19240 === (2))){
var inst_19141 = (state_19239[(8)]);
var inst_19146 = inst_19141.cljs$lang$protocol_mask$partition0$;
var inst_19147 = (inst_19146 & (64));
var inst_19148 = inst_19141.cljs$core$ISeq$;
var inst_19149 = (cljs.core.PROTOCOL_SENTINEL === inst_19148);
var inst_19150 = ((inst_19147) || (inst_19149));
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19150)){
var statearr_19274_19326 = state_19239__$1;
(statearr_19274_19326[(1)] = (5));

} else {
var statearr_19275_19327 = state_19239__$1;
(statearr_19275_19327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (23))){
var inst_19198 = (state_19239[(14)]);
var inst_19204 = (inst_19198 == null);
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19204)){
var statearr_19276_19328 = state_19239__$1;
(statearr_19276_19328[(1)] = (26));

} else {
var statearr_19277_19329 = state_19239__$1;
(statearr_19277_19329[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (35))){
var inst_19224 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19224)){
var statearr_19278_19330 = state_19239__$1;
(statearr_19278_19330[(1)] = (36));

} else {
var statearr_19279_19331 = state_19239__$1;
(statearr_19279_19331[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (19))){
var inst_19166 = (state_19239[(7)]);
var inst_19186 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19166);
var state_19239__$1 = state_19239;
var statearr_19280_19332 = state_19239__$1;
(statearr_19280_19332[(2)] = inst_19186);

(statearr_19280_19332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (11))){
var inst_19166 = (state_19239[(7)]);
var inst_19170 = (inst_19166 == null);
var inst_19171 = cljs.core.not(inst_19170);
var state_19239__$1 = state_19239;
if(inst_19171){
var statearr_19281_19333 = state_19239__$1;
(statearr_19281_19333[(1)] = (13));

} else {
var statearr_19282_19334 = state_19239__$1;
(statearr_19282_19334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (9))){
var inst_19141 = (state_19239[(8)]);
var state_19239__$1 = state_19239;
var statearr_19283_19335 = state_19239__$1;
(statearr_19283_19335[(2)] = inst_19141);

(statearr_19283_19335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (5))){
var state_19239__$1 = state_19239;
var statearr_19284_19336 = state_19239__$1;
(statearr_19284_19336[(2)] = true);

(statearr_19284_19336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (14))){
var state_19239__$1 = state_19239;
var statearr_19285_19337 = state_19239__$1;
(statearr_19285_19337[(2)] = false);

(statearr_19285_19337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (26))){
var inst_19199 = (state_19239[(11)]);
var inst_19206 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19199);
var state_19239__$1 = state_19239;
var statearr_19286_19338 = state_19239__$1;
(statearr_19286_19338[(2)] = inst_19206);

(statearr_19286_19338[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (16))){
var state_19239__$1 = state_19239;
var statearr_19287_19339 = state_19239__$1;
(statearr_19287_19339[(2)] = true);

(statearr_19287_19339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (38))){
var inst_19229 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19288_19340 = state_19239__$1;
(statearr_19288_19340[(2)] = inst_19229);

(statearr_19288_19340[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (30))){
var inst_19191 = (state_19239[(13)]);
var inst_19190 = (state_19239[(10)]);
var inst_19199 = (state_19239[(11)]);
var inst_19216 = cljs.core.empty_QMARK_(inst_19190);
var inst_19217 = (inst_19191.cljs$core$IFn$_invoke$arity$1 ? inst_19191.cljs$core$IFn$_invoke$arity$1(inst_19199) : inst_19191.call(null,inst_19199));
var inst_19218 = cljs.core.not(inst_19217);
var inst_19219 = ((inst_19216) && (inst_19218));
var state_19239__$1 = state_19239;
var statearr_19289_19341 = state_19239__$1;
(statearr_19289_19341[(2)] = inst_19219);

(statearr_19289_19341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (10))){
var inst_19141 = (state_19239[(8)]);
var inst_19162 = (state_19239[(2)]);
var inst_19163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19162,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19162,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19162,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19166 = inst_19141;
var state_19239__$1 = (function (){var statearr_19290 = state_19239;
(statearr_19290[(16)] = inst_19165);

(statearr_19290[(17)] = inst_19164);

(statearr_19290[(7)] = inst_19166);

(statearr_19290[(18)] = inst_19163);

return statearr_19290;
})();
var statearr_19291_19342 = state_19239__$1;
(statearr_19291_19342[(2)] = null);

(statearr_19291_19342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (18))){
var inst_19181 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19292_19343 = state_19239__$1;
(statearr_19292_19343[(2)] = inst_19181);

(statearr_19292_19343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (37))){
var state_19239__$1 = state_19239;
var statearr_19293_19344 = state_19239__$1;
(statearr_19293_19344[(2)] = null);

(statearr_19293_19344[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (8))){
var inst_19141 = (state_19239[(8)]);
var inst_19159 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19141);
var state_19239__$1 = state_19239;
var statearr_19294_19345 = state_19239__$1;
(statearr_19294_19345[(2)] = inst_19159);

(statearr_19294_19345[(1)] = (10));


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
}
}
}
}
});})(c__18240__auto___19299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18068__auto__,c__18240__auto___19299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18069__auto__ = null;
var cljs$core$async$mix_$_state_machine__18069__auto____0 = (function (){
var statearr_19295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19295[(0)] = cljs$core$async$mix_$_state_machine__18069__auto__);

(statearr_19295[(1)] = (1));

return statearr_19295;
});
var cljs$core$async$mix_$_state_machine__18069__auto____1 = (function (state_19239){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_19239);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e19296){if((e19296 instanceof Object)){
var ex__18072__auto__ = e19296;
var statearr_19297_19346 = state_19239;
(statearr_19297_19346[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19347 = state_19239;
state_19239 = G__19347;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18069__auto__ = function(state_19239){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18069__auto____1.call(this,state_19239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18069__auto____0;
cljs$core$async$mix_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18069__auto____1;
return cljs$core$async$mix_$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___19299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18242__auto__ = (function (){var statearr_19298 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_19298[(6)] = c__18240__auto___19299);

return statearr_19298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___19299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19349 = arguments.length;
switch (G__19349) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19353 = arguments.length;
switch (G__19353) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__19351_SHARP_){
if(cljs.core.truth_((p1__19351_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19351_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19351_SHARP_.call(null,topic)))){
return p1__19351_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19351_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19354 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19355){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19355 = meta19355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19356,meta19355__$1){
var self__ = this;
var _19356__$1 = this;
return (new cljs.core.async.t_cljs$core$async19354(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19355__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19356){
var self__ = this;
var _19356__$1 = this;
return self__.meta19355;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19354.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19354.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19354.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19354.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19354.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19355","meta19355",-1950731964,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19354";

cljs.core.async.t_cljs$core$async19354.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19354");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19354.
 */
cljs.core.async.__GT_t_cljs$core$async19354 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19355){
return (new cljs.core.async.t_cljs$core$async19354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19355));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19354(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18240__auto___19474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___19474,mults,ensure_mult,p){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___19474,mults,ensure_mult,p){
return (function (state_19428){
var state_val_19429 = (state_19428[(1)]);
if((state_val_19429 === (7))){
var inst_19424 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19430_19475 = state_19428__$1;
(statearr_19430_19475[(2)] = inst_19424);

(statearr_19430_19475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (20))){
var state_19428__$1 = state_19428;
var statearr_19431_19476 = state_19428__$1;
(statearr_19431_19476[(2)] = null);

(statearr_19431_19476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (1))){
var state_19428__$1 = state_19428;
var statearr_19432_19477 = state_19428__$1;
(statearr_19432_19477[(2)] = null);

(statearr_19432_19477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (24))){
var inst_19407 = (state_19428[(7)]);
var inst_19416 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19407);
var state_19428__$1 = state_19428;
var statearr_19433_19478 = state_19428__$1;
(statearr_19433_19478[(2)] = inst_19416);

(statearr_19433_19478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (4))){
var inst_19359 = (state_19428[(8)]);
var inst_19359__$1 = (state_19428[(2)]);
var inst_19360 = (inst_19359__$1 == null);
var state_19428__$1 = (function (){var statearr_19434 = state_19428;
(statearr_19434[(8)] = inst_19359__$1);

return statearr_19434;
})();
if(cljs.core.truth_(inst_19360)){
var statearr_19435_19479 = state_19428__$1;
(statearr_19435_19479[(1)] = (5));

} else {
var statearr_19436_19480 = state_19428__$1;
(statearr_19436_19480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (15))){
var inst_19401 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19437_19481 = state_19428__$1;
(statearr_19437_19481[(2)] = inst_19401);

(statearr_19437_19481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (21))){
var inst_19421 = (state_19428[(2)]);
var state_19428__$1 = (function (){var statearr_19438 = state_19428;
(statearr_19438[(9)] = inst_19421);

return statearr_19438;
})();
var statearr_19439_19482 = state_19428__$1;
(statearr_19439_19482[(2)] = null);

(statearr_19439_19482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (13))){
var inst_19383 = (state_19428[(10)]);
var inst_19385 = cljs.core.chunked_seq_QMARK_(inst_19383);
var state_19428__$1 = state_19428;
if(inst_19385){
var statearr_19440_19483 = state_19428__$1;
(statearr_19440_19483[(1)] = (16));

} else {
var statearr_19441_19484 = state_19428__$1;
(statearr_19441_19484[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (22))){
var inst_19413 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
if(cljs.core.truth_(inst_19413)){
var statearr_19442_19485 = state_19428__$1;
(statearr_19442_19485[(1)] = (23));

} else {
var statearr_19443_19486 = state_19428__$1;
(statearr_19443_19486[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (6))){
var inst_19409 = (state_19428[(11)]);
var inst_19359 = (state_19428[(8)]);
var inst_19407 = (state_19428[(7)]);
var inst_19407__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19359) : topic_fn.call(null,inst_19359));
var inst_19408 = cljs.core.deref(mults);
var inst_19409__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19408,inst_19407__$1);
var state_19428__$1 = (function (){var statearr_19444 = state_19428;
(statearr_19444[(11)] = inst_19409__$1);

(statearr_19444[(7)] = inst_19407__$1);

return statearr_19444;
})();
if(cljs.core.truth_(inst_19409__$1)){
var statearr_19445_19487 = state_19428__$1;
(statearr_19445_19487[(1)] = (19));

} else {
var statearr_19446_19488 = state_19428__$1;
(statearr_19446_19488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (25))){
var inst_19418 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19447_19489 = state_19428__$1;
(statearr_19447_19489[(2)] = inst_19418);

(statearr_19447_19489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (17))){
var inst_19383 = (state_19428[(10)]);
var inst_19392 = cljs.core.first(inst_19383);
var inst_19393 = cljs.core.async.muxch_STAR_(inst_19392);
var inst_19394 = cljs.core.async.close_BANG_(inst_19393);
var inst_19395 = cljs.core.next(inst_19383);
var inst_19369 = inst_19395;
var inst_19370 = null;
var inst_19371 = (0);
var inst_19372 = (0);
var state_19428__$1 = (function (){var statearr_19448 = state_19428;
(statearr_19448[(12)] = inst_19372);

(statearr_19448[(13)] = inst_19371);

(statearr_19448[(14)] = inst_19370);

(statearr_19448[(15)] = inst_19394);

(statearr_19448[(16)] = inst_19369);

return statearr_19448;
})();
var statearr_19449_19490 = state_19428__$1;
(statearr_19449_19490[(2)] = null);

(statearr_19449_19490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (3))){
var inst_19426 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19428__$1,inst_19426);
} else {
if((state_val_19429 === (12))){
var inst_19403 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19450_19491 = state_19428__$1;
(statearr_19450_19491[(2)] = inst_19403);

(statearr_19450_19491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (2))){
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19428__$1,(4),ch);
} else {
if((state_val_19429 === (23))){
var state_19428__$1 = state_19428;
var statearr_19451_19492 = state_19428__$1;
(statearr_19451_19492[(2)] = null);

(statearr_19451_19492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (19))){
var inst_19409 = (state_19428[(11)]);
var inst_19359 = (state_19428[(8)]);
var inst_19411 = cljs.core.async.muxch_STAR_(inst_19409);
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19428__$1,(22),inst_19411,inst_19359);
} else {
if((state_val_19429 === (11))){
var inst_19383 = (state_19428[(10)]);
var inst_19369 = (state_19428[(16)]);
var inst_19383__$1 = cljs.core.seq(inst_19369);
var state_19428__$1 = (function (){var statearr_19452 = state_19428;
(statearr_19452[(10)] = inst_19383__$1);

return statearr_19452;
})();
if(inst_19383__$1){
var statearr_19453_19493 = state_19428__$1;
(statearr_19453_19493[(1)] = (13));

} else {
var statearr_19454_19494 = state_19428__$1;
(statearr_19454_19494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (9))){
var inst_19405 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19455_19495 = state_19428__$1;
(statearr_19455_19495[(2)] = inst_19405);

(statearr_19455_19495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (5))){
var inst_19366 = cljs.core.deref(mults);
var inst_19367 = cljs.core.vals(inst_19366);
var inst_19368 = cljs.core.seq(inst_19367);
var inst_19369 = inst_19368;
var inst_19370 = null;
var inst_19371 = (0);
var inst_19372 = (0);
var state_19428__$1 = (function (){var statearr_19456 = state_19428;
(statearr_19456[(12)] = inst_19372);

(statearr_19456[(13)] = inst_19371);

(statearr_19456[(14)] = inst_19370);

(statearr_19456[(16)] = inst_19369);

return statearr_19456;
})();
var statearr_19457_19496 = state_19428__$1;
(statearr_19457_19496[(2)] = null);

(statearr_19457_19496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (14))){
var state_19428__$1 = state_19428;
var statearr_19461_19497 = state_19428__$1;
(statearr_19461_19497[(2)] = null);

(statearr_19461_19497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (16))){
var inst_19383 = (state_19428[(10)]);
var inst_19387 = cljs.core.chunk_first(inst_19383);
var inst_19388 = cljs.core.chunk_rest(inst_19383);
var inst_19389 = cljs.core.count(inst_19387);
var inst_19369 = inst_19388;
var inst_19370 = inst_19387;
var inst_19371 = inst_19389;
var inst_19372 = (0);
var state_19428__$1 = (function (){var statearr_19462 = state_19428;
(statearr_19462[(12)] = inst_19372);

(statearr_19462[(13)] = inst_19371);

(statearr_19462[(14)] = inst_19370);

(statearr_19462[(16)] = inst_19369);

return statearr_19462;
})();
var statearr_19463_19498 = state_19428__$1;
(statearr_19463_19498[(2)] = null);

(statearr_19463_19498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (10))){
var inst_19372 = (state_19428[(12)]);
var inst_19371 = (state_19428[(13)]);
var inst_19370 = (state_19428[(14)]);
var inst_19369 = (state_19428[(16)]);
var inst_19377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19370,inst_19372);
var inst_19378 = cljs.core.async.muxch_STAR_(inst_19377);
var inst_19379 = cljs.core.async.close_BANG_(inst_19378);
var inst_19380 = (inst_19372 + (1));
var tmp19458 = inst_19371;
var tmp19459 = inst_19370;
var tmp19460 = inst_19369;
var inst_19369__$1 = tmp19460;
var inst_19370__$1 = tmp19459;
var inst_19371__$1 = tmp19458;
var inst_19372__$1 = inst_19380;
var state_19428__$1 = (function (){var statearr_19464 = state_19428;
(statearr_19464[(12)] = inst_19372__$1);

(statearr_19464[(13)] = inst_19371__$1);

(statearr_19464[(14)] = inst_19370__$1);

(statearr_19464[(17)] = inst_19379);

(statearr_19464[(16)] = inst_19369__$1);

return statearr_19464;
})();
var statearr_19465_19499 = state_19428__$1;
(statearr_19465_19499[(2)] = null);

(statearr_19465_19499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (18))){
var inst_19398 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19466_19500 = state_19428__$1;
(statearr_19466_19500[(2)] = inst_19398);

(statearr_19466_19500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (8))){
var inst_19372 = (state_19428[(12)]);
var inst_19371 = (state_19428[(13)]);
var inst_19374 = (inst_19372 < inst_19371);
var inst_19375 = inst_19374;
var state_19428__$1 = state_19428;
if(cljs.core.truth_(inst_19375)){
var statearr_19467_19501 = state_19428__$1;
(statearr_19467_19501[(1)] = (10));

} else {
var statearr_19468_19502 = state_19428__$1;
(statearr_19468_19502[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__18240__auto___19474,mults,ensure_mult,p))
;
return ((function (switch__18068__auto__,c__18240__auto___19474,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_19469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19469[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_19469[(1)] = (1));

return statearr_19469;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_19428){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_19428);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e19470){if((e19470 instanceof Object)){
var ex__18072__auto__ = e19470;
var statearr_19471_19503 = state_19428;
(statearr_19471_19503[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19470;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19504 = state_19428;
state_19428 = G__19504;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_19428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_19428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___19474,mults,ensure_mult,p))
})();
var state__18242__auto__ = (function (){var statearr_19472 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_19472[(6)] = c__18240__auto___19474);

return statearr_19472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___19474,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19506 = arguments.length;
switch (G__19506) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19509 = arguments.length;
switch (G__19509) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19512 = arguments.length;
switch (G__19512) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__18240__auto___19579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___19579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___19579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19551){
var state_val_19552 = (state_19551[(1)]);
if((state_val_19552 === (7))){
var state_19551__$1 = state_19551;
var statearr_19553_19580 = state_19551__$1;
(statearr_19553_19580[(2)] = null);

(statearr_19553_19580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (1))){
var state_19551__$1 = state_19551;
var statearr_19554_19581 = state_19551__$1;
(statearr_19554_19581[(2)] = null);

(statearr_19554_19581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (4))){
var inst_19515 = (state_19551[(7)]);
var inst_19517 = (inst_19515 < cnt);
var state_19551__$1 = state_19551;
if(cljs.core.truth_(inst_19517)){
var statearr_19555_19582 = state_19551__$1;
(statearr_19555_19582[(1)] = (6));

} else {
var statearr_19556_19583 = state_19551__$1;
(statearr_19556_19583[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (15))){
var inst_19547 = (state_19551[(2)]);
var state_19551__$1 = state_19551;
var statearr_19557_19584 = state_19551__$1;
(statearr_19557_19584[(2)] = inst_19547);

(statearr_19557_19584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (13))){
var inst_19540 = cljs.core.async.close_BANG_(out);
var state_19551__$1 = state_19551;
var statearr_19558_19585 = state_19551__$1;
(statearr_19558_19585[(2)] = inst_19540);

(statearr_19558_19585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (6))){
var state_19551__$1 = state_19551;
var statearr_19559_19586 = state_19551__$1;
(statearr_19559_19586[(2)] = null);

(statearr_19559_19586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (3))){
var inst_19549 = (state_19551[(2)]);
var state_19551__$1 = state_19551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19551__$1,inst_19549);
} else {
if((state_val_19552 === (12))){
var inst_19537 = (state_19551[(8)]);
var inst_19537__$1 = (state_19551[(2)]);
var inst_19538 = cljs.core.some(cljs.core.nil_QMARK_,inst_19537__$1);
var state_19551__$1 = (function (){var statearr_19560 = state_19551;
(statearr_19560[(8)] = inst_19537__$1);

return statearr_19560;
})();
if(cljs.core.truth_(inst_19538)){
var statearr_19561_19587 = state_19551__$1;
(statearr_19561_19587[(1)] = (13));

} else {
var statearr_19562_19588 = state_19551__$1;
(statearr_19562_19588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (2))){
var inst_19514 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19515 = (0);
var state_19551__$1 = (function (){var statearr_19563 = state_19551;
(statearr_19563[(7)] = inst_19515);

(statearr_19563[(9)] = inst_19514);

return statearr_19563;
})();
var statearr_19564_19589 = state_19551__$1;
(statearr_19564_19589[(2)] = null);

(statearr_19564_19589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (11))){
var inst_19515 = (state_19551[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19551,(10),Object,null,(9));
var inst_19524 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19515) : chs__$1.call(null,inst_19515));
var inst_19525 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19515) : done.call(null,inst_19515));
var inst_19526 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19524,inst_19525);
var state_19551__$1 = state_19551;
var statearr_19565_19590 = state_19551__$1;
(statearr_19565_19590[(2)] = inst_19526);


cljs.core.async.impl.ioc_helpers.process_exception(state_19551__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (9))){
var inst_19515 = (state_19551[(7)]);
var inst_19528 = (state_19551[(2)]);
var inst_19529 = (inst_19515 + (1));
var inst_19515__$1 = inst_19529;
var state_19551__$1 = (function (){var statearr_19566 = state_19551;
(statearr_19566[(10)] = inst_19528);

(statearr_19566[(7)] = inst_19515__$1);

return statearr_19566;
})();
var statearr_19567_19591 = state_19551__$1;
(statearr_19567_19591[(2)] = null);

(statearr_19567_19591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (5))){
var inst_19535 = (state_19551[(2)]);
var state_19551__$1 = (function (){var statearr_19568 = state_19551;
(statearr_19568[(11)] = inst_19535);

return statearr_19568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19551__$1,(12),dchan);
} else {
if((state_val_19552 === (14))){
var inst_19537 = (state_19551[(8)]);
var inst_19542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19537);
var state_19551__$1 = state_19551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19551__$1,(16),out,inst_19542);
} else {
if((state_val_19552 === (16))){
var inst_19544 = (state_19551[(2)]);
var state_19551__$1 = (function (){var statearr_19569 = state_19551;
(statearr_19569[(12)] = inst_19544);

return statearr_19569;
})();
var statearr_19570_19592 = state_19551__$1;
(statearr_19570_19592[(2)] = null);

(statearr_19570_19592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (10))){
var inst_19519 = (state_19551[(2)]);
var inst_19520 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19551__$1 = (function (){var statearr_19571 = state_19551;
(statearr_19571[(13)] = inst_19519);

return statearr_19571;
})();
var statearr_19572_19593 = state_19551__$1;
(statearr_19572_19593[(2)] = inst_19520);


cljs.core.async.impl.ioc_helpers.process_exception(state_19551__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19552 === (8))){
var inst_19533 = (state_19551[(2)]);
var state_19551__$1 = state_19551;
var statearr_19573_19594 = state_19551__$1;
(statearr_19573_19594[(2)] = inst_19533);

(statearr_19573_19594[(1)] = (5));


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
});})(c__18240__auto___19579,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18068__auto__,c__18240__auto___19579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_19574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19574[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_19574[(1)] = (1));

return statearr_19574;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_19551){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_19551);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e19575){if((e19575 instanceof Object)){
var ex__18072__auto__ = e19575;
var statearr_19576_19595 = state_19551;
(statearr_19576_19595[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19575;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19596 = state_19551;
state_19551 = G__19596;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_19551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_19551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___19579,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18242__auto__ = (function (){var statearr_19577 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_19577[(6)] = c__18240__auto___19579);

return statearr_19577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___19579,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19599 = arguments.length;
switch (G__19599) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18240__auto___19653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___19653,out){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___19653,out){
return (function (state_19631){
var state_val_19632 = (state_19631[(1)]);
if((state_val_19632 === (7))){
var inst_19610 = (state_19631[(7)]);
var inst_19611 = (state_19631[(8)]);
var inst_19610__$1 = (state_19631[(2)]);
var inst_19611__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19610__$1,(0),null);
var inst_19612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19610__$1,(1),null);
var inst_19613 = (inst_19611__$1 == null);
var state_19631__$1 = (function (){var statearr_19633 = state_19631;
(statearr_19633[(7)] = inst_19610__$1);

(statearr_19633[(9)] = inst_19612);

(statearr_19633[(8)] = inst_19611__$1);

return statearr_19633;
})();
if(cljs.core.truth_(inst_19613)){
var statearr_19634_19654 = state_19631__$1;
(statearr_19634_19654[(1)] = (8));

} else {
var statearr_19635_19655 = state_19631__$1;
(statearr_19635_19655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (1))){
var inst_19600 = cljs.core.vec(chs);
var inst_19601 = inst_19600;
var state_19631__$1 = (function (){var statearr_19636 = state_19631;
(statearr_19636[(10)] = inst_19601);

return statearr_19636;
})();
var statearr_19637_19656 = state_19631__$1;
(statearr_19637_19656[(2)] = null);

(statearr_19637_19656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (4))){
var inst_19601 = (state_19631[(10)]);
var state_19631__$1 = state_19631;
return cljs.core.async.ioc_alts_BANG_(state_19631__$1,(7),inst_19601);
} else {
if((state_val_19632 === (6))){
var inst_19627 = (state_19631[(2)]);
var state_19631__$1 = state_19631;
var statearr_19638_19657 = state_19631__$1;
(statearr_19638_19657[(2)] = inst_19627);

(statearr_19638_19657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (3))){
var inst_19629 = (state_19631[(2)]);
var state_19631__$1 = state_19631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19631__$1,inst_19629);
} else {
if((state_val_19632 === (2))){
var inst_19601 = (state_19631[(10)]);
var inst_19603 = cljs.core.count(inst_19601);
var inst_19604 = (inst_19603 > (0));
var state_19631__$1 = state_19631;
if(cljs.core.truth_(inst_19604)){
var statearr_19640_19658 = state_19631__$1;
(statearr_19640_19658[(1)] = (4));

} else {
var statearr_19641_19659 = state_19631__$1;
(statearr_19641_19659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (11))){
var inst_19601 = (state_19631[(10)]);
var inst_19620 = (state_19631[(2)]);
var tmp19639 = inst_19601;
var inst_19601__$1 = tmp19639;
var state_19631__$1 = (function (){var statearr_19642 = state_19631;
(statearr_19642[(11)] = inst_19620);

(statearr_19642[(10)] = inst_19601__$1);

return statearr_19642;
})();
var statearr_19643_19660 = state_19631__$1;
(statearr_19643_19660[(2)] = null);

(statearr_19643_19660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (9))){
var inst_19611 = (state_19631[(8)]);
var state_19631__$1 = state_19631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19631__$1,(11),out,inst_19611);
} else {
if((state_val_19632 === (5))){
var inst_19625 = cljs.core.async.close_BANG_(out);
var state_19631__$1 = state_19631;
var statearr_19644_19661 = state_19631__$1;
(statearr_19644_19661[(2)] = inst_19625);

(statearr_19644_19661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (10))){
var inst_19623 = (state_19631[(2)]);
var state_19631__$1 = state_19631;
var statearr_19645_19662 = state_19631__$1;
(statearr_19645_19662[(2)] = inst_19623);

(statearr_19645_19662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19632 === (8))){
var inst_19610 = (state_19631[(7)]);
var inst_19612 = (state_19631[(9)]);
var inst_19611 = (state_19631[(8)]);
var inst_19601 = (state_19631[(10)]);
var inst_19615 = (function (){var cs = inst_19601;
var vec__19606 = inst_19610;
var v = inst_19611;
var c = inst_19612;
return ((function (cs,vec__19606,v,c,inst_19610,inst_19612,inst_19611,inst_19601,state_val_19632,c__18240__auto___19653,out){
return (function (p1__19597_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19597_SHARP_);
});
;})(cs,vec__19606,v,c,inst_19610,inst_19612,inst_19611,inst_19601,state_val_19632,c__18240__auto___19653,out))
})();
var inst_19616 = cljs.core.filterv(inst_19615,inst_19601);
var inst_19601__$1 = inst_19616;
var state_19631__$1 = (function (){var statearr_19646 = state_19631;
(statearr_19646[(10)] = inst_19601__$1);

return statearr_19646;
})();
var statearr_19647_19663 = state_19631__$1;
(statearr_19647_19663[(2)] = null);

(statearr_19647_19663[(1)] = (2));


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
});})(c__18240__auto___19653,out))
;
return ((function (switch__18068__auto__,c__18240__auto___19653,out){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_19648 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19648[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_19648[(1)] = (1));

return statearr_19648;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_19631){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_19631);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e19649){if((e19649 instanceof Object)){
var ex__18072__auto__ = e19649;
var statearr_19650_19664 = state_19631;
(statearr_19650_19664[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19665 = state_19631;
state_19631 = G__19665;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_19631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_19631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___19653,out))
})();
var state__18242__auto__ = (function (){var statearr_19651 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_19651[(6)] = c__18240__auto___19653);

return statearr_19651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___19653,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19667 = arguments.length;
switch (G__19667) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18240__auto___19712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___19712,out){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___19712,out){
return (function (state_19691){
var state_val_19692 = (state_19691[(1)]);
if((state_val_19692 === (7))){
var inst_19673 = (state_19691[(7)]);
var inst_19673__$1 = (state_19691[(2)]);
var inst_19674 = (inst_19673__$1 == null);
var inst_19675 = cljs.core.not(inst_19674);
var state_19691__$1 = (function (){var statearr_19693 = state_19691;
(statearr_19693[(7)] = inst_19673__$1);

return statearr_19693;
})();
if(inst_19675){
var statearr_19694_19713 = state_19691__$1;
(statearr_19694_19713[(1)] = (8));

} else {
var statearr_19695_19714 = state_19691__$1;
(statearr_19695_19714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (1))){
var inst_19668 = (0);
var state_19691__$1 = (function (){var statearr_19696 = state_19691;
(statearr_19696[(8)] = inst_19668);

return statearr_19696;
})();
var statearr_19697_19715 = state_19691__$1;
(statearr_19697_19715[(2)] = null);

(statearr_19697_19715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (4))){
var state_19691__$1 = state_19691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19691__$1,(7),ch);
} else {
if((state_val_19692 === (6))){
var inst_19686 = (state_19691[(2)]);
var state_19691__$1 = state_19691;
var statearr_19698_19716 = state_19691__$1;
(statearr_19698_19716[(2)] = inst_19686);

(statearr_19698_19716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (3))){
var inst_19688 = (state_19691[(2)]);
var inst_19689 = cljs.core.async.close_BANG_(out);
var state_19691__$1 = (function (){var statearr_19699 = state_19691;
(statearr_19699[(9)] = inst_19688);

return statearr_19699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19691__$1,inst_19689);
} else {
if((state_val_19692 === (2))){
var inst_19668 = (state_19691[(8)]);
var inst_19670 = (inst_19668 < n);
var state_19691__$1 = state_19691;
if(cljs.core.truth_(inst_19670)){
var statearr_19700_19717 = state_19691__$1;
(statearr_19700_19717[(1)] = (4));

} else {
var statearr_19701_19718 = state_19691__$1;
(statearr_19701_19718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (11))){
var inst_19668 = (state_19691[(8)]);
var inst_19678 = (state_19691[(2)]);
var inst_19679 = (inst_19668 + (1));
var inst_19668__$1 = inst_19679;
var state_19691__$1 = (function (){var statearr_19702 = state_19691;
(statearr_19702[(8)] = inst_19668__$1);

(statearr_19702[(10)] = inst_19678);

return statearr_19702;
})();
var statearr_19703_19719 = state_19691__$1;
(statearr_19703_19719[(2)] = null);

(statearr_19703_19719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (9))){
var state_19691__$1 = state_19691;
var statearr_19704_19720 = state_19691__$1;
(statearr_19704_19720[(2)] = null);

(statearr_19704_19720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (5))){
var state_19691__$1 = state_19691;
var statearr_19705_19721 = state_19691__$1;
(statearr_19705_19721[(2)] = null);

(statearr_19705_19721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (10))){
var inst_19683 = (state_19691[(2)]);
var state_19691__$1 = state_19691;
var statearr_19706_19722 = state_19691__$1;
(statearr_19706_19722[(2)] = inst_19683);

(statearr_19706_19722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (8))){
var inst_19673 = (state_19691[(7)]);
var state_19691__$1 = state_19691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19691__$1,(11),out,inst_19673);
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
});})(c__18240__auto___19712,out))
;
return ((function (switch__18068__auto__,c__18240__auto___19712,out){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_19707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19707[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_19707[(1)] = (1));

return statearr_19707;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_19691){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_19691);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e19708){if((e19708 instanceof Object)){
var ex__18072__auto__ = e19708;
var statearr_19709_19723 = state_19691;
(statearr_19709_19723[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19724 = state_19691;
state_19691 = G__19724;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_19691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_19691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___19712,out))
})();
var state__18242__auto__ = (function (){var statearr_19710 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_19710[(6)] = c__18240__auto___19712);

return statearr_19710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___19712,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19726 = (function (f,ch,meta19727){
this.f = f;
this.ch = ch;
this.meta19727 = meta19727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19728,meta19727__$1){
var self__ = this;
var _19728__$1 = this;
return (new cljs.core.async.t_cljs$core$async19726(self__.f,self__.ch,meta19727__$1));
});

cljs.core.async.t_cljs$core$async19726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19728){
var self__ = this;
var _19728__$1 = this;
return self__.meta19727;
});

cljs.core.async.t_cljs$core$async19726.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19726.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19726.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19726.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19726.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19729 = (function (f,ch,meta19727,_,fn1,meta19730){
this.f = f;
this.ch = ch;
this.meta19727 = meta19727;
this._ = _;
this.fn1 = fn1;
this.meta19730 = meta19730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19731,meta19730__$1){
var self__ = this;
var _19731__$1 = this;
return (new cljs.core.async.t_cljs$core$async19729(self__.f,self__.ch,self__.meta19727,self__._,self__.fn1,meta19730__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19731){
var self__ = this;
var _19731__$1 = this;
return self__.meta19730;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19725_SHARP_){
var G__19732 = (((p1__19725_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19725_SHARP_) : self__.f.call(null,p1__19725_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19732) : f1.call(null,G__19732));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19729.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19727","meta19727",-1553488837,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19726","cljs.core.async/t_cljs$core$async19726",713375762,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19730","meta19730",-890161906,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19729";

cljs.core.async.t_cljs$core$async19729.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19729");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19729.
 */
cljs.core.async.__GT_t_cljs$core$async19729 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19729(f__$1,ch__$1,meta19727__$1,___$2,fn1__$1,meta19730){
return (new cljs.core.async.t_cljs$core$async19729(f__$1,ch__$1,meta19727__$1,___$2,fn1__$1,meta19730));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19729(self__.f,self__.ch,self__.meta19727,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19733 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19733) : self__.f.call(null,G__19733));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19726.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19726.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19727","meta19727",-1553488837,null)], null);
});

cljs.core.async.t_cljs$core$async19726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19726";

cljs.core.async.t_cljs$core$async19726.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19726");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19726.
 */
cljs.core.async.__GT_t_cljs$core$async19726 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19726(f__$1,ch__$1,meta19727){
return (new cljs.core.async.t_cljs$core$async19726(f__$1,ch__$1,meta19727));
});

}

return (new cljs.core.async.t_cljs$core$async19726(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19734 = (function (f,ch,meta19735){
this.f = f;
this.ch = ch;
this.meta19735 = meta19735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19736,meta19735__$1){
var self__ = this;
var _19736__$1 = this;
return (new cljs.core.async.t_cljs$core$async19734(self__.f,self__.ch,meta19735__$1));
});

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19736){
var self__ = this;
var _19736__$1 = this;
return self__.meta19735;
});

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19735","meta19735",1788390166,null)], null);
});

cljs.core.async.t_cljs$core$async19734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19734";

cljs.core.async.t_cljs$core$async19734.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19734");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19734.
 */
cljs.core.async.__GT_t_cljs$core$async19734 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19734(f__$1,ch__$1,meta19735){
return (new cljs.core.async.t_cljs$core$async19734(f__$1,ch__$1,meta19735));
});

}

return (new cljs.core.async.t_cljs$core$async19734(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19737 = (function (p,ch,meta19738){
this.p = p;
this.ch = ch;
this.meta19738 = meta19738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19739,meta19738__$1){
var self__ = this;
var _19739__$1 = this;
return (new cljs.core.async.t_cljs$core$async19737(self__.p,self__.ch,meta19738__$1));
});

cljs.core.async.t_cljs$core$async19737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19739){
var self__ = this;
var _19739__$1 = this;
return self__.meta19738;
});

cljs.core.async.t_cljs$core$async19737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19738","meta19738",1966814974,null)], null);
});

cljs.core.async.t_cljs$core$async19737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19737";

cljs.core.async.t_cljs$core$async19737.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19737");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19737.
 */
cljs.core.async.__GT_t_cljs$core$async19737 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19737(p__$1,ch__$1,meta19738){
return (new cljs.core.async.t_cljs$core$async19737(p__$1,ch__$1,meta19738));
});

}

return (new cljs.core.async.t_cljs$core$async19737(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19741 = arguments.length;
switch (G__19741) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18240__auto___19781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___19781,out){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___19781,out){
return (function (state_19762){
var state_val_19763 = (state_19762[(1)]);
if((state_val_19763 === (7))){
var inst_19758 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
var statearr_19764_19782 = state_19762__$1;
(statearr_19764_19782[(2)] = inst_19758);

(statearr_19764_19782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (1))){
var state_19762__$1 = state_19762;
var statearr_19765_19783 = state_19762__$1;
(statearr_19765_19783[(2)] = null);

(statearr_19765_19783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (4))){
var inst_19744 = (state_19762[(7)]);
var inst_19744__$1 = (state_19762[(2)]);
var inst_19745 = (inst_19744__$1 == null);
var state_19762__$1 = (function (){var statearr_19766 = state_19762;
(statearr_19766[(7)] = inst_19744__$1);

return statearr_19766;
})();
if(cljs.core.truth_(inst_19745)){
var statearr_19767_19784 = state_19762__$1;
(statearr_19767_19784[(1)] = (5));

} else {
var statearr_19768_19785 = state_19762__$1;
(statearr_19768_19785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (6))){
var inst_19744 = (state_19762[(7)]);
var inst_19749 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19744) : p.call(null,inst_19744));
var state_19762__$1 = state_19762;
if(cljs.core.truth_(inst_19749)){
var statearr_19769_19786 = state_19762__$1;
(statearr_19769_19786[(1)] = (8));

} else {
var statearr_19770_19787 = state_19762__$1;
(statearr_19770_19787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (3))){
var inst_19760 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19762__$1,inst_19760);
} else {
if((state_val_19763 === (2))){
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19762__$1,(4),ch);
} else {
if((state_val_19763 === (11))){
var inst_19752 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
var statearr_19771_19788 = state_19762__$1;
(statearr_19771_19788[(2)] = inst_19752);

(statearr_19771_19788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (9))){
var state_19762__$1 = state_19762;
var statearr_19772_19789 = state_19762__$1;
(statearr_19772_19789[(2)] = null);

(statearr_19772_19789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (5))){
var inst_19747 = cljs.core.async.close_BANG_(out);
var state_19762__$1 = state_19762;
var statearr_19773_19790 = state_19762__$1;
(statearr_19773_19790[(2)] = inst_19747);

(statearr_19773_19790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (10))){
var inst_19755 = (state_19762[(2)]);
var state_19762__$1 = (function (){var statearr_19774 = state_19762;
(statearr_19774[(8)] = inst_19755);

return statearr_19774;
})();
var statearr_19775_19791 = state_19762__$1;
(statearr_19775_19791[(2)] = null);

(statearr_19775_19791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (8))){
var inst_19744 = (state_19762[(7)]);
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19762__$1,(11),out,inst_19744);
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
});})(c__18240__auto___19781,out))
;
return ((function (switch__18068__auto__,c__18240__auto___19781,out){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_19776 = [null,null,null,null,null,null,null,null,null];
(statearr_19776[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_19776[(1)] = (1));

return statearr_19776;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_19762){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_19762);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e19777){if((e19777 instanceof Object)){
var ex__18072__auto__ = e19777;
var statearr_19778_19792 = state_19762;
(statearr_19778_19792[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19793 = state_19762;
state_19762 = G__19793;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_19762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_19762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___19781,out))
})();
var state__18242__auto__ = (function (){var statearr_19779 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_19779[(6)] = c__18240__auto___19781);

return statearr_19779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___19781,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19795 = arguments.length;
switch (G__19795) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18240__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto__){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto__){
return (function (state_19858){
var state_val_19859 = (state_19858[(1)]);
if((state_val_19859 === (7))){
var inst_19854 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19860_19898 = state_19858__$1;
(statearr_19860_19898[(2)] = inst_19854);

(statearr_19860_19898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (20))){
var inst_19824 = (state_19858[(7)]);
var inst_19835 = (state_19858[(2)]);
var inst_19836 = cljs.core.next(inst_19824);
var inst_19810 = inst_19836;
var inst_19811 = null;
var inst_19812 = (0);
var inst_19813 = (0);
var state_19858__$1 = (function (){var statearr_19861 = state_19858;
(statearr_19861[(8)] = inst_19835);

(statearr_19861[(9)] = inst_19810);

(statearr_19861[(10)] = inst_19812);

(statearr_19861[(11)] = inst_19813);

(statearr_19861[(12)] = inst_19811);

return statearr_19861;
})();
var statearr_19862_19899 = state_19858__$1;
(statearr_19862_19899[(2)] = null);

(statearr_19862_19899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (1))){
var state_19858__$1 = state_19858;
var statearr_19863_19900 = state_19858__$1;
(statearr_19863_19900[(2)] = null);

(statearr_19863_19900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (4))){
var inst_19799 = (state_19858[(13)]);
var inst_19799__$1 = (state_19858[(2)]);
var inst_19800 = (inst_19799__$1 == null);
var state_19858__$1 = (function (){var statearr_19864 = state_19858;
(statearr_19864[(13)] = inst_19799__$1);

return statearr_19864;
})();
if(cljs.core.truth_(inst_19800)){
var statearr_19865_19901 = state_19858__$1;
(statearr_19865_19901[(1)] = (5));

} else {
var statearr_19866_19902 = state_19858__$1;
(statearr_19866_19902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (15))){
var state_19858__$1 = state_19858;
var statearr_19870_19903 = state_19858__$1;
(statearr_19870_19903[(2)] = null);

(statearr_19870_19903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (21))){
var state_19858__$1 = state_19858;
var statearr_19871_19904 = state_19858__$1;
(statearr_19871_19904[(2)] = null);

(statearr_19871_19904[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (13))){
var inst_19810 = (state_19858[(9)]);
var inst_19812 = (state_19858[(10)]);
var inst_19813 = (state_19858[(11)]);
var inst_19811 = (state_19858[(12)]);
var inst_19820 = (state_19858[(2)]);
var inst_19821 = (inst_19813 + (1));
var tmp19867 = inst_19810;
var tmp19868 = inst_19812;
var tmp19869 = inst_19811;
var inst_19810__$1 = tmp19867;
var inst_19811__$1 = tmp19869;
var inst_19812__$1 = tmp19868;
var inst_19813__$1 = inst_19821;
var state_19858__$1 = (function (){var statearr_19872 = state_19858;
(statearr_19872[(14)] = inst_19820);

(statearr_19872[(9)] = inst_19810__$1);

(statearr_19872[(10)] = inst_19812__$1);

(statearr_19872[(11)] = inst_19813__$1);

(statearr_19872[(12)] = inst_19811__$1);

return statearr_19872;
})();
var statearr_19873_19905 = state_19858__$1;
(statearr_19873_19905[(2)] = null);

(statearr_19873_19905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (22))){
var state_19858__$1 = state_19858;
var statearr_19874_19906 = state_19858__$1;
(statearr_19874_19906[(2)] = null);

(statearr_19874_19906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (6))){
var inst_19799 = (state_19858[(13)]);
var inst_19808 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19799) : f.call(null,inst_19799));
var inst_19809 = cljs.core.seq(inst_19808);
var inst_19810 = inst_19809;
var inst_19811 = null;
var inst_19812 = (0);
var inst_19813 = (0);
var state_19858__$1 = (function (){var statearr_19875 = state_19858;
(statearr_19875[(9)] = inst_19810);

(statearr_19875[(10)] = inst_19812);

(statearr_19875[(11)] = inst_19813);

(statearr_19875[(12)] = inst_19811);

return statearr_19875;
})();
var statearr_19876_19907 = state_19858__$1;
(statearr_19876_19907[(2)] = null);

(statearr_19876_19907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (17))){
var inst_19824 = (state_19858[(7)]);
var inst_19828 = cljs.core.chunk_first(inst_19824);
var inst_19829 = cljs.core.chunk_rest(inst_19824);
var inst_19830 = cljs.core.count(inst_19828);
var inst_19810 = inst_19829;
var inst_19811 = inst_19828;
var inst_19812 = inst_19830;
var inst_19813 = (0);
var state_19858__$1 = (function (){var statearr_19877 = state_19858;
(statearr_19877[(9)] = inst_19810);

(statearr_19877[(10)] = inst_19812);

(statearr_19877[(11)] = inst_19813);

(statearr_19877[(12)] = inst_19811);

return statearr_19877;
})();
var statearr_19878_19908 = state_19858__$1;
(statearr_19878_19908[(2)] = null);

(statearr_19878_19908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (3))){
var inst_19856 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19858__$1,inst_19856);
} else {
if((state_val_19859 === (12))){
var inst_19844 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19879_19909 = state_19858__$1;
(statearr_19879_19909[(2)] = inst_19844);

(statearr_19879_19909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (2))){
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19858__$1,(4),in$);
} else {
if((state_val_19859 === (23))){
var inst_19852 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19880_19910 = state_19858__$1;
(statearr_19880_19910[(2)] = inst_19852);

(statearr_19880_19910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (19))){
var inst_19839 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19881_19911 = state_19858__$1;
(statearr_19881_19911[(2)] = inst_19839);

(statearr_19881_19911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (11))){
var inst_19810 = (state_19858[(9)]);
var inst_19824 = (state_19858[(7)]);
var inst_19824__$1 = cljs.core.seq(inst_19810);
var state_19858__$1 = (function (){var statearr_19882 = state_19858;
(statearr_19882[(7)] = inst_19824__$1);

return statearr_19882;
})();
if(inst_19824__$1){
var statearr_19883_19912 = state_19858__$1;
(statearr_19883_19912[(1)] = (14));

} else {
var statearr_19884_19913 = state_19858__$1;
(statearr_19884_19913[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (9))){
var inst_19846 = (state_19858[(2)]);
var inst_19847 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19858__$1 = (function (){var statearr_19885 = state_19858;
(statearr_19885[(15)] = inst_19846);

return statearr_19885;
})();
if(cljs.core.truth_(inst_19847)){
var statearr_19886_19914 = state_19858__$1;
(statearr_19886_19914[(1)] = (21));

} else {
var statearr_19887_19915 = state_19858__$1;
(statearr_19887_19915[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (5))){
var inst_19802 = cljs.core.async.close_BANG_(out);
var state_19858__$1 = state_19858;
var statearr_19888_19916 = state_19858__$1;
(statearr_19888_19916[(2)] = inst_19802);

(statearr_19888_19916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (14))){
var inst_19824 = (state_19858[(7)]);
var inst_19826 = cljs.core.chunked_seq_QMARK_(inst_19824);
var state_19858__$1 = state_19858;
if(inst_19826){
var statearr_19889_19917 = state_19858__$1;
(statearr_19889_19917[(1)] = (17));

} else {
var statearr_19890_19918 = state_19858__$1;
(statearr_19890_19918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (16))){
var inst_19842 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19891_19919 = state_19858__$1;
(statearr_19891_19919[(2)] = inst_19842);

(statearr_19891_19919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (10))){
var inst_19813 = (state_19858[(11)]);
var inst_19811 = (state_19858[(12)]);
var inst_19818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19811,inst_19813);
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19858__$1,(13),out,inst_19818);
} else {
if((state_val_19859 === (18))){
var inst_19824 = (state_19858[(7)]);
var inst_19833 = cljs.core.first(inst_19824);
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19858__$1,(20),out,inst_19833);
} else {
if((state_val_19859 === (8))){
var inst_19812 = (state_19858[(10)]);
var inst_19813 = (state_19858[(11)]);
var inst_19815 = (inst_19813 < inst_19812);
var inst_19816 = inst_19815;
var state_19858__$1 = state_19858;
if(cljs.core.truth_(inst_19816)){
var statearr_19892_19920 = state_19858__$1;
(statearr_19892_19920[(1)] = (10));

} else {
var statearr_19893_19921 = state_19858__$1;
(statearr_19893_19921[(1)] = (11));

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
}
}
}
}
}
}
});})(c__18240__auto__))
;
return ((function (switch__18068__auto__,c__18240__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18069__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18069__auto____0 = (function (){
var statearr_19894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19894[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18069__auto__);

(statearr_19894[(1)] = (1));

return statearr_19894;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18069__auto____1 = (function (state_19858){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_19858);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e19895){if((e19895 instanceof Object)){
var ex__18072__auto__ = e19895;
var statearr_19896_19922 = state_19858;
(statearr_19896_19922[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19923 = state_19858;
state_19858 = G__19923;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18069__auto__ = function(state_19858){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18069__auto____1.call(this,state_19858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18069__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18069__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto__))
})();
var state__18242__auto__ = (function (){var statearr_19897 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_19897[(6)] = c__18240__auto__);

return statearr_19897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto__))
);

return c__18240__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19925 = arguments.length;
switch (G__19925) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19928 = arguments.length;
switch (G__19928) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19931 = arguments.length;
switch (G__19931) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18240__auto___19978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___19978,out){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___19978,out){
return (function (state_19955){
var state_val_19956 = (state_19955[(1)]);
if((state_val_19956 === (7))){
var inst_19950 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
var statearr_19957_19979 = state_19955__$1;
(statearr_19957_19979[(2)] = inst_19950);

(statearr_19957_19979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (1))){
var inst_19932 = null;
var state_19955__$1 = (function (){var statearr_19958 = state_19955;
(statearr_19958[(7)] = inst_19932);

return statearr_19958;
})();
var statearr_19959_19980 = state_19955__$1;
(statearr_19959_19980[(2)] = null);

(statearr_19959_19980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (4))){
var inst_19935 = (state_19955[(8)]);
var inst_19935__$1 = (state_19955[(2)]);
var inst_19936 = (inst_19935__$1 == null);
var inst_19937 = cljs.core.not(inst_19936);
var state_19955__$1 = (function (){var statearr_19960 = state_19955;
(statearr_19960[(8)] = inst_19935__$1);

return statearr_19960;
})();
if(inst_19937){
var statearr_19961_19981 = state_19955__$1;
(statearr_19961_19981[(1)] = (5));

} else {
var statearr_19962_19982 = state_19955__$1;
(statearr_19962_19982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (6))){
var state_19955__$1 = state_19955;
var statearr_19963_19983 = state_19955__$1;
(statearr_19963_19983[(2)] = null);

(statearr_19963_19983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (3))){
var inst_19952 = (state_19955[(2)]);
var inst_19953 = cljs.core.async.close_BANG_(out);
var state_19955__$1 = (function (){var statearr_19964 = state_19955;
(statearr_19964[(9)] = inst_19952);

return statearr_19964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19955__$1,inst_19953);
} else {
if((state_val_19956 === (2))){
var state_19955__$1 = state_19955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19955__$1,(4),ch);
} else {
if((state_val_19956 === (11))){
var inst_19935 = (state_19955[(8)]);
var inst_19944 = (state_19955[(2)]);
var inst_19932 = inst_19935;
var state_19955__$1 = (function (){var statearr_19965 = state_19955;
(statearr_19965[(10)] = inst_19944);

(statearr_19965[(7)] = inst_19932);

return statearr_19965;
})();
var statearr_19966_19984 = state_19955__$1;
(statearr_19966_19984[(2)] = null);

(statearr_19966_19984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (9))){
var inst_19935 = (state_19955[(8)]);
var state_19955__$1 = state_19955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19955__$1,(11),out,inst_19935);
} else {
if((state_val_19956 === (5))){
var inst_19935 = (state_19955[(8)]);
var inst_19932 = (state_19955[(7)]);
var inst_19939 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19935,inst_19932);
var state_19955__$1 = state_19955;
if(inst_19939){
var statearr_19968_19985 = state_19955__$1;
(statearr_19968_19985[(1)] = (8));

} else {
var statearr_19969_19986 = state_19955__$1;
(statearr_19969_19986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (10))){
var inst_19947 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
var statearr_19970_19987 = state_19955__$1;
(statearr_19970_19987[(2)] = inst_19947);

(statearr_19970_19987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (8))){
var inst_19932 = (state_19955[(7)]);
var tmp19967 = inst_19932;
var inst_19932__$1 = tmp19967;
var state_19955__$1 = (function (){var statearr_19971 = state_19955;
(statearr_19971[(7)] = inst_19932__$1);

return statearr_19971;
})();
var statearr_19972_19988 = state_19955__$1;
(statearr_19972_19988[(2)] = null);

(statearr_19972_19988[(1)] = (2));


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
});})(c__18240__auto___19978,out))
;
return ((function (switch__18068__auto__,c__18240__auto___19978,out){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_19973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19973[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_19973[(1)] = (1));

return statearr_19973;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_19955){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_19955);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e19974){if((e19974 instanceof Object)){
var ex__18072__auto__ = e19974;
var statearr_19975_19989 = state_19955;
(statearr_19975_19989[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19974;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19990 = state_19955;
state_19955 = G__19990;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_19955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_19955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___19978,out))
})();
var state__18242__auto__ = (function (){var statearr_19976 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_19976[(6)] = c__18240__auto___19978);

return statearr_19976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___19978,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19992 = arguments.length;
switch (G__19992) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18240__auto___20058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___20058,out){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___20058,out){
return (function (state_20030){
var state_val_20031 = (state_20030[(1)]);
if((state_val_20031 === (7))){
var inst_20026 = (state_20030[(2)]);
var state_20030__$1 = state_20030;
var statearr_20032_20059 = state_20030__$1;
(statearr_20032_20059[(2)] = inst_20026);

(statearr_20032_20059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (1))){
var inst_19993 = (new Array(n));
var inst_19994 = inst_19993;
var inst_19995 = (0);
var state_20030__$1 = (function (){var statearr_20033 = state_20030;
(statearr_20033[(7)] = inst_19995);

(statearr_20033[(8)] = inst_19994);

return statearr_20033;
})();
var statearr_20034_20060 = state_20030__$1;
(statearr_20034_20060[(2)] = null);

(statearr_20034_20060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (4))){
var inst_19998 = (state_20030[(9)]);
var inst_19998__$1 = (state_20030[(2)]);
var inst_19999 = (inst_19998__$1 == null);
var inst_20000 = cljs.core.not(inst_19999);
var state_20030__$1 = (function (){var statearr_20035 = state_20030;
(statearr_20035[(9)] = inst_19998__$1);

return statearr_20035;
})();
if(inst_20000){
var statearr_20036_20061 = state_20030__$1;
(statearr_20036_20061[(1)] = (5));

} else {
var statearr_20037_20062 = state_20030__$1;
(statearr_20037_20062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (15))){
var inst_20020 = (state_20030[(2)]);
var state_20030__$1 = state_20030;
var statearr_20038_20063 = state_20030__$1;
(statearr_20038_20063[(2)] = inst_20020);

(statearr_20038_20063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (13))){
var state_20030__$1 = state_20030;
var statearr_20039_20064 = state_20030__$1;
(statearr_20039_20064[(2)] = null);

(statearr_20039_20064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (6))){
var inst_19995 = (state_20030[(7)]);
var inst_20016 = (inst_19995 > (0));
var state_20030__$1 = state_20030;
if(cljs.core.truth_(inst_20016)){
var statearr_20040_20065 = state_20030__$1;
(statearr_20040_20065[(1)] = (12));

} else {
var statearr_20041_20066 = state_20030__$1;
(statearr_20041_20066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (3))){
var inst_20028 = (state_20030[(2)]);
var state_20030__$1 = state_20030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20030__$1,inst_20028);
} else {
if((state_val_20031 === (12))){
var inst_19994 = (state_20030[(8)]);
var inst_20018 = cljs.core.vec(inst_19994);
var state_20030__$1 = state_20030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20030__$1,(15),out,inst_20018);
} else {
if((state_val_20031 === (2))){
var state_20030__$1 = state_20030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20030__$1,(4),ch);
} else {
if((state_val_20031 === (11))){
var inst_20010 = (state_20030[(2)]);
var inst_20011 = (new Array(n));
var inst_19994 = inst_20011;
var inst_19995 = (0);
var state_20030__$1 = (function (){var statearr_20042 = state_20030;
(statearr_20042[(7)] = inst_19995);

(statearr_20042[(10)] = inst_20010);

(statearr_20042[(8)] = inst_19994);

return statearr_20042;
})();
var statearr_20043_20067 = state_20030__$1;
(statearr_20043_20067[(2)] = null);

(statearr_20043_20067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (9))){
var inst_19994 = (state_20030[(8)]);
var inst_20008 = cljs.core.vec(inst_19994);
var state_20030__$1 = state_20030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20030__$1,(11),out,inst_20008);
} else {
if((state_val_20031 === (5))){
var inst_19998 = (state_20030[(9)]);
var inst_20003 = (state_20030[(11)]);
var inst_19995 = (state_20030[(7)]);
var inst_19994 = (state_20030[(8)]);
var inst_20002 = (inst_19994[inst_19995] = inst_19998);
var inst_20003__$1 = (inst_19995 + (1));
var inst_20004 = (inst_20003__$1 < n);
var state_20030__$1 = (function (){var statearr_20044 = state_20030;
(statearr_20044[(11)] = inst_20003__$1);

(statearr_20044[(12)] = inst_20002);

return statearr_20044;
})();
if(cljs.core.truth_(inst_20004)){
var statearr_20045_20068 = state_20030__$1;
(statearr_20045_20068[(1)] = (8));

} else {
var statearr_20046_20069 = state_20030__$1;
(statearr_20046_20069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (14))){
var inst_20023 = (state_20030[(2)]);
var inst_20024 = cljs.core.async.close_BANG_(out);
var state_20030__$1 = (function (){var statearr_20048 = state_20030;
(statearr_20048[(13)] = inst_20023);

return statearr_20048;
})();
var statearr_20049_20070 = state_20030__$1;
(statearr_20049_20070[(2)] = inst_20024);

(statearr_20049_20070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (10))){
var inst_20014 = (state_20030[(2)]);
var state_20030__$1 = state_20030;
var statearr_20050_20071 = state_20030__$1;
(statearr_20050_20071[(2)] = inst_20014);

(statearr_20050_20071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20031 === (8))){
var inst_20003 = (state_20030[(11)]);
var inst_19994 = (state_20030[(8)]);
var tmp20047 = inst_19994;
var inst_19994__$1 = tmp20047;
var inst_19995 = inst_20003;
var state_20030__$1 = (function (){var statearr_20051 = state_20030;
(statearr_20051[(7)] = inst_19995);

(statearr_20051[(8)] = inst_19994__$1);

return statearr_20051;
})();
var statearr_20052_20072 = state_20030__$1;
(statearr_20052_20072[(2)] = null);

(statearr_20052_20072[(1)] = (2));


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
});})(c__18240__auto___20058,out))
;
return ((function (switch__18068__auto__,c__18240__auto___20058,out){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_20053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20053[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_20053[(1)] = (1));

return statearr_20053;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_20030){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_20030);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e20054){if((e20054 instanceof Object)){
var ex__18072__auto__ = e20054;
var statearr_20055_20073 = state_20030;
(statearr_20055_20073[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20074 = state_20030;
state_20030 = G__20074;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_20030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_20030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___20058,out))
})();
var state__18242__auto__ = (function (){var statearr_20056 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_20056[(6)] = c__18240__auto___20058);

return statearr_20056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___20058,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20076 = arguments.length;
switch (G__20076) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18240__auto___20146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18240__auto___20146,out){
return (function (){
var f__18241__auto__ = (function (){var switch__18068__auto__ = ((function (c__18240__auto___20146,out){
return (function (state_20118){
var state_val_20119 = (state_20118[(1)]);
if((state_val_20119 === (7))){
var inst_20114 = (state_20118[(2)]);
var state_20118__$1 = state_20118;
var statearr_20120_20147 = state_20118__$1;
(statearr_20120_20147[(2)] = inst_20114);

(statearr_20120_20147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (1))){
var inst_20077 = [];
var inst_20078 = inst_20077;
var inst_20079 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20118__$1 = (function (){var statearr_20121 = state_20118;
(statearr_20121[(7)] = inst_20079);

(statearr_20121[(8)] = inst_20078);

return statearr_20121;
})();
var statearr_20122_20148 = state_20118__$1;
(statearr_20122_20148[(2)] = null);

(statearr_20122_20148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (4))){
var inst_20082 = (state_20118[(9)]);
var inst_20082__$1 = (state_20118[(2)]);
var inst_20083 = (inst_20082__$1 == null);
var inst_20084 = cljs.core.not(inst_20083);
var state_20118__$1 = (function (){var statearr_20123 = state_20118;
(statearr_20123[(9)] = inst_20082__$1);

return statearr_20123;
})();
if(inst_20084){
var statearr_20124_20149 = state_20118__$1;
(statearr_20124_20149[(1)] = (5));

} else {
var statearr_20125_20150 = state_20118__$1;
(statearr_20125_20150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (15))){
var inst_20108 = (state_20118[(2)]);
var state_20118__$1 = state_20118;
var statearr_20126_20151 = state_20118__$1;
(statearr_20126_20151[(2)] = inst_20108);

(statearr_20126_20151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (13))){
var state_20118__$1 = state_20118;
var statearr_20127_20152 = state_20118__$1;
(statearr_20127_20152[(2)] = null);

(statearr_20127_20152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (6))){
var inst_20078 = (state_20118[(8)]);
var inst_20103 = inst_20078.length;
var inst_20104 = (inst_20103 > (0));
var state_20118__$1 = state_20118;
if(cljs.core.truth_(inst_20104)){
var statearr_20128_20153 = state_20118__$1;
(statearr_20128_20153[(1)] = (12));

} else {
var statearr_20129_20154 = state_20118__$1;
(statearr_20129_20154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (3))){
var inst_20116 = (state_20118[(2)]);
var state_20118__$1 = state_20118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20118__$1,inst_20116);
} else {
if((state_val_20119 === (12))){
var inst_20078 = (state_20118[(8)]);
var inst_20106 = cljs.core.vec(inst_20078);
var state_20118__$1 = state_20118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20118__$1,(15),out,inst_20106);
} else {
if((state_val_20119 === (2))){
var state_20118__$1 = state_20118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20118__$1,(4),ch);
} else {
if((state_val_20119 === (11))){
var inst_20086 = (state_20118[(10)]);
var inst_20082 = (state_20118[(9)]);
var inst_20096 = (state_20118[(2)]);
var inst_20097 = [];
var inst_20098 = inst_20097.push(inst_20082);
var inst_20078 = inst_20097;
var inst_20079 = inst_20086;
var state_20118__$1 = (function (){var statearr_20130 = state_20118;
(statearr_20130[(7)] = inst_20079);

(statearr_20130[(8)] = inst_20078);

(statearr_20130[(11)] = inst_20096);

(statearr_20130[(12)] = inst_20098);

return statearr_20130;
})();
var statearr_20131_20155 = state_20118__$1;
(statearr_20131_20155[(2)] = null);

(statearr_20131_20155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (9))){
var inst_20078 = (state_20118[(8)]);
var inst_20094 = cljs.core.vec(inst_20078);
var state_20118__$1 = state_20118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20118__$1,(11),out,inst_20094);
} else {
if((state_val_20119 === (5))){
var inst_20086 = (state_20118[(10)]);
var inst_20079 = (state_20118[(7)]);
var inst_20082 = (state_20118[(9)]);
var inst_20086__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20082) : f.call(null,inst_20082));
var inst_20087 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20086__$1,inst_20079);
var inst_20088 = cljs.core.keyword_identical_QMARK_(inst_20079,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20089 = ((inst_20087) || (inst_20088));
var state_20118__$1 = (function (){var statearr_20132 = state_20118;
(statearr_20132[(10)] = inst_20086__$1);

return statearr_20132;
})();
if(cljs.core.truth_(inst_20089)){
var statearr_20133_20156 = state_20118__$1;
(statearr_20133_20156[(1)] = (8));

} else {
var statearr_20134_20157 = state_20118__$1;
(statearr_20134_20157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (14))){
var inst_20111 = (state_20118[(2)]);
var inst_20112 = cljs.core.async.close_BANG_(out);
var state_20118__$1 = (function (){var statearr_20136 = state_20118;
(statearr_20136[(13)] = inst_20111);

return statearr_20136;
})();
var statearr_20137_20158 = state_20118__$1;
(statearr_20137_20158[(2)] = inst_20112);

(statearr_20137_20158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (10))){
var inst_20101 = (state_20118[(2)]);
var state_20118__$1 = state_20118;
var statearr_20138_20159 = state_20118__$1;
(statearr_20138_20159[(2)] = inst_20101);

(statearr_20138_20159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20119 === (8))){
var inst_20086 = (state_20118[(10)]);
var inst_20078 = (state_20118[(8)]);
var inst_20082 = (state_20118[(9)]);
var inst_20091 = inst_20078.push(inst_20082);
var tmp20135 = inst_20078;
var inst_20078__$1 = tmp20135;
var inst_20079 = inst_20086;
var state_20118__$1 = (function (){var statearr_20139 = state_20118;
(statearr_20139[(14)] = inst_20091);

(statearr_20139[(7)] = inst_20079);

(statearr_20139[(8)] = inst_20078__$1);

return statearr_20139;
})();
var statearr_20140_20160 = state_20118__$1;
(statearr_20140_20160[(2)] = null);

(statearr_20140_20160[(1)] = (2));


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
});})(c__18240__auto___20146,out))
;
return ((function (switch__18068__auto__,c__18240__auto___20146,out){
return (function() {
var cljs$core$async$state_machine__18069__auto__ = null;
var cljs$core$async$state_machine__18069__auto____0 = (function (){
var statearr_20141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20141[(0)] = cljs$core$async$state_machine__18069__auto__);

(statearr_20141[(1)] = (1));

return statearr_20141;
});
var cljs$core$async$state_machine__18069__auto____1 = (function (state_20118){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_20118);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e20142){if((e20142 instanceof Object)){
var ex__18072__auto__ = e20142;
var statearr_20143_20161 = state_20118;
(statearr_20143_20161[(5)] = ex__18072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20162 = state_20118;
state_20118 = G__20162;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
cljs$core$async$state_machine__18069__auto__ = function(state_20118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18069__auto____1.call(this,state_20118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18069__auto____0;
cljs$core$async$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18069__auto____1;
return cljs$core$async$state_machine__18069__auto__;
})()
;})(switch__18068__auto__,c__18240__auto___20146,out))
})();
var state__18242__auto__ = (function (){var statearr_20144 = (f__18241__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18241__auto__.cljs$core$IFn$_invoke$arity$0() : f__18241__auto__.call(null));
(statearr_20144[(6)] = c__18240__auto___20146);

return statearr_20144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18242__auto__);
});})(c__18240__auto___20146,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
