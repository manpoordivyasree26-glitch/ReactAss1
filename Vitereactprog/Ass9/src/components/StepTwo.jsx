function StepTwo(){
return(
    <>
    <h2>Step2:Account Details</h2>
    <input
    type="text"
    placeholder="username"
    value={formData.username}
    onChange={(e)=>
        dispatch({
            type:"UPDATE_FIELD",
            field:"username",
            value:e.target.value,
    })
    }></input>
    <br></br>
    <input
    type="password"
    placeholder="password"
    value={formData.password}
    onChange={(e)=>
        dispatch({
            type:"UPDATE_FIELD",
            field:"password",
            value:e.target.value,
        })
    }>
    </input>
    <br></br>
    <button onClick={()=>dispatch({type:"PREVIOUS_STEP"})}>Back</button>
    <button disabled={!formData.username||!formDatapassword}
    onClick={()=>dispatch({type:"NEXT_STEP"})}>Next</button>
    </>
);
}
export default StepTwo;