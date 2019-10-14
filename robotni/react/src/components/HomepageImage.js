import React from 'react';

function HomepageImage() {
  const url = 'https://www.wonderopolis.org/wp-content/uploads/2018/08/dreamstime_xl_100400232.jpg';
  return (
    <img src={url} style={{width: 650}} alt='Image of a botanist' />
  );
}

export default HomepageImage;