import{a as E,i as P,S as q}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const M="47549535-932fbadf252bf563d10ac391d",S="https://pixabay.com/api/";async function p(t,r=1,a=15){const n={key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:a};try{const{data:e}=await E.get(S,{params:n});return e}catch(e){throw console.error("Error fetching images:",e),e}}function $(t){return t.map(({largeImageURL:a,webformatURL:n,tags:e,likes:o,views:s,comments:w,downloads:v})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="image-thumbnail"
            src="${n}"
            alt="${e}"
            loading="lazy"
          />
          <div class="image-info">
            <p><b>Likes</b> ${o}</p>
            <p><b>Views</b> ${s}</p>
            <p><b>Comments</b> ${w}</p>
            <p><b>Downloads</b> ${v}</p>
          </div>
        </a>
      </li>`).join("")}function i(t){P.error({title:"Error",message:t,position:"topRight"})}const x=document.querySelector(".search-form"),m=document.querySelector(".gallery"),d=document.createElement("button");d.textContent="Load More";d.classList.add("load-more","hidden");document.body.append(d);const u=document.createElement("div");u.classList.add("loader","hidden");u.textContent="Loading...";document.body.append(u);let f="",c=1;const l=15;let y;y=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){d.classList.toggle("hidden",!t)}function g(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}function A(){m.innerHTML=""}function L(t){m.insertAdjacentHTML("beforeend",$(t)),y.refresh()}x.addEventListener("submit",async t=>{if(t.preventDefault(),f=t.target.elements["search-query"].value.trim(),!f){i("Please enter a search query!");return}c=1,A(),g();try{const r=await p(f,c,l);r.hits.length===0?i("Sorry, no images found. Try a different query."):(L(r.hits),h(r.hits.length===l))}catch{i("An error occurred. Please try again.")}finally{b()}});d.addEventListener("click",async()=>{var t;c+=1,h(!1),g();try{const r=await p(f,c,l);L(r.hits);const a=((t=m.firstElementChild)==null?void 0:t.getBoundingClientRect().height)||0;a&&window.scrollBy({top:a*2,behavior:"smooth"}),r.hits.length<l||r.totalHits<=c*l?(h(!1),i("We're sorry, but you've reached the end of search results.")):h(!0)}catch{i("An error occurred. Please try again.")}finally{b()}});
//# sourceMappingURL=index.js.map
