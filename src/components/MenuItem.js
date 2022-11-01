import { NavLink } from "react-router-dom";
const MenuItem=({icon,title})=>{
    return(
        <div >
        {/* <NavLink to='/myApps'> */}
        <i className={`fab fa-app-store my-3 me-2`}></i>
        {title}
         {/* </NavLink> */}
        </div>
    )
}

export default MenuItem