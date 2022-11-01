import MenuPanel from "../components/MenuPannel"
import TaskHolder from "../components/TaskHolder"
import Toolbar from "../components/Toolbar"
import Modal from 'react-modal'
import { useState } from "react"
import NewTaskTemplate from "../components/NewTaskTemplate"
import Table from "../components/Table"

const DashboardPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px',
            backgroundColor: 'rgba(255,255,255,0)'
        },
    };
    return (
        <div className="row g-0" style={{ minHeight: '100vh', backgroundColor: '#E4ECF7' }}>
            <div className="col-2">
                <MenuPanel />
            </div>
            <div className="col-10">
                <Toolbar />
                <div className="p-3">
                <div className="p-3 d-flex align-items-start" >
                    <TaskHolder />
                    <button onClick={()=>setModalIsOpen(true)} className="btn py-1 px-3 text-light ms-3" style={{ backgroundColor: '#F26724' }}>+ Add New Task</button>
                </div>
                <Table/>
                </div>
            </div>
            <Modal
                transparent
                isOpen={modalIsOpen}
                onRequestClose={()=>setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <NewTaskTemplate  setModalIsOpen={setModalIsOpen}/>
            </Modal>
        </div>
    )
}

export default DashboardPage