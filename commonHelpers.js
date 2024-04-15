import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery-list"),h=document.querySelector(".js-search-input"),a=document.querySelector(".loader");function f(s){return s.map(t=>`<li class="gallary-item">
          <a class="gallary-link" href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" data-source="${t.largeImageURL}">
        <div class="photo-legend">
         <ul class="list-legend">
            <li>
                <h3>Likes</h3>
                 <p>${t.likes}</p>
            </li>
            <li>
                <h3>Views</h3>
                <p>${t.views}</p>
            </li>
            <li>
                <h3>Comments</h3>
                <p>${t.comments}</p>
            </li>
            <li>
                <h3>Downloads</h3>
                <p>${t.downloads}</p>
            </li>
         </ul>
        </div>
        </a>
      </li>`).join("")}function p(s){const t="43345274-6407b89b04ec6e3f08542a7e7",o="https://pixabay.com/api",i=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"portrait",safesearch:!0});return fetch(`${o}/?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m(){a.classList.remove("is-hidden")}function y(){a.classList.add("is-hidden")}const g=new c(".js-gallery-list a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",L);function L(s){s.preventDefault();const t=s.currentTarget.elements.search.value.trim();m(),l.innerHTML="",console.log(t),p(t).then(o=>{if(!t||o.hits.length===0)return u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:330});l.innerHTML=f(o.hits),g.refresh(),console.log(o.hits)}).catch(o=>{console.log(o)}).finally(()=>{y()}),h.value=""}
//# sourceMappingURL=commonHelpers.js.map
