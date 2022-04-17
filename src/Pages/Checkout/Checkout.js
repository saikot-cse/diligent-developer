import React, { useEffect } from 'react';

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout";
    document.body.style.background = "#2b2f32";
  }, []);
  return (
    <div>
      <h1 className='text-center text-warning'>Checkout</h1>
    </div>
  );
};

export default Checkout;