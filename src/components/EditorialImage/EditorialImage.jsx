import React from 'react';

function EditorialImage({ src, alt, className = '' }) {
  return (
    <div className={`editorial-image-stack ${className}`}>
      <img src={src} alt={alt} className="editorial-image editorial-image-primary" loading="lazy" />
      <img src={src} alt="" aria-hidden="true" className="editorial-image editorial-image-secondary" loading="lazy" />
    </div>
  );
}

export default EditorialImage;
