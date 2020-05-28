import React from "react";
const Summary = ({ navigation, formData }) => {
  let { workshop, firstName, lastName, email, Registration, total_price } = formData;
  const { go } = navigation;
  const fd = formData;
  const registrationFunc = () => {
    Registration.registration.push(
      {
        "event_registration_firstname": firstName,
        "event_registration_lastname": lastName,
        "event_registration_email": email,
        "event_registration_type_id": Math.floor(Math.random()*10000),
        "event_registration_type_price": 45.00,
        "workshop":[
          workshop,
        ]
      });
    console.log(Registration);
    fd.workshop = [];
    fd.firstName = "";
    fd.lastName = "";
    fd.email = "";
  };
  registrationFunc();
  return (
    <div>
      <h3>Registration Summary</h3>
      {
        Registration.registration.map(
          item => (
            <div className="sq" key={item.event_registration_type_id}>
              <p>
                Registration details for
              </p>
              <hr/>
              <p><strong>{item.event_registration_firstname} {item.event_registration_lastname}</strong></p>
              <br/>
              <p><small><strong>Registration information</strong></small></p>
              <hr/>
              <p>
                {item.event_registration_firstname} {item.event_registration_lastname} - Regular
                <span className="price">$45.00</span>
              </p>
              <br/>
              <p><small><strong>Additional Services</strong></small></p>
              <hr/>
              <ul>
                {
                  item.workshop[0].map(
                    item => (
                      <li key={item.event_workshop_id}>
                        Workshop
                        <span className="float-right">
                    ${item.event_workshop_price}
                  </span>
                      </li>
                    )
                  )
                }
              </ul>
            </div>
          )
        )
      }
      <button className="btn-light" onClick={() => {go("registration");}}>Add New Participant</button>
      <div className="total">
        <p>TOTAL</p>
        <p><span>${(total_price*50)+(45*Registration.registration.length)}.00</span></p>
      </div>
    </div>
  );
};

export default Summary;
