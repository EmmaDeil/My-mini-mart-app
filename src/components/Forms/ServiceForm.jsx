import React from 'react'

const ServiceForm = () => {
  return (
    <div>
      <div className="container">
         <form action="" method="post">
            <label htmlFor="serviceName">Service Name</label>
            <input type="text" id="serviceName" name="serviceName" required />
            <label htmlFor="serviceDescription">Service Description</label>
            <textarea id="serviceDescription" name="serviceDescription" required></textarea>
            <label htmlFor="serviceDate">Service Date</label>
            <input type="date" id="serviceDate" name="serviceDate" required />
            <label htmlFor="serviceTime">Service Time</label>
            <input type="time" id="serviceTime" name="serviceTime" required />
            <button type="submit">Submit</button>
         </form>
      </div>
    </div>
  )
}

export default ServiceForm;
