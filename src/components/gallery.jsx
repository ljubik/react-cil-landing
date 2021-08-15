import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import s from './modalLogout.module.css';
import Image from './image/Image';


export const Gallery = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);


//2variant from wallet


const onKeyClick = e => {
  if (e.code === 'Escape') {
    closeModal();
  }
}; 

document.addEventListener('keydown', onKeyClick);

  const openModale = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    closeModal(false)
  }


  const handleOpenModal = () => {
    setIsOpen(true);
    console.log("handle open", setIsOpen)
  };

  const closeModal = () => {
    setIsOpen(false)
  }





  return (
    <div id='portfolio' className='text-center'>

{/* <Modal
        className={s.modal}
        isOpen={openModale}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 className={s.modalExit}>Ты действительно хочеш выйти?</h2>
        <div className={s.modalBtn}>
          <button className={s.modalExitSucsess}>
            Да
          </button>
          <button className={s.modalExitCancel} onClick={handleCloseModal}>
            Нет
          </button>
        </div>
      </Modal> */}


      <div className='container'>
        <div className='section-title'>
          <h2>Галерея взірців</h2>
          <p>
            Тут можна перегялнути як виглядає той чи інший документ, штампи уповноважених органів, апостиль, легалізація. Оформлення документу.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  <a
                    href='img/portfolio/01-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                    onClick = {handleOpenModal}
                    data-toggle="modal"
                  >
                    <div className='hover-text'>
                      <h4>Lorem Ipsum test text</h4>
                    </div>
                    {/* <img
                      src='img/portfolio/01-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    /> */}
                    <Image
                      src="img/portfolio/01-large.jpg"
                      alt=""
                      className="img-responsive"
                      width={500}
                      height={333}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  <a
                    href='img/portfolio/02-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Adipiscing Elit</h4>
                    </div>
                    {/* <img
                      src='img/portfolio/02-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    /> */}
                    <Image
                      src="img/portfolio/02-large.jpg"
                      alt=""
                      className="img-responsive"
                      width={500}
                      height={333}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  <a
                    href='img/portfolio/03-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src='img/portfolio/03-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />
                  </a> 
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                   
                  <a
                    href='img/portfolio/04-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src='img/portfolio/04-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    /> 
                  </a> 
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                   
                  <a
                    href='img/portfolio/05-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img
                      src='img/portfolio/05-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    /> 
                  </a> 
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                   
                  <a
                    href='img/portfolio/06-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Dolor Sit</h4>
                    </div>
                    <img
                      src='img/portfolio/06-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    /> 
                  </a> 
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                   
                  <a
                    href='img/portfolio/07-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Dolor Sit</h4>
                    </div>
                    <img
                      src='img/portfolio/07-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    /> 
                  </a> 
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                   
                  <a
                    href='img/portfolio/08-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src='img/portfolio/08-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    /> 
                  </a> 
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                   
                  <a
                    href='img/portfolio/09-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img
                      src='img/portfolio/09-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    /> 
                  </a> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
