import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './image.module.scss';
console.log(images.noimage);
const Image = forwardRef(
  ({ src, alt, className, fallback: customFallback = images.noimage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(customFallback);
    };
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        at={alt}
        {...props}
        alt="em"
        onError={handleError}
      />
    );
  },
);

export default Image;
