import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryForm, galleryList, galleryInput } from './js/refs';
import { createGallaryMarkup } from './js/render-functions';
import { getPhotos } from './js/pixabay-api';
import { showLoader, hiddeLoader } from './js/loader';

const lightbox = new SimpleLightbox('.js-gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
galleryForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const searchName = event.currentTarget.elements.search.value.trim();
  showLoader();
  galleryList.innerHTML = '';

  console.log(searchName);

  getPhotos(searchName)
    .then(res => {
      if (!searchName || res.hits.length === 0) {
        return iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: 330,
        });
      }

      galleryList.innerHTML = createGallaryMarkup(res.hits);

      lightbox.refresh();
      console.log(res.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hiddeLoader();
    });
  galleryInput.value = '';
}
