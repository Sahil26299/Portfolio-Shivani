import React, { useState, useEffect } from 'react';

interface LazyBackgroundProps {
    src: string;
    placeholder: string;
    [key: string]: any;
  }
export const LazyBackground : React.FC<LazyBackgroundProps> = ({ src, placeholder, children, ...props }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <div
      {...props}
      style={{ backgroundImage: `url(${imageSrc || placeholder})`}}
    >{children}</div>
  );
}
