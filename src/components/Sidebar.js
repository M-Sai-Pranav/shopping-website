import { useEffect } from "react"
import Category from "./Category"
import Color from "./Color"
import Price from "./Price"
import Availability from "./Availability"


function Sidebar(props){
    useEffect(()=>{
        console.log("---> ", props.handleChange)
    }, [])
    return(
        <>
        <div style={{ position:"fixed"}}> 
        {/* pass handleChange functionality to each component as prop */}
            <Category handleChange = {props.handleChange}/> 
            <Price handleChange = {props.handleChange}/>
            <Color handleChange = {props.handleChange}/>
            <Availability handleChange = {props.handleChange}/>
        </div>
        </>
    )
}
export default Sidebar
