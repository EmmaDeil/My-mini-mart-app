import React from 'react'

const ServiceForm = () => {
  return (
    <div>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" tabIndex="-1" style={{marginTop: "50px", width: "600px", padding: "20px", gap: "10px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", marginBottom: "50px"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> */}
            <div className="modal-body" style={{ padding: "20px" }}>
               <form action="" method="post">
            <label htmlFor="serviceName">Service Name :</label>
            <input type="text" id="serviceName" name="serviceName" required style={{ width: "100%" }} />
            <label htmlFor="serviceDate">Service Date :</label>
            <input type="date" id="serviceDate" name="serviceDate" required style={{ width: "100%" }} />
            <label htmlFor="serviceTime">Service Time :</label><br />
            <input type="time" id="serviceTime" name="serviceTime" required style={{ width: "50%" }} />
            <br />
            <label htmlFor="serviceDescription">Service Description :</label>
            <textarea id="serviceDescription" name="serviceDescription" rows={6} required style={{ width: "100%" }}></textarea>
         </form>
            </div>
            <div className="modal-footer mt-4 gap-2">
              <button type="button" className="btn btn-primary">Cancel</button>
            <button type="submit" className='btn btn-primary'>Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ServiceForm;
