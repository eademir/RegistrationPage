import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Registration from "./Registration"
import Workshop from "./Workshop";
import Summary from "./Summary";

const steps = [
  { id: "registration" },
  { id: "workshop" },
  { id: "summary" },
];

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  workshop: [],
  Registration: { "registration": [] },
  total_price: 0
};

const StepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "registration":
      return <Registration {...props} />;
    case "workshop":
      return <Workshop {...props} />;
    case "summary":
      return <Summary {...props} />;
    default:
      return null;
  }
};

export default StepForm;
