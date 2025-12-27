function StepThree(){
return(
    <>
    <h2>Step3:review && submit</h2>

    <p><strong>Name:</strong>{formData.name}</p>
    <p><strong>Email:</strong>{formData.email}</p>
    <p><strong>username:</strong>{formData.username}</p>

    <button onClick={()=>dispatch({type:"PREVIOUS_STEP"})}>Back</button>
    <button onClick={()=>dispatch({type:"SUBMIT_FORM"})}>submit</button>
    </>
)
}
export default StepThree;