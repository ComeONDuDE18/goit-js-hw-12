import{a as L,i as w,S as E}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const P="47549535-932fbadf252bf563d10ac391d",v="https://pixabay.com/api/";async function m(t,r=1,a=15){const s={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:a};try{const{data:e}=await L.get(v,{params:s});return e}catch(e){throw console.error("Error fetching images:",e),e}}function q(t){return t.map(({largeImageURL:a,webformatURL:s,tags:e,likes:o,views:n,comments:y,downloads:b})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="image-thumbnail"
            src="${s}"
            alt="${e}"
            loading="lazy"
          />
          <div class="image-info">
            <p><b>Likes</b> ${o}</p>
            <p><b>Views</b> ${n}</p>
            <p><b>Comments</b> ${y}</p>
            <p><b>Downloads</b> ${b}</p>
          </div>
        </a>
      </li>`).join("")}function i(t){w.error({title:"Error",message:t,position:"topRight"})}const M=document.querySelector(".search-form"),h=document.querySelector(".gallery"),u=document.createElement("button");u.textContent="Load More";u.classList.add("load-more","hidden");document.body.append(u);let f="",c=1;const l=15;let p;p=new E(".gallery a",{captionsData:"alt",captionDelay:250});function d(t){u.classList.toggle("hidden",!t)}function S(){h.innerHTML=""}function g(t){h.insertAdjacentHTML("beforeend",q(t)),p.refresh()}M.addEventListener("submit",async t=>{if(t.preventDefault(),f=t.target.elements["search-query"].value.trim(),!f){i("Please enter a search query!");return}c=1,S(),d(!1);try{const r=await m(f,c,l);r.hits.length===0?i("Sorry, no images found. Try a different query."):(g(r.hits),d(r.hits.length===l))}catch{i("An error occurred. Please try again.")}});u.addEventListener("click",async()=>{var t;c+=1,d(!1);try{const r=await m(f,c,l);g(r.hits);const a=((t=h.firstElementChild)==null?void 0:t.getBoundingClientRect().height)||0;a&&window.scrollBy({top:a*2,behavior:"smooth"}),r.hits.length<l||r.totalHits<=c*l?(d(!1),i("We're sorry, but you've reached the end of search results.")):d(!0)}catch{i("An error occurred. Please try again.")}});
//# sourceMappingURL=index.js.map
