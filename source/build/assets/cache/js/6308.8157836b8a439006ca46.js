"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[6308],{CqWf:(e,o,r)=>{r.d(o,{AM:()=>D,Rp:()=>O,ej:()=>T,hl:()=>z,DI:()=>H,Wv:()=>K});var n=r("q1tI"),t=r("IXMZ"),s=r("Ui1H"),a=r("W58G"),c=r("e6CJ"),i=r("3q0A"),u=()=>"undefined"!=typeof window,p=()=>{return(e=>u()&&e.test(function(){const e=navigator.userAgentData;return(null==e?void 0:e.platform)??navigator.platform}()))(/mac|iphone|ipad|ipod/i)&&(e=/apple/i,u()&&e.test(navigator.vendor));var e},d=r("HHCN"),v=r("EuCc");var m={preventScroll:!0,shouldFocus:!1},g=r("kTck"),P=r("68QY"),y=r("iDsS"),b=r("5Kqk"),h=r("NmXx"),w=(...e)=>e.filter(Boolean).join(" "),C=e=>"function"==typeof e;function k(...e){return function(o){e.some((e=>(null==e||e(o),null==o?void 0:o.defaultPrevented)))}}function E(...e){return function(o){e.forEach((e=>{null==e||e(o)}))}}var[_,N]=(0,a.q)({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[R,S]=(0,a.q)({name:"PopoverStylesContext",errorMessage:"usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Popover />\" "}),x={click:"click",hover:"hover"};function A(e={}){const{closeOnBlur:o=!0,closeOnEsc:r=!0,initialFocusRef:t,id:s,returnFocusOnClose:a=!0,autoFocus:u=!0,arrowSize:l,arrowShadowColor:b,trigger:h=x.click,openDelay:w=200,closeDelay:C=200,isLazy:E,lazyBehavior:_="unmount",computePositionOnMount:N,...R}=e,{isOpen:S,onClose:A,onOpen:D,onToggle:O}=(0,g.j)(e),T=(0,n.useRef)(null),F=(0,n.useRef)(null),q=(0,n.useRef)(null),U=(0,n.useRef)(!1),I=(0,n.useRef)(!1);S&&(I.current=!0);const[z,H]=(0,n.useState)(!1),[K,L]=(0,n.useState)(!1),$=(0,n.useId)(),J=s??$,[j,W,X,G]=["popover-trigger","popover-content","popover-header","popover-body"].map((e=>`${e}-${J}`)),{referenceRef:Q,getArrowProps:Y,getPopperProps:Z,getArrowInnerProps:V,forceUpdate:ee}=(0,P.E)({...R,enabled:S||!!N}),oe=function(e){const{isOpen:o,ref:r}=e,[t,s]=(0,n.useState)(o),[a,u]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{a||(s(o),u(!0))}),[o,a,t]),(0,c.M)((()=>r.current),"animationend",(()=>{s(o)})),{present:!(!o&&!t),onComplete(){var e;const o=new((0,i.mD)(r.current).CustomEvent)("animationend",{bubbles:!0});null==(e=r.current)||e.dispatchEvent(o)}}}({isOpen:S,ref:q});!function(e){const{ref:o,elements:r,enabled:n}=e,t=()=>{var e;return(null==(e=o.current)?void 0:e.ownerDocument)??document};(0,c.M)(t,"pointerdown",(e=>{if(!p()||!n)return;const s=e.target,a=(r??[o]).some((e=>{const o="current"in e?e.current:e;return(null==o?void 0:o.contains(s))||o===s}));t().activeElement!==s&&a&&(e.preventDefault(),s.focus())}))}({enabled:S,ref:F}),function(e,o){const{shouldFocus:r,visible:n,focusRef:t}=o,s=r&&!n;(0,v.w)((()=>{if(!s)return;if(function(e){const o=e.current;if(!o)return!1;const r=(0,i.bq)(o);return!!r&&!o.contains(r)&&!!(0,i.AO)(r)}(e))return;const o=(null==t?void 0:t.current)||e.current;o&&requestAnimationFrame((()=>{o.focus()}))}),[s,e,t])}(q,{focusRef:F,visible:S,shouldFocus:a&&h===x.click}),function(e,o=m){const{focusRef:r,preventScroll:t,shouldFocus:s,visible:a}=o,u="current"in e?e.current:e,l=s&&a,p=(0,n.useRef)(l),f=(0,n.useRef)(a);(0,d.U)((()=>{!f.current&&a&&(p.current=l),f.current=a}),[a,l]);const g=(0,n.useCallback)((()=>{if(a&&u&&p.current&&(p.current=!1,!u.contains(document.activeElement)))if(null==r?void 0:r.current)requestAnimationFrame((()=>{var e;null==(e=r.current)||e.focus({preventScroll:t})}));else{const e=(0,i.ep)(u);e.length>0&&requestAnimationFrame((()=>{e[0].focus({preventScroll:t})}))}}),[a,t,u,r]);(0,v.w)((()=>{g()}),[g]),(0,c.M)(u,"transitionend",g)}(q,{focusRef:t,visible:S,shouldFocus:u&&h===x.click});const re=function(e){const{wasSelected:o,enabled:r,isSelected:n,mode:t="unmount"}=e;return!r||!!n||!("keepMounted"!==t||!o)}({wasSelected:I.current,enabled:E,mode:_,isSelected:oe.present}),ne=(0,n.useCallback)(((e={},n=null)=>{const t={...e,style:{...e.style,transformOrigin:P.U.transformOrigin.varRef,[P.U.arrowSize.var]:l?`${l}px`:void 0,[P.U.arrowShadowColor.var]:b},ref:(0,y.Px)(q,n),children:re?e.children:null,id:W,tabIndex:-1,role:"dialog",onKeyDown:k(e.onKeyDown,(e=>{r&&"Escape"===e.key&&A()})),onBlur:k(e.onBlur,(e=>{const r=M(e),n=B(q.current,r),t=B(F.current,r);S&&o&&!n&&!t&&A()})),"aria-labelledby":z?X:void 0,"aria-describedby":K?G:void 0};return h===x.hover&&(t.role="tooltip",t.onMouseEnter=k(e.onMouseEnter,(()=>{U.current=!0})),t.onMouseLeave=k(e.onMouseLeave,(e=>{null!==e.nativeEvent.relatedTarget&&(U.current=!1,setTimeout((()=>A()),C))}))),t}),[re,W,z,X,K,G,h,r,A,S,o,C,b,l]),te=(0,n.useCallback)(((e={},o=null)=>Z({...e,style:{visibility:S?"visible":"hidden",...e.style}},o)),[S,Z]),se=(0,n.useCallback)(((e,o=null)=>({...e,ref:(0,y.Px)(o,T,Q)})),[T,Q]),ae=(0,n.useRef)(),ce=(0,n.useRef)(),ie=(0,n.useCallback)((e=>{null==T.current&&Q(e)}),[Q]),ue=(0,n.useCallback)(((e={},r=null)=>{const n={...e,ref:(0,y.Px)(F,r,ie),id:j,"aria-haspopup":"dialog","aria-expanded":S,"aria-controls":W};return h===x.click&&(n.onClick=k(e.onClick,O)),h===x.hover&&(n.onFocus=k(e.onFocus,(()=>{void 0===ae.current&&D()})),n.onBlur=k(e.onBlur,(e=>{const r=M(e),n=!B(q.current,r);S&&o&&n&&A()})),n.onKeyDown=k(e.onKeyDown,(e=>{"Escape"===e.key&&A()})),n.onMouseEnter=k(e.onMouseEnter,(()=>{U.current=!0,ae.current=window.setTimeout((()=>D()),w)})),n.onMouseLeave=k(e.onMouseLeave,(()=>{U.current=!1,ae.current&&(clearTimeout(ae.current),ae.current=void 0),ce.current=window.setTimeout((()=>{!1===U.current&&A()}),C)}))),n}),[j,S,W,h,ie,O,D,o,A,w,C]);(0,n.useEffect)((()=>()=>{ae.current&&clearTimeout(ae.current),ce.current&&clearTimeout(ce.current)}),[]);const le=(0,n.useCallback)(((e={},o=null)=>({...e,id:X,ref:(0,y.Px)(o,(e=>{H(!!e)}))})),[X]),pe=(0,n.useCallback)(((e={},o=null)=>({...e,id:G,ref:(0,y.Px)(o,(e=>{L(!!e)}))})),[G]);return{forceUpdate:ee,isOpen:S,onAnimationComplete:oe.onComplete,onClose:A,getAnchorProps:se,getArrowProps:Y,getArrowInnerProps:V,getPopoverPositionerProps:te,getPopoverProps:ne,getTriggerProps:ue,getHeaderProps:le,getBodyProps:pe}}function B(e,o){return e===o||(null==e?void 0:e.contains(o))}function M(e){const o=e.currentTarget.ownerDocument.activeElement;return e.relatedTarget??o}function D(e){const o=(0,t.o5)("Popover",e),{children:r,...a}=(0,s.MN)(e),c=A({...a,direction:(0,t.DP)().direction});return n.createElement(_,{value:c},n.createElement(R,{value:o},function(e,...o){return C(e)?e(...o):e}(r,{isOpen:c.isOpen,onClose:c.onClose,forceUpdate:c.forceUpdate})))}function O(e){const{bg:o,bgColor:r,backgroundColor:s}=e,{getArrowProps:a,getArrowInnerProps:c}=N(),i=S(),u=o??r??s;return n.createElement(t.Bv.div,{...a(),className:"chakra-popover__arrow-positioner"},n.createElement(t.Bv.div,{className:w("chakra-popover__arrow",e.className),...c(e),__css:{...i.arrow,"--popper-arrow-bg":u?`colors.${u}, ${u}`:void 0}}))}D.displayName="Popover",O.displayName="PopoverArrow";var T=(0,t.Rf)((function(e,o){const{getBodyProps:r}=N(),s=S();return n.createElement(t.Bv.div,{...r(e,o),className:w("chakra-popover__body",e.className),__css:s.body})}));function F(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}T.displayName="PopoverBody",(0,t.Rf)((function(e,o){const{onClose:r}=N(),t=S();return n.createElement(b.J,{size:"sm",onClick:r,className:w("chakra-popover__close-btn",e.className),__css:t.closeButton,ref:o,...e})})).displayName="PopoverCloseButton";var q={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},U=(0,t.Bv)(h.P.section),I=(0,t.Rf)((function(e,o){const{variants:r=q,...t}=e,{isOpen:s}=N();return n.createElement(U,{ref:o,variants:F(r),initial:!1,animate:s?"enter":"exit",...t})}));I.displayName="PopoverTransition";var z=(0,t.Rf)((function(e,o){const{rootProps:r,motionProps:s,...a}=e,{getPopoverProps:c,getPopoverPositionerProps:i,onAnimationComplete:u}=N(),l=S(),p={position:"relative",display:"flex",flexDirection:"column",...l.content};return n.createElement(t.Bv.div,{...i(r),__css:l.popper,className:"chakra-popover__popper"},n.createElement(I,{...s,...c(a,o),onAnimationComplete:E(u,a.onAnimationComplete),className:w("chakra-popover__content",e.className),__css:p}))}));z.displayName="PopoverContent";var H=(0,t.Rf)((function(e,o){const{getHeaderProps:r}=N(),s=S();return n.createElement(t.Bv.header,{...r(e,o),className:w("chakra-popover__header",e.className),__css:s.header})}));function K(e){const o=n.Children.only(e.children),{getTriggerProps:r}=N();return(0,n.cloneElement)(o,r(o.props,o.ref))}H.displayName="PopoverHeader",K.displayName="PopoverTrigger"}}]);