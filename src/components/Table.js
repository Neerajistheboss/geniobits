import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import data from '../data.json'
const Table = () => {
    const columns = [{
        Header: 'Task',
        accessor: 'task' // String-based value accessors!
    }, {
        Header: 'Time',
        accessor: 'time'
    },
    {
        Header: 'Date',
        accessor: 'date'
    }, {
        Header: 'Assigned By',
        accessor: 'assignedBy'
    }, {
        Header: 'Assigned To',
        accessor: 'assignedTo'
    }, {
        Header: 'Deadline',
        accessor: 'deadline'
    }, {
        Header: 'Status',
        accessor: 'status',
        Cell: props => <div className='w-100'><div className='p-2 mx-auto' style={{ width:'10px',borderRadius: '50%', backgroundColor: props.value }}></div></div> // Custom cell components!
    }, {
        Header: 'Priority',
        accessor: 'priority'
    }
    ]
    return (
        <ReactTable
        showPaginationTop
        showPaginationBottom={false}
        pageSize={10}
            data={data.tableData}
            columns={columns}
        />
    )
}

export default Table