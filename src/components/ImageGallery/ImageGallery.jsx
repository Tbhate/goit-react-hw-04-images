import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './imageGallery.module.css';
import PropTypes from 'prop-types';
const ImageGallery = ({ onClick, photos }) => {
  const imgClickHandler = photoObj => {
    onClick(photoObj);
  };

  return (
    <ul className={css.ImageGallery}>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          largePhoto={largeImageURL}
          preview={webformatURL}
          description={tags}
          onClick={imgClickHandler}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  onClick: PropTypes.func,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};
export default ImageGallery;