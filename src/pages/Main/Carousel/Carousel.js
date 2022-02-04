import React, { useEffect, useState } from 'react';
import CarouselItem from './CarouselItem/CarouselItem';
import './Carousel.scss';

const Carousel = ({
  className,
  dataList,
  showingItemCount,
  hasPagination,
  hasIntroduction,
  introduction,
  isLoop,
}) => {
  if (!showingItemCount) showingItemCount = 3;
  const totalItemCount = hasIntroduction
    ? dataList.length + 1
    : dataList.length;
  const [slideIndex, setSlideIndex] = useState(0);
  let movingIndex = isLoop ? slideIndex + 1 : slideIndex;

  const onClick = event => {
    const isPrev = event.target.className.includes('prev');
    const isNext = event.target.className.includes('next');

    if (isPrev) {
      if (isLoop && slideIndex === 0) {
        movingIndex = -1;
        setSlideIndex(totalItemCount - 1);
      } else {
        setSlideIndex(curr => --curr);
      }
    }
    if (isNext) {
      if (isLoop && slideIndex === totalItemCount - 1) {
        movingIndex = totalItemCount;
        setSlideIndex(0);
      } else {
        setSlideIndex(curr => ++curr);
      }
    }
  };

  useEffect(() => {
    console.log(slideIndex);
  }, [slideIndex]);

  const firstSlide =
    slideIndex === 0 && !isLoop
      ? {
          style: { transform: 'translateX(-80px)' },
        }
      : null;

  const lastSlide =
    slideIndex === totalItemCount - Math.floor(showingItemCount) && !isLoop
      ? {
          style: { transform: 'translateX(80px)' },
        }
      : null;

  return (
    <div className={`Carousel ${className}`}>
      <button
        className="navigation prev"
        onClick={onClick}
        style={firstSlide && firstSlide.style}
        disabled={firstSlide}
      >
        <i className="fas fa-chevron-left prev" />
      </button>
      <div
        className="itemWrapper"
        style={{
          transform: `translateX(calc(-100% / ${showingItemCount} * ${movingIndex}))`,
        }}
      >
        {hasIntroduction && (
          <div className="CarouselItem">
            <h2 className="introduction">{introduction}</h2>
          </div>
        )}
        {isLoop && (
          <CarouselItem
            heading={dataList[dataList.length - 1].name}
            description={dataList[dataList.length - 1].description}
            alt={dataList[dataList.length - 1].name}
            src={dataList[dataList.length - 1].src}
          />
        )}
        {dataList &&
          dataList.map((data, index) => (
            <CarouselItem
              key={index}
              heading={data.name}
              description={data.description}
              alt={data.name}
              // src="https://images.unsplash.com/photo-1573575154488-f88a60e170df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              src={data.src}
            />
          ))}
        {isLoop && (
          <CarouselItem
            heading={dataList[0].name}
            description={dataList[0].description}
            alt={dataList[0].name}
            src={dataList[0].src}
          />
        )}
      </div>
      <button
        className="navigation next"
        onClick={onClick}
        style={lastSlide && lastSlide.style}
        disabled={lastSlide}
      >
        <i className="fas fa-chevron-right next" />
      </button>
      {hasPagination ? (
        <div className="pagination">
          <div
            className="current"
            style={{
              width: `calc(100% / ${
                totalItemCount - (Math.floor(showingItemCount) - 1)
              })`,
              transform: `translateX(calc(100% * ${slideIndex}))`,
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
