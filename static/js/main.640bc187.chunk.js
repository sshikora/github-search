(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addRequest",(function(){return h})),n.d(a,"addSuccess",(function(){return E})),n.d(a,"addFail",(function(){return b}));var r={};n.r(r),n.d(r,"getReposByUsername",(function(){return R}));var s={};n.r(s),n.d(s,"counter",(function(){return a})),n.d(s,"github",(function(){return r}));var u=n(0),c=n.n(u),o=n(14),l=n.n(o),i=(n(22),n(2)),f=n(3);function m(e,t,n){e.state=Object(f.a)(Object(f.a)({},e.state),t),e.listeners.forEach((function(t){t.run(e.state)})),n&&n()}function p(e,t,n,a){var r=t.useState(Object.create(null)),s=Object(i.a)(r,2)[1],u=n?n(e.state):e.state,c=t.useMemo((function(){return a?a(e.actions):e.actions}),[a,e.actions]);return t.useEffect((function(){var t={oldState:{}};return t.run=n?function(e){var a=n(e);a!==t.oldState&&(t.oldState=a,s(a))}:s,e.listeners.push(t),t.run(e.state),function(){e.listeners=e.listeners.filter((function(e){return e!==t}))}}),[]),[u,c]}var d=function(e,t,n,a){var r={state:t,listeners:[]};return r.setState=m.bind(null,r),r.actions=function e(t,n){var a={};return Object.keys(n).forEach((function(r){"function"===typeof n[r]&&(a[r]=n[r].bind(null,t)),"object"===typeof n[r]&&(a[r]=e(t,n[r]))})),a}(r,n),a&&a(r),p.bind(null,r,e)},h=function(e){var t=Object(f.a)({},e.state.counters);t.requests++,e.setState({counters:t})},E=function(e){var t=Object(f.a)({},e.state.counters);t.success++,e.setState({counters:t})},b=function(e){var t=Object(f.a)({},e.state.counters);t.fail++,e.setState({counters:t})},v=n(4),S=n.n(v),O=n(15),g=n(16),j=n.n(g),R=function(){var e=Object(O.a)(S.a.mark((function e(t,n){var a,r,s,u,c,o,l,i,f=arguments;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>2&&void 0!==f[2]?f[2]:j.a,t.actions.counter.addRequest(),r="LOADING",t.setState({status:r}),e.prev=4,e.next=7,a.get("https://api.github.com/users/".concat(n,"/repos"));case 7:s=e.sent,u=s.data,c=0==u.length,o=c?"EMPTY":"SUCCESS",t.setState({repos:u,status:o}),t.actions.counter.addSuccess(),e.next=21;break;case 15:e.prev=15,e.t0=e.catch(4),l=e.t0.response&&404===e.t0.response.status,i=l?"NOT_FOUND":"ERROR",t.setState({status:i}),t.actions.counter.addFail();case 21:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t,n){return e.apply(this,arguments)}}(),N=d(c.a,{counters:{requests:0,success:0,fail:0},status:"INITIAL",repos:[]},s),y=function(){var e=N(),t=Object(i.a)(e,2),n=t[0],a=(t[1],n.counters),r=a.requests,s=a.success,u=a.fail;return c.a.createElement("p",null,r," Requests ",c.a.createElement("br",null)," ",c.a.createElement("span",{className:"success"},s," Success")," and"," ",c.a.createElement("span",{className:"fail"},u," Fails"))},k=function(){var e=N(),t=Object(i.a)(e,2),n=(t[0],t[1]);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.username.value;n.github.getReposByUsername(t)}},c.a.createElement("input",{name:"username",placeholder:"username",autoComplete:"off"}),c.a.createElement("button",{type:"submit"},"Search"))},U=function(){var e=N(),t=Object(i.a)(e,2),n=t[0],a=(t[1],n.status),r=n.repos;return c.a.createElement(c.a.Fragment,null,"LOADING"===a&&c.a.createElement("h4",null,"Loading..."),"SUCCESS"===a&&function(e){return e.map((function(e){return c.a.createElement("a",{key:e.id,href:e.html_url,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("h3",null,e.name))}))}(r),"EMPTY"===a&&c.a.createElement("h4",null,"This user have zero repos"),"NOT_FOUND"===a&&c.a.createElement("h4",null,"404 - User not found"),"ERROR"===a&&c.a.createElement("h4",null,"Connection Error"))};function q(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Search GitHub Repos"),c.a.createElement(k,null),c.a.createElement(y,null),c.a.createElement(U,null))}var C=document.getElementById("root");l.a.render(c.a.createElement(q,null),C)}},[[17,1,2]]]);
//# sourceMappingURL=main.640bc187.chunk.js.map