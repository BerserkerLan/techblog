import{m}from"./scheduler.081d6d8b.js";import{w as o}from"./paths.441ae76a.js";function S(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function k(t){const s=t-1;return s*s*s+1}function $(t,{delay:s=0,duration:p=400,easing:r=k,x:l=0,y:g=0,opacity:u=0}={}){const n=getComputedStyle(t),i=+n.opacity,h=n.transform==="none"?"":n.transform,d=i*(1-u),[x,y]=m(l),[f,b]=m(g);return{delay:s,duration:p,easing:r,css:(c,v)=>`
			transform: ${h} translate(${(1-c)*x}${y}, ${(1-c)*f}${b});
			opacity: ${i-d*v}`}}const A={},C=o([]),L=o([]),U=o({}),B=[{name:"cmyk",text:"🖨 Light"},{name:"dracula",text:"🧛 Dark"},{name:"valentine",text:"🌸 Valentine"},{name:"aqua",text:"💦 Aqua"},{name:"synthwave",text:"🌃 Synthwave"},{name:"night",text:"🌃 Night"},{name:"lofi",text:"🎶 Lo-Fi"},{name:"lemonade",text:"🍋 Lemonade"},{name:"cupcake",text:"🧁 Cupcake"},{name:"garden",text:"🏡 Garden"},{name:"retro",text:"🌇 Retro"},{name:"black",text:"🖤 Black"}],O={},R={nav:[{text:"GitHub",link:"https://github.com/BerserkerLan"}]},T={nav:[{text:"Feed",link:"/atom.xml"},{text:"Sitemap",link:"/sitemap.xml"},{text:"Source code",link:"https://github.com/BerserkerLan/TechBlog"}],html:'<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>'},P={locales:"en-US",options:{year:"numeric",weekday:"long",month:"short",day:"numeric"}},e={protocol:{}.URARA_SITE_PROTOCOL??!1?"http://":"https://",domain:"rushii.materii.dev",title:"PandaTech",subtitle:"A tech blog where I write opinions and helpful articless",lang:"en-US",description:"Heavily based on Urara Sveltekit",author:{avatar:"/assets/pixel_art_typing_panda.jpg",name:"CodePanda",status:"💻",bio:"A windows user that uses Linux periodically."},themeColor:"#3D4451"},V={src:e.protocol+e.domain+"/favicon.png",sizes:"48x48",type:"image/png"},j={180:{src:e.protocol+e.domain+"/assets/any@180.png",sizes:"180x180",type:"image/png"},192:{src:e.protocol+e.domain+"/assets/any@192.png",sizes:"192x192",type:"image/png"},512:{src:e.protocol+e.domain+"/assets/any@512.png",sizes:"512x512",type:"image/png"}},a="https://avatars.githubusercontent.com/u/33725716?v=4",q={192:{src:`${a}&size=192`,sizes:"192x192",type:"image/png"},512:{src:`${a}&size=512`,sizes:"512x512",type:"image/png"},1024:{src:`${a}&size=1024`,sizes:"1024x1024",type:"image/png"}};export{j as a,R as b,B as c,$ as d,S as e,V as f,C as g,O as h,L as i,P as j,T as k,q as m,A as p,e as s,U as t};
