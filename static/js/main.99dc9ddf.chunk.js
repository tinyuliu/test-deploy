(this["webpackJsonptest-to-do-list"]=this["webpackJsonptest-to-do-list"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(6),s=n.n(i),r=(n(12),n(7)),u=n(2),a=n(0);var j=function(t){var e=Object(c.useState)(!1),n=Object(u.a)(e,2),o=n[0],i=n[1],s=Object(c.useState)(!1),r=Object(u.a)(s,2),j=r[0],d=r[1];return Object(a.jsxs)("div",{className:"todoItem",onMouseOver:function(){d(!0)},onMouseOut:function(){d(!1)},children:[Object(a.jsx)("li",{style:{textDecoration:o&&"line-through"},onClick:function(t){i(!o)},children:t.toDoItem}),Object(a.jsx)("button",{onClick:function(){t.onCheck(t.id)},style:{display:!j&&"none"},children:"X"})]})};var d=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),o=n[0],i=n[1];return Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("input",{onChange:function(t){var e=t.target.value;i(e)},type:"text",value:o}),Object(a.jsx)("button",{onClick:function(){t.onAdd(o),i("")},children:Object(a.jsx)("span",{children:"Add"})})]})};var l=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1];function i(t){o((function(e){return e.filter((function(e,n){return n!==t}))}))}return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"heading",children:Object(a.jsx)("h1",{children:"To-Do List"})}),Object(a.jsx)(d,{onAdd:function(t){o((function(e){return[].concat(Object(r.a)(e),[t])}))}}),Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:n.map((function(t,e){return Object(a.jsx)(j,{id:e,onCheck:i,toDoItem:t},e)}))})})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),i(t),s(t)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.99dc9ddf.chunk.js.map