import React from 'react';
import './App.css';
import StepForm from "./components/stepForm";
import Head from "./components/head";

function App() {

  return (
    <div className="container">
      <div className="wrapper">
        <Head/>
        <StepForm />
      </div>
    </div>
  );
}

export default App;
