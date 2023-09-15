import Input from "./Input"
function Price({handleChange}){
    return(
        <>
        <h3 style={{ textAlign:"center", paddingTop:"10px"}}>Price</h3>
          <Input
            handleChange={ handleChange }
            value=""
            title="All"
            name="test2"
        />  
          <Input
            handleChange={handleChange}
            value={50}
            title="$0 - 50"
            name="test2"
        />
           
          <Input
            handleChange={handleChange}
            value={100}
            title="$50 - 100"
            name="test2"
        />
           
          <Input
            handleChange={handleChange}
            value={150}
            title="$100 - 150"
            name="test2"
        />
           
          <Input
            handleChange={handleChange}
            value={200}
            title="Over $150"
            name="test2"
        />
           
        </>
    )
}
export default Price