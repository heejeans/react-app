(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,function(e,t,s){e.exports={container:"Profile_container__5IaRP",pfp:"Profile_pfp__1m6DU",row:"Profile_row__12qQ7",col:"Profile_col__3z_Kf",username:"Profile_username__2qUJK",header:"Profile_header__2ChJJ",bio:"Profile_bio__3BO67",stats:"Profile_stats__ST0M5",statss:"Profile_statss__3LvJw",posts:"Profile_posts__rwx78"}},function(e,t,s){e.exports={container:"Post_container__JkrJm",profile:"Post_profile__2UseJ",username:"Post_username__2AcAa",action:"Post_action__1uxbX",comment:"Post_comment__1cYeu",user:"Post_user__SDGuF",post:"Post_post__hw-08",photo:"Post_photo__eB5tx",caption:"Post_caption__epNw6",likes:"Post_likes__3N_Ej",date:"Post_date__1UGnL",commentsection:"Post_commentsection__1KgU7",addComment:"Post_addComment__aGSqH"}},,,function(e,t,s){e.exports={photo:"NewPost_photo__2GXN3",dropArea:"NewPost_dropArea__1QAEl",dragging:"NewPost_dragging__3GXy5",message:"NewPost_message__3BUtG",image:"NewPost_image__2e7fR",desc:"NewPost_desc__lYGQI",actions:"NewPost_actions__1uqzu",error:"NewPost_error__3yRfa"}},,function(e,t,s){e.exports={navbar:"Navbar_navbar__31-FB"}},function(e,t,s){e.exports={header:"Header_header__3mObx"}},function(e,t,s){e.exports={square:"PostThumbnail_square__1mMZc",content:"PostThumbnail_content__23flp",image:"PostThumbnail_image__3J_3H"}},,function(e,t,s){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),o=s(13),r=s.n(o),c=(s(22),s(5)),i=s(4),l=(s(23),s(12)),d=s.n(l),u=s(8),j=s.n(u),m=function(e){return"/react-app"+e},p=s(0);var h=function(e){function t(t){e.onNavChange&&e.onNavChange(t)}return Object(p.jsxs)("nav",{className:j.a.navbar,children:[Object(p.jsx)("div",{className:j.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("home")},children:Object(p.jsx)("img",{src:m("/assets/assets/home.svg"),alt:"Home"})})}),Object(p.jsx)("div",{className:j.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("explore")},children:Object(p.jsx)("img",{src:m("/assets/assets/explore.svg"),alt:"Explore"})})}),Object(p.jsx)("div",{className:j.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("newpost")},children:Object(p.jsx)("img",{src:m("/assets/assets/newpost.svg"),alt:"NewPost"})})}),Object(p.jsx)("div",{className:j.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("activity")},children:Object(p.jsx)("img",{src:m("/assets/assets/activity.svg"),alt:"Activity"})})}),Object(p.jsx)("div",{className:j.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("profile")},children:Object(p.jsx)("img",{src:m("/assets/assets/profile.svg"),alt:"Profile"})})})]})},b=s(9),f=s.n(b);var O=function(){return Object(p.jsxs)("div",{className:f.a.header,children:[Object(p.jsx)("div",{className:f.a.headerItem,children:Object(p.jsx)("button",{children:Object(p.jsx)("img",{src:m("/assets/assets/camera.svg"),alt:"Camera"})})}),Object(p.jsx)("div",{className:f.a.headerItem,children:Object(p.jsx)("button",{children:Object(p.jsx)("img",{src:m("/assets/assets/logo.png"),alt:"Logo"})})}),Object(p.jsx)("div",{className:f.a.headerItem,children:Object(p.jsx)("button",{children:Object(p.jsx)("img",{src:m("/assets/assets/message.svg"),alt:"Message"})})})]})},v=s(3),g=s.n(v),x=function(e){var t=Math.floor((new Date-new Date(e))/1e3),s=Math.floor(t/31556926);return s>=1?s+" years":(s=Math.floor(t/2592e3))>=1?s+" months":(s=Math.floor(t/86400))>=1?s+" days":(s=Math.floor(t/3600))>=1?s+" hours":(s=Math.floor(t/60))>=1?s+" minutes":Math.floor(t)+" seconds"};var _=function(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),a=s[0],o=s[1],r=Object(n.useState)(!1),c=Object(i.a)(r,2),l=c[0],d=c[1];return Object(p.jsxs)("div",{className:g.a.container,children:[Object(p.jsxs)("div",{className:g.a.user,children:[Object(p.jsx)("img",{className:g.a.profile,src:m(e.user.photo),alt:"Pfp"}),Object(p.jsxs)("div",{className:g.a.username,children:[" ",Object(p.jsx)("b",{children:e.user.id})]})]}),Object(p.jsxs)("div",{className:g.a.post,children:[Object(p.jsx)("img",{className:g.a.photo,src:m(e.post.photo),id:e.post.id,alt:"Pfp"}),Object(p.jsxs)("div",{className:g.a.action,children:[Object(p.jsx)("button",{children:e.likes.self?Object(p.jsx)("img",{onClick:function(){e.onUnlike(e.post.id)},src:m("/assets/assets/unlike.svg"),alt:"Unlike Action"}):Object(p.jsx)("img",{onClick:function(){e.onLike(e.post.id)},src:m("/assets/assets/like.svg"),alt:"Like Action"})}),Object(p.jsx)("div",{onClick:function(e){return d(!l)},className:g.a.comment,children:Object(p.jsx)("img",{src:m("/assets/assets/comment.svg"),alt:"Comment"})})]}),Object(p.jsxs)("div",{className:g.a.likes,children:[" ",Object(p.jsxs)("b",{children:[e.likes.count," likes"]})]}),Object(p.jsxs)("div",{className:g.a.caption,children:[" ",Object(p.jsx)("b",{children:e.post.userId})," ",e.post.desc," "]})]}),Object(p.jsx)("div",{className:g.a.commentsection,children:e.comments.map((function(e){return Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("b",{children:e.userId})," ",e.text," "]})}))}),Object(p.jsxs)("div",{className:g.a.date,children:[" ",x(e.post.datetime)," ago"]}),l&&Object(p.jsxs)("form",{className:g.a.addComment,onSubmit:function(t){e.onComment(e.post.id,a),o(""),d(!1),t.preventDefault()},children:[Object(p.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:a,onChange:function(e){return o(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Post"})]})]})};var I=function(e){var t=e.store;function s(e,t){return t.users.find((function(t){return t.id===e.userId}))}function n(e,t){return t.comments.filter((function(t){return t.postId===e.id}))}function a(e,t){var s=t.likes.filter((function(t){return t.postId===e.id}));return{self:s.some((function(e){return e.userId===t.currentUserId})),count:s.length}}return Object(p.jsx)("div",{children:t.posts.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(o){return Object(p.jsx)(_,{user:s(o,t),post:o,comments:n(o,t),likes:a(o,t),onLike:e.onLike,onUnlike:e.onUnlike,onComment:e.onComment},o.id)}))})};var N=function(){return Object(p.jsx)("h1",{children:"Explore"})},k=s(6),D=s.n(k),w=s(14),P=s(15),y=s(7),C=s(17),T=s(16),S=function(e){Object(C.a)(s,e);var t=Object(T.a)(s);function s(e){var n;return Object(w.a)(this,s),(n=t.call(this,e)).handleDragEnter=n.handleDragEnter.bind(Object(y.a)(n)),n.handleDrop=n.handleDrop.bind(Object(y.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(y.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(y.a)(n)),n}return Object(P.a)(s,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=a.a.Children.only(this.props.children);return a.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),s}(n.PureComponent);var U=function(e){var t=Object(n.useState)(!1),s=Object(i.a)(t,2),a=s[0],o=s[1],r=Object(n.useState)(""),c=Object(i.a)(r,2),l=c[0],d=c[1],u=Object(n.useState)(null),j=Object(i.a)(u,2),m=j[0],h=j[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),O=f[0],v=f[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:D.a.photo,children:[m?Object(p.jsx)("img",{src:m,alt:"New Post"}):Object(p.jsx)("div",{className:D.a.message,children:"Drop your image"}),Object(p.jsx)(S,{onDragEnter:function(e){o(!0)},onDragLeave:function(e){o(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var s=new FileReader;s.onloadend=function(e){h(e.target.result)},s.readAsDataURL(t)}}o(!1)}},children:Object(p.jsx)("div",{className:[D.a.dropArea,a?D.a.dragging:null].join(" ")})})]}),Object(p.jsx)("div",{className:D.a.desc,children:Object(p.jsx)("textarea",{placeholder:"Add a description...",rows:"2",value:l,onChange:function(e){d(e.target.desc)}})}),Object(p.jsx)("div",{className:D.a.error,children:O}),Object(p.jsxs)("div",{className:D.a.actions,children:[Object(p.jsx)("button",{onClick:function(){e.onPostCancel()},children:"Cancel"}),Object(p.jsx)("button",{onClick:function(t){t.preventDefault(),null!==m?(e.onPost(m,l),v("")):v("You need to add a photo!")},children:"Share"})]})]})};var L=function(){return Object(p.jsx)("h1",{children:"Activity"})},Z=s(10),A=s.n(Z);var E=function(e){return Object(p.jsx)("div",{className:A.a.square,children:Object(p.jsx)("div",{className:A.a.content,children:Object(p.jsx)("img",{className:A.a.image,src:m(e.post.photo),alt:"Post Thumbnail"})})})},J=s(2),M=s.n(J);var F=function(e){var t=e.store,s=t.users.find((function(e){return e.id===t.currentUserId}));return Object(p.jsxs)("div",{className:M.a.container,children:[Object(p.jsxs)("div",{className:M.a.header,children:[Object(p.jsx)("img",{className:M.a.pfp,src:m(s.photo),alt:"Pfp"}),Object(p.jsx)("div",{className:M.a.username,children:s.id})]}),Object(p.jsxs)("p",{className:M.a.bio,children:[Object(p.jsx)("b",{children:s.name}),Object(p.jsx)("br",{}),s.bio]}),Object(p.jsxs)("div",{className:M.a.stats,children:[Object(p.jsx)("div",{className:M.a.col,children:function(e){return e.posts.filter((function(t){return t.userId===e.currentUserId})).length}(t)}),Object(p.jsx)("div",{className:M.a.col,children:function(e){return e.followers.filter((function(t){return t.userId===e.currentUserId})).length}(t)}),Object(p.jsx)("div",{className:M.a.col,children:function(e){return e.followers.filter((function(t){return t.followerId===e.currentUserId})).length}(t)})]}),Object(p.jsxs)("div",{className:M.a.statss,children:[Object(p.jsx)("div",{className:M.a.col,children:"posts"}),Object(p.jsx)("div",{className:M.a.col,children:"followers"}),Object(p.jsx)("div",{className:M.a.col,children:"following"})]}),Object(p.jsx)("div",{className:M.a.posts,children:t.posts.filter((function(e){return e.userId===t.currentUserId})).map((function(e){return Object(p.jsx)(E,{post:e})}))})]})},q={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]};var B=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),s=0;s<1e7&&!((new Date).getTime()-t>e);s++);}(1),e?e+t:t};var G=function(){var e=Object(n.useState)("home"),t=Object(i.a)(e,2),s=t[0],a=t[1],o=Object(n.useState)(q),r=Object(i.a)(o,2),l=r[0],u=r[1];function j(e){var t={userId:l.currentUserId,postId:e,datetime:(new Date).toISOString()};u({store:Object(c.a)(Object(c.a)({},l),{},{likes:l.likes.concat(t)})})}function m(e){u((function(t){return{store:Object(c.a)(Object(c.a)({},l),{},{likes:l.likes.filter((function(s){return!(s.userId===t.store.currentUserId&&s.postId===e)}))})}}))}function b(e,t){var s={userId:l.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};u(Object(c.a)(Object(c.a)({},l),{},{comments:l.comments.concat(s)}))}function f(e,t){var s={id:B("post"),userId:l.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};u(Object(c.a)(Object(c.a)({},l),{},{posts:l.posts.concat(s)})),a("home")}function v(){a("home")}return Object(p.jsxs)("div",{className:d.a.container,children:[Object(p.jsx)(O,{}),Object(p.jsx)("main",{className:d.a.content,children:function(e){switch(e){case"home":return Object(p.jsx)(I,{store:l,onLike:j,onUnlike:m,onComment:b});case"explore":return Object(p.jsx)(N,{});case"newpost":return Object(p.jsx)(U,{store:l,onPost:f,onPostCancel:v});case"activity":return Object(p.jsx)(L,{});case"profile":return Object(p.jsx)(F,{store:l});default:return Object(p.jsx)(I,{})}}(s)}),Object(p.jsx)(h,{onNavChange:a})]})},H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,26)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),o(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),H()}],[[25,1,2]]]);
//# sourceMappingURL=main.b0335dd1.chunk.js.map