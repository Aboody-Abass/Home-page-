console.log("hello world");
let menu = document.getElementById("icoMenu");
let ul = document.getElementById("ul");
let logo = document.getElementById("logo");
let search = document.getElementById("search");
let nav = document.getElementById("nav");

ul.style.flexDirection="column";
ul.style.height="0";
ul.style.top="100%";
ul.style.left="0";
ul.style.width="100%";
menu.style.marginRight="60px";
let a = 0;
let b = 0;

let putSearch = document.createElement("input");
putSearch.style.height="0%";
putSearch.style.width="0%";
putSearch.style.padding="5px";
putSearch.style.outline="none";
putSearch.style.margin="8%";


let width =window.innerWidth;
if (width<767) {
  
menu.onclick=()=>{
  if (a==0) {
    ul.style.position="absolute";
    ul.style.background="rgba(29, 27, 27, 0.726)";
    ul.style.display="flex";
    menu.style.marginRight="60px";
  setTimeout(()=>{
    ul.style.height="370%";
  },500);
  a=2;
}
else if(a==2){
    ul.style.height="370%";
    ul.style.height="0%";
  setTimeout(()=>{
    ul.style.display="none";
  },500);
  a=0;
}
}

for (var i = 0; i < ul.children.length; i++) {
  ul.children[i].onclick=()=>{
    ul.style.height="370%";
    ul.style.height="0%";
  setTimeout(()=>{
    ul.style.display="none";
  },500);
  a=0;

}
}

search.onclick=()=>{
  if (a==0) {
  menu.style.transform="translate(-20px)";
  logo.style.transform="translate(-20px)";
  setTimeout(()=>{
    logo.style.opacity="0";
    menu.style.opacity="0";
  },200);
  setTimeout(()=>{
    logo.style.width="0";
    menu.style.width="0";
  },300);
  setTimeout(()=>{
    menu.style.display="none";
    logo.style.display="none";
  },400);
  nav.appendChild(putSearch);
  setTimeout(()=>{
    putSearch.style.height="5%";
    putSearch.style.width="80%";
  },500);
  a=3;
  }
  else if(a==3){
    putSearch.style.height="0%";
    putSearch.style.width="0%";
    setTimeout(()=>{
      putSearch.remove();
    },500);
    setTimeout(()=>{
      menu.style.display="block";
      logo.style.display="flex";
      logo.style.alignItems="center";
      logo.style.margin="15px 0";
      
    },600);
    setTimeout(()=>{
      menu.style.transform="translate(0px)";
      logo.style.transform="translate(0px)";
      logo.style.opacity="1";
       menu.style.opacity="1";
      logo.style.height="60px";
      menu.style.width="auto";
    },1000);
    a=0;
  }
  
}

// end-navbar

let h1 = document.getElementById("h2");
let h2 = document.getElementById("h1");
//console.log(h1.textContent.length);

let hh1 = h1.textContent;
let hhh1 = hh1.length;
let c = 0;
h1.textContent=hh1.slice(0,0);
h2.style.display="none";
h2.style.transform="translate(-15px)";
h2.style.transition="1s";


setTimeout(()=>{
  h2.style.display="block";
    h2.style.opacity="0";
},2000);


setTimeout(()=>{
      h2.style.transform="translate(0px)";
      h2.style.opacity="1";
    },2500);
    

setTimeout(()=>{
    
    
    setInterval(()=>{
    h1.textContent=hh1.slice(0,c);
    c++;
  },50);
},3000);

}
else if (width>=767) {
  
  search.onclick=()=>{
  if (a==0) {
  menu.style.transform="translate(-20px)";
  logo.style.transform="translate(-20px)";
  setTimeout(()=>{
    logo.style.opacity="0";
    menu.style.opacity="0";
  },200);
  setTimeout(()=>{
    logo.style.width="0";
    menu.style.width="0";
  },300);
  setTimeout(()=>{
    menu.style.display="none";
    logo.style.display="none";
  },400);
  nav.appendChild(putSearch);
  setTimeout(()=>{
    putSearch.style.height="5%";
    putSearch.style.width="80%";
  },500);
  a=3;
  }
  else if(a==3){
    putSearch.style.height="0%";
    putSearch.style.width="0%";
    setTimeout(()=>{
      putSearch.remove();
    },500);
    setTimeout(()=>{
      menu.style.display="block";
      logo.style.display="flex";
      logo.style.alignItems="center";
      logo.style.margin="15px 0";
      
    },600);
    setTimeout(()=>{
      menu.style.transform="translate(0px)";
      logo.style.transform="translate(0px)";
      logo.style.opacity="1";
       menu.style.opacity="1";
      logo.style.height="60px";
      menu.style.width="auto";
    },1000);
    a=0;
  }
  
}

menu.onclick=()=>{
  if (a==0) {
    ul.style.flexDirection="row";
    ul.style.position="absolute";
    ul.style.background="rgba(29, 27, 27, 0.726)";
    ul.style.display="flex";
    menu.style.marginRight="60px";
    ul.style.width="0%";
  setTimeout(()=>{
    ul.style.height="100%";
    setTimeout(()=>{
      ul.style.width="100%";
    },50);
  },150);
  a=2;
}
else if(a==2){
    ul.style.height="370%";
    ul.style.height="0%";
  setTimeout(()=>{
    ul.style.display="none";
  },500);
  a=0;
}
}

for (var i = 0; i < ul.children.length; i++) {
  ul.children[i].onclick=()=>{
    ul.style.height="100%";
    ul.style.height="0%";
  setTimeout(()=>{
    ul.style.display="none";
  },500);
  a=0;

}
}

let h1 = document.getElementById("h2");
let h2 = document.getElementById("h1");
putSearch.style.margin="5%";
//console.log(h1.textContent.length);

let hh1 = h1.textContent;
let hhh1 = hh1.length;
let c = 0;
h1.textContent=hh1.slice(0,0);
h2.style.display="none";
h2.style.transform="translate(-15px)";
h2.style.transition="1s";


setTimeout(()=>{
  h2.style.display="block";
    h2.style.opacity="0";
},2000);


setTimeout(()=>{
      h2.style.transform="translate(0px)";
      h2.style.opacity="1";
    },2500);
    

setTimeout(()=>{
    
    
    setInterval(()=>{
    h1.textContent=hh1.slice(0,c);
    c++;
  },50);
},3000);

}
