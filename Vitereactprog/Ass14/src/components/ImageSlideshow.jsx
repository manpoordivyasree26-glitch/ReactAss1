import { Card,CardContent } from "./ui/card";
import {Button} from "@/components/ui/button";
import {useState} from "react"

const images=[
"https://static.vecteezy.com/system/resources/previews/030/258/039/large_2x/beautiful-nature-wallpaper-hd-wallpaper-ai-generated-free-photo.jpg",
"https://img.freepik.com/premium-photo/scenic-nature-sunset_998360-12969.jpg",
"https://img.freepik.com/premium-photo/natural-spring-background_926199-14260.jpg"
];

function ImageSlideshow(){
    const[index,setIndex]=useState(0);

    const nextImage=()=>{
        setIndex((prev)=>(prev+1) %images.length);
    }

    const prevImage=()=>{
        setIndex((prev)=>(prev===0 ? images.length-1 : prev-1));
    };
return(
    <div className="max-w-md mx-auto mt-8 text-center">
        <Card>
            <CardContent className="p-4 space-y-4">
                <img
                src={images[index]}
                alt="Slideshow"
                className="rounded-lg w-full"/>
                <div className="flex justify-between">
                    <Button variant="outline" onClick={prevImage}>Previous</Button>
                    <Button onClick={nextImage}>Next</Button>
                </div>
            </CardContent>
        </Card>
    </div>
)

}
export default ImageSlideshow;