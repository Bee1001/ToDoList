(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(12),o=c.n(s),r=(c(19),c(14)),i=c(4),l=(c(20),c(21),c(0));var j=function(){return Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsx)("div",{className:"navbar-title",children:Object(l.jsx)("span",{children:"To Do List"})})})},d=c(3);c(23);var b=function(e){var t=Object(n.useState)({task:"",level:0,completed:!1}),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(l.jsx)("div",{className:"todo-form-container",children:Object(l.jsx)("div",{className:"todo-form-wrapper",children:Object(l.jsxs)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault();var c=Date.now().toString(36)+Math.random().toString(36).substr(2);a.task.trim()&&(e.addToDo(Object(d.a)(Object(d.a)({},a),{},{id:c,date:(new Date).toDateString()})),s(Object(d.a)(Object(d.a)({},a),{},{task:""})))},children:[Object(l.jsxs)("div",{className:"todo-form-input",children:[Object(l.jsx)("label",{children:"Task"}),Object(l.jsx)("input",{type:"text",name:"task",value:a.task,onChange:function(e){s(Object(d.a)(Object(d.a)({},a),{},{task:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"todo-form-input",children:[Object(l.jsx)("label",{children:"Level"}),Object(l.jsxs)("select",{className:"todo-form-select",name:"level",value:a.level,onChange:function(e){s(Object(d.a)(Object(d.a)({},a),{},{level:e.target.value}))},children:[Object(l.jsx)("option",{value:0,children:"Necessary"}),Object(l.jsx)("option",{value:1,children:"Important"})]})]}),Object(l.jsx)("button",{className:"btn-add",type:"submit",children:"Add Task"}),Object(l.jsx)("button",{className:"btn-cancel",children:"Cancel"})]})})})},u=c(8),O=c(9);c(31);var v=function(e){return Object(l.jsxs)("div",{className:"todo-box",children:[Object(l.jsx)("div",{className:"todo-index",children:Object(l.jsx)("span",{children:e.index+1})}),Object(l.jsx)("div",{className:"todo-content",children:Object(l.jsx)("span",{children:e.task})}),Object(l.jsx)("div",{className:"todo-level",children:Object(l.jsx)("span",{children:0===e.level?"Necessary":"Important"})}),Object(l.jsx)("div",{className:"todo-time",children:Object(l.jsx)("span",{children:e.date})}),Object(l.jsx)("div",{className:"todo-action",children:Object(l.jsx)("button",{className:"btn-delete",onClick:function(){e.removeToDo(e.id)},children:Object(l.jsx)(u.a,{icon:O.b})})})]})};c(32);var h=function(e){var t=e.todos.map((function(t,c){return Object(l.jsx)(v,{id:t.id,index:c,task:t.task,level:t.level,date:t.date,removeToDo:e.removeToDo},t.id)}));return Object(l.jsx)("div",{className:"todo-list-container",children:Object(l.jsx)("div",{className:"todo-list-wrapper",children:t.length?t:"No task available"})})};c(33);var m=function(e){var t=Object(n.useRef)("");return Object(l.jsx)("div",{className:"search-container",children:Object(l.jsxs)("form",{className:"search-form",children:[Object(l.jsx)("input",{ref:t,className:"search",placeholder:"Search here...",onChange:function(){e.searchToDo(t.current.value)}}),Object(l.jsx)("button",{className:"btn-search",children:Object(l.jsx)(u.a,{icon:O.a})})]})})};var x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),d=o[0],u=o[1],O=Object(n.useState)(""),v=Object(i.a)(O,2),x=v[0],f=v[1],p=Object(n.useState)([]),N=Object(i.a)(p,2),g=N[0],k=N[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todo-list"));e&&a(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todo-list",JSON.stringify(c))}),[c]);var S=!0===d?Object(l.jsx)(b,{addToDo:function(e){a([e].concat(Object(r.a)(c)))}}):"";return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"taskheader-container",children:Object(l.jsxs)("div",{className:"taskheader-wrapper",children:[Object(l.jsx)("div",{className:"control-container",children:Object(l.jsx)("button",{className:"btn-add",onClick:function(){u(!d)},children:"Add task"})}),Object(l.jsx)(m,{searchToDo:function(e){if(console.log(e),f(e),""===e)return c;var t=c.filter((function(t){return Object.values(t).join(" ").toLowerCase().includes(e.toLowerCase())}));k(t)}})]})}),S,Object(l.jsx)(h,{todos:x<1?c:g,removeToDo:function(e){a(c.filter((function(t){return t.id!==e})))}})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[34,1,2]]]);
//# sourceMappingURL=main.f52dc0e5.chunk.js.map