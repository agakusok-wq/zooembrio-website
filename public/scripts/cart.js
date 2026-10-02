const KEY="zooembrio_cart_v1";
function read(){try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch{return[]}}
function write(items){localStorage.setItem(KEY,JSON.stringify(items));badge();window.dispatchEvent(new CustomEvent("cart:updated",{detail:items}))}
function badge(){const n=read().reduce((s,i)=>s+i.qty,0);document.querySelectorAll("[data-cart-count]").forEach(el=>{el.textContent=String(n)})}
window.ZooCart={read,write,add(p,q=1){const items=read();const f=items.find(i=>i.id===p.id);if(f)f.qty+=q;else items.push({...p,qty:q});write(items)},setQty(id,qty){write(read().map(i=>i.id===id?{...i,qty:Math.max(1,qty)}:i))},remove(id){write(read().filter(i=>i.id!==id))},clear(){write([])}};
document.addEventListener("click",(e)=>{const b=e.target.closest("[data-add-to-cart]");if(!b)return;window.ZooCart.add(JSON.parse(b.getAttribute("data-add-to-cart")));b.textContent="✓";setTimeout(()=>b.textContent="В корзину",1000)});
document.addEventListener("DOMContentLoaded",badge);