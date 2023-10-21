import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchPhotos from 'helpers/fetchPhotos';
import css from 'app.module.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState(null);
  const [alt, setAlt] = useState(null);
  const onSubmitSearchForm = data => {
    if (data === query) return;
    setQuery(data);
    setPhotos([]);
    setPage(1);
  };
  useEffect(() => {
    if (!query) return;
    const getPhotos = async () => {
      setIsLoading(true);
      try {
        const { hits, totalHits } = await fetchPhotos({ q: query, page: page });

        if (hits.length > 0) {
          setPhotos(prev => [...prev, ...hits]);
          setLoadMore(page < Math.ceil(totalHits / 12));
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos();
  }, [query, page]);

  const loadMoreBtnHandler = () => {
    setPage(prev => prev + 1);
  };

  const openModalHandler = () => {
    setShowModal(prev => !prev);
  };
  const largePhoto = ({ src, alt }) => {
    setAlt(alt);
    setSrc(src);
    openModalHandler();
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={onSubmitSearchForm} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClick={largePhoto} />
      )}
      {isLoading && <Loader />}
      {loadMore && <Button onClick={loadMoreBtnHandler} />}
      {showModal && (
        <Modal modalHandler={openModalHandler} src={src} alt={alt} />
      )}
    </div>
  );
}