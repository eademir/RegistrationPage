import React, {useState} from "react";
const Summary = ({ navigation, formData }) => {
  let { workshop, firstName, lastName, email, Registration } = formData;
  const [total, setTotal] = useState(1);
  const { go } = navigation;
  console.log(workshop.length);
  const registrationFunc = () => {
    go("registration");
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
    formData.workshop = [];
    formData.firstName = "";
    formData.lastName = "";
    formData.email = "";
  };
  return (
    <div>
      <h3>Registration Summary</h3>
      <div className="sq">
        <p>
          Registration details for
        </p>
        <hr/>
        <p><strong>{firstName} {lastName}</strong></p>
        <br/>
        <p><small><strong>Registration information</strong></small></p>
        <hr/>
        <p>
          {firstName} {lastName} - Regular
          <span className="price">$45.00</span>
        </p>
        <br/>
        <p><small><strong>Additional Services</strong></small></p>
        <hr/>
        <ul>
          {
            workshop.map(
              item => (
                <li key={item.id}>
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
      <button className="btn-light" onClick={registrationFunc}>Add New Participant</button>
      <div className="total">
        <p>TOTAL</p>
        <p><span>${total*workshop.length*50+45}.00</span></p>
      </div>
    </div>
  );
};

export default Summary;
