(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n.n(c),s=n(3),r=n(5),a=n(6),d=n(8),i=n(7),l=n(1),u=n.n(l),p=(n(13),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:[]},e.addGood=function(t){e.setState((function(e){var n=e.selectedGood;return{selectedGood:[].concat(Object(s.a)(n),[t])}}))},e.removeGood=function(t){e.setState((function(e){var n=e.selectedGood;return{selectedGood:Object(s.a)(n.filter((function(e){return e!==t})))}}))},e.resetGoods=function(){e.setState({selectedGood:[]})},e.changeChoice=function(t){e.state.selectedGood.some((function(e){return e===t}))?e.removeGood(t):e.addGood(t)},e.titleInfo=function(e){var t="";return e.length<1&&(t="No goods selected..."),1===e.length&&(t=" is selected."),e.length>1&&(t=" are selected"),t},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"App__title",children:[Object(p.jsxs)("h1",{className:"App__text",children:[Object(p.jsx)("b",{children:"Selected good: "}),t.join(", "),this.titleInfo(t)]}),Object(p.jsx)("button",{type:"button",className:t.length<1?"App__button--reset-off":"btn btn-danger",onClick:function(){e.resetGoods()},children:"reset"})]}),Object(p.jsx)("section",{className:"App__list",children:Object(p.jsx)("div",{className:"App__cards",children:b.map((function(n){return Object(p.jsxs)("li",{className:"App__card ".concat(t.some((function(e){return e===n}))?"App__card-select":"App__card"),children:[Object(p.jsx)("p",{children:n}),Object(p.jsx)("button",{type:"button",className:"App__button btn btn-primary",onClick:function(){e.changeChoice(n)},children:t.some((function(e){return e===n}))?"remove":"add"})]},n)}))})})]})}}]),n}(u.a.Component);o.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a9c5a5a8.chunk.js.map