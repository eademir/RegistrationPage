import React from "react";

import FormItem from "./formItem";

const Names = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, email } = formData;

  const { next } = navigation;

  return (
    <div className="row">
      <FormItem
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      <FormItem
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      <FormItem
        label="E-Mail"
        name="email"
        value={email}
        onChange={setForm}
      />
      <div className="col-md-12">
        <button onClick={next} className="float-right btn-success">Next</button>
      </div>
    </div>
  );
};

export default Names;
