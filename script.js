(function(){
var c=window.LANDING||{},$=function(s,r){return(r||document).querySelector(s)},$$=function(s){return[].slice.call(document.querySelectorAll(s))};
$$("[data-price]").forEach(function(e){e.textContent=c.price||"цена скоро"});
var soft=$$(".soft");
$$(".buy").forEach(function(b){
  if(c.purchaseUrl){b.href=c.purchaseUrl;b.target="_blank";b.rel="noopener";return}
  b.addEventListener("click",function(e){e.preventDefault();soft.forEach(function(s){s.classList.add("on")});var s=b.parentNode.querySelector(".soft");if(s&&b.closest(".bar")){s.classList.add("on")}})
});
function el(t,cl,tx){var e=document.createElement(t);if(cl)e.className=cl;if(tx)e.textContent=tx;return e}
if(c.books&&c.books.length){var g=$("#books-grid");c.books.forEach(function(b){var d=el("div","bk glass");if(b.cover){var i=el("img");i.src=b.cover;i.alt="";i.loading="lazy";d.appendChild(i)}var x=el("div");x.appendChild(el("h3","",b.title||"Книга"));if(b.description)x.appendChild(el("p","",b.description));if(b.url){var a=el("a","","Подробнее");a.href=b.url;a.target="_blank";a.rel="noopener";x.appendChild(a)}d.appendChild(x);g.appendChild(d)});$("#books").hidden=false}
if(c.ads&&c.ads.length){var ag=$("#ads-grid");c.ads.forEach(function(b){var d=el("div","bk glass");if(b.image){var i=el("img");i.src=b.image;i.alt="";i.loading="lazy";d.appendChild(i)}var x=el("div");x.appendChild(el("h3","",b.title||""));if(b.description)x.appendChild(el("p","",b.description));if(b.url){var a=el("a","","Открыть");a.href=b.url;a.target="_blank";a.rel="noopener sponsored";x.appendChild(a)}d.appendChild(x);ag.appendChild(d)});$("#ads").hidden=false}
var bar=$(".bar"),h=$(".hero-cta"),f=$("#final");
if("IntersectionObserver"in window){var hid=false,fin=false;function upd(){bar.classList.toggle("on",hid&&!fin)}
new IntersectionObserver(function(e){hid=!e[0].isIntersecting;upd()}).observe(h);
new IntersectionObserver(function(e){fin=e[0].isIntersecting;upd()}).observe(f)}else{bar.classList.add("on")}
})();
