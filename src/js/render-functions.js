export function createGallaryMarkup(array) {
  return array
    .map(
      image =>
        `<li class="gallary-item">
          <a class="gallary-link" href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" data-source="${image.largeImageURL}">
        <div class="photo-legend">
         <ul class="list-legend">
            <li>
                <h3>Likes</h3>
                 <p>${image.likes}</p>
            </li>
            <li>
                <h3>Views</h3>
                <p>${image.views}</p>
            </li>
            <li>
                <h3>Comments</h3>
                <p>${image.comments}</p>
            </li>
            <li>
                <h3>Downloads</h3>
                <p>${image.downloads}</p>
            </li>
         </ul>
        </div>
        </a>
      </li>`
    )
    .join('');
}
