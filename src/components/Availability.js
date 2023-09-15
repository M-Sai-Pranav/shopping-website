import Input from "./Input";

// Destructure
function Availability({handleChange}){
    return(
        <>
        <h3 style={{ textAlign:"center", paddingTop:"10px"}}>Availability</h3>
        <Input
            handleChange={handleChange}
            value="instock"
            title="In Stock"
            name="test3"
        />
        <Input
            handleChange={handleChange}
            value="outofstock"
            title="Out of Stock"
            name="test3"
        />

        </>
    )
}
export default Availability;