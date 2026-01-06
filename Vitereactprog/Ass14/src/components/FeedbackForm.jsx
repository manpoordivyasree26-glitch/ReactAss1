import {useState} from "react"
import { Button } from "@/components/ui/button";
import { Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card,CardContent,CardHeader,CardTitle } from "@/components/ui/card"


export default function FeedbackForm(){
const[form,setForm]=useState({
name:"",
email:"",
feedback:"",
})

const [submitted,setSubmitted]=useState(null);
const handleSubmit=()=>{
    setSubmitted(form);
    setForm({name:"",email:"",feedback:""})
}

return(
    <div>
        <Card className="max-w-md md-auto mt-8 text-center">
            <CardHeader>
                <CardTitle>Feedback Form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
            <Input
             placeholder="Name"
             value={form.name}
             onChange={(e)=>setForm({...form,name:e.target.value})}>
            </Input>
        <Input 
        placeholder="Email"
        value={form.email}
        onChange={(e)=>setForm({...form,email:e.target.value})}></Input>
        <Textarea
         placeholder="yourFeedback"
         value={form.feedback}
         onChange={(e)=>setForm({...form,feedback:e.target.value})}></Textarea>

        <Button  onClick={handleSubmit} className="w-full">Submit</Button>
        </CardContent>
        </Card>

        {submitted &&(
            <Card classNAme="mt-4">
                <CardContent className="space-y-1">
                    <p><b>Name:</b>{submitted.name}</p>
                    <p><b>Email:</b>{submitted.email}</p>
                    <p><b>Feedback:</b>{submitted.feedback}</p>
                </CardContent>
            </Card>

        )}
        </div>
 )
}