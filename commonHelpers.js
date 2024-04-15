import{a as y,S as L,i as d}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const b=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery-list"),h=document.querySelector(".js-search-input"),f=document.querySelector(".loader"),l=document.querySelector(".js-add-more-btn");function p(r){return r.map(e=>`<li class="gallary-item">
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
      </li>`).join("")}async function m(r,e){const o="43345274-6407b89b04ec6e3f08542a7e7",i="https://pixabay.com/api",t=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"portrait",page:e,per_page:15,safesearch:!0});return await y.get(`${i}/?${t}`)}function v(){f.classList.remove("is-hidden")}function g(){f.classList.add("is-hidden")}const w=new L(".js-gallery-list a",{captionsData:"alt",captionDelay:250});let a=1,n=null;b.addEventListener("submit",S);l.addEventListener("click",$);async function S(r){r.preventDefault(),n=r.currentTarget.elements.search.value.trim(),v(),l.classList.add("is-hidden"),u.innerHTML="",a=1;try{const{data:{hits:e,total:o}}=await m(n,a);if(o>0&&d.success({position:"topRight",message:`We found ${o} images!`}),!n||e.length===0)return h.value="",d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:330});u.innerHTML=p(e),o>15&&l.classList.remove("is-hidden"),w.refresh()}catch(e){console.log(e)}finally{g()}h.value=""}async function $(){a+=1;try{const{data:{hits:r,total:e}}=await m(n,a);u.insertAdjacentHTML("beforeend",p(r));const{height:o}=document.querySelector(".js-gallery-list").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),Math.ceil(e/15)===a&&(l.classList.add("is-hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.log(r)}finally{g()}}
//# sourceMappingURL=commonHelpers.js.map
