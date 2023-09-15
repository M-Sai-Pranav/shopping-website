function Input({handleChange, value, title, name, color}){
    return(
        <> 
        <div style={{marginTop: "5px", textAlign:"center", cursor:"pointer", paddingLeft:"50px"}}  className="d-flex">
            <input  onChange={handleChange} type="radio" value={value} name={name}/>
            <span className="checkmark" style={{ background: color }}>
            </span>
            {title}
        </div>
        </>
    )
}
export default Input;

