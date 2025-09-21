import React from 'react';

const VerticalAlign = () => {
  return (
    <div className="container text-center" id='vertical-align'>
      <div className="row" style={{ minHeight: '400px' }}>
        <div className="col align-self-start">
          <div className="p-3 bg-light border rounded" style={{ height: '10rem' }}>
            We embrace change and continuously seek new ways to improve our solutions.
          </div>
        </div>
        <div className="col align-self-center">
          <div className="p-3 bg-primary text-white border rounded" style={{ height: '10rem' }}>
           We conduct our business with honesty and transparency.
          </div>
        </div>
        <div className="col align-self-end">
          <div className="p-3 bg-success text-white border rounded" style={{ height: '10rem' }}>
            We prioritize our clients' needs and strive to exceed their expectations.
          </div>
        </div>
      </div>
      <div className="row" style={{ minHeight: '400px', marginTop: '2rem' }}>
        <div className="col align-self-start">
          <div className="p-3 bg-light border rounded" style={{ height: '10rem' }}>
           We believe in the power of teamwork and partnerships.
          </div>
        </div>
        <div className="col align-self-center">
          <div className="p-3 bg-primary text-white border rounded" style={{ height: '10rem' }}>
           We are committed to environmentally responsible practices.
          </div>
        </div>
        {/* <div className="col align-self-end">
          <div className="p-3 bg-success text-white border rounded">
            We believe in the power of teamwork and partnerships.
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VerticalAlign;