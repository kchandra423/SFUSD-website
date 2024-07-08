import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Part3.module.css';

const screens = [
  { id: 0, value: getImageUrl("part3/screen0.png") },
  { id: 1, value: getImageUrl("part3/screen1.png") },
  { id: 2, value: getImageUrl("part3/screen2.png") },
  { id: 3, value: getImageUrl("part3/screen3.png") },
  { id: 4, value: getImageUrl("part3/screen4.png") },
  { id: 5, value: getImageUrl("part3/screen5.png") },
  { id: 6, value: getImageUrl("part3/screen6.png") },
  { id: 7, value: getImageUrl("part3/screen7.png") },
  { id: 8, value: getImageUrl("part3/screen8.png") },
  { id: 9, value: getImageUrl("part3/screen9.png") }
];

export const Part3 = () => {
  const [screenData, setScreenData] = useState(screens[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    const screenSlider = screens[index];
    setScreenData(screenSlider);
  };

  const handleNext = () => {
    let index = val < screens.length - 1 ? val + 1 : 0;
    setVal(index);
    setScreenData(screens[index]);
  };

  const handlePrevious = () => {
    let index = val > 0 ? val - 1 : screens.length - 1;
    setVal(index);
    setScreenData(screens[index]);
  };

  return (
    <section className={styles.container}>
      <button className={`${styles.btn} ${styles.leftButton}`} onClick={handlePrevious}>
        <img src={getImageUrl("part3/leftArrow.png")} alt="Previous" className={styles.icon} />
      </button>
      <div className={styles.imgContainer}>
        <img src={screenData.value} className={styles.mainImage} alt={`Screen ${screenData.id}`} />
      </div>
      <button className={`${styles.btn} ${styles.rightButton}`} onClick={handleNext}>
        <img src={getImageUrl("part3/rightArrow.png")} alt="Next" className={styles.icon} />
      </button>
      <div className={styles.thumbnailContainer}>
        {screens.map((data, i) => (
          <img
            key={data.id}
            className={`${styles.thumbnail} ${screenData.id === i ? styles.clicked : ''}`}
            src={data.value}
            onClick={() => handleClick(i)}
            alt={`Thumbnail ${data.id}`}
          />
        ))}
      </div>
    </section>
  );
};