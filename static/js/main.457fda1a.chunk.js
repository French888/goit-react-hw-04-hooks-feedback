(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),s=c.n(r),i=c(3),o=c(0);function j(e){var t=e.title,c=e.children;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:t}),c]})}function l(e){var t=e.massage;return Object(o.jsx)("p",{children:t})}var d=c(2),b=c.n(d),u=c(5),h=c.n(u);function O(e){var t=e.options,c=e.onLeaveFeedback;return Object(o.jsx)("ul",{className:h.a.list,children:t.map((function(e){return Object(o.jsx)("li",{className:h.a.item,children:Object(o.jsx)("button",{name:e,onClick:c,children:e})},e)}))})}function x(e){var t=e.bad,c=e.neutral,n=e.good,a=e.total,r=e.positivePercentage;return Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Good:",n]}),Object(o.jsxs)("li",{children:["Neutral:",c]}),Object(o.jsxs)("li",{children:["Bad:",t]}),Object(o.jsxs)("li",{children:["Total:",a]}),Object(o.jsxs)("li",{children:["PositivePercentage:",r," %"]})]})})}O.protoTypes={options:b.a.arrayOf(b.a.string),onLeaveFeedback:b.a.array};var f=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(i.a)(r,2),d=s[0],b=s[1],u=Object(n.useState)(0),h=Object(i.a)(u,2),f=h[0],p=h[1],v=function(){return c+d+f};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)(j,{title:"Please leave your feedback",children:Object(o.jsx)(O,{options:["good","bad","neutral"],onLeaveFeedback:function(e){switch(e.target.name){case"good":a((function(e){return e+1}));break;case"neutral":p((function(e){return e+1}));break;case"bad":b((function(e){return e+1}));break;default:return}}})}),v()>0?Object(o.jsx)(j,{title:"Statistics",children:Object(o.jsx)(x,{good:c,neutral:f,bad:d,total:v(),positivePercentage:function(){var e=v();return e?Math.round(c/e*100):0}()})}):Object(o.jsx)(l,{massage:"No feedback given"})]})})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={list:"Feedback_list__1suAW",item:"Feedback_item__2XgQu"}}},[[14,1,2]]]);
//# sourceMappingURL=main.457fda1a.chunk.js.map