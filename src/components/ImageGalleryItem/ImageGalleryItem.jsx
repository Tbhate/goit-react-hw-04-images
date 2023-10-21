import css from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ onClick, description, largePhoto, preview }) => {
  const imgClickHandler = () => {
    const needPhoto = {
      src: largePhoto,
      alt: description,
    };
    onClick(needPhoto);
  };

  return (
    <li className={css.ImageGalleryItem} onClick={imgClickHandler}>
      <img
        className={css.ImageGalleryItemImage}
        src={preview}
        alt={description}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  description: PropTypes.string,
  largePhoto: PropTypes.string,
  preview: PropTypes.string,
};
export default ImageGalleryItem;
