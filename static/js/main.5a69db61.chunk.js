(this["webpackJsonphoa-app"]=this["webpackJsonphoa-app"]||[]).push([[0],{373:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){},619:function(e,t){},621:function(e,t){},632:function(e,t){},634:function(e,t){},661:function(e,t){},663:function(e,t){},664:function(e,t){},669:function(e,t){},671:function(e,t){},690:function(e,t){},702:function(e,t){},705:function(e,t){},762:function(e,t,a){},766:function(e,t,a){},767:function(e,t,a){},768:function(e,t,a){},769:function(e){e.exports=JSON.parse("{}")},770:function(e,t,a){},771:function(e,t,a){},772:function(e,t,a){},773:function(e,t,a){},774:function(e,t,a){},775:function(e,t,a){},776:function(e,t,a){},779:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(90),r=a.n(s),i=(a(373),a(13)),l=(a.p,a(374),a(185)),j=a(12),o=a(781),d=a(790),b=(a(375),a.p+"static/media/home_mobile.2256dc3c.jpg"),u=a.p+"static/media/tenants_mobile.9acf94e3.jpg",O=a.p+"static/media/messages_mobile.71aaa355.jpg",x=a.p+"static/media/issue_mobile.97988bdf.jpg",h=a.p+"static/media/vote_mobile.99cb7a28.jpg",p=(a.p,a(1));var v=function(e){return Object(p.jsx)(o.a,{fluid:!0,className:"p-home",children:Object(p.jsx)("div",{className:"p-home-carousel",children:Object(p.jsxs)(d.a,{children:[Object(p.jsxs)(d.a.Item,{className:"carousel-first-item",children:[Object(p.jsx)("img",{src:b,alt:"First slide"}),Object(p.jsxs)(d.a.Caption,{children:[Object(p.jsx)("h3",{children:"HOA System"}),Object(p.jsx)("p",{children:"Homeowner Association Management System - All you need for managing your building"})]})]},1),Object(p.jsxs)(d.a.Item,{className:"carousel-second-item",interval:1e3,children:[Object(p.jsx)("img",{src:u,alt:"Second slide"}),Object(p.jsxs)(d.a.Caption,{children:[Object(p.jsx)("h3",{children:"Manage tenants members"}),Object(p.jsx)("p",{children:"Add, remove and view tenants from the building account"})]})]},2),Object(p.jsxs)(d.a.Item,{className:"carousel-third-item",interval:1e3,children:[Object(p.jsx)("img",{src:O,alt:"Third slide"}),Object(p.jsxs)(d.a.Caption,{children:[Object(p.jsx)("h3",{children:"Manage message system"}),Object(p.jsx)("p",{children:"Committe owner can post messages to tenants. Tenants can view, filter ..."})]})]},3),Object(p.jsxs)(d.a.Item,{className:"carousel-forth-item",interval:1e3,children:[Object(p.jsx)("img",{src:x,alt:"Third slide"}),Object(p.jsxs)(d.a.Caption,{className:"carousel-fifth-item",interval:1e3,children:[Object(p.jsx)("h3",{children:"Manage building issues"}),Object(p.jsx)("p",{children:"Tenants can report issues with priorty ..."})]},5)]},4),Object(p.jsxs)(d.a.Item,{children:[Object(p.jsx)("img",{src:h,alt:"Third slide"}),Object(p.jsxs)(d.a.Caption,{children:[Object(p.jsx)("h3",{children:"Manage voting system"}),Object(p.jsx)("p",{children:"Committe owner can manage votes, tenats can participate and more"})]})]})]})})})},m=a(34),f=a.n(m),g=a(61),A=a(782),w=a(783),N=a(368),y=a(784),C=a(788),k=a(785),T=a(786),L=a(363),H=a(364),S=a(365),I=a(366),P=a(18),B=a.n(P),U=Object(I.a)("parseUser"),G=function(){function e(t){Object(L.a)(this,e),Object.defineProperty(this,U,{writable:!0,value:void 0}),this.id=t.id,this.name=t.get("name"),this.apartement=t.get("apartement"),this.email=t.get("email")?t.get("email"):t.get("username"),this.role=t.get("role"),this.buildingId=t.get("buildingId"),Object(S.a)(this,U)[U]=t}return Object(H.a)(e,null,[{key:"login",value:function(){var t=Object(g.a)(f.a.mark((function t(a,n){var c,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.User.logIn(a,n);case 2:return c=t.sent,s=new e(c),t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(g.a)(f.a.mark((function e(t){var a,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new B.a.User,n=new B.a.Query(a),e.next=4,n.get(t);case 4:return c=e.sent,e.next=7,c.destroy();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(g.a)(f.a.mark((function t(a){var n,c,s,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new B.a.User,c=new B.a.Query(n),t.next=4,c.get(a);case 4:return s=t.sent,r=new e(s),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(g.a)(f.a.mark((function e(t,a,n,c){var s,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new B.a.User,r=new B.a.Query(s),e.next=4,r.get(t);case 4:return(i=e.sent).set("username",a),i.set("email",n),i.set("apartement",c),e.next=10,i.save();case 10:case"end":return e.stop()}}),e)})));return function(t,a,n,c){return e.apply(this,arguments)}}()},{key:"logout",value:function(){B.a.User.logOut()}},{key:"activeUser",value:function(){return B.a.User.current()}}]),e}();a(762);var Z=function(e){var t=e.activeUser,a=e.onLogin,c=Object(n.useState)(""),s=Object(i.a)(c,2),r=s[0],d=s[1],b=Object(n.useState)(""),u=Object(i.a)(b,2),O=u[0],x=u[1],h=Object(n.useState)(!1),v=Object(i.a)(h,2),m=v[0],L=v[1],H=Object(n.useState)(!1),S=Object(i.a)(H,2),I=S[0],P=S[1];if(t)return Object(p.jsx)(j.a,{to:"/dashboard"});function B(){return(B=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,P(!0),e.next=5,G.login(r,O);case 5:n=e.sent,P(!1),a(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error while logging in user",e.t0),L(!0);case 14:return e.prev=14,P(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,10,14,17]])})))).apply(this,arguments)}return I?Object(p.jsx)("div",{className:"p-login-spinner d-flex justify-content-center align-items-center",children:Object(p.jsx)(A.a,{animation:"border",variant:"primary"})}):Object(p.jsx)(o.a,{fluid:!0,className:"p-login",children:Object(p.jsx)("div",{className:"p-login-bg-img",children:Object(p.jsx)(w.a,{children:Object(p.jsx)(N.a,{children:Object(p.jsxs)("div",{className:"p-form-login",children:[Object(p.jsx)("h1",{children:"Login to HOA"}),Object(p.jsxs)("p",{children:["or ",Object(p.jsx)(l.b,{to:"/signup",children:"create an account"})]}),m?Object(p.jsx)(y.a,{variant:"danger",children:"Invalid Credentials!"}):null,Object(p.jsxs)(C.a,{onSubmit:function(e){return B.apply(this,arguments)},children:[Object(p.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(C.a.Label,{children:"Email address"}),Object(p.jsxs)(k.a,{children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-envelope-fill"})})}),Object(p.jsx)(C.a.Control,{type:"email",placeholder:"Enter email",value:r,onChange:function(e){return d(e.target.value)}}),Object(p.jsx)(k.a.Append,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon2",children:"@example.com"})})]}),Object(p.jsx)(C.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(C.a.Label,{children:"Password"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-lock-fill"})})}),Object(p.jsx)(C.a.Control,{type:"password",placeholder:"Password",value:O,onChange:function(e){return x(e.target.value)}}),Object(p.jsx)(k.a.Append,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon2",children:Object(p.jsx)("i",{className:"bi bi-unlock-fill"})})})]})]}),Object(p.jsx)(T.a,{variant:"success",type:"submit",block:!0,children:"Login"})]})]})})})})})};a(766);var Q=function(e){var t=e.activeUser,a=e.onLogin,c=Object(n.useState)(!1),s=Object(i.a)(c,2),r=s[0],l=s[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),u=b[0],O=b[1],x=Object(n.useState)(""),h=Object(i.a)(x,2),v=h[0],m=h[1],f=Object(n.useState)(""),g=Object(i.a)(f,2),A=g[0],w=g[1],N=Object(n.useState)(""),L=Object(i.a)(N,2),H=L[0],S=L[1],I=Object(n.useState)(""),P=Object(i.a)(I,2),U=P[0],Z=P[1];return t?Object(p.jsx)(j.a,{to:"/dashboard"}):Object(p.jsx)(o.a,{fluid:!0,className:"p-signup",children:Object(p.jsx)("div",{className:"p-signup-bg-img",children:Object(p.jsxs)("div",{className:"p-form-signup",children:[Object(p.jsx)("h1",{children:"Welcome to HOA"}),Object(p.jsx)("p",{children:"Please fill the follwoing detais"}),r?Object(p.jsx)(y.a,{variant:"danger",children:"Error in Sign Up!"}):null,Object(p.jsxs)(C.a,{onSubmit:function(e){e.preventDefault();var t=new(B.a.Object.extend("BuildingId"));t.set("name",H),t.set("address",U);var n=new B.a.User;n.set("username",u),n.set("email",u),n.set("role",0),n.set("name",A),n.set("buildingId",t),n.set("password",v),n.signUp().then((function(e){var t=new G(e);a(t)})).catch((function(e){l(!0),console.error("Error while signing up user",e)}))},children:[Object(p.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(C.a.Label,{children:"Email address"}),Object(p.jsxs)(k.a,{children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-envelope-fill"})})}),Object(p.jsx)(C.a.Control,{type:"email",placeholder:"Enter email",value:u,onChange:function(e){return O(e.target.value)}}),Object(p.jsx)(k.a.Append,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon2",children:"@example.com"})})]}),Object(p.jsx)(C.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(C.a.Label,{children:"Password"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-lock-fill"})})}),Object(p.jsx)(C.a.Control,{type:"password",placeholder:"Password",value:v,onChange:function(e){return m(e.target.value)}}),Object(p.jsx)(k.a.Append,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon2",children:Object(p.jsx)("i",{className:"bi bi-unlock-fill"})})})]})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicname",children:[Object(p.jsx)(C.a.Label,{children:"Name"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-person-fill"})})}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:"Name",value:A,onChange:function(e){return w(e.target.value)}})]})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicLname",children:[Object(p.jsx)(C.a.Label,{children:"Building Name"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-house-fill"})})}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:"Building Name",value:H,onChange:function(e){return S(e.target.value)}})]})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicAddress",children:[Object(p.jsx)(C.a.Label,{children:"Address"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-geo-alt-fill"})})}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:"Full Address",value:U,onChange:function(e){return Z(e.target.value)}})]})]}),Object(p.jsx)(T.a,{variant:"success",type:"submit",block:!0,children:"Signup"})]})]})})})},D=a(791),K=a(789);a(767);var Y=function(e){var t=e.activeUser,a=e.onLogout;return Object(p.jsxs)(D.a,{bg:"light",expand:"lg",className:"c-navbar",children:[Object(p.jsxs)(D.a.Brand,{href:"#/",children:[Object(p.jsx)("i",{className:"bi bi-house-fill"})," HOA"]}),Object(p.jsx)(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(D.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(K.a,{className:"mr-auto",children:[t?Object(p.jsx)(K.a.Link,{href:"#/dashboard",children:"Dashboard"}):null,t&&0===t.role?Object(p.jsx)(K.a.Link,{href:"#/tenants",children:"Tenants"}):null,t?Object(p.jsx)(K.a.Link,{href:"#/messages",children:"Messages"}):null,t?Object(p.jsx)(K.a.Link,{href:"#/issue",children:"Issues"}):null,t?Object(p.jsx)(K.a.Link,{href:"#/vote",children:"Vote"}):null]}),Object(p.jsxs)(K.a,{className:"ml-auto",children:[t?null:Object(p.jsx)(K.a.Link,{href:"#/login",children:Object(p.jsx)("span",{style:{color:"blue"},children:"Login"})}),t?null:Object(p.jsx)(K.a.Link,{href:"#/signup",children:"Signup"}),t?Object(p.jsx)(D.a.Text,{children:Object(p.jsxs)("span",{style:{color:"blue"},children:["Hello ",t.name]})}):null,t?Object(p.jsx)(K.a.Link,{href:"#",onClick:function(){return a()},children:"Logout"}):null]})]})]})};a(768);function q(e){var t=e.activeUser;return t?Object(p.jsx)(o.a,{className:"p-dashboard",children:Object(p.jsxs)("h1",{children:[t.name,"'s dashboard"]})}):Object(p.jsx)(j.a,{to:"/"})}a(769),a(770);var E=a.p+"static/media/issue.e5ac902a.jpg";var R=function(e){return e.activeUser?Object(p.jsx)(o.a,{className:"p-issue",children:Object(p.jsx)("img",{className:"p-issue-img",src:E})}):Object(p.jsx)(j.a,{to:"/"})},V=(a(771),a.p+"static/media/messages.195273f4.jpg");var X=function(e){return e.activeUser?Object(p.jsx)(o.a,{className:"p-message",children:Object(p.jsx)("img",{className:"p-message-img",src:V})}):Object(p.jsx)(j.a,{to:"/"})},F=(a(772),a.p+"static/media/vote.4ed8de48.jpg");var M=function(e){return e.activeUser?Object(p.jsx)(o.a,{className:"p-voting",children:Object(p.jsx)("img",{className:"p-voting-img",src:F})}):Object(p.jsx)(j.a,{to:"/"})},W=a(787);a(773),a(774);var z=function(e){var t=e.icon,a=e.placeholder,n=e.filterText,c=e.filterTextChange;return Object(p.jsx)("div",{className:"c-filter",children:Object(p.jsx)(C.a.Group,{controlId:"formFilter",children:Object(p.jsxs)(k.a,{children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:t})}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:a,value:n,onChange:function(e){return c(e.target.value)}})]})})})},J=a(793);a(775);var _=function(e){var t=e.tenant;return Object(p.jsx)("div",{className:"c-tenant-card",children:Object(p.jsx)(J.a,{children:Object(p.jsxs)(w.a,{className:"no-gutters",children:[Object(p.jsx)(N.a,{className:"col-md-4",children:Object(p.jsx)(J.a.Img,{variant:"top",src:"data:image/png;base64,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"})}),Object(p.jsx)(N.a,{className:"col-md-8",children:Object(p.jsxs)(J.a.Body,{children:[Object(p.jsxs)(J.a.Title,{children:["Name: ",t.name]}),Object(p.jsxs)(J.a.Subtitle,{className:"mb-2 text-muted",children:["Email ",t.email]}),Object(p.jsxs)(J.a.Text,{children:["Apartement: ",t.apartement]})]})})]})})})},$=a(792);a(776);function ee(e){var t=e.cards,a=e.onDelete,c=e.onEdit,s=Object(n.useState)("0"),r=Object(i.a)(s,2),l=r[0],j=r[1],o=t.map((function(e,t){return Object(p.jsx)($.a,{defaultActiveKey:"0",children:Object(p.jsxs)(J.a,{children:[Object(p.jsxs)(J.a.Header,{children:[Object(p.jsx)($.a.Toggle,{as:T.a,variant:"link",eventKey:t.toString(),onClick:function(){var e;e=t.toString(),j(l===e?null:e)},children:e.props.tenant.name}),Object(p.jsxs)("div",{className:"tenant-card-bottons",children:[Object(p.jsx)(T.a,{variant:"light",onClick:function(){return c(e.props.tenant.id)},children:Object(p.jsx)("i",{className:"bi bi-pencil",style:{color:"lightskyblue",fontWeight:"bold"}})}),Object(p.jsx)(T.a,{variant:"light",onClick:function(){return a(e.props.tenant.id)},children:Object(p.jsx)("i",{className:"bi bi-trash",style:{color:"red"}})})]})]}),Object(p.jsx)($.a.Collapse,{eventKey:t.toString(),children:Object(p.jsx)(J.a.Body,{children:e})})]})},t.toString())}));return Object(p.jsx)("div",{className:"c-hoa-accordion",children:o})}var te=function(e){var t=e.activeUser,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(""),d=Object(i.a)(l,2),b=d[0],u=d[1],O=Object(n.useState)(!1),x=Object(i.a)(O,2),h=x[0],v=x[1],m=Object(n.useState)(!1),A=Object(i.a)(m,2),w=A[0],N=A[1],L=Object(n.useState)(!1),H=Object(i.a)(L,2),S=H[0],I=H[1],P=Object(n.useState)(!1),U=Object(i.a)(P,2),Z=U[0],Q=U[1],D=Object(n.useState)(!1),K=Object(i.a)(D,2),Y=K[0],q=K[1],E=Object(n.useState)(!1),R=Object(i.a)(E,2),V=R[0],X=R[1],F=Object(n.useState)(""),M=Object(i.a)(F,2),J=M[0],$=M[1],te=Object(n.useState)(""),ae=Object(i.a)(te,2),ne=ae[0],ce=ae[1],se=Object(n.useState)(""),re=Object(i.a)(se,2),ie=re[0],le=re[1],je=Object(n.useState)(void 0),oe=Object(i.a)(je,2),de=oe[0],be=oe[1],ue=Object(n.useState)(void 0),Oe=Object(i.a)(ue,2),xe=Oe[0],he=Oe[1],pe=Object(n.useState)(void 0),ve=Object(i.a)(pe,2),me=ve[0],fe=ve[1],ge="create",Ae="update",we="delete",Ne=void 0!==s?s.map((function(e,t){return Object(p.jsx)(_,{tenant:e},t.toString())})):[];if(Object(n.useEffect)((function(){if(t||0==t.role){var e=B.a.Object.extend("User"),a=new B.a.Query(e),n=new(B.a.Object.extend("BuildingId"));n.id=t.buildingId.id,a.equalTo("buildingId",n),a.find().then((function(e){r(e.map((function(e){return new G(e)})))}))}}),[]),!t||0!=t.role)return Object(p.jsx)(j.a,{to:"/"});function ye(e){switch(e){case ge:v(!1),Q(!1),$(""),ce(""),le(""),be(void 0);break;case Ae:N(!1),X(!1),fe(void 0),$(""),ce(""),le(""),be(void 0);break;case we:I(!1),q(!1),he(void 0)}}function Ce(){return(Ce=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("tenant to be deleted "+xe),e.prev=1,e.next=4,G.remove(xe);case 4:e.sent,I(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error while removing user",e.t0),q(!0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function ke(){return(ke=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.update(me,J,ie,de);case 3:ye(Ae),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Error while edit user",e.t0),X(!0);case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}}),e,null,[[0,6,10,12]])})))).apply(this,arguments)}function Te(){return(Te=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get(t);case 3:a=e.sent,$(a.email),le(a.name),be(a.apartement),fe(t),N(!0),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error while get user with id="+t,e.t0),X(!0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(p.jsxs)(o.a,{className:"p-tenants",children:[Object(p.jsx)(z,{icon:Object(p.jsx)("i",{className:"bi bi-funnel-fill"}),placeholder:"Filter tenants by name or email or apartement...",filterText:b,filterTextChange:function(e){return u(e)}}),Object(p.jsx)("div",{className:"new-tenant",children:Object(p.jsxs)(T.a,{variant:"link",onClick:function(){return v(!0)},children:[Object(p.jsx)("i",{className:"bi bi-plus-circle-fill",style:{color:"lightskyblue"}})," Add New Tenant"]})}),Object(p.jsxs)(W.a,{show:h,onHide:function(){return ye(ge)},backdrop:"static",keyboard:!1,children:[Object(p.jsx)(W.a.Header,{closeButton:!0,children:Object(p.jsx)(W.a.Title,{children:"Add New Tenant"})}),Object(p.jsxs)(W.a.Body,{children:[Z?Object(p.jsx)(y.a,{variant:"danger",children:"Error in Sign Up!"}):null,Object(p.jsxs)(C.a,{children:[Object(p.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(C.a.Label,{children:"Email address"}),Object(p.jsxs)(k.a,{children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-envelope-fill"})})}),Object(p.jsx)(C.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:J,onChange:function(e){return $(e.target.value)}}),Object(p.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Please enter email address."}),Object(p.jsx)(k.a.Append,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon2",children:"@example.com"})})]})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(C.a.Label,{children:"Password"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-lock-fill"})})}),Object(p.jsx)(C.a.Control,{type:"password",placeholder:"Password",required:!0,value:ne,onChange:function(e){return ce(e.target.value)}}),Object(p.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Please enter a valid password."}),Object(p.jsx)(k.a.Append,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon2",children:Object(p.jsx)("i",{className:"bi bi-unlock-fill"})})})]})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicname",children:[Object(p.jsx)(C.a.Label,{children:"Name"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-person-fill"})})}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:"Name",value:ie,onChange:function(e){return le(e.target.value)}})]})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicApartement",children:[Object(p.jsx)(C.a.Label,{children:"Apartement"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-house-fill"})})}),Object(p.jsx)(C.a.Control,{type:"number",placeholder:"Apartement number",min:1,max:999,required:!0,value:de,onChange:function(e){return be(parseInt(e.target.value))}}),Object(p.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Please enter a valid number."})]})]})]})]}),Object(p.jsxs)(W.a.Footer,{children:[Object(p.jsx)(T.a,{variant:"secondary",onClick:function(){return ye(ge)},children:"Close"}),Object(p.jsx)(T.a,{variant:"primary",onClick:function(e){var a=new B.a.User;a.set("username",J),a.set("email",J),a.set("apartement",de),a.set("role",1),a.set("name",ie),a.set("buildingId",t.buildingId),a.set("password",ne);var n=new B.a.ACL;n.setPublicWriteAccess(!0),n.setPublicReadAccess(!0),a.setACL(n);var c=B.a.User.current().get("sessionToken");a.signUp().then((function(e){B.a.User.become(c).then((function(e){})),v(!1)})).catch((function(e){Q(!0),console.error("Error while signing up user",e)})).finally((function(){$(""),ce(""),le(""),be(null)}))},children:"Save Changes"})]})]}),Object(p.jsx)(ee,{cards:b&&""!==b?Ne.filter((function(e){return e.props.tenant.name.toLowerCase().includes(b.toLowerCase())||e.props.tenant.email.toLowerCase().includes(b.toLowerCase())||(e.props.tenant.apartement+"").includes(b)})):Ne,onDelete:function(e){he(e),I(!0)},onEdit:function(e){return Te.apply(this,arguments)}}),Object(p.jsxs)(W.a,{show:S,onHide:function(){return ye(we)},backdrop:"static",keyboard:!1,children:[Object(p.jsx)(W.a.Header,{closeButton:!0,children:Object(p.jsx)(W.a.Title,{children:"Remove Tenant"})}),Object(p.jsxs)(W.a.Body,{children:[Y?Object(p.jsx)(y.a,{variant:"danger",children:"Error in Removal!"}):null,"Are you sure you want to delete user?"]}),Object(p.jsxs)(W.a.Footer,{children:[Object(p.jsx)(T.a,{variant:"secondary",onClick:function(){return Ce.apply(this,arguments)},children:"Yes"}),Object(p.jsx)(T.a,{variant:"primary",onClick:function(){return ye(we)},children:"No"})]})]}),Object(p.jsxs)(W.a,{show:w,onHide:function(){return ye(Ae)},backdrop:"static",keyboard:!1,children:[Object(p.jsx)(W.a.Header,{closeButton:!0,children:Object(p.jsx)(W.a.Title,{children:"Edit Tenant"})}),Object(p.jsxs)(W.a.Body,{children:[V?Object(p.jsx)(y.a,{variant:"danger",children:"Update Error!"}):null,Object(p.jsxs)(C.a,{children:[Object(p.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(C.a.Label,{children:"Email address"}),Object(p.jsxs)(k.a,{children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-envelope-fill"})})}),Object(p.jsx)(C.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:J,onChange:function(e){return $(e.target.value)}}),Object(p.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Please enter email address."}),Object(p.jsx)(k.a.Append,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon2",children:"@example.com"})})]})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicname",children:[Object(p.jsx)(C.a.Label,{children:"Name"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-person-fill"})})}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:"Name",value:ie,onChange:function(e){return le(e.target.value)}})]})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicApartement",children:[Object(p.jsx)(C.a.Label,{children:"Apartement"}),Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Prepend,{children:Object(p.jsx)(k.a.Text,{id:"basic-addon1",children:Object(p.jsx)("i",{className:"bi bi-house-fill"})})}),Object(p.jsx)(C.a.Control,{type:"number",placeholder:"Apartement number",min:1,max:999,required:!0,value:de,onChange:function(e){return be(parseInt(e.target.value))}}),Object(p.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Please enter a valid number."})]})]})]})]}),Object(p.jsxs)(W.a.Footer,{children:[Object(p.jsx)(T.a,{variant:"secondary",onClick:function(){return ye(Ae)},children:"Close"}),Object(p.jsx)(T.a,{variant:"primary",onClick:function(){return ke.apply(this,arguments)},children:"Save Changes"})]})]})]})};var ae=function(){var e=Object(n.useState)(G.activeUser()?new G(G.activeUser()):null),t=Object(i.a)(e,2),a=t[0],c=t[1];function s(){c(null),G.logout()}return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(l.a,{children:Object(p.jsxs)(j.d,{children:[Object(p.jsxs)(j.b,{exact:!0,path:"/",children:[Object(p.jsx)(Y,{activeUser:a,onLogout:function(){return c(null)}}),Object(p.jsx)(v,{})]}),Object(p.jsxs)(j.b,{exact:!0,path:"/login",children:[Object(p.jsx)(Y,{activeUser:a,onLogout:s}),Object(p.jsx)(Z,{activeUser:a,onLogin:function(e){return c(e)}})]}),Object(p.jsxs)(j.b,{exact:!0,path:"/signup",children:[Object(p.jsx)(Y,{activeUser:a,onLogout:s}),Object(p.jsx)(Q,{activeUser:a,onLogin:function(e){return c(e)}})]}),Object(p.jsxs)(j.b,{exact:!0,path:"/dashboard",children:[Object(p.jsx)(Y,{activeUser:a,onLogout:s}),Object(p.jsx)(q,{activeUser:a})]}),Object(p.jsxs)(j.b,{exact:!0,path:"/tenants",children:[Object(p.jsx)(Y,{activeUser:a,onLogout:s}),Object(p.jsx)(te,{activeUser:a})]}),Object(p.jsxs)(j.b,{exact:!0,path:"/messages",children:[Object(p.jsx)(Y,{activeUser:a,onLogout:s}),Object(p.jsx)(X,{activeUser:a})]}),Object(p.jsxs)(j.b,{exact:!0,path:"/issue",children:[Object(p.jsx)(Y,{activeUser:a,onLogout:s}),Object(p.jsx)(R,{activeUser:a})]}),Object(p.jsxs)(j.b,{exact:!0,path:"/vote",children:[Object(p.jsx)(Y,{activeUser:a,onLogout:s}),Object(p.jsx)(M,{activeUser:a})]})]})})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,794)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(777),a(778);B.a.serverURL="https://parseapi.back4app.com",B.a.initialize("LOtcNuMAaCowXWDHBSkbZsVnulEmY4n19auKqY1E","UN4wJVPlWCIgO5Hpb7zcX95cUSQTN8P8xlXDmXNu"),r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(ae,{})}),document.getElementById("root")),ne()}},[[779,1,2]]]);
//# sourceMappingURL=main.5a69db61.chunk.js.map