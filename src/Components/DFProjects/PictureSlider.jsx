/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PictureSlider = ({ project1, project2, project3, project4, project5 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openSlider = (images) => {
    setSelectedImages(images);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setSelectedImages([]);
    setIsOpen(false);
  };

  const renderInitialPictures = () => {
    const initialPictures = [];

    if (project1 && project1.length > 0) {
      initialPictures.push(
        <div key="project1">
          <img
            src={project1[0]}
            alt="Project 1"
            onClick={() => openSlider(project1)}
            className="cursor-pointer w-96"
          />
        </div>
      );
    }

    if (project2 && project2.length > 0) {
      initialPictures.push(
        <div key="project2">
          <img
            src={project2[0]}
            alt="Project 2"
            onClick={() => openSlider(project2)}
            className="cursor-pointer w-96"
          />
        </div>
      );
    }

    if (project3 && project3.length > 0) {
      initialPictures.push(
        <div key="project3">
          <img
            src={project3[0]}
            alt="Project 3"
            onClick={() => openSlider(project3)}
            className="cursor-pointer w-96"
          />
        </div>
      );
    }

    if (project4 && project4.length > 0) {
      initialPictures.push(
        <div key="project4">
          <img
            src={project4[0]}
            alt="Project 4"
            onClick={() => openSlider(project4)}
            className="cursor-pointer w-96"
          />
        </div>
      );
    }

    if (project5 && project5.length > 0) {
      initialPictures.push(
        <div key="project5">
          <img
            src={project5[0]}
            alt="Project 5"
            onClick={() => openSlider(project5)}
            className="cursor-pointer w-96"
          />
        </div>
      );
    }

    return initialPictures;
  };

  return (
    <div className='my-20'>
      <div className='flex justify-center w-11/12 mx-auto'>

      {!isOpen && <div className="grid grid-cols-2 items-center text-center gap-20">{renderInitialPictures()}</div>}
      </div>

      {isOpen && (
        <div>
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-10">
            <button
              onClick={closeSlider}
              className="text-white text-3xl absolute top-2 right-4"
            >
              &times;
            </button>
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop={true}
              onClickItem={() => closeSlider()}
              className="z-20 w-1/2"
            >
              {selectedImages.map((image, index) => (
                <div key={index}>
                
                  <img src={image} alt={`Slide ${index}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default PictureSlider;
