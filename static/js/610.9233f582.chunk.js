"use strict";(self.webpackChunkinterlinked=self.webpackChunkinterlinked||[]).push([[610],{8610:function(e,n,s){s.r(n),s.d(n,{default:function(){return A}});var r=s(1413),t=s(5671),o=s(3144),u=s(136),i=s(516),l=s(2791),a=s(3531),c="Users_users__jKg7G",g="Users_userHl__2PAhI",f="Users_userHlText__4qD8k",d="Paginator_pageNums__B+Cuy",h="Paginator_pageNumSelected__ieLd6",p=s(184),m=function(e){for(var n,s=Math.ceil(e.totalUsersCount/e.pageSize),r=[],t=1;t<=s;t++)r.push(t);var o=e.currentPage;return n=o-5<0?r.slice(0,7):r.slice(o-4,o+3),(0,p.jsx)("div",{className:d,children:n.map((function(n){return(0,p.jsx)("span",{onClick:function(){e.onPageChanged(n)},className:n===e.currentPage?h:"",children:n},n)}))})},P=s(7396),j={user:"User_user__XS6mH",userImgBlock:"User_userImgBlock__HJ76M",userStatus:"User_userStatus__6EItb",followingBtn:"User_followingBtn__lqwKT"},_=s(4373),x=s(1087),w=function(e){var n=e.u,s=e.follow,r=e.unfollow,t=e.followingInProgress;return(0,p.jsxs)("li",{className:j.user,children:[(0,p.jsxs)("div",{className:j.userImgBlock,children:[n.followed?(0,p.jsx)("button",{className:j.followingBtn,disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:(0,p.jsx)(_.abH,{size:"2em"})}):(0,p.jsx)("button",{className:j.followingBtn,disabled:t.some((function(e){return e===n.id})),onClick:function(){s(n.id)},children:(0,p.jsx)(_.zUF,{size:"2em"})}),(0,p.jsx)(x.OL,{to:"/profile/"+n.id,children:(0,p.jsx)("img",{src:n.photos.small?n.photos.small:P})}),(0,p.jsx)("div",{children:n.name})]}),(0,p.jsx)("div",{className:j.userStatus,children:n.status?n.status:"no status yet"}),(0,p.jsxs)("div",{className:j.userCountry,children:[(0,p.jsx)("div",{children:"u.location.country"}),(0,p.jsx)("div",{children:"u.location.city"})]})]})},v=function(e){return(0,p.jsxs)("div",{className:c,children:[(0,p.jsxs)("div",{className:g,children:[(0,p.jsx)("div",{className:f,children:"Users"}),(0,p.jsx)(m,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged})]}),e.users.map((function(n){return(0,p.jsx)(w,{u:n,follow:e.follow,unfollow:e.unfollow,followingInProgress:e.followingInProgress},n.id)}))]})},C=s(5773),U=(0,s(6916).P1)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),k=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalUsersCount},S=function(e){return e.usersPage.currentPage},z=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.followingInProgress},y=s(5197),Z=s(5927),b=s(7781),B=function(e){(0,u.Z)(s,e);var n=(0,i.Z)(s);function s(){var e;(0,t.Z)(this,s);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){e.props.getUsers(n,e.props.pageSize)},e}return(0,o.Z)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return this.props.isFetching?(0,p.jsx)(y.Z,{}):(0,p.jsx)(v,(0,r.Z)((0,r.Z)({},this.props),{},{onPageChanged:this.onPageChanged}))}}]),s}(l.Component),A=(0,b.qC)((0,a.$j)((function(e){return{users:U(e),pageSize:k(e),totalUsersCount:N(e),currentPage:S(e),isFetching:z(e),followingInProgress:I(e)}}),{follow:C.ZN,unfollow:C.fv,getUsers:C.Rf}),Z.D)(B)},5927:function(e,n,s){s.d(n,{D:function(){return l}});var r=s(1413),t=(s(2791),s(7689)),o=s(3531),u=s(184),i=function(e){return{isAuth:e.auth.isAuth}},l=function(e){return(0,o.$j)(i)((function(n){return n.isAuth?(0,u.jsx)(e,(0,r.Z)({},n)):(0,u.jsx)(t.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=610.9233f582.chunk.js.map