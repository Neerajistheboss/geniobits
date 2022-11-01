import MenuItem from "./MenuItem"
import data from '../data.json'
const MenuPanel=()=>{
    return(
        <div className="bg-light align-items-center d-flex flex-column" style={{height:'95vh'}}>
            <div className="mb-5">
            <h1>CAIT</h1>
            <p>EDUSYS Pvt. Ltd.</p>
            </div>
            {data.menuItemsTop.map((item)=><MenuItem title='My Apps' {...item}  />)}
            <div className="mt-auto">
            {data.menuItemsBottom.map((item)=><MenuItem title='My Apps' {...item}  />)}
            </div>

        </div>
    )
}

export default MenuPanel