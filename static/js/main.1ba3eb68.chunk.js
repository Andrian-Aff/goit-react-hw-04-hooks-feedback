(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={statistics:"Statistics_statistics__1KPI6",title:"Statistics_title__2OZNh",item:"Statistics_item__15aUi",value:"Statistics_value__35e8M"}},,,,function(e,t,a){e.exports={container:"Section_container__zeXU5",title:"Section_title__2Yld5"}},,function(e,t,a){e.exports={button:"Button_button__2zy6E"}},function(e,t,a){e.exports={buttonsBox:"FeedbackOptions_buttonsBox__yArC8"}},function(e,t,a){e.exports={message:"Notification_message__2VjQw"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(6),i=a.n(n),r=(a(14),a(3)),l=a(5),o=a.n(l),u=a(0);function b(e){var t=e.title,a=e.children;return Object(u.jsxs)("div",{className:o.a.container,children:[t&&Object(u.jsx)("h3",{className:o.a.title,children:t}),a]})}var j=a(1),d=a.n(j);function m(e){var t=e.good,a=e.neutral,s=e.bad,c=e.total,n=e.positivePercentage;return Object(u.jsxs)("div",{className:d.a.statistics,children:[Object(u.jsx)("h3",{className:d.a.title,children:" Statistics "}),Object(u.jsxs)("ul",{className:d.a.list,children:[Object(u.jsxs)("li",{className:d.a.item,children:["Good:",Object(u.jsx)("span",{className:d.a.value,children:t})]}),Object(u.jsxs)("li",{className:d.a.item,children:["Neutral:",Object(u.jsx)("span",{className:d.a.value,children:a})]}),Object(u.jsxs)("li",{className:d.a.item,children:["Bad:",Object(u.jsx)("span",{className:d.a.value,children:s})]}),Object(u.jsxs)("li",{className:d.a.item,children:["Total:",Object(u.jsx)("span",{className:d.a.value,children:c})]}),Object(u.jsxs)("li",{className:d.a.item,children:["Positive feedback:",Object(u.jsxs)("span",{className:d.a.value,children:[isNaN(n)?0:n,"%"]})]})]}),Object(u.jsx)("p",{className:d.a.massage})]})}var x=a(7),O=a.n(x);function h(e){var t=e.labelBtn,a=e.onLeaveFeedback;return Object(u.jsx)("button",{className:"".concat(O.a.button),type:"button",onClick:function(){return a()},children:t})}var v=a(8),f=a.n(v);function _(e){var t=e.options,a=e.onLeaveFeedback;return Object(u.jsx)("div",{className:f.a.buttonsBox,children:t.map((function(e){return Object(u.jsx)(h,{labelBtn:e,onLeaveFeedback:function(){return a(e)}},e)}))})}var N=a(9),p=a.n(N);function g(e){var t=e.message;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{className:p.a.message,children:t})})}function k(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(0),i=Object(r.a)(n,2),l=i[0],o=i[1],j=Object(s.useState)(0),d=Object(r.a)(j,2),x=d[0],O=d[1],h=a+l+x,v=Math.round(100*a/(a+x));return Object(u.jsxs)(b,{title:"Please leave feedback",children:[Object(u.jsx)(_,{options:["good","bad","neutral"],onLeaveFeedback:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":o((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:return}}}),h?Object(u.jsx)(m,{good:a,neutral:l,bad:x,total:h,positivePercentage:v}):Object(u.jsx)(g,{message:"No feedback given"})]})}i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.1ba3eb68.chunk.js.map