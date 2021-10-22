import React from 'react';
import { useState, useReducer } from 'react'

function validatePrice(price) {

  let re = /\d*(?:[.]\d{3})*(?:[.,]\d{2})/;

  return re.test(String(price));
}

const formReducer = (state, action) => {
  switch (action.type) {
    case "SETPRODUCTNAME":
      return { ...state, name: action.name }
    case "SETPRODUCTPRICE":
      return { ...state, price: action.price }
    case "SETPRODUCTDESCRIPTION":
      return { ...state, description: action.description }
    default:
      return state
  }
}

const formValidReducer = (state, action) => {
  switch (action.type) {
    case "SETPRODUCTDESCRIPTION":
      return { ...state, isDescriptionValid: action.isDescriptionValid }
    case "SETPRICEVALID":
      return { ...state, isPriceValid: action.isPriceValid }
    case "SETNAMEVALID":
      return { ...state, isNameValid: action.isNameValid }
    default:
      return state
  }
}

function Form(props) {

  const [productDetails, setProductdetails] = useState({ name: "", price: 0.00, description: "" });

  const [currentFormState, dispatchForm] = useReducer(formReducer, { name: "", price: 0.00, description: "" });

  const [currentFormValidState, dispatchFormValid] = useReducer(formValidReducer, { isPriceValid: false, isNameValid: false, isDescriptionValid: false })

  const handleSubmit = () => {
    props.dispatchProduct({ type: "CHANGE", list: currentFormState })
    //this will be made after we api call
  }

  const handleNameChange = (event) => {
    dispatchForm({ name: event.target.value, type: "SETPRODUCTNAME" })
  }

  const handlePriceChange = (event) => {
    dispatchForm({ price: event.target.value, type: "SETPRODUCTPRICE" })
  }

  const handleDescriptionChange = (event) => {
    dispatchForm({ description: event.target.value, type: "SETPRODUCTDESCRIPTION" })
  }

  const onPriceBlur = () => {
    let validatedPrice = validatePrice(currentFormState.price);
    dispatchFormValid({ isPriceValid: validatedPrice, type: "SETPRICEVALID" });
  }

  const onNameBlur = () => {
    console.log(currentFormState.name);
    if (currentFormState.name === "") {
      console.log("I am false")
      dispatchFormValid({ isNameValid: false, type: "SETNAMEVALID" });
    } else {
      console.log("I AM TRUE")
      dispatchFormValid({ isNameValid: true, type: "SETNAMEVALID" });
    }
  }

  const onDescriptionBlur = () => {
    if (currentFormState.description === "") {
      dispatchFormValid({ isDescriptionValid: false, type: "SETPRODUCTDESCRIPTION" })
    } else {
      dispatchFormValid({ isDescriptionValid: true, type: "SETPRODUCTDESCRIPTION" })
    }
  }

  return (
    <>
      <h2>This is Controlled Form</h2>
      <div className="Form">
        <input name="productName" type='text' value={currentFormState.name} placeholder="name" onChange={handleNameChange} onBlur={onNameBlur} />
        <input name='price' type='text' placeholder="price" onChange={handlePriceChange} onBlur={onPriceBlur} />
        <input name='description' type='text' placeholder="description" onChange={handleDescriptionChange} onBlur={onDescriptionBlur} />
        <input type='submit' onClick={handleSubmit} disabled={(currentFormValidState.isNameValid && currentFormValidState.isDescriptionValid && currentFormValidState.isPriceValid) === false} />
      </div>
      {currentFormValidState.isPriceValid ? '' : <p> Pricing not valid, number only, E.g: 6.99</p>}
      {currentFormValidState.isNameValid ? '' : <p> Naming not valid, cannot be empty</p>}
      {currentFormValidState.isDescriptionValid ? '' : <p> Description not valid, cannot be empty</p>}
    </>
  );
}

export default Form;
