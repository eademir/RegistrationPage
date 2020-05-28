import React, {useState} from "react";


const Workshop = ({ formData, navigation }) => {
  let { workshop, firstName, lastName } = formData;
  const [count, setCount] = useState(0);
  const { previous, next } = navigation;
  workshop = count;
  return (
    <div className="form">
      <p>Registration details for</p>
      <strong>{firstName} {lastName}</strong>
      <h3>Workshop</h3>
      <div className="sq">
        <p>Deep Dive with Vue2</p>
        <hr/>
        <div className="select-price">
          (x{workshop}) $50.00
          <button onClick={() => setCount(count + 1)} className="btn-success">+</button>
        </div>
      </div>
      <div>
        <button onClick={previous} className="left btn-success">Previous</button>
        <button onClick={next} className="float-right btn-success">Next</button>
      </div>
    </div>
  );
};

export default Workshop;
