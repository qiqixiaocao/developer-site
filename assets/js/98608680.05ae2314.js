"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[7513],{94579:function(e,t,i){var n=i(97218),o=i(59301),r=(i(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return o.createElement(n.Z,{dataSource:e.dataSource,columns:r,pagination:!1})}},50199:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(44117),o=i(59301),r=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var i=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(i,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new r,i.recevier.on("updateHeight",(function(e,t,n){i.iframe&&n===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,n=t.id,r=t.style,a=t.url;return a?o.createElement("div",{className:"bg-iframe "+i,id:n,style:Object.assign({height:800,width:"100%"},r),ref:function(t){e.container=t}},o.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):o.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(o.PureComponent);a.displayName="bg-iframe"},8220:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=i(21810),o=i(86919),r=(i(59301),i(99278)),a=i(50199),d=i(94579),s=["components"],c={title:"\u65e5\u671f\u9009\u62e9",order:6},l="\u65e5\u671f\u9009\u62e9",u={unversionedId:"components/form/dateSelect",id:"components/form/dateSelect",title:"\u65e5\u671f\u9009\u62e9",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/dateSelect.mdx",sourceDirName:"components/form",slug:"/components/form/dateSelect",permalink:"/developer-site/docs/components/form/dateSelect",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/dateSelect.mdx",tags:[],version:"current",frontMatter:{title:"\u65e5\u671f\u9009\u62e9",order:6},sidebar:"components",previous:{title:"\u4e0b\u62c9\u591a\u9009",permalink:"/developer-site/docs/components/form/selects"},next:{title:"\u65e5\u671f\u533a\u95f4",permalink:"/developer-site/docs/components/form/daterange"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u65e5\u671f\u9009\u62e9"},"\u65e5\u671f\u9009\u62e9"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6216\u9009\u62e9\u5177\u4f53\u65f6\u95f4\uff0c\u5f53\u7528\u6237\u9700\u8981\u8f93\u5165\u4e00\u4e2a\u65e5\u671f\uff0c\u53ef\u4ee5\u70b9\u51fb\u6807\u51c6\u8f93\u5165\u6846\uff0c\u5f39\u51fa\u65e5\u671f\u9762\u677f\u8fdb\u884c\u9009\u62e9\uff1b")),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,r.kt)(a.Z,{url:"https://www.aliwork.com/developer/date-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,r.kt)(d.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u503c",code:"fieldData",type:"Object",demo:"{value: 1505894659813}",dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top", "inset"'},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u6807\u9898\u5bf9\u9f50",code:"labelTextAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "right"'},{attr:"\u63d0\u793a\u6587\u5b57",code:"placeholder",type:"String",demo:'"\u8bf7\u9009\u62e9\u65e5\u671f"',dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f",dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u683c\u5f0f",code:"format",type:"String",demo:'"YYYY-MM-DD" ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"YYYY", "YYYY-MM", "YYYY-MM-DD", "YYYY-MM-DD HH:mm", "YYYY-MM-DD HH:mm:ss" '},{attr:"\u6e05\u9664\u6309\u94ae",code:"hasClear",type:"Boolean",demo:"true",dafault:"",desc:""},{attr:"\u6bcf\u6b21\u9009\u62e9\u65e5\u671f\u65f6\u662f\u5426\u91cd\u7f6e\u65f6\u95f4",code:"resetTime",type:"Boolean",demo:"false ",dafault:"",desc:""},{attr:"\u7981\u7528\u65e5\u671f\u51fd\u6570",code:"disabledDate",type:"Function",demo:"(value) => {return false;}",dafault:"",desc:""},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:"({value}) => {}",dafault:"",desc:""},{attr:"\u70b9\u51fb\u786e\u8ba4\u6309\u94ae",code:"onOk",type:"Function",demo:"({value}) => {}",dafault:"",desc:""},{attr:"\u5f39\u5c42\u5c55\u793a\u72b6\u6001\u53d8\u5316",code:"onVisibleChange",type:"Function",demo:"(visible, reason) => {} ",dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);