import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
         <div className="col">
            <img src="/LOGO PNG.png" alt="" width={100} height={100} className="img-fluid inline" /> Ladeil Innovations LTD
         </div>
         <div className="col">

         </div>
         <div className="col"></div>
         <div className="col">
            {/* <span>Download on App Store</span>
            <img src="/app-store-badge.png" alt="App Store" width={100} height={40} className="img-fluid inline" />
            <span>Available on the Google Play</span>
            <img src="/google-play-badge.png" alt="Google Play" width={100} height={40} className="img-fluid inline" /> */}
         </div>
      <hr />
          <div className='col text-center'>
            <p>&copy; {new Date().getFullYear()} The Ladeil Innovation Hub. All rights reserved.</p>
          </div>
        </div>
      </div>    </div>
  )
}

export default Footer;
