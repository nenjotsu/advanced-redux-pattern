(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{275:function(e,t,n){e.exports=n(668)},665:function(e,t,n){},668:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getSampleModuleEpic",function(){return v}),n.d(a,"getSampleModuleSuccess",function(){return S}),n.d(a,"getSampleModuleCancel",function(){return C}),n.d(a,"getSampleModule",function(){return E}),n.d(a,"clearData",function(){return A});var r,c,o=n(1),u=n.n(o),l=n(8),i=n.n(l),s=n(90),p=n(52),d=n.n(p),m=n(28),f=n.n(m),b=n(68),y=n(27),h=n(91),j=n(35),g=n(36),M=n(671),O=n(672),v=Object(O.a)("[sample_module_name] Get Epic"),S=Object(O.a)("[sample_module_name] Get Success"),C=Object(O.a)("[sample_module_name] Get Cancel"),E=Object(O.a)("[sample_module_name] Get"),A=Object(O.a)("[sample_module_name] Clear Data"),x=Object(M.a)((r={},Object(j.a)(r,E,function(e,t){return console.log("action.payload",t.payload),Object(g.a)({},e,{sampleModuleList:t.payload})}),Object(j.a)(r,A,function(e,t){return Object(g.a)({},e,{sampleModuleList:[]})}),r),{candidatesCenterList:{pageSize:10,pageCurrent:0},candidateStatus:[],auctionIdsAssignedToMe:[],candidateNamesByClient:[],keyword:""}),_=Object(O.a)("[ui] Show spinner"),k=Object(O.a)("[ui] Hide spinner"),w=Object(M.a)((c={},Object(j.a)(c,_,function(e){return console.log("show spinner count"),Object(g.a)({},e,{isLoading:!0})}),Object(j.a)(c,k,function(e){return console.log("hide spinner count"),Object(g.a)({},e,{isLoading:!1})}),c),{isLoading:!1}),L=Object(y.c)({ui:w,sampleModule:x}),I=n(134),T=n.n(I),N=n(43),P=Object(O.a)("[error] api"),D=function(e){return e.scan(function(e,t,n){if(n<2)return n;throw t}).delay(5e3)},G={"Content-Type":"application/json"},W=(n(293),[function(e){return e.ofType("[app] API Get Ajax Request").mergeMap(function(t){var n=t.payload,a=n.url,r=n.onSuccess,c=n.onCancel,o=n.body,u=null===o?"":"?".concat(T.a.stringify(o));return N.ajax.get("".concat(a).concat(u),G).retryWhen(D).mergeMap(function(e){return[r(e.response)]}).catch(function(e){return[P(e),k()]}).startWith(_()).takeUntil(e.ofType(c))})},function(e){return e.ofType("[app] API Patch Ajax Request").mergeMap(function(t){var n=t.payload,a=n.url,r=n.onSuccess,c=n.onCancel,o=n.body;return N.ajax.patch(a,o,G).retryWhen(D).mergeMap(function(e){return[r(e.response)]}).catch(function(e){return[P(e),k()]}).startWith(_()).takeUntil(e.ofType(c))})},function(e){return e.ofType("[app] API Post Ajax Request").mergeMap(function(t){var n=t.payload,a=n.url,r=n.onSuccess,c=n.onCancel,o=n.body;return N.ajax.post(a,o,G).retryWhen(D).mergeMap(function(e){return[r(e.response)]}).catch(function(e){return[P(e),k()]}).startWith(_()).takeUntil(e.ofType(c))})},function(e){return e.ofType("[app] API Put Ajax Request").mergeMap(function(t){var n=t.payload,a=n.url,r=n.onSuccess,c=n.onCancel,o=n.body;return N.ajax.post(a,o,G).retryWhen(D).mergeMap(function(e){return[r(e.response)]}).catch(function(e){return[P(e),k()]}).startWith(_()).takeUntil(e.ofType(c))})},function(e){return e.ofType("[app] API Put Ajax Request").mergeMap(function(t){var n=t.payload,a=n.url,r=n.onSuccess,c=n.onCancel,o=n.body;return N.ajax.delete("".concat(a,"?").concat(T.a.stringify(o)),G).retryWhen(D).mergeMap(function(e){return[r(e.response)]}).catch(function(e){return[P(e),k()]}).startWith(_()).takeUntil(e.ofType(c))})}]),R=function(e,t){return h.a.apply(void 0,Object(b.a)(W))(e,t).catch(function(e,t){return console.error(e),t})},q="https://jsonplaceholder.typicode.com",U={posts:"".concat(q,"/posts"),comments:"".concat(q,"/comments")},z=function(e){var t=e.dispatch;return function(e){return function(n){return Array.isArray(n)?n.filter(Boolean).map(t):e(n)}}},B=Object(O.a)("[app] API Get Ajax Request"),J=[function(e){var t=e.dispatch;return function(e){return function(n){e(n),"[sample_module_name] Get Epic"===n.type&&t([_(),B({url:U.posts,body:null,onCancel:"[sample_module_name] Get Cancel",onSuccess:S})])}}},function(e){var t=e.dispatch;return function(e){return function(n){e(n),"[sample_module_name] Get Success"===n.type&&t([E(n.payload),k()])}}},function(e){var t=e.dispatch;return function(e){return function(n){e(n),"[sample_module_name] Get Cancel"===n.type&&t(k())}}}],H=[function(e){var t=e.dispatch;return function(e){return function(n){e(n),"[error] api"===n.type&&console.error("error",n.payload,t)}}}],F=y.d,K=function(){try{var e=sessionStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Q=Object(h.b)(R),V=Object(y.e)(L,K,F(y.a.apply(void 0,[Q,z].concat(Object(b.a)(J),Object(b.a)(H))))),X=n(264),Y=n(265),Z=n(273),$=n(266),ee=n(274),te=n(92),ne=n.n(te),ae=n(131),re=n.n(ae),ce=n(267),oe=n.n(ce),ue=n(0),le=n.n(ue),ie={router:le.a.shape({history:le.a.object.isRequired})},se=(le.a.object.isRequired,le.a.array,le.a.bool,function(e){function t(){var e,n;Object(X.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Z.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).init=function(){console.log("Component Mounted")},n.getSampleModuleData=function(){n.props.reduxAction.getSampleModuleEpic()},n.getSampleModuleDataCancel=function(){oe.a.warning("request has been cancelled"),n.props.reduxAction.getSampleModuleCancel()},n.clearData=function(){n.props.reduxAction.clearData()},n}return Object(ee.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){this.props.reduxAction.getSampleModuleCancel()}},{key:"render",value:function(){var e=this.props,t=e.sampleModuleList,n=e.isLoading;return console.log(t,n),u.a.createElement("main",{className:"sample-module-section"},u.a.createElement("h4",null,"Sample Module"),u.a.createElement(ne.a,{className:"btn",onClick:this.clearData},u.a.createElement(f.a,{type:"close-circle"}),"Clear Data"),u.a.createElement(ne.a,{className:"btn",onClick:this.getSampleModuleData},"Get"),u.a.createElement(ne.a,{className:"btn",onClick:this.getSampleModuleDataCancel},"Cancel Now"),n?u.a.createElement("div",{className:"spin-container"},u.a.createElement(re.a,null)):u.a.createElement(d.a,{className:"data-list",size:"small",bordered:!0,dataSource:t,renderItem:function(e){return u.a.createElement(d.a.Item,null,e.title)}}))}}]),t}(o.Component));se.defaultProps={sampleModuleList:[],isLoading:[]},se.contextTypes=ie;var pe=se;var de=Object(s.b)(function(e){return{isLoading:e.ui.isLoading,sampleModuleList:e.sampleModule.sampleModuleList}},function(e){return{reduxAction:Object(y.b)(Object(g.a)({},a),e),dispatch:e}})(pe),me=(n(663),n(665),["Scalable","Reusable","Maintainable","Multiple dispatch"]);var fe=document.getElementById("root");i.a.render(u.a.createElement(s.a,{store:V},u.a.createElement(function(){return u.a.createElement("div",{className:"App"},u.a.createElement("h1",null,"Advanced Redux Pattern"),u.a.createElement("p",null,"Using redux, redux-observables, rxjs, react-actions, middleware, ant-design"),u.a.createElement(d.a,{size:"small",bordered:!0,dataSource:me,renderItem:function(e){return u.a.createElement(d.a.Item,null,u.a.createElement(f.a,{className:"icon",type:"check-circle",theme:"outlined"}),e)}}),u.a.createElement("div",{className:"button-list"},u.a.createElement(de,null)))},null)),fe)}},[[275,2,1]]]);
//# sourceMappingURL=main.42576fd9.chunk.js.map