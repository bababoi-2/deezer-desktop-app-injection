"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[4187],{DLZI:(e,t,n)=>{n.d(t,{A:()=>c});var r=n("/0+J"),a=n("MVPB"),o=n("4OMY"),s=(0,o.A)("api"),i=(0,o.A)("env");class c{constructor(e,t){Object.defineProperty(this,s,{writable:!0,value:void 0}),Object.defineProperty(this,i,{writable:!0,value:void 0}),this.facebook=void 0,this.google=void 0,this.apple=void 0,(0,a.A)(this,s)[s]=e,(0,a.A)(this,i)[i]=t}init(e,t){var o=this;return(0,r.A)((function*(){const c=[];return(e=Array.isArray(e)?e:[e]).forEach((e=>{switch(e){case"facebook":const e=function(){var e=(0,r.A)((function*(){const{FacebookAuth:e}=yield n.e(3537).then(n.bind(n,"T53H"));o.facebook||(o.facebook=new e((0,a.A)(o,s)[s],null==t?void 0:t.facebook)),yield o.facebook.init({env:(0,a.A)(o,i)[i]})}));return function(){return e.apply(this,arguments)}}();c.push(e());break;case"google":const l=function(){var e=(0,r.A)((function*(){const{GoogleAuth:e}=yield n.e(5404).then(n.bind(n,"JtTf"));o.google||(o.google=new e((0,a.A)(o,s)[s],null==t?void 0:t.google)),yield o.google.init({})}));return function(){return e.apply(this,arguments)}}();c.push(l());break;case"apple":const u=function(){var e=(0,r.A)((function*(){const{AppleAuth:e}=yield n.e(9133).then(n.bind(n,"ALjf"));o.apple||(o.apple=new e((0,a.A)(o,s)[s],null==t?void 0:t.apple)),yield o.apple.init({})}));return function(){return e.apply(this,arguments)}}();c.push(u());break;default:return}})),Promise.allSettled(c)}))()}}},bDF2:(e,t,n)=>{n.d(t,{R2:()=>s,Fj:()=>o});var r=n("+9dH");let a=function(e){return e.CLICK="click",e.PAGE="updatepage",e}({});function o(e){var t;Object.keys(e).length&&((t=window).dataLayer||(t.dataLayer=[]),window.dataLayer.push(e))}function s(e){if(void 0===(t=e).eventcategory||void 0===t.eventaction)throw new Error("The following fields are missing or undefined: eventcategory, eventaction");var t;o((0,r.A)({event:a.CLICK},e))}},XkdG:(e,t,n)=>{n.d(t,{p:()=>_});var r=n("nKUr"),a=n("Q7m9"),o=n("IXMZ"),s=n("Ui1H"),i=n("AdN8");function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const _=(0,o.Rf)((function(e,t){const{htmlSize:n}=e,_=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["htmlSize"]),d=(0,o.o5)("Input",_),g=(0,s.MN)(_),m=(0,a.tJ)(g),O=(0,i.cx)("chakra-input",e.className);return(0,r.jsx)(o.Bv.input,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({size:n},m),{__css:d.field,ref:t,className:O}))}));_.displayName="Input",_.id="Input"},G3sm:(e,t,n)=>{n.d(t,{e:()=>i});var r=n("nKUr"),a=n("IXMZ"),o=n("Q7m9");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=(0,a.Rf)(((e,t)=>(0,r.jsx)(o.eK,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({color:"text.secondary",ref:t},e))))},omZE:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n("q1tI"),a=n("Wp0Y"),o=n("TqF5"),s=n("exUT"),i=n("WKgy"),c=n("Jpjb"),l=n("jKJc"),u=n("DdAs"),_=n("NSet"),d=n("HmE0"),g=n("8tvI");const m=({onChange:e,defaultValue:t=!1})=>{const[n,o]=(0,r.useState)(t),s=(0,r.useCallback)((t=>{const n=t.currentTarget.checked;o(n),e({isValid:n,value:n})}),[e]);return r.createElement(g.Sc,{onChange:s,isChecked:n,"data-testid":"checkbox-missing-consent"},r.createElement("div",{dangerouslySetInnerHTML:{__html:(0,a.AP)("signupturkey_text_autorizedatasharingwithdzrinEU_web",{sprintf:['href="/legal/personal-datas" target="_blank" ']})}}))};var O=n("Q7m9"),A=n("XkdG"),p=n("I0XM"),f=n("G3sm"),h=n("zerP"),E=n("H9G8");const w=({onChange:e,defaultValue:t=""})=>{const[n,o]=(0,r.useState)(t),[s,i]=(0,r.useState)(""),[c,l]=(0,r.useState)(""),u=(0,r.useCallback)((t=>{const n=t.currentTarget.value;o(n),i(""),l(""),(0,h.PJ)(n,!0,(t=>{i(""),t.suggestion&&l((0,a.AP)("Vous vouliez sans doute dire %s ?",{sprintf:[t.suggestion]})),e({value:n,isValid:!0})}),(t=>{if(!n)return i(""),void l("");t instanceof E.jQ&&(i(t.message),e({value:n,isValid:!1}),l(""))}))}),[e]);return r.createElement(r.Fragment,null,r.createElement(O.MJ,{isInvalid:s.length>0},r.createElement(O.lR,null,(0,a.AP)("generic_title_email_web")),r.createElement(A.p,{onChange:u,type:"email",value:n,"data-testid":"input-missing-email"}),r.createElement(p.Wt,null,s),r.createElement(f.e,null,c)))};var b,y,v=n("LvVU"),R=n("iZAa");const S=e=>(new Date).getFullYear()-e+"-01-01",L=({onChange:e,defaultValue:t=""})=>{const[n,o]=(0,r.useState)(t),[s,i]=(0,r.useState)(""),c=(0,r.useCallback)((t=>{o(t),i("");try{(0,h.$O)(t),e({value:S(parseInt(t,10)),isValid:!0})}catch(n){i(n.message),e({value:S(parseInt(t,10)),isValid:!1})}}),[e]);return r.createElement(r.Fragment,null,r.createElement(O.MJ,{isInvalid:s.length>0},r.createElement(O.lR,null,(0,a.AP)("Age")),r.createElement(v.Q7,{onChange:c,value:n,"data-testid":"input-missing-age"},b||(b=r.createElement(v.OO,null)),y||(y=r.createElement(v.lw,null,r.createElement(R.Q0,null),r.createElement(R.Sh,null)))),r.createElement(p.Wt,null,s)))};var I=n("WLHJ");const P=["email","consent_transfer_data","birthday"];var M;const T=({method:e,steps:t,redirect:n})=>{const[g,O]=(0,r.useState)({}),[A,p]=(0,r.useState)(),f=(e,t,n)=>{const{isValid:r,value:a}=n;var o,s;o={[e]:r},O({...g,...o}),s={[t]:a},p({...A,...s})};return r.createElement(r.Fragment,null,M||(M=r.createElement(l.s_,null)),r.createElement(u.rQ,null,(0,a.AP)("applesignin_text_completeprofiletofinalizereg_web")),r.createElement(u.cw,null,r.createElement(_.Tk,{spacing:"spacing.l"},t.map((e=>{switch(e){case"consent_transfer_data":return r.createElement(m,{key:"consent_transfer_data",onChange:e=>f("consent_transfer_data","EXPLICIT_ALLOW_TRANSFER_DATA_TO_FRANCE",e)});case"email":return r.createElement(w,{key:"email",onChange:e=>f("email","email",e)});case"birthday":return r.createElement(L,{key:"birthday",onChange:e=>f("birthday","birthday",e)});default:return null}})),r.createElement(_.EY,{variant:"body.m.disabled",dangerouslySetInnerHTML:{__html:(0,a.AP)("signup_text_byclickingsignupacceptTCsprivacypolicy_web",{sprintf:['href="/legal/cgu" target="_blank" ','href="/legal/personal-datas" target="_blank" ']})}}))),r.createElement(l.jl,null,r.createElement(d.$n,{"data-testid":"btn-missing-info-send",isDisabled:!(()=>{let e=!0;return t.forEach((t=>{(e=>P.includes(e))(t)&&(e=e&&Boolean(g[t]))})),e})(),onClick:()=>{e===I.K.FACEBOOK?s.A.signup({...A,redirect:n}):e===I.K.GOOGLE&&c.A.signup({...A,redirect:n}),i.A.dispatch((0,o.Oo)())}},(0,a.AP)("Inscription"))))}},Jpjb:(e,t,n)=>{n.d(t,{A:()=>O}),n("/eM8");var r=n("WLHJ"),a=n("p1TQ"),o=n("PbG0");const s=e=>({method:r.K.GOOGLE,...e});var i=n("WrS5"),c=n("TqF5"),l=n("WKgy"),u=n("rVxF"),_=n("dgkV");const d=(0,a.e7)("google"),g=()=>{if(!d.google)throw new Error("LegacyAuth - Google not found, have you called init with google as a param?");return d.google},m=async()=>{try{const e=await g().unlinkAccount();(0,a.s5)(e)}catch(e){(0,a.kL)(e,s({intent:o.d6.Link}))}},O={login:async(e,t)=>{try{const t=await g().signin(e);(0,a.oj)(t,{redirect:(0,a.Ae)(null==e?void 0:e.redirect),method:o.qR.Google})}catch(i){var n,r;if((0,u.O)(i))new _.A({error:null!==(n=i.message)&&void 0!==n?n:null===(r=i.payload)||void 0===r?void 0:r.status,journey_type:"google",error_message:i.message,gateway_method:"google.auth"}).send(),(0,a.kL)(new u.A(i),s({intent:o.d6.Login,redirect:null==e?void 0:e.redirect}));null==t||t(i)}},signup:async(e,t)=>{try{const t=await g().signin(e);(0,a.oj)(t,{redirect:(0,a.Ae)(null==e?void 0:e.redirect),method:o.qR.Google})}catch(i){var n,r;if((0,u.O)(i))new _.A({error:null!==(n=null===(r=i.payload)||void 0===r?void 0:r.status)&&void 0!==n?n:i.name,journey_type:"google",error_message:i.message,gateway_method:"google.auth"}).send(),(0,a.kL)(new u.A(i),s({intent:o.d6.Login,redirect:null==e?void 0:e.redirect}));null==t||t(i)}},linkAccount:async e=>{try{const t=await g().linkAccount(e);(0,a.V7)(t,null==e?void 0:e.profile_migration)}catch(e){(0,u.O)(e)&&(0,a.kL)(new u.A(e),s({intent:o.d6.Link}))}},unlinkAccount:()=>{l.A.dispatch((0,c.qf)({name:i.b.THIRD_PARTY_CONFIRM_UNLINK,size:"small",props:{method:r.K.GOOGLE,confirmCallback:m}}))}}},EYlq:(e,t,n)=>{n.d(t,{u:()=>a});var r=n("Wp0Y");const a=e=>{switch(e){case"invalid_msisdn":return(0,r.AP)("errormessage_text_invalidphonenumber_web");case"sms_login_limit":return(0,r.AP)("SMScoderesentconfirmationscreen_text_allattemptsused_web");case"internal_error":case"swap_limit":default:return(0,r.AP)("errormessage_text_anerroroccurredpleasetryagain_web");case"invalid_code":case"invalid_code_wrong":return(0,r.AP)("errormessage_text_invalidcode_web");case"code_too_short":return(0,r.AP)("errormessage_text_codeincomplete_web");case"code_too_long":return(0,r.AP)("errormessage_text_codetoomanydigits_web");case"phone_already_used":return(0,r.AP)("Ce numéro est déjà utilisé.")}}},H9G8:(e,t,n)=>{n.d(t,{CZ:()=>u,Ee:()=>_,Hf:()=>i,In:()=>O,RQ:()=>d,SY:()=>c,U9:()=>g,aS:()=>m,jQ:()=>s,qb:()=>l,r_:()=>A,vM:()=>p});var r=n("Wp0Y"),a=n("5U+Y"),o=n("guCc");class s extends Error{constructor(e){super(e),this.name=o.U.FORM_ERROR}}class i extends s{constructor(){super((0,r.AP)("formerrormessage_text_emailaddressformatnotvalid_web")),this.name=o.U.EMAIL_NOT_VALID}}class c extends s{constructor(e){super((0,r.AP)("errormessage_text_domainnnamenotallowed_web",{sprintf:[e]})),this.name=o.U.EMAIL_DOMAIN_NOT_VALID}}class l extends s{constructor(){super((0,r.AP)("errormessage_title_accountalrdyassociatedwithemail_web")),this.name=o.U.EMAIL_ALREADY_USED}}class u extends s{constructor(){super((0,r.WI)("formerrormessage_text_passwordnotenoughchars_web","formerrormessage_text_passwordnotenoughchars_web",{sprintf:[a.wz],count:a.wz})),this.name=o.U.PASSWORD_TOO_SHORT}}class _ extends s{constructor(){super((0,r.WI)("formerrormessage_text_passwordtoomanychars_web","formerrormessage_text_passwordtoomanychars_web",{sprintf:[a.K9],count:a.K9})),this.name=o.U.PASSWORD_TOO_LONG}}class d extends s{constructor(){super((0,r.AP)("errormessage_text_passwordnbeginendwithspace_web")),this.name=o.U.PASSWORD_HAS_TRAILLING_WHITESPACE}}class g extends s{constructor(){super((0,r.WI)("formerrormessage_text_usernamenotenoughchars_web","formerrormessage_text_usernamenotenoughchars_web",{sprintf:[a.D6],count:a.D6})),this.name=o.U.BLOGNAME_TOO_SHORT}}class m extends s{constructor(){super((0,r.WI)("formerrormessage_text_usernametoomanychars_web","formerrormessage_text_usernametoomanychars_web",{sprintf:[a.d0],count:a.d0})),this.name=o.U.BLOGNAME_TOO_LONG}}class O extends s{constructor(){super((0,r.AP)("errormessage_text_usernamecannotcontainsemojis_web")),this.name=o.U.BLOGNAME_HAS_SPECIAL_CHARS}}class A extends s{constructor(e){super((0,r.WI)("agerestrictionerrormessage_text_mustbeXyearsentervaliddate_web","agerestrictionerrormessage_text_mustbeXyearsentervaliddate_web",{sprintf:[e],count:e})),this.name=o.U.MIN_LEGAL_AGE}}class p extends s{constructor(){super((0,r.AP)("errormessage_text_ageisinvalid_web")),this.name=o.U.AGE_INVALID}}},guCc:(e,t,n)=>{n.d(t,{U:()=>r,m:()=>a});let r=function(e){return e.AGE_INVALID="FORM_ERROR_AGE_INVALID",e.BLOGNAME_HAS_SPECIAL_CHARS="FORM_ERROR_BLOGNAME_HAS_SPECIAL_CHARS",e.BLOGNAME_TOO_LONG="FORM_ERROR_BLOGNAME_TOO_LONG",e.BLOGNAME_TOO_SHORT="FORM_ERROR_BLOGNAME_TOO_SHORT",e.EMAIL_ALREADY_USED="FORM_ERROR_EMAIL_ALREADY_USED",e.EMAIL_DOMAIN_NOT_VALID="FORM_ERROR_EMAIL_DOMAIN_NOT_VALID",e.EMAIL_NOT_VALID="FORM_ERROR_EMAIL_NOT_VALID",e.FORM_ERROR="FORM_ERROR",e.MIN_LEGAL_AGE="FORM_ERROR_MIN_LEGAL_AGE",e.PASSWORD_HAS_TRAILLING_WHITESPACE="FORM_ERROR_PASSWORD_HAS_TRAILLING_WHITESPACE",e.PASSWORD_TOO_LONG="FORM_ERROR_PASSWORD_TOO_LONG",e.PASSWORD_TOO_SHORT="FORM_ERROR_PASSWORD_TOO_SHORT",e}({}),a=function(e){return e[e.TOO_WEAK=0]="TOO_WEAK",e[e.WEAK=1]="WEAK",e[e.MEDIUM=2]="MEDIUM",e[e.STRONG=3]="STRONG",e}({})},zerP:(e,t,n)=>{n.d(t,{$O:()=>O,A$:()=>u,BE:()=>g,Hx:()=>A,PJ:()=>_,iE:()=>m,sR:()=>d}),n("WpbS"),n("/eM8");var r=n("nrKQ"),a=n("1EyH"),o=n("kSUS"),s=n("guCc"),i=n("H9G8"),c=n("5U+Y"),l=n("EYlq");const u=async(e,t=!1)=>{if(e=e.trim(),!(0,a.UC)(e))throw new i.Hf;const n=await r.A.callAsync({method:"deezer.emailCheck",data:{EMAIL:e}});if(!n.domain_validity)throw new i.SY(n.domain);if(n.availability)return t&&n.suggestion?{success:!0,suggestion:n.suggestion}:{success:!0};throw new i.qb},_=(0,o.A)(((e,t,n,r)=>u(e,t).then(n).catch(r)),400),d=e=>{const t=[/.*[A-Z]+.*/,/.*[a-z]+.*/,/.*[0-9]+.*/,/.*[^A-Za-z0-9]+.*/];if([/.*[0-9]+.*/,/.*[a-zA-Z]+.*/,/^.{8,}$/].reduce(((t,n)=>t&&n.test(e)),!0)){const n=t.reduce(((t,n)=>t+(n.test(e)?1:0)),0);return n>3?s.m.STRONG:n>2?s.m.MEDIUM:n>1?s.m.WEAK:s.m.TOO_WEAK}return s.m.TOO_WEAK},g=e=>{if(e!==e.trim())throw new i.RQ;if(e.length>c.K9)throw new i.Ee;if(e.length<c.wz)throw new i.CZ;return!0},m=e=>{if((e=e.trim()).length<c.D6)throw new i.U9;if(e.length>c.d0)throw new i.aS;if((0,a.Sx)(e)||(0,a.BB)(e))throw new i.In;return!0},O=e=>{if("string"==typeof e){if(!/^\d+$/.test(e.toString()))throw new i.vM;e=parseInt(e,10)}if(e<c.fB)throw new i.r_(c.fB);if(e>c.D3)throw new i.vM;return!0},A=e=>{if(0===e.length)throw new i.jQ((0,l.u)("invalid_code"));if(e.length<6)throw new i.jQ((0,l.u)("code_too_short"));if(e.length>6)throw new i.jQ((0,l.u)("code_too_long"));return!0}},"1EyH":(e,t,n)=>{n.d(t,{BB:()=>a,Sx:()=>r,UC:()=>o});const r=e=>/[\u2000-\u2BFF]/.test(e),a=e=>/[\u{10000}-\u{10FFFF}]/u.test(e),o=e=>!!e.match(/^[_0-9a-z-+]+[_.0-9a-z-+]*@([0-9a-z-]+\.)+[a-z]{2,13}$/i)}}]);