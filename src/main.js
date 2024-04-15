import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  galleryForm,
  galleryList,
  galleryInput,
  loadMoreBtn,
} from './js/refs.js';
import { createGallaryMarkup } from './js/render-functions.js';
import { getPhotos } from './js/pixabay-api.js';
import { showLoader, hiddeLoader } from './js/loader.js';

const lightbox = new SimpleLightbox('.js-gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
let page = 1;
let searchName = null;
galleryForm.addEventListener('submit', submitForm);
loadMoreBtn.addEventListener('click', onClick);

async function submitForm(event) {
  event.preventDefault();

  searchName = event.currentTarget.elements.search.value.trim();
  showLoader();
  loadMoreBtn.classList.add('is-hidden');
  galleryList.innerHTML = '';
  page = 1;

  try {
    const {
      data: { hits, total },
    } = await getPhotos(searchName, page);
    if (total > 0) {
      iziToast.success({
        position: 'topRight',
        message: `We found ${total} images!`,
      });
    }
    if (!searchName || hits.length === 0) {
      galleryInput.value = '';
      return iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        maxWidth: 330,
      });
    }
    galleryList.innerHTML = createGallaryMarkup(hits);
    if (total > 15) {
      loadMoreBtn.classList.remove('is-hidden');
    }
    lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    hiddeLoader();
  }
  galleryInput.value = '';

  // getPhotos(searchName, page)
  //   .then(res => {
  //     console.log(res);
  //     if (!searchName || res.data.hits.length === 0) {
  //       return iziToast.error({
  //         position: 'topRight',
  //         message:
  //           'Sorry, there are no images matching your search query. Please try again!',
  //         maxWidth: 330,
  //       });
  //     }

  //     galleryList.innerHTML = createGallaryMarkup(res.data.hits);

  //     lightbox.refresh();
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  //   .finally(() => {
  //     hiddeLoader();
  //   });
  // galleryInput.value = '';
}
async function onClick() {
  page += 1;
  try {
    const {
      data: { hits, total },
    } = await getPhotos(searchName, page);
    galleryList.insertAdjacentHTML('beforeend', createGallaryMarkup(hits));
    const { height: cardHeight } = document
      .querySelector('.js-gallery-list')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    const lastPage = Math.ceil(total / 15);
    if (lastPage === page) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hiddeLoader();
  }
}
