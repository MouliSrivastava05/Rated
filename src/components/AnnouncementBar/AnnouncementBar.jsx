import React from 'react';
import './AnnouncementBar.css';

const items = [
  'Free shipping on orders over $50',
  '🍦',
  'New drops every Friday',
  '★',
  'Easy 30-day returns',
  '✦',
  'As seen on TikTok',
  '🍦',
  'Free shipping on orders over $50',
  '★',
  'New drops every Friday',
  '✦',
  'Easy 30-day returns',
  '🍦',
  'As seen on TikTok',
  '★',
];

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar" role="marquee" aria-label="Promotions">
      <div className="marquee-track">
        <div className="marquee-content" aria-hidden="false">
          {items.map((item, i) => (
            <span key={`a-${i}`} className={item.length <= 2 ? 'marquee-icon' : 'marquee-text'}>
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, i) => (
            <span key={`b-${i}`} className={item.length <= 2 ? 'marquee-icon' : 'marquee-text'}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
