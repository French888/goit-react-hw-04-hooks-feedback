(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),i=c.n(r),s=c(3),o=c(0);function l(e){var t=e.title,c=e.children;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:t}),c]})}var j=c(2),d=c.n(j),b=c(5),u=c.n(b);function h(e){var t=e.options,c=e.onLeaveFeedback;return Object(o.jsx)("ul",{className:u.a.list,children:t.map((function(e){return Object(o.jsx)("li",{className:u.a.item,children:Object(o.jsx)("button",{name:e,onClick:c,children:e})},e)}))})}function O(e){var t=e.bad,c=e.neutral,n=e.good,a=e.total,r=e.positivePercentage;return Object(o.jsx)(o.Fragment,{children:a>0?Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Good:",n]}),Object(o.jsxs)("li",{children:["Neutral:",c]}),Object(o.jsxs)("li",{children:["Bad:",t]}),Object(o.jsxs)("li",{children:["Total:",a]}),Object(o.jsxs)("li",{children:["PositivePercentage:",r," %"]})]}):Object(o.jsx)("p",{children:"Here is nothing..."})})}h.protoTypes={options:d.a.arrayOf(d.a.string),onLeaveFeedback:d.a.array};var x=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),i=Object(s.a)(r,2),j=i[0],d=i[1],b=Object(n.useState)(0),u=Object(s.a)(b,2),x=u[0],p=u[1],f=function(){return c+j+x};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)(l,{title:"Please leave your feedback",children:Object(o.jsx)(h,{options:["good","bad","neutral"],onLeaveFeedback:function(e){switch(e.target.name){case"good":a((function(e){return e+1}));break;case"neutral":p((function(e){return e+1}));break;case"bad":d((function(e){return e+1}));break;default:return}}})}),Object(o.jsx)(l,{title:"Statistics",children:Object(o.jsx)(O,{good:c,neutral:x,bad:j,total:f(),positivePercentage:function(){var e=f();return e?Math.round(c/e*100):0}()})})]})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={list:"Feedback_list__1suAW",item:"Feedback_item__2XgQu"}}},[[14,1,2]]]);
//# sourceMappingURL=main.693cbabd.chunk.js.map