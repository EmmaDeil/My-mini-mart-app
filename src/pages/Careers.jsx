import React from 'react'

const Careers = () => {
  return (
    <div className='container text-center mt-5'>
      <div className='row mb-4'>
         <div className='col'>
<h1>Join Our Amazing Team</h1>
      <p>We are looking for passionate individuals to help us shape the future of language learning.</p>
         </div>
         <div className='col'>
      <p>At <strong>The Nigerian French Girl</strong>, we believe in fostering a diverse and inclusive work environment and you will be encouraged to unlock your potential at every level to help shape you. Connect your strengths, and participate in initiatives that allow you to give back to the learning community.</p>
      <a href="/jobs" style={{ textDecoration: 'none', color: '#262d9c' }}>View Open Positions <i class="bi bi-chevron-right"></i></a>
         </div>
      </div>
      <div className='container-fluid'>
      <img src="/careersimg.jpg" alt="careers" style={{ width: '100%', height: 'auto' }}/>
      </div>

<div className='container' style={{marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
   <h3>What we offer</h3>
   <h3>Our employee benefits</h3>
   <p>Our commitment to continuous learning and personal development fosters a stable workplace that values employee experience, employee productivity, and employee satisfaction with the most dedicated people and culture team.</p>
</div>
<div className='container mt-4'>
   <div className='row' style={{textAlign: 'left'}}>
      <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
         <h5>Comprehensive Health Plans</h5>
         <p>We offer a range of health insurance options to ensure you and your family are covered.</p>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
         <h5>Flexible Work Arrangements</h5>
         <p>We understand the importance of work-life balance and offer flexible working hours and remote work options.</p>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
         <h5>Professional Development</h5>
         <p>We invest in our employees' growth through training programs, workshops, and conferences.</p>
      </div>
      {/* <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
         <h5>Generous Paid Time Off</h5>
         <p>We provide ample vacation days, holidays, and personal leave to help you recharge.</p>
      </div> */}
      {/* <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
         <h5>Retirement Plans</h5>
         <p>We offer competitive retirement savings plans to help you secure your financial future.</p>
      </div> */}
      {/* <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
         <h5>Employee Wellness Programs</h5>
         <p>Our wellness initiatives include fitness memberships, mental health resources, and wellness challenges.</p>
      </div> */}
   </div>
</div>
    </div>
  )
}

export default Careers;
