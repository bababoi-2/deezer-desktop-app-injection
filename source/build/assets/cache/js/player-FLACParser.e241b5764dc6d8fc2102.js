"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[8158],{CP0o:(e,t,n)=>{n.d(t,{default:()=>p}),n("WpbS"),n("hB5o"),n("LvTk");var s=n("dgCO"),i=n("UWRA");const o="streaminfo",f=[o,8,12,null,16,20,24],c="seektable",a=["streaminfo","padding","application",c,"comment","cuesheet","picture"],r=[1,2,3,4,5,6,7,8,2,2,2],l=[0,7,14,9,28,27,18,21,56,63,54,49,36,35,42,45,112,119,126,121,108,107,98,101,72,79,70,65,84,83,90,93,224,231,238,233,252,251,242,245,216,223,214,209,196,195,202,205,144,151,158,153,140,139,130,133,168,175,166,161,180,179,186,189,199,192,201,206,219,220,213,210,255,248,241,246,227,228,237,234,183,176,185,190,171,172,165,162,143,136,129,134,147,148,157,154,39,32,41,46,59,60,53,50,31,24,17,22,3,4,13,10,87,80,89,94,75,76,69,66,111,104,97,102,115,116,125,122,137,142,135,128,149,146,155,156,177,182,191,184,173,170,163,164,249,254,247,240,229,226,235,236,193,198,207,200,221,218,211,212,105,110,103,96,117,114,123,124,81,86,95,88,77,74,67,68,25,30,23,16,5,2,11,12,33,38,47,40,61,58,51,52,78,73,64,71,82,85,92,91,118,113,120,127,106,109,100,99,62,57,48,55,34,37,44,43,6,1,8,15,26,29,20,19,174,169,160,167,178,181,188,187,150,145,152,159,138,141,132,131,222,217,208,215,194,197,204,203,230,225,232,239,250,253,244,243],u=[null,192,576,1152,2304,4608,-1,-2,256,512,1024,2048,4096,8192,16348,32768],m=[o,88200,176400,192e3,8e3,16e3,22050,24e3,32e3,44100,48e3,96e3,-1,-2,-2],g={seektable(e){const t=18*Math.floor(e.byteLength/18),n=4294967295,s=[];for(let i=0;i<t;i+=18){const t=e.getUint32(i),o=e.getUint32(i+4);t===n&&o===n||s.push({number:o,offset:e.getUint32(i+12),samples:e.getUint16(i+16)})}return s},streaminfo:e=>({blocks:{min:e.getUint16(0),max:e.getUint16(2)},frames:{min:e.getUint32(4)>>8,max:e.getUint32(7)>>8},sampling:e.getUint32(10)>>12,channels:1+(e.getUint8(12)>>1&7),bits:((1&e.getUint8(12))<<4)+(e.getUint8(13)>>4)+1,samples:((15&e.getUint8(13))<<32)+e.getUint32(14)>>>0,raw:new Uint8Array(e.buffer,e.byteOffset,e.byteLength).slice()})},p={frames(e,{streaminfo:t={}}={}){const n=e.byteLength,s=[];let i={},c=0;for(;c<n-6;c++){if(255!==e[c])continue;if(248!=(254&e[c+1]))continue;const n=e[c+2];let a=u[n>>4];if(!a)continue;if(t.blocks&&(a>t.blocks.max||a<t.blocks.min))continue;let g=m[15&n];if(g===o&&(g=t.sampling),!g)continue;const p=e[c+3],b=r[p>>4];if(!b)continue;if(t.channels&&t.channels!==b)continue;let h=f[(15&p)>>1];if(h===o&&(h=t.bits),!h)continue;if(t.bits&&t.bits!==h)continue;if(1&p)continue;const w=e[c+4];if(w>=128&&w<=191||w>=254)continue;const U=w>=192?w.toString(2).indexOf("0"):1;let d=0;if(-1===a?(d=1,a=e[c+3+U+1]+1):-2===a&&(d=2,a=(e[c+3+U+1]<<8)+e[c+3+U+2]+1),!a)continue;let y=0;if(-1===g?(y=1,g=1e3*e[c+3+U+d+1]):-2===g&&(y=2,g=(e[c+3+U+d+1]<<8)+e[c+3+U+d+2],g/=1&n?1:10),!g)continue;if(t.sampling&&t.sampling!==g)continue;const k=c+3+U+d+y+1;e[k]===e.slice(c,k).reduce(((e,t)=>l[t^e]),0)&&(i.size=c-i.offset,i={channels:b,offset:c,samples:a,sampling:g},s.push(i),c+=((t.frames?t.frames.min:0)||1)-1)}return e.buffer.last?i.size=n-i.offset:s.pop(),s},metadata(e){const t=e.byteLength;if(t<42)throw new s.yw;if(102!==e[0]||76!==e[1]||97!==e[2]||67!==e[3]){const t=Array.from(e).slice(0,8).map((e=>e.toString(16).padStart(2,"0").toUpperCase())).join(" ");throw"00 00 00 00"===t.substr(0,11)?new s.LV(t):new i.f(t)}const n={};let o,f=!1,r=4;for(;!f&&r<t-4;){f=Boolean(e[r]>>7);const t=a[127&e[r]],s=(e[r+1]<<16)+(e[r+2]<<8)+e[r+3];o=n[t]={offset:r,size:s+4},r+=4+s}if(!f)throw new s.yw;const l=Object.keys(g).map((e=>n[e])).filter(Boolean).reduce(((e,t)=>t&&t.offset>e.offset?t:e));if(l.offset+l.size>t){const e=new s.yw;throw e.needed=l.offset+l.size,e}return Object.keys(n).forEach((t=>{if(!g[t])return;const s=n[t],i=g[t](new DataView(e.buffer,s.offset+4,s.size-4));n[t]=t===c?{...s,table:i}:{...s,...i}})),n.size=o.offset+o.size,n}}}}]);