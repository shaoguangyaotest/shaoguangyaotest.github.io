window.onload=function(){var t=document.getElementById("canvas"),a=t.getContext("2d"),e=window.screen,o=t.width=e.width,n=t.height;t.width=o,t.height=n;for(var r=Math.floor(o/12),h=[],i=0;i<r;i++)h.push(0);var l="WELCOME TO WWW.ITRHX.COM";function C(){a.fillStyle="rgba(238,238,238,.08)",a.fillRect(0,0,o,n),a.font="600 12px  Georgia",a.fillStyle=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"][parseInt(10*Math.random())];for(var e=0;e<r;e++){var i=Math.floor(24*Math.random()),C=12*e,d=12*h[e];a.fillText(l[i],C,d),d>=t.height&&Math.random()>.99&&(h[e]=0),h[e]++}}C(),setInterval(C,35)};