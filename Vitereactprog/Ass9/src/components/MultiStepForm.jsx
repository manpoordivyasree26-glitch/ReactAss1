import { useReducer } from "react";
import { formReducer, initialState } from "../reducer/formReducer";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  if (state.isSubmitted) {
    return <h2>Form Submitted Successfully ✅</h2>;
  }

  return (
    <div>
      <h2>Step {state.step} / 3</h2>

      {state.step === 1 && (
        <StepOne formData={state.formData} dispatch={dispatch} />
      )}

      {state.step === 2 && (
        <StepTwo formData={state.formData} dispatch={dispatch} />
      )}

      {state.step === 3 && (
        <StepThree formData={state.formData} dispatch={dispatch} />
      )}
    </div>
  );
}

export default MultiStepForm;
