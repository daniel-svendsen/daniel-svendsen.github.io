import{r as u}from"./vendor-react-CO8zX_jG.js";function n(e){const t=[...e];for(let f=t.length-1;f>0;f--){const r=Math.floor(Math.random()*(f+1));[t[f],t[r]]=[t[r],t[f]]}return t}function s(e){const[t,f]=u.useState([]),r=u.useRef(!1);return u.useEffect(()=>{!r.current&&(e==null?void 0:e.length)>0&&(f(n(e)),r.current=!0)},[e]),t}export{s as u};
