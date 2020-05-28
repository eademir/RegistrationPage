import React from "react";
const Summary = ({ navigation, formData }) => {
  let { workshop, firstName, lastName } = formData;
  const { go } = navigation;
  return (
    <div>
      <h3>Registration Summary</h3>
      <div className="sq">
        <p>
          Registration details for
        </p>
        <hr/>
        <p><strong>{firstName} {lastName}</strong></p>
        <small><strong>Registration information</strong></small>
        <hr/>
        <p>
          {firstName} {lastName} - Regular
        </p>
        <small><strong>Additional Services</strong></small>
        <p></p>
        <hr/>
      </div>
      <button className="btn-light" onClick={() => go("registration")}>Add New Participant</button>
    </div>
  );
};

export default Summary;
