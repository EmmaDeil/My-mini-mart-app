import React from 'react'

const Stories = (props) => {
  return (
    <div>
      <div className="container my-5" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <h4 className="text-start" style={{ marginBottom: "20px", textAlign: "start" }}>{props.name}</h4>
        <div className="row">
          <div className="col-md-8">
            <p>{props.description}</p>
            <button className="btn btn-primary">{props.buttonText}</button>
            </div>
            <div className="col-md-4">
              <img src={props.imageSrc} alt="image" style={{ borderRadius: "8px", width: "100%", height: "auto" }} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stories;
