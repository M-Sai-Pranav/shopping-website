import {  faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from "./Input";

// Destructure
function Category({handleChange}){
    
    return(
        <>
        <h1 style={{marginTop: "50px", textAlign:"center"}}><FontAwesomeIcon icon={faFilter} /> </h1>
        <h3 style={{ textAlign:"center", paddingTop:"10px"}}>Category</h3>
        
        <Input
            handleChange={ handleChange }
            value=""
            title="All"
            name="test"
        />
        
        <Input
            handleChange={ handleChange }
            value="sneakers"
            title="Sneakers"
            name="test"
        />
        
        <Input
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="test"
        />

        <Input
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
        />

        <Input
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
        />
        </>
    )
}
export default Category