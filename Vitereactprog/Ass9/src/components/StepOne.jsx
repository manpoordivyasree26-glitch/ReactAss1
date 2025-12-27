function StepOne({formData,dispatch}){
return(
    <>
    <h2>Step1:Personal Details</h2>
    <input
    type="text"
    placeholder="Name"
    value={formData.name}
    onChange={(e)=>
        dispatch({
            type:"UPDATE_FILED",
            field:"name",
            value:e.target.value,
        })
    }>
    </input>
    <br></br>
    <input
    type="email"
    placeholder="Email"
    value={formData.email}
        onChange={(e)=>
            dispatch({
                type:"UPDATE_FIELD",
                field:"email",
                value:e.target.value,
            })
        
    }></input>
    <br></br>
    <button
    disabled={!formData.name|| !formData.email}
    onClick={()=>dispatch({type:"NEXT_STEP"})}
    >Next</button>
    </>
)

}
export default StepOne;