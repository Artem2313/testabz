(this.webpackJsonptestabz=this.webpackJsonptestabz||[]).push([[7],{71:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s.n(a),n=s(67),c=function(e){var t=e.users,s=e.handleIncreaseUsers,a=e.countUsers,c=e.totalUsers,i=e.fetchUsersError;return r.a.createElement("section",{className:"users-section"},r.a.createElement("div",{className:"users-section__container"},r.a.createElement("div",{className:"users-section__header"},r.a.createElement("h1",null,"Our cheerful users"),r.a.createElement("p",null,"Attention! Sorting users by registration date")),r.a.createElement("ul",{className:"users-section__list"},i&&r.a.createElement("div",{style:{color:"red"}},i),t.map((function(e){return r.a.createElement("li",{className:"users-section__profile-card",key:e.id},r.a.createElement("div",{className:"users-section__user-container"},r.a.createElement("img",{className:"users-section__user-image",src:e.photo,alt:e.name,"data-tip":e.name}),r.a.createElement("h2",{className:"users-section__user-name","data-tip":e.name},e.name),r.a.createElement("p",{className:"users-section__user-position","data-tip":e.position},e.position),r.a.createElement("p",{className:"users-section__user-email","data-tip":e.email},e.email," "),r.a.createElement("p",{className:"users-section__user-phone","data-tip":e.phone},e.phone)),r.a.createElement(n.a,{place:"bottom"}))}))),r.a.createElement("button",{type:"button",className:"button",disabled:a>=c,onClick:function(){return s()}},"Show more")))};t.default=c,c.defaultProps={fetchUsersError:""}}}]);
//# sourceMappingURL=Users.2d84fa94.chunk.js.map