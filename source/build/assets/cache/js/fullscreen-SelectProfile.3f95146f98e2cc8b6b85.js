"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[6224],{GFLz:(e,t,r)=>{r.d(t,{l6:()=>c});var s=r("q1tI"),n=r("Q7m9"),i=r("IXMZ"),a=r("Ui1H"),o=(...e)=>e.filter(Boolean).join(" "),l=(0,i.Rf)((function(e,t){const{children:r,placeholder:n,className:a,...l}=e;return s.createElement(i.Bv.select,{...l,ref:t,className:o("chakra-select",a)},n&&s.createElement("option",{value:""},n),r)}));l.displayName="SelectField";var c=(0,i.Rf)(((e,t)=>{var r;const o=(0,i.o5)("Select",e),{rootProps:c,placeholder:d,icon:u,color:_,height:p,h,minH:E,minHeight:A,iconColor:g,iconSize:f,...I}=(0,a.MN)(e),[b,v]=function(e,t){const r={},s={};for(const[n,i]of Object.entries(e))t.includes(n)?r[n]=i:s[n]=i;return[r,s]}(I,a.GF),S=(0,n.tJ)(v),L={width:"100%",height:"fit-content",position:"relative",color:_},w={paddingEnd:"2rem",...o.field,_focus:{zIndex:"unset",...null==(r=o.field)?void 0:r._focus}};return s.createElement(i.Bv.div,{className:"chakra-select__wrapper",__css:L,...b,...c},s.createElement(l,{ref:t,height:h??p,minH:E??A,placeholder:d,...S,__css:w},e.children),s.createElement(m,{"data-disabled":(R=S.disabled,R?"":void 0),...(g||_)&&{color:g||_},__css:o.icon,...f&&{fontSize:f}},u));var R}));c.displayName="Select";var d=e=>s.createElement("svg",{viewBox:"0 0 24 24",...e},s.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),u=(0,i.Bv)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),m=e=>{const{children:t=s.createElement(d,null),...r}=e,n=(0,s.cloneElement)(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.createElement(u,{...r,className:"chakra-select__icon-wrapper"},(0,s.isValidElement)(t)?n:null)};m.displayName="SelectIcon"},FFEP:(e,t,r)=>{r.d(t,{X:()=>n});var s=r("nKUr");const n=(0,r("AGAM").w)({displayName:"LockIcon",viewBox:"0 0 24 24",pathSmall:[(0,s.jsx)("path",{d:"M13.5 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"}),(0,s.jsx)("path",{fillRule:"evenodd",d:"M17.683 8H15.5c0-2.569-1.252-4-3.5-4S8.5 5.431 8.5 8H6.315c-.412 0-.762.26-.832.62A29.453 29.453 0 0 0 5 13.68a29.99 29.99 0 0 0 .5 5.7c.07.36.42.62.831.62H17.7c.412 0 .762-.26.832-.62.631-2.94.622-7.87-.017-10.76-.07-.36-.42-.62-.832-.62ZM9.83 8c0-1.087.266-1.73.578-2.087.288-.33.763-.583 1.592-.583.83 0 1.304.253 1.592.583.312.356.578 1 .578 2.087H9.83Zm7.472 1.33H6.71a28.173 28.173 0 0 0-.378 4.362 29.07 29.07 0 0 0 .392 4.978h10.594c.477-2.649.47-6.736-.015-9.34Z",clipRule:"evenodd"})],pathMedium:[(0,s.jsx)("path",{d:"M10.53 13.436c.32-.29.8-.436 1.47-.436.585 0 1.048.134 1.38.402.409.33.62.862.62 1.598 0 .672-.14 1.172-.46 1.504-.321.332-.821.496-1.54.496-.658 0-1.138-.144-1.463-.436-.369-.33-.537-.85-.537-1.564 0-.708.16-1.231.53-1.564Z"}),(0,s.jsx)("path",{fillRule:"evenodd",d:"M3.878 7H7c0-3.853 1.789-6 5-6 3.21 0 5 2.147 5 6h3.119c.587 0 1.088.347 1.188.827.913 3.853.926 10.426.025 14.346-.1.48-.6.827-1.189.827H3.904c-.588 0-1.088-.347-1.188-.827-.426-2.066-.739-4.786-.714-7.6.025-2.573.313-4.84.689-6.746.1-.48.6-.827 1.188-.827ZM9 7c0-1.65.386-2.63.832-3.165C10.232 3.357 10.87 3 12 3c1.13 0 1.769.357 2.168.835C14.614 4.371 15 5.35 15 7H9Zm10.512 2c.642 3.38.653 8.563.02 12H4.527A35.994 35.994 0 0 1 4 14.592c.02-2.09.224-3.964.505-5.592h15.006Z",clipRule:"evenodd"})]});n.defaultProps={fill:"currentColor",boxSize:"24px",display:"block","data-testid":"LockIcon"}},"YG/N":(e,t,r)=>{r.d(t,{A:()=>_});var s=r("WKgy"),n=r("q1tI"),i=r("juqV");var o=r("TRpf"),l=r("5Kqk"),c=r("nxAS");const d=(0,o.Ng)(null,{closeScreen:c.Fn})((({customClose:e,closeScreen:t})=>{const r=e||t;return n.createElement(l.J,{position:"absolute",top:"8px",right:"8px",size:"lg",onClick:r,zIndex:2})}));s.A.addReducers({modal:c.Ay});const _={Body:({className:e,children:t})=>{const r=(0,i.A)("full-screen-body",e);return n.createElement("div",{className:r},t)},Close:d,Footer:({className:e,children:t})=>{const r=(0,i.A)("full-screen-footer",e);return n.createElement("div",{className:r},t)},Header:({className:e,children:t})=>{const r=(0,i.A)("full-screen-header",e);return n.createElement("h1",{className:r},t)}}},IXQs:(e,t,r)=>{r.r(t),r.d(t,{SelectProfile:()=>Me,default:()=>ye}),r("WpbS");var s,n,i,a,o=r("q1tI"),l=r("TRpf"),c=r("Ty5D"),d=r("lXQd"),u=r("RGaU"),m=r("WmA5"),_=r("u7vQ"),p=r("Wp0Y"),h=r("TqF5"),E=r("3TL7"),A=r("xobL"),g=r("aHAS"),f=r("70bL"),I=r("fkXJ"),b=r("obM9"),v=r("D+Zh"),S=r("nrKQ"),L=r("34sk"),w=r("nxAS"),R=r("r2u9"),M=r("YG/N"),C=r("+9dH"),y=r("K5vB"),P=r("Qx5r"),N=r("ZUSG"),O=r("FFEP"),T=r("eTJY");const x=e=>e.showEditIcon?o.createElement("div",{className:"select-profile-account-picture-icon-center"},e.useTrashIcon?s||(s=o.createElement(P.u,{size:"medium"})):n||(n=o.createElement(N.r,{size:"medium"}))):e.showLockIcon?i||(i=o.createElement("div",{className:"select-profile-account-picture-icon-border"},o.createElement(O.X,null))):e.isMe?a||(a=o.createElement("div",{className:"select-profile-account-picture-icon-border is-me"},o.createElement(T.S,null))):null;x.defaultProps={showEditIcon:!1,showLockIcon:!1,isMe:!1,useTrashIcon:!1},x.displayName="AccountIcon";const U=x;var D,k=r("0CJU"),F=r("hz5U"),B=r("5G9X"),G=r("6VLJ");const H=e=>{var t;return o.createElement("div",{className:"select-profile-account-picture-wrapper","data-testid":"account-editor-picture"},o.createElement("div",{className:"select-profile-account-picture"},o.createElement(k.A,{id:Number(e.userId),type:B.Ay.User,imgSrc:null!==(t=e.updatedUserImage)&&void 0!==t?t:F.A.getImageSrc(B.Ay.User,e.userPicture,120,120),width:120,height:120,coverLink:!1,uploadCover:e.allowUpload?G.B.on:G.B.off,rounded:!0}),e.isMe&&!e.showEditIcon?D||(D=o.createElement("div",{className:"select-profile-account-picture-is-me"})):null),o.createElement(U,{showEditIcon:e.showEditIcon,showLockIcon:e.showLockIcon,isMe:e.isMe,useTrashIcon:e.useTrashIcon}))};H.defaultProps={allowUpload:!1,showEditIcon:!1,showLockIcon:!1,isMe:!1,updatedUserImage:void 0,useTrashIcon:!1},H.displayName="AccountPicture";const V=H,X=(0,r("IXMZ").Bv)("div",{baseStyle:{m:"auto",w:"80",textAlign:"start"}});var Y=r("NSet"),W=r("HmE0"),K=r("tZCQ");const z=e=>{let t=(0,p.AP)("genderoption_text_unknown_web");"F"===e.user.SEX?t=(0,p.AP)("genderoption_text_female_web"):"M"===e.user.SEX?t=(0,p.AP)("genderoption_text_male_web"):"NonBinary"===e.user.SEX&&K.A.isAllowed("gender_nonbinary")&&(t=(0,p.AP)("genderoption_text_nonbinary_web"));const r=e.user.BIRTHDAY?(new Date).getFullYear()-new Date(e.user.BIRTHDAY).getFullYear():0;return o.createElement(X,{"data-testid":"account-editor-sub-account"},o.createElement(Y.Tk,{alignItems:"center",spacing:"4"},o.createElement(Y.EY,{color:"text.secondary"},e.user.BLOG_NAME),o.createElement(Y.EY,{color:"text.secondary"},t,`, ${(0,p.WI)("%s an","%s ans",{count:r,sprintf:[r]})}`),o.createElement(W.$n,{variant:"outline",onClick:e.onCancel,"data-testid":"subaccount-cancel-btn"},(0,p.AP)("generic_action_cancel_web")),o.createElement(W.$n,{variant:"ghost",onClick:()=>e.onRemove(e.user),"data-testid":"subaccount-remove-btn"},(0,p.AP)("Retirer"))))};var j=r("Q7m9"),Z=r("XkdG"),q=r("I0XM"),$=r("GFLz"),J=r("8tvI"),Q=r("H9G8"),ee=r("zerP"),te=r("5U+Y"),re=r("X6oL");function se(e,t){switch(t.type){case"update_blogname":{const{isValid:r,message:s}=(e=>{try{return(0,ee.iE)(t.value),{isValid:!0,message:""}}catch(e){return e instanceof Q.jQ?{isValid:!1,message:e.message}:{isValid:!1,message:""}}})((()=>(0,ee.iE)(t.value)));return{...e,blogname:{value:t.value,isValid:r,error:s}}}case"update_kid":return{...e,isKid:{value:t.value,error:"",isValid:!0}};case"update_gender":return{...e,gender:{value:t.value,isValid:!0,error:""}};case"update_age":{if(!t.value)return{...e,age:{value:t.value,isValid:!1,error:(0,p.AP)("familyprofileswitcheraddprofile_text_pleaseselectage_web")}};const r={value:t.value,isValid:!0,error:""};return t.value<te.fB?{...e,age:r,isKid:{value:!0,error:"",isValid:!0},hideExplicitConsent:!0}:{...e,age:r,isKid:{value:!1,error:"",isValid:!0},hideExplicitConsent:!1}}default:return{...e,...t.value}}}const ne=({user:e,...t})=>{const{trackEvent:r}=(0,re.z1)(),s=K.A.isAllowed("gender_nonbinary")?(0,p.AP)("genderscreen_title_identity_web"):(0,p.AP)("Genre"),{state:n,dispatch:i,isExplicitLevelEditable:a,isFormValid:l,isNew:c}=(e=>{var t,r;const s=!parseInt(e.USER_ID,10),[n,i]=(0,o.useReducer)(se,{blogname:{value:e.BLOG_NAME||"",isValid:!0,error:""},isKid:{value:e.IS_KID||!1,isValid:!0,error:""},gender:{value:e.SEX||"F",isValid:!0,error:""},age:{value:e.BIRTHDAY?(new Date).getFullYear()-new Date(e.BIRTHDAY).getFullYear():18,isValid:!0,error:""},kidsConsent:{value:!s,isValid:!0,error:""},hideExplicitConsent:null!==(t=e.EXTRA_FAMILY.TOGGLE_EXPLICIT_CONTROL)&&void 0!==t&&t}),a=n.blogname.value.length>0&&n.blogname.isValid&&n.age.isValid&&n.gender.isValid&&(n.age.value>te.fB||n.kidsConsent.value);return{state:n,dispatch:i,isExplicitLevelEditable:!n.isKid.value||!s&&null!==(r=e.EXTRA_FAMILY.IS_EXPLICIT_LEVEL_EDITABLE)&&void 0!==r&&r,isFormValid:a,isNew:s}})(e),d=n.hideExplicitConsent||n.isKid.value;return o.createElement(X,{"data-testid":"account-editor-sub-profile"},o.createElement(Y.Tk,{alignItems:"start",spacing:"4"},o.createElement(j.MJ,{isRequired:!0,isInvalid:!n.blogname.isValid},o.createElement(j.lR,null,(0,p.AP)("Username")),o.createElement(Z.p,{"data-testid":"subprofile-edit-username",onChange:e=>i({type:"update_blogname",value:e.target.value}),value:n.blogname.value}),o.createElement(q.Wt,null,n.blogname.error)),o.createElement(j.MJ,{isRequired:!0,isInvalid:!n.gender.isValid},o.createElement(j.lR,{htmlFor:"subprofile-edit-gender"},s),o.createElement($.l6,{id:"subprofile-edit-gender",onChange:e=>i({type:"update_gender",value:e.target.value}),value:n.gender.value},o.createElement("option",{value:"F"},(0,p.AP)("genderoption_text_female_web")),o.createElement("option",{value:"M"},(0,p.AP)("genderoption_text_male_web")),K.A.isAllowed("gender_nonbinary")&&o.createElement("option",{value:"NonBinary"},(0,p.AP)("genderoption_text_nonbinary_web"))),o.createElement(q.Wt,null,n.gender.error)),o.createElement(j.MJ,{isRequired:!0,isInvalid:!n.age.isValid},o.createElement(j.lR,{htmlFor:"subprofile-edit-age"},(0,p.AP)("Age")),o.createElement($.l6,{id:"subprofile-edit-age","data-testid":"subprofile-edit-age",onChange:e=>i({type:"update_age",value:parseInt(e.target.value,10)}),value:n.age.value},[...Array(99)].map(((e,t)=>{const r=t+1;return o.createElement("option",{key:r,value:r},r)}))),o.createElement(q.Wt,null,n.age.error)),o.createElement(J.Sc,{"data-testid":"subprofile-toggle-explicit",isChecked:d,isDisabled:!a,onChange:e=>{i({type:"state",value:{hideExplicitConsent:e.target.checked}}),r({event:"click",eventlabel:e.target.checked?"allow-explicit-content":"block-explicit-content"})}},(0,p.AP)("settingspage_title_hideexplicitcontent_web")),o.createElement(J.Sc,{isChecked:n.isKid.value,onChange:e=>i({type:"update_kid",value:e.target.checked}),"data-testid":"subprofile-toggle-kid",isDisabled:t.currentUserIsKid||n.age.value<te.fB},(0,p.AP)("familyprofileswitcheraddprofile_title_kidprofile_web")),n.age.value<te.fB&&o.createElement(o.Fragment,null,o.createElement(j.MJ,{isInvalid:!n.kidsConsent.isValid},o.createElement(J.Sc,{isChecked:n.kidsConsent.value,"data-testid":"subprofile-toggle-kid-consent",onChange:e=>i({type:"state",value:{kidsConsent:{value:e.target.checked,isValid:!0,error:""}}}),isDisabled:t.currentUserIsKid},(0,p.AP)("familyprofileminorconsent_title_gdpchildconsent_web")),o.createElement(q.Wt,null,n.kidsConsent.error)),o.createElement(Y.EY,{color:"text.secondary",fontSize:"11px",sx:{"> a":{color:"text.main"}},dangerouslySetInnerHTML:{__html:(0,p.WI)("familyprofileminorconsent_text_termsandconditions_web","familyprofileminorconsent_text_termsandconditions_web",{count:te.fB,sprintf:[te.fB,'target="_blank" href="/legal/cgu"']})}})),o.createElement(Y.zt,{spacing:"8",w:"100%",justifyContent:"center"},o.createElement(W.$n,{variant:"outline",onClick:t.onCancel,"data-testid":"subprofile-cancel-btn"},(0,p.AP)("generic_action_cancel_web")),o.createElement(W.$n,{onClick:()=>{var r;l&&t.onSave({userId:e.USER_ID,isPersonalDataEditable:null!==(r=e.EXTRA_FAMILY.IS_PERSONAL_DATA_EDITABLE)&&void 0!==r&&r,blogname:n.blogname.value,isKid:n.isKid.value,gender:n.gender.value,age:n.age.value,kidsConsent:n.kidsConsent.value,isExplicitLevelEditable:a,forceExplicitLevel:d})},isLoading:t.formLoading,isDisabled:Boolean(t.formLoading)||!l,"data-testid":"subprofile-save-btn"},c?(0,p.AP)("Créer"):(0,p.AP)("Enregistrer"))),!c&&e.EXTRA_FAMILY.IS_DELETABLE&&o.createElement(Y.so,{w:"100%",justifyContent:"center"},o.createElement(W.$n,{margin:"auto",variant:"ghost",onClick:()=>t.onRemove(e),"data-testid":"subprofile-remove-btn"},(0,p.AP)("Supprimer")))))},ie=({user:e,...t})=>{var r;const[s,n]=(0,o.useState)(void 0),[i,a]=(0,o.useState)(void 0),l=!parseInt(e.USER_ID,10),c=null!==(r=e.EXTRA_FAMILY.IS_PERSONAL_DATA_EDITABLE)&&void 0!==r&&r;let d=(0,p.AP)("familymembermanager_title_managemember_web");c&&(d=(0,p.AP)("familyprofileswitchereditprofile_title_editprofile_web")),l&&(d=(0,p.AP)("familyprofileswitcheraddprofile_title_newprofile_web"));const u={user:e,...t,onSave:e=>{s?(a(e),s.action(e.userId)):t.onSave(e)}};return o.createElement(o.Fragment,null,o.createElement(M.A.Header,null,d),o.createElement(M.A.Body,null,o.createElement(y.AG,{value:{onDisplay:(e,t)=>{n({imageData:e,action:t})},onSuccess:()=>{i&&t.onSave({...i,pictureUpdated:!0})},onError:()=>{(0,I.A)({body:(0,p.AP)("errormessage_text_anerroroccurredpleasetryagain_web")}),i&&t.onSave(i)}}},!l&&o.createElement(V,{allowUpload:c,userPicture:e.USER_PICTURE,updatedUserImage:null==s?void 0:s.imageData,userId:e.USER_ID})),c?o.createElement(ne,(0,C.A)({},u,{formLoading:!!i})):o.createElement(z,u)))};var ae;const oe=e=>o.createElement("div",{key:"select-profile-account-loader-animation",className:"select-profile-account-loader-animation"},ae||(ae=o.createElement("div",{className:"select-profile-account-loader-spinner"})),o.createElement("img",{alt:"",className:"select-profile-account-loader-picture",src:F.A.getImageSrc("user",e.userPicture,120,120)}),o.createElement("p",null,(0,p.AP)("familyprofileswitcherloading_text_settingupprofile_web")));oe.displayName="AccountLoader";const le=oe;var ce=r("0+YM"),de=r("YIja"),ue=r("juqV");const me=e=>e.EXTRA_FAMILY.IS_PERSONAL_DATA_EDITABLE||e.EXTRA_FAMILY.IS_DELINKABLE||e.EXTRA_FAMILY.IS_EXPLICIT_LEVEL_EDITABLE,_e=e=>{const{account:t,isInactive:r,isMe:s,onEdit:n,onPick:i,isEditionMode:a,useTrashIcon:l}=e,c=t.EXTRA_FAMILY,d=me(t),u=(0,ue.A)("select-profile-account-item",{inactive:r,disable:r||a&&!d}),m=(0,ue.A)("select-profile-account-item-type",{"main-account":s&&!d});return o.createElement("div",{className:u,onClick:()=>a?n(t):r?void 0:i(t)},o.createElement(V,{showEditIcon:a&&d,showLockIcon:!c.IS_LOGGABLE_AS,isMe:s,userId:t.USER_ID,userPicture:t.USER_PICTURE,useTrashIcon:l}),o.createElement("p",{className:"select-profile-account-item-name"},t.BLOG_NAME),o.createElement("p",{className:m},c.CAPTION))};_e.defaultProps={isInactive:!1,useTrashIcon:!1},_e.displayName="AccountItem";const pe=_e;var he,Ee,Ae;function ge({childs:e,currentUserId:t=0,isManagementActivated:r=!1,hasNoChildAccountSelected:s,hasParent:n,offerActive:i,onAdd:a,onEdit:l,onPick:c,remainingAccountsCount:d,maxChildren:u=0,offerName:m,displaySuccessProfileChange:_,isOffline:h}){const[E,A]=(0,o.useState)(!1),g=!s&&e.reduce(((e,t)=>e||me(t)),!1),f=!h&&d>=1&&i&&g&&!n,I=g&&i;return o.createElement(o.Fragment,null,o.createElement(M.A.Header,null,E?(0,p.AP)("settingspage_title_members_web"):s?(0,p.AP)("familyprofileswitcherloginpage_title_welcomebackselectyourprofile_web"):(0,p.AP)("settingspage_title_members_web")),o.createElement(M.A.Body,null,o.createElement(Y.Tk,{spacing:"spacing.xl",alignItems:"center"},o.createElement(Ie,{displaySuccessProfileChange:_,isOffline:h,maxChildren:u,offerActive:i,offerName:m,remainingAccountsCount:d}),o.createElement(Y.so,{flexWrap:"wrap",justifyContent:"center"},e.map((e=>{const s=!e.PARENT_ID,n={isInactive:d<0&&!s||!i&&!s||h,isMe:t===Number(e.USER_ID),onPick:c,onEdit:l,isEditionMode:E,account:e,useTrashIcon:!r};return o.createElement(pe,(0,C.A)({key:e.USER_ID},n))})),f&&o.createElement(fe,{onAdd:a,remainingAccountsCount:d})),I&&o.createElement(be,{isEditMode:E,isOffline:h,toggleEditMode:()=>A(!E)}))))}function fe({onAdd:e,remainingAccountsCount:t}){const r=(0,p.AP)("settingspage_title_members_web"),s={count:t,sprintf:[t]},n=(0,p.WI)("familymemberselector_text_Xmembersremaining_web","familymemberselector_text_Xmembersremaining_web",s);return o.createElement("div",{className:"select-profile-account-picker-adder",onClick:e},he||(he=o.createElement("div",{className:"select-profile-account-picker-adder-picture"})),o.createElement("div",{className:"select-profile-account-picker-adder-label"},r),o.createElement("div",{className:"select-profile-account-picker-adder-remaining"},n))}function Ie({displaySuccessProfileChange:e,isOffline:t,maxChildren:r,offerActive:s,offerName:n,remainingAccountsCount:i}){const a={maxW:"830px",textAlign:"start"};return s?i<0&&null!=r?o.createElement(de.N,(0,C.A)({icon:!0,status:"error"},a),(0,p.WI)("warningmessage_text_onlyuptoXmemberswithXplan_web","warningmessage_text_onlyuptoXmemberswithXplan_web",{count:r,sprintf:[r,n]}),Ae||(Ae=o.createElement("br",null)),(0,p.AP)("warningmessage_text_removeextramembers_web")):0===i&&!0===e?o.createElement(de.N,(0,C.A)({icon:!0,status:"success"},a),(0,p.AP)("successmessage_text_allmemberaccountsactive_web")):t?o.createElement(de.N,(0,C.A)({status:"warning"},a),(0,p.AP)("Il semble que vous êtes hors-ligne")):void 0:o.createElement(ce.Fc,(0,C.A)({status:"warning"},a),Ee||(Ee=o.createElement(ce._0,null)),o.createElement(Y.az,{flex:"1",me:"spacing.m"},o.createElement(ce.XL,null,(0,p.AP)("familyresubbanner_title_whynoaccesstoprofiles_web")),o.createElement(ce.TN,{display:"block"},(0,p.AP)("familyresubbanner_text_younolongersubtomultiprofileplan_web")," ",(0,p.AP)("familyresubbanner_text_togetprofilesbackresubscribe_web"))),o.createElement(W.$n,{variant:"onContent",as:"a",href:"/offers",target:"_blank"},(0,p.AP)("Voir les offres")))}function be({isEditMode:e,isOffline:t,toggleEditMode:r}){return e?o.createElement(W.$n,{key:"cancel",onClick:r,"data-testid":"accountpicker-cancel-btn",isDisabled:t},(0,p.AP)("generic_action_cancel_web")):o.createElement(W.$n,{key:"manage",onClick:r,"data-testid":"accountpicker-manage-btn",isDisabled:t},(0,p.AP)("familymemberselector_title_managemembers_web"))}const ve=({error:e})=>{const t=(0,l.wA)();return o.createElement(o.Fragment,null,o.createElement(M.A.Header,null,(0,p.AP)("Erreur")),o.createElement(M.A.Body,{className:"select-profile-alert"},o.createElement(de.N,{status:"error"},e),o.createElement("div",{className:"select-profile-alert-button-ctn"},o.createElement(W.$n,{onClick:()=>{t((0,w.Fn)())}},(0,p.AP)("generic_action_close_web")))))};var Se,Le=r("e2eG"),we=r("LOxp"),Re=r("wE9P");class Me extends o.Component{constructor(...e){super(...e),this.state={editUserId:null,isSelectedAccountLoading:!1,selectedAccount:null,isEditing:!1,displaySuccessProfileChange:!1},this._renderClose=()=>this.props.allowScreenClose?o.createElement(M.A.Close,{customClose:this.props.closeScreen}):null,this._onOpenMemberType=()=>{this.props.openModal({name:"FAMILY_MEMBER_TYPE",size:"small",props:{onSendInvitation:()=>this._onSendInvitation(),onCreateProfile:()=>this._onToggleEditing()}})},this._onSendInvitation=()=>{this.props.openModal({name:"FAMILY_SEND_INVITATION",size:"small"})},this._onIsEditingId=({USER_ID:e,EXTRA_FAMILY:t})=>{if(!t.IS_PERSONAL_DATA_EDITABLE&&!t.IS_DELINKABLE)return;const r=this.props.childList.reduce(((t,r)=>e===r.USER_ID?r:t),{USER_PICTURE:"",USER_ID:e});r.PARENT_ID?this._onToggleEditing(e):this._goToMainAccountSettings(e)},this._onCancelEdit=()=>{this._onToggleEditing()},this._onSaveMember=e=>{e.userId?e.isPersonalDataEditable?this._updateSubProfile(e):this._updateSubAccount(e):this._createSubProfile(e)},this._onToggleEditing=(e=null)=>{const{isEditing:t}=this.state;return this.setState({isEditing:!t,editUserId:e})},this._goToMainAccountSettings=e=>{const t=Number(e);if(t===this.props.currentUserId)return this.props.selectChildAccount(t),this.props.closeScreen(),void this.props.history.push("/account");this.setState({isSelectedAccountLoading:!0,selectedAccount:e}),E.default.loginMulti(t,(e=>{e?this.setState({alert:this._getErrorMessage(e)}):(this.props.history.push("/account"),this.props.fetchUserData((()=>{this.props.selectChildAccount(t),this.props.closeScreen()})))}))},this._switchToProfile=e=>{if(this.props.isOnline)if((0,d.A)(e,"EXTRA_FAMILY.IS_LOGGABLE_AS",!1)){if(this.setState({isSelectedAccountLoading:!0,selectedAccount:this.props.childList.reduce(((t,r)=>e.USER_ID===r.USER_ID?r:t),{USER_PICTURE:"",USER_ID:e.USER_ID})}),this._isSameUserById(e.USER_ID))return this.props.selectChildAccount(e.USER_ID),void this.props.closeScreen();_.Ay.control.pause(),_.Ay.control.stop(),_.Ay.setEmptyPlayer(),(0,Re.u)().logout(),E.default.loginMulti(e.USER_ID,(t=>{if(t)return void this.setState({alert:this._getErrorMessage(t)});const r=this.props.userLang;this.props.selectChildAccount(e.USER_ID),this.props.fetchUserData((()=>{const e=we.r.some((e=>this.props.history.location.pathname.startsWith(e)))?this.props.history.location.pathname:null;r===this.props.userLang?(Le.A.init(),this.props.closeScreen(),e?m.A.push(e):m.A.push("/",`home-${Math.floor(1e9*Math.random())}`)):E.default.refreshPageAfterLogin({type:"refresh",link:e||`/${this.props.userLang}`})}))}))}else(0,I.A)({body:(0,p.AP)("familymemberselectorerrormessage_text_thismemberusesadifferentlogin_web")});else(0,I.A)({body:(0,p.AP)("Il semble que vous êtes hors-ligne")})},this._createSubProfile=e=>{const{pendingAction:t}=this.state;if(!this.isCreateAllowed||t)return;const r=e.blogname.trim();r.length<2?this.setState({errorMessage:(0,p.AP)("Votre pseudo doit comporter au moins 2 caractères.")}):r.length>50?this.setState({errorMessage:(0,p.AP)("Votre pseudo ne doit pas dépasser 50 caractères.")}):(this.setState({pendingAction:!0,errorMessage:""}),this.props.createChildAccount({blogName:r,isKid:e.isKid,sex:e.gender,age:e.age,kidsConsent:e.kidsConsent,forceExplicitLevel:e.forceExplicitLevel},(()=>{this.setState({pendingAction:!1,displaySuccessProfileChange:!1}),this._onToggleEditing()}),(()=>{(0,I.A)({body:(0,p.AP)("errormessage_text_anerroroccurredpleasetryagain_web"),status:b.m.Error}),this.setState({pendingAction:!1,displaySuccessProfileChange:!1}),this._onToggleEditing()})))},this._updateSubProfile=e=>{const{pendingAction:t}=this.state;if(t)return;const r={userId:e.userId,forceExplicitLevel:e.forceExplicitLevel},s=e.blogname.trim();if(s.length<2)return void this.setState({errorMessage:(0,p.AP)("Votre pseudo doit comporter au moins 2 caractères.")});if(s.length>50)return void this.setState({errorMessage:(0,p.AP)("Votre pseudo ne doit pas dépasser 50 caractères.")});r.blogName=s,r.sex=e.gender,r.isKid=e.isKid,r.kidsConsent=e.kidsConsent,r.isExplicitLevelEditable=e.isExplicitLevelEditable,r.birthday=(new Date).getFullYear()-e.age+"-01-01",this.setState({pendingAction:!0,errorMessage:""});const{currentUserIsKid:n}=this.props,i=n!==e.isKid&&this._isSameUserById(e.userId);this.props.updateFamilySubProfile(r).then((()=>{i?R.Ay.reloadApp():(this._isSameUserById(e.userId)&&this.props.fetchUserData(),e.pictureUpdated&&this.props.fetchChildAccount(),this._updatedMember())})).catch(this._errorNotification)},this._updateSubAccount=e=>{const{pendingAction:t}=this.state;t||(this.setState({pendingAction:!0,errorMessage:""}),this.props.updateFamilySubAccount({userId:e.userId,forceExplicitLevel:e.forceExplicitLevel}).then(this._updatedMember).catch(this._errorNotification))},this._updatedMember=()=>{this._onCancelEdit(),this.setState({pendingAction:!1})},this._removeMember=e=>{const{pendingAction:t}=this.state;this._isSameUserById(e.USER_ID)||t||this.props.openModal({name:"DELETE_CHILD_CONFIRM",size:"small",props:{cancel:this.props.closeModal,confirm:()=>{this._removeMemberConfirmed(e),this.props.closeModal()},isDeletable:e.EXTRA_FAMILY.IS_DELETABLE,blogNameToMatch:e.BLOG_NAME,offerName:this.props.offerName}})},this._removeMemberConfirmed=({USER_ID:e,BLOG_NAME:t,EXTRA_FAMILY:r})=>{this._onCancelEdit(),r.IS_DELETABLE?this.props.deleteFamilyMember({id:e}).then((()=>this._removeMemberValidated(t,r.IS_DELETABLE))).catch(this._errorNotification):this.props.unlinkFamilyMember({id:e}).then((()=>this._removeMemberValidated(t))).catch(this._errorNotification)},this._removeMemberValidated=(e,t=!1)=>{const r=0===this.props.remainingAccountsCount?{pendingAction:!1,displaySuccessProfileChange:!0}:{pendingAction:!1};this.setState(r),t?(0,I.A)({body:(0,p.AP)("successmessage_text_userXdeletedfromyourplanX_web",{sprintf:[e,this.props.offerName]})}):(0,I.A)({body:(0,p.AP)("successmessage_text_userXremovedfromyourplanX_web",{sprintf:[e,this.props.offerName]})})},this._errorNotification=e=>{let t=(0,p.AP)("Une erreur est survenue, merci de réessayer plus tard.");e instanceof v.Dr&&(t="Votre ordinateur semble être hors ligne. Nous essayons de vous reconnecter."),(0,I.A)({body:t})}}componentDidMount(){this.props.fetchChildAccount()}componentWillUnmount(){S.A.cancel()}get isCreateAllowed(){return this.props.childList.length-1<this.props.maxChildren}get editUser(){const e={USER_ID:0,USER_PICTURE:"",EXTRA_FAMILY:{IS_PERSONAL_DATA_EDITABLE:!0,IS_DELETABLE:!1,IS_DELINKABLE:!1,IS_EXPLICIT_LEVEL_EDITABLE:!0,TOGGLE_EXPLICIT_CONTROL:!1}};return this.state.editUserId?this.props.childList.reduce(((e,t)=>Number(this.state.editUserId)===Number(t.USER_ID)?t:e),e):e}render(){if(this.state.alert)return this._renderAlert();if(this.state.isSelectedAccountLoading&&this.state.selectedAccount)return o.createElement("div",{className:"select-profile"},o.createElement(le,{userPicture:this.state.selectedAccount.USER_PICTURE||""}));if(!this.props.childListLoaded)return o.createElement("div",{className:"select-profile-loading"},this._renderClose(),o.createElement(M.A.Header,null,(0,p.AP)("familymemberselector_title_familymembers_web")),Se||(Se=o.createElement(u.k,null)));if(this.state.isEditing&&this.props.isOnline)return o.createElement("div",{className:"select-profile"},this._renderClose(),o.createElement(ie,{currentUserIsKid:this.props.currentUserIsKid,currentUserId:this.props.currentUserId,onCancel:this._onCancelEdit,onRemove:this._removeMember,onSave:this._onSaveMember,user:this.editUser}));const e=this.props.isManagementActivated?this._onIsEditingId:this._removeMember;return o.createElement("div",{className:"select-profile"},this._renderClose(),o.createElement(ge,{childs:this.props.childList,currentUserId:this.props.hasPreselectedMember?this.props.currentUserId:null,hasNoChildAccountSelected:this.props.hasNoChildAccountSelected,hasParent:this.props.hasParent,isManagementActivated:this.props.isManagementActivated,offerActive:this.props.offerActive,isOffline:!this.props.isOnline,onAdd:this._onOpenMemberType,onPick:this._switchToProfile,onEdit:e,remainingAccountsCount:this.props.remainingAccountsCount,userCountry:this.props.userCountry,maxChildren:this.props.maxChildren,offerName:this.props.offerName,displaySuccessProfileChange:this.state.displaySuccessProfileChange}))}_renderAlert(){return o.createElement(o.Fragment,null,this._renderClose(),o.createElement(ve,{error:this.state.alert||""}))}_getErrorMessage(e){"object"!=typeof e&&(e={});const t=e.payload||{},r=e.message||"";return t.message?t.message:r}_isSameUserById(e){return isNaN(e)||Number(e)===this.props.currentUserId}}Me.defaultProps={isManagementActivated:!0,redirectLink:"/",hasPreselectedMember:!0,allowScreenClose:!0,maxChildren:0};const Ce={closeModal:h.Oo,openScreen:w.J2,createChildAccount:g.SC,deleteFamilyMember:g.MZ,unlinkFamilyMember:g.So,fetchChildAccount:g.C9,updateFamilySubProfile:g.tj,updateFamilySubAccount:g.l8,openModal:h.qf,selectChildAccount:g.me,fetchUserData:g.Sk,initializeFeedbacksAction:L.Hq},ye=(0,c.y)((0,l.Ng)((e=>({childListLoaded:Boolean(e.user.child),childList:(0,A.TW)(e.user),currentUserId:(0,A.F6)(e.user),currentUserIsKid:(0,A.zI)(e.user),hasNoChildAccountSelected:(0,A.In)(e.user),hasParent:(0,A.p7)(e.user),maxChildren:e.user.USER.MULTI_ACCOUNT.MAX_CHILDREN,offerActive:e.user.USER.MULTI_ACCOUNT.ACTIVE,userCountry:(0,A.JJ)(e.user),userLang:(0,A.OI)(e.user),remainingAccountsCount:(0,A.KU)(e.user),isOnline:(0,f.sc)(e),offerId:(0,A.id)(e.user),offerName:(0,A.Ck)(e.user)})),Ce)(Me))},EYlq:(e,t,r)=>{r.d(t,{u:()=>n});var s=r("Wp0Y");const n=e=>{switch(e){case"invalid_msisdn":return(0,s.AP)("errormessage_text_invalidphonenumber_web");case"sms_login_limit":return(0,s.AP)("SMScoderesentconfirmationscreen_text_allattemptsused_web");case"internal_error":case"swap_limit":default:return(0,s.AP)("errormessage_text_anerroroccurredpleasetryagain_web");case"invalid_code":case"invalid_code_wrong":return(0,s.AP)("errormessage_text_invalidcode_web");case"code_too_short":return(0,s.AP)("errormessage_text_codeincomplete_web");case"code_too_long":return(0,s.AP)("errormessage_text_codetoomanydigits_web");case"phone_already_used":return(0,s.AP)("Ce numéro est déjà utilisé.")}}},H9G8:(e,t,r)=>{r.d(t,{CZ:()=>d,Ee:()=>u,Hf:()=>o,In:()=>h,RQ:()=>m,SY:()=>l,U9:()=>_,aS:()=>p,jQ:()=>a,qb:()=>c,r_:()=>E,vM:()=>A});var s=r("Wp0Y"),n=r("5U+Y"),i=r("guCc");class a extends Error{constructor(e){super(e),this.name=i.U.FORM_ERROR}}class o extends a{constructor(){super((0,s.AP)("formerrormessage_text_emailaddressformatnotvalid_web")),this.name=i.U.EMAIL_NOT_VALID}}class l extends a{constructor(e){super((0,s.AP)("errormessage_text_domainnnamenotallowed_web",{sprintf:[e]})),this.name=i.U.EMAIL_DOMAIN_NOT_VALID}}class c extends a{constructor(){super((0,s.AP)("errormessage_title_accountalrdyassociatedwithemail_web")),this.name=i.U.EMAIL_ALREADY_USED}}class d extends a{constructor(){super((0,s.WI)("formerrormessage_text_passwordnotenoughchars_web","formerrormessage_text_passwordnotenoughchars_web",{sprintf:[n.wz],count:n.wz})),this.name=i.U.PASSWORD_TOO_SHORT}}class u extends a{constructor(){super((0,s.WI)("formerrormessage_text_passwordtoomanychars_web","formerrormessage_text_passwordtoomanychars_web",{sprintf:[n.K9],count:n.K9})),this.name=i.U.PASSWORD_TOO_LONG}}class m extends a{constructor(){super((0,s.AP)("errormessage_text_passwordnbeginendwithspace_web")),this.name=i.U.PASSWORD_HAS_TRAILLING_WHITESPACE}}class _ extends a{constructor(){super((0,s.WI)("formerrormessage_text_usernamenotenoughchars_web","formerrormessage_text_usernamenotenoughchars_web",{sprintf:[n.D6],count:n.D6})),this.name=i.U.BLOGNAME_TOO_SHORT}}class p extends a{constructor(){super((0,s.WI)("formerrormessage_text_usernametoomanychars_web","formerrormessage_text_usernametoomanychars_web",{sprintf:[n.d0],count:n.d0})),this.name=i.U.BLOGNAME_TOO_LONG}}class h extends a{constructor(){super((0,s.AP)("errormessage_text_usernamecannotcontainsemojis_web")),this.name=i.U.BLOGNAME_HAS_SPECIAL_CHARS}}class E extends a{constructor(e){super((0,s.WI)("agerestrictionerrormessage_text_mustbeXyearsentervaliddate_web","agerestrictionerrormessage_text_mustbeXyearsentervaliddate_web",{sprintf:[e],count:e})),this.name=i.U.MIN_LEGAL_AGE}}class A extends a{constructor(){super((0,s.AP)("errormessage_text_ageisinvalid_web")),this.name=i.U.AGE_INVALID}}},guCc:(e,t,r)=>{r.d(t,{U:()=>s,m:()=>n});let s=function(e){return e.AGE_INVALID="FORM_ERROR_AGE_INVALID",e.BLOGNAME_HAS_SPECIAL_CHARS="FORM_ERROR_BLOGNAME_HAS_SPECIAL_CHARS",e.BLOGNAME_TOO_LONG="FORM_ERROR_BLOGNAME_TOO_LONG",e.BLOGNAME_TOO_SHORT="FORM_ERROR_BLOGNAME_TOO_SHORT",e.EMAIL_ALREADY_USED="FORM_ERROR_EMAIL_ALREADY_USED",e.EMAIL_DOMAIN_NOT_VALID="FORM_ERROR_EMAIL_DOMAIN_NOT_VALID",e.EMAIL_NOT_VALID="FORM_ERROR_EMAIL_NOT_VALID",e.FORM_ERROR="FORM_ERROR",e.MIN_LEGAL_AGE="FORM_ERROR_MIN_LEGAL_AGE",e.PASSWORD_HAS_TRAILLING_WHITESPACE="FORM_ERROR_PASSWORD_HAS_TRAILLING_WHITESPACE",e.PASSWORD_TOO_LONG="FORM_ERROR_PASSWORD_TOO_LONG",e.PASSWORD_TOO_SHORT="FORM_ERROR_PASSWORD_TOO_SHORT",e}({}),n=function(e){return e[e.TOO_WEAK=0]="TOO_WEAK",e[e.WEAK=1]="WEAK",e[e.MEDIUM=2]="MEDIUM",e[e.STRONG=3]="STRONG",e}({})},zerP:(e,t,r)=>{r.d(t,{$O:()=>h,A$:()=>d,BE:()=>_,Hx:()=>E,PJ:()=>u,iE:()=>p,sR:()=>m}),r("WpbS"),r("/eM8");var s=r("nrKQ"),n=r("1EyH"),i=r("kSUS"),a=r("guCc"),o=r("H9G8"),l=r("5U+Y"),c=r("EYlq");const d=async(e,t=!1)=>{if(e=e.trim(),!(0,n.UC)(e))throw new o.Hf;const r=await s.A.callAsync({method:"deezer.emailCheck",data:{EMAIL:e}});if(!r.domain_validity)throw new o.SY(r.domain);if(r.availability)return t&&r.suggestion?{success:!0,suggestion:r.suggestion}:{success:!0};throw new o.qb},u=(0,i.A)(((e,t,r,s)=>d(e,t).then(r).catch(s)),400),m=e=>{const t=[/.*[A-Z]+.*/,/.*[a-z]+.*/,/.*[0-9]+.*/,/.*[^A-Za-z0-9]+.*/];if([/.*[0-9]+.*/,/.*[a-zA-Z]+.*/,/^.{8,}$/].reduce(((t,r)=>t&&r.test(e)),!0)){const r=t.reduce(((t,r)=>t+(r.test(e)?1:0)),0);return r>3?a.m.STRONG:r>2?a.m.MEDIUM:r>1?a.m.WEAK:a.m.TOO_WEAK}return a.m.TOO_WEAK},_=e=>{if(e!==e.trim())throw new o.RQ;if(e.length>l.K9)throw new o.Ee;if(e.length<l.wz)throw new o.CZ;return!0},p=e=>{if((e=e.trim()).length<l.D6)throw new o.U9;if(e.length>l.d0)throw new o.aS;if((0,n.Sx)(e)||(0,n.BB)(e))throw new o.In;return!0},h=e=>{if("string"==typeof e){if(!/^\d+$/.test(e.toString()))throw new o.vM;e=parseInt(e,10)}if(e<l.fB)throw new o.r_(l.fB);if(e>l.D3)throw new o.vM;return!0},E=e=>{if(0===e.length)throw new o.jQ((0,c.u)("invalid_code"));if(e.length<6)throw new o.jQ((0,c.u)("code_too_short"));if(e.length>6)throw new o.jQ((0,c.u)("code_too_long"));return!0}},"1EyH":(e,t,r)=>{r.d(t,{BB:()=>n,Sx:()=>s,UC:()=>i});const s=e=>/[\u2000-\u2BFF]/.test(e),n=e=>/[\u{10000}-\u{10FFFF}]/u.test(e),i=e=>!!e.match(/^[_0-9a-z-+]+[_.0-9a-z-+]*@([0-9a-z-]+\.)+[a-z]{2,13}$/i)}}]);