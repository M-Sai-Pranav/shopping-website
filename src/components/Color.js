import Input from "./Input"
function Color({handleChange}){
    return(
        <>
        <h3 style={{ textAlign:"center", paddingTop:"10px"}}> Color</h3>
        <Input
            handleChange={ handleChange }
            value=""
            title="All"
            name="test1"
        />
        <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test1"
            color="black"
        />
        <Input
            handleChange={handleChange}
            value="blue"
            title="Blue"
            name="test1"
            color="blue"
        />
        <Input
            handleChange={handleChange}
            value="green"
            title="Green"
            name="test1"
            color="green"
        />
        <Input
            handleChange={handleChange}
            value="white"
            title="White"
            name="test1"
            color="white"
        />
        <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test1"
            color="black"
        />
        </>
    )
}
export default Color