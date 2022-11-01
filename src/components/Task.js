const Task=({count,category,color,borderColor})=>{
    const statStyle={backgroundColor:color,border:`3px solid ${borderColor}`,borderRadius:'10px'}
    return(
        <div className="m-2 p-2 flex-fill text-light" style={statStyle}>
            <p className="m-0">{count}</p>
            <p className="m-0">{category}</p>
        </div>
    )
}

export default Task