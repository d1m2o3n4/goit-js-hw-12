import{a as g,S as y,i as d}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const L=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery-list"),b=document.querySelector(".js-search-input"),h=document.querySelector(".loader"),l=document.querySelector(".js-add-more-btn");function f(r){return r.map(e=>`<li class="gallary-item">
          <a class="gallary-link" href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" data-source="${e.largeImageURL}">
        <div class="photo-legend">
         <ul class="list-legend">
            <li>
                <h3>Likes</h3>
                 <p>${e.likes}</p>
            </li>
            <li>
                <h3>Views</h3>
                <p>${e.views}</p>
            </li>
            <li>
                <h3>Comments</h3>
                <p>${e.comments}</p>
            </li>
            <li>
                <h3>Downloads</h3>
                <p>${e.downloads}</p>
            </li>
         </ul>
        </div>
        </a>
      </li>`).join("")}async function p(r,e){const o="43345274-6407b89b04ec6e3f08542a7e7",i="https://pixabay.com/api",t=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"portrait",page:e,per_page:15,safesearch:!0});return await g.get(`${i}/?${t}`)}function w(){h.classList.remove("is-hidden")}function m(){h.classList.add("is-hidden")}const v=new y(".js-gallery-list a",{captionsData:"alt",captionDelay:250});let a=1,n=null;L.addEventListener("submit",S);l.addEventListener("click",$);async function S(r){r.preventDefault(),n=r.currentTarget.elements.search.value.trim(),w(),l.classList.add("is-hidden"),u.innerHTML="",a=1;try{const{data:{hits:e,total:o}}=await p(n,a);if(o>0&&d.success({position:"topRight",message:`We found ${o} images!`}),!n||e.length===0)return d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:330});u.innerHTML=f(e),o>15&&l.classList.remove("is-hidden"),v.refresh()}catch(e){console.log(e)}finally{m()}b.value=""}async function $(){a+=1;try{const{data:{hits:r,total:e}}=await p(n,a);u.insertAdjacentHTML("beforeend",f(r));const{height:o}=document.querySelector(".js-gallery-list").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),Math.ceil(e/15)===a&&(l.classList.add("is-hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.log(r)}finally{m()}}
//# sourceMappingURL=commonHelpers.js.map
