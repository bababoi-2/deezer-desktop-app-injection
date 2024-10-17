"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[1232],{XkdG:(e,t,r)=>{r.d(t,{p:()=>m});var n=r("nKUr"),s=r("Q7m9"),a=r("IXMZ"),o=r("Ui1H"),i=r("AdN8");function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m=(0,a.Rf)((function(e,t){const{htmlSize:r}=e,m=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,["htmlSize"]),u=(0,a.o5)("Input",m),d=(0,o.MN)(m),O=(0,s.tJ)(d),A=(0,i.cx)("chakra-input",e.className);return(0,n.jsx)(a.Bv.input,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({size:r},O),{__css:u.field,ref:t,className:A}))}));m.displayName="Input",m.id="Input"},X5lq:(e,t,r)=>{r.d(t,{u:()=>s});var n=r("nKUr");const s=(0,r("AGAM").w)({displayName:"InformationIcon",viewBox:"0 0 24 24",pathSmall:[(0,n.jsx)("path",{d:"M13 9c0-.335-.073-.575-.218-.735C12.616 8.08 12.354 8 12 8c-.357 0-.617.084-.782.268-.146.163-.218.403-.218.732 0 .36.082.61.248.77.166.16.416.23.752.23.368 0 .634-.106.799-.31.134-.166.201-.397.201-.69Zm-1.66 7h1.33v-4.67h-1.33V16Z"}),(0,n.jsx)("path",{fillRule:"evenodd",d:"M12 20c5.137 0 8-2.863 8-8 0-5.137-2.863-8-8-8-5.137 0-8 2.863-8 8 0 5.137 2.863 8 8 8Zm0-14.667c4.424 0 6.667 2.243 6.667 6.667 0 4.424-2.243 6.667-6.667 6.667-4.424 0-6.667-2.243-6.667-6.667 0-4.424 2.243-6.667 6.667-6.667Z",clipRule:"evenodd"})],pathMedium:[(0,n.jsx)("path",{d:"M13.5 7.5c0-.503-.11-.862-.327-1.103C12.923 6.12 12.531 6 12 6c-.536 0-.925.126-1.173.403-.219.243-.327.604-.327 1.097 0 .54.123.914.372 1.154.249.24.624.346 1.128.346.552 0 .952-.159 1.199-.465.2-.249.301-.596.301-1.035ZM11 11v7h2v-7h-2Z"}),(0,n.jsx)("path",{fillRule:"evenodd",d:"M12 23c7.064 0 11-3.936 11-11S19.064 1 12 1 1 4.936 1 12s3.936 11 11 11Zm0-20c5.972 0 9 3.028 9 9 0 5.972-3.028 9-9 9-5.972 0-9-3.028-9-9 0-5.972 3.028-9 9-9Z",clipRule:"evenodd"})]});s.defaultProps={fill:"currentColor",boxSize:"24px",display:"block","data-testid":"InformationIcon"}},"321b":(e,t,r)=>{r.r(t),r.d(t,{default:()=>w}),r("/eM8");var n,s=r("q1tI"),a=r("TRpf"),o=r("H9G8"),i=r("TqF5"),c=r("zerP"),l=r("Wp0Y"),_=r("nrKQ"),m=r("H/eQ"),u=r("JPzp"),d=r("jKJc"),O=r("DdAs"),A=r("NSet"),E=r("Q7m9"),h=r("XkdG"),p=r("I0XM"),R=r("YIja"),f=r("HmE0");class g extends s.Component{constructor(e){super(e),this.ERROR_MSG=(0,l.AP)("errormessage_text_anerroroccurredpleasetryagain_web"),this._onSubmit=this._onSubmit.bind(this),this.state={email:"",emailConfirm:"",emailConfirmErrorMessage:"",emailErrorMessage:"",error:"",loading:!1}}componentWillUnmount(){_.A.cancel(this._apiRef)}onEmailChange(e){this.setState({email:e.target.value})}onEmailConfirmChange(e){this.setState({emailConfirm:e.target.value})}render(){const{email:e,emailConfirm:t,emailConfirmErrorMessage:r,emailErrorMessage:a,error:o,loading:i}=this.state;return s.createElement("form",null,n||(n=s.createElement(d.s_,null)),s.createElement(O.rQ,null,(0,l.AP)("Modification de votre email")),s.createElement(O.cw,null,s.createElement(A.Tk,{spacing:"spacing.m"},s.createElement(E.MJ,{isInvalid:Boolean(a)},s.createElement(E.lR,null,(0,l.AP)("Votre nouvel email")),s.createElement(h.p,{"data-testid":"new_email",value:e,type:"email",onChange:this.onEmailChange.bind(this)}),s.createElement(p.Wt,null,a)),s.createElement(E.MJ,{isInvalid:Boolean(r)},s.createElement(E.lR,null,(0,l.AP)("Vérification du nouvel email")),s.createElement(h.p,{"data-testid":"new_email_confirmation",value:t,type:"email",onChange:this.onEmailConfirmChange.bind(this)}),s.createElement(p.Wt,null,r)),o&&s.createElement(R.N,{status:"error"},o))),s.createElement(d.jl,null,s.createElement(f.$n,{type:"submit",onClick:this._onSubmit,isDisabled:i,isLoading:i,"data-testid":"new_email_save_button"},(0,l.AP)("Enregistrer"))))}_onSubmit(e){e.preventDefault(),this.setState({emailConfirmErrorMessage:"",emailErrorMessage:"",error:"",loading:!0},(()=>{const{email:e,emailConfirm:t}=this.state;(0,c.A$)(e,!1).then((()=>{e===t?this._apiRef=_.A.call({method:"deezer.updateEmail",data:{email:e},success:async t=>{if(t)return await(0,u.d)(t.arl),m.A.trigger(m.A.user.updateEmail,{email:e}),void this.props.closeModal();this.setState({loading:!1,error:this.ERROR_MSG})},error:e=>{"Session not secured"!==e.response.error[e.name]?this.setState({error:this.ERROR_MSG}):this.setState({error:(0,l.AP)("errormessage_text_codetimedoutrequestnewcode_web")})}}):this.setState({loading:!1,emailErrorMessage:"",emailConfirmErrorMessage:(0,l.AP)("Vos adresses email ne correspondent pas. Veuillez réessayer.")})})).catch((e=>{e instanceof o.jQ&&this.setState({loading:!1,emailErrorMessage:e.message})}))}))}}const w=(0,a.Ng)(null,{closeModal:i.Oo})(g)},JPzp:(e,t,r)=>{r.d(t,{d:()=>s}),r("/eM8");var n=r("nrKQ");const s=e=>new Promise(((t,r)=>{n.A.call({method:"userAuth.loginByArl",data:{ARL:e},success:t,error:r})}))},EYlq:(e,t,r)=>{r.d(t,{u:()=>s});var n=r("Wp0Y");const s=e=>{switch(e){case"invalid_msisdn":return(0,n.AP)("errormessage_text_invalidphonenumber_web");case"sms_login_limit":return(0,n.AP)("SMScoderesentconfirmationscreen_text_allattemptsused_web");case"internal_error":case"swap_limit":default:return(0,n.AP)("errormessage_text_anerroroccurredpleasetryagain_web");case"invalid_code":case"invalid_code_wrong":return(0,n.AP)("errormessage_text_invalidcode_web");case"code_too_short":return(0,n.AP)("errormessage_text_codeincomplete_web");case"code_too_long":return(0,n.AP)("errormessage_text_codetoomanydigits_web");case"phone_already_used":return(0,n.AP)("Ce numéro est déjà utilisé.")}}},"5U+Y":(e,t,r)=>{r.d(t,{D3:()=>c,D6:()=>a,K9:()=>s,d0:()=>o,fB:()=>i,wz:()=>n});const n=8,s=50,a=2,o=50,i=16,c=150},H9G8:(e,t,r)=>{r.d(t,{CZ:()=>_,Ee:()=>m,Hf:()=>i,In:()=>A,RQ:()=>u,SY:()=>c,U9:()=>d,aS:()=>O,jQ:()=>o,qb:()=>l,r_:()=>E,vM:()=>h});var n=r("Wp0Y"),s=r("5U+Y"),a=r("guCc");class o extends Error{constructor(e){super(e),this.name=a.U.FORM_ERROR}}class i extends o{constructor(){super((0,n.AP)("formerrormessage_text_emailaddressformatnotvalid_web")),this.name=a.U.EMAIL_NOT_VALID}}class c extends o{constructor(e){super((0,n.AP)("errormessage_text_domainnnamenotallowed_web",{sprintf:[e]})),this.name=a.U.EMAIL_DOMAIN_NOT_VALID}}class l extends o{constructor(){super((0,n.AP)("errormessage_title_accountalrdyassociatedwithemail_web")),this.name=a.U.EMAIL_ALREADY_USED}}class _ extends o{constructor(){super((0,n.WI)("formerrormessage_text_passwordnotenoughchars_web","formerrormessage_text_passwordnotenoughchars_web",{sprintf:[s.wz],count:s.wz})),this.name=a.U.PASSWORD_TOO_SHORT}}class m extends o{constructor(){super((0,n.WI)("formerrormessage_text_passwordtoomanychars_web","formerrormessage_text_passwordtoomanychars_web",{sprintf:[s.K9],count:s.K9})),this.name=a.U.PASSWORD_TOO_LONG}}class u extends o{constructor(){super((0,n.AP)("errormessage_text_passwordnbeginendwithspace_web")),this.name=a.U.PASSWORD_HAS_TRAILLING_WHITESPACE}}class d extends o{constructor(){super((0,n.WI)("formerrormessage_text_usernamenotenoughchars_web","formerrormessage_text_usernamenotenoughchars_web",{sprintf:[s.D6],count:s.D6})),this.name=a.U.BLOGNAME_TOO_SHORT}}class O extends o{constructor(){super((0,n.WI)("formerrormessage_text_usernametoomanychars_web","formerrormessage_text_usernametoomanychars_web",{sprintf:[s.d0],count:s.d0})),this.name=a.U.BLOGNAME_TOO_LONG}}class A extends o{constructor(){super((0,n.AP)("errormessage_text_usernamecannotcontainsemojis_web")),this.name=a.U.BLOGNAME_HAS_SPECIAL_CHARS}}class E extends o{constructor(e){super((0,n.WI)("agerestrictionerrormessage_text_mustbeXyearsentervaliddate_web","agerestrictionerrormessage_text_mustbeXyearsentervaliddate_web",{sprintf:[e],count:e})),this.name=a.U.MIN_LEGAL_AGE}}class h extends o{constructor(){super((0,n.AP)("errormessage_text_ageisinvalid_web")),this.name=a.U.AGE_INVALID}}},guCc:(e,t,r)=>{r.d(t,{U:()=>n,m:()=>s});let n=function(e){return e.AGE_INVALID="FORM_ERROR_AGE_INVALID",e.BLOGNAME_HAS_SPECIAL_CHARS="FORM_ERROR_BLOGNAME_HAS_SPECIAL_CHARS",e.BLOGNAME_TOO_LONG="FORM_ERROR_BLOGNAME_TOO_LONG",e.BLOGNAME_TOO_SHORT="FORM_ERROR_BLOGNAME_TOO_SHORT",e.EMAIL_ALREADY_USED="FORM_ERROR_EMAIL_ALREADY_USED",e.EMAIL_DOMAIN_NOT_VALID="FORM_ERROR_EMAIL_DOMAIN_NOT_VALID",e.EMAIL_NOT_VALID="FORM_ERROR_EMAIL_NOT_VALID",e.FORM_ERROR="FORM_ERROR",e.MIN_LEGAL_AGE="FORM_ERROR_MIN_LEGAL_AGE",e.PASSWORD_HAS_TRAILLING_WHITESPACE="FORM_ERROR_PASSWORD_HAS_TRAILLING_WHITESPACE",e.PASSWORD_TOO_LONG="FORM_ERROR_PASSWORD_TOO_LONG",e.PASSWORD_TOO_SHORT="FORM_ERROR_PASSWORD_TOO_SHORT",e}({}),s=function(e){return e[e.TOO_WEAK=0]="TOO_WEAK",e[e.WEAK=1]="WEAK",e[e.MEDIUM=2]="MEDIUM",e[e.STRONG=3]="STRONG",e}({})},zerP:(e,t,r)=>{r.d(t,{$O:()=>A,A$:()=>_,BE:()=>d,Hx:()=>E,PJ:()=>m,iE:()=>O,sR:()=>u}),r("WpbS"),r("/eM8");var n=r("nrKQ"),s=r("1EyH"),a=r("kSUS"),o=r("guCc"),i=r("H9G8"),c=r("5U+Y"),l=r("EYlq");const _=async(e,t=!1)=>{if(e=e.trim(),!(0,s.UC)(e))throw new i.Hf;const r=await n.A.callAsync({method:"deezer.emailCheck",data:{EMAIL:e}});if(!r.domain_validity)throw new i.SY(r.domain);if(r.availability)return t&&r.suggestion?{success:!0,suggestion:r.suggestion}:{success:!0};throw new i.qb},m=(0,a.A)(((e,t,r,n)=>_(e,t).then(r).catch(n)),400),u=e=>{const t=[/.*[A-Z]+.*/,/.*[a-z]+.*/,/.*[0-9]+.*/,/.*[^A-Za-z0-9]+.*/];if([/.*[0-9]+.*/,/.*[a-zA-Z]+.*/,/^.{8,}$/].reduce(((t,r)=>t&&r.test(e)),!0)){const r=t.reduce(((t,r)=>t+(r.test(e)?1:0)),0);return r>3?o.m.STRONG:r>2?o.m.MEDIUM:r>1?o.m.WEAK:o.m.TOO_WEAK}return o.m.TOO_WEAK},d=e=>{if(e!==e.trim())throw new i.RQ;if(e.length>c.K9)throw new i.Ee;if(e.length<c.wz)throw new i.CZ;return!0},O=e=>{if((e=e.trim()).length<c.D6)throw new i.U9;if(e.length>c.d0)throw new i.aS;if((0,s.Sx)(e)||(0,s.BB)(e))throw new i.In;return!0},A=e=>{if("string"==typeof e){if(!/^\d+$/.test(e.toString()))throw new i.vM;e=parseInt(e,10)}if(e<c.fB)throw new i.r_(c.fB);if(e>c.D3)throw new i.vM;return!0},E=e=>{if(0===e.length)throw new i.jQ((0,l.u)("invalid_code"));if(e.length<6)throw new i.jQ((0,l.u)("code_too_short"));if(e.length>6)throw new i.jQ((0,l.u)("code_too_long"));return!0}},"1EyH":(e,t,r)=>{r.d(t,{BB:()=>s,Sx:()=>n,UC:()=>a});const n=e=>/[\u2000-\u2BFF]/.test(e),s=e=>/[\u{10000}-\u{10FFFF}]/u.test(e),a=e=>!!e.match(/^[_0-9a-z-+]+[_.0-9a-z-+]*@([0-9a-z-]+\.)+[a-z]{2,13}$/i)}}]);