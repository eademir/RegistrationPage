import React, {useState} from "react";


const Workshop = ({ formData, navigation }) => {
  let { workshop, firstName, lastName } = formData;
  const [ count, setCount ] = useState(0);
  const { previous, next } = navigation;
  const workshopFunc = () => {
    setCount(count + 1);
    workshop.push(
      {
        "event_workshop_id": Math.floor(Math.random()*10000),
        "event_workshop_price": "50.00"
      }
    )
  };
  return (
    <div className="form">
      <p>Registration details for</p>
      <strong>{firstName} {lastName}</strong>
      <h3>Workshop</h3>
      <div className="sq">
        <p>Deep Dive with Vue2</p>
        <hr/>
        <div className="select-price">
          <small>(x{count})</small><span className="price">$50.00</span>
          <button onClick={workshopFunc} className="btn-success">+</button>
        </div>
      </div>
      <div>
        <button onClick={previous} className="left btn-danger">Previous</button>
        <button onClick={next} className="float-right btn-success">Next</button>
      </div>
    </div>
  );
};

export default Workshop;
