import { Radio, RadioGroup } from 'react-radio-group'
const NewTaskTemplate = ({setModalIsOpen}) => {
    return (
        <>
            <button className="btn bg-light mb-2" onClick={()=>setModalIsOpen(false)}>X</button>
            <div className="bg-white rounded">
                <div className="px-3 py-1" style={{ borderBottom: '1px solid #CCC' }}>Add Task</div>
                <div className="px-3 d-flex">
                    <div className="p-1 pe-3" style={{ borderRight: '1px solid #CCC' }}>
                        <div>
                            <label>Task Name</label>
                            <input className="form-control"></input>
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div>
                            <label>Related To</label>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="p-1 px-3" style={{ borderRight: '1px solid #CCC' }}>
                        <div>
                            <label>Assign To</label>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="p-1 ps-3" >
                        <div>
                            <label>Task Name</label>
                            <input className="form-control"></input>
                        </div>
                        <label>Set Priority</label>
                        <RadioGroup name="fruits">
                            <div className="radio-button-background">
                                <Radio value="High" className="radio-button" />High
                            </div>
                            <div className="radio-button-background">
                                <Radio value="Medium" className="radio-button" />Medium
                            </div>
                            <div className="radio-button-background">
                                <Radio value="Low" className="radio-button" />Low
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #CCC' }} className="d-flex justify-content-end p-3">
                    <button onClick={()=>setModalIsOpen(false)} className="btn py-1 px-5">Cancel</button>
                    <button className="btn py-1 px-5" style={{ backgroundColor: '#F26724' }}>Add</button>
                </div>
            </div>
        </>
    )
}

export default NewTaskTemplate