import React from 'react'
const table =[
    {
        name:"person 1",
        amt:"$20,000",
        status:"success",
        date:"july 11,2020"
    },
    {
        name:"person 2",
        amt:"$20,000",
        status:"reject",
        date:"july 11,2020"
    },
    {
        name:"person 3",
        amt:"$20,000",
        status:"success",
        date:"july 11,2020"
    },
    {
        name:"person 4",
        amt:"$20,000",
        status:"success",
        date:"july 11,2020"
    },
    {
        name:"person 5",
        amt:"$20,000",
        status:"success",
        date:"july 11,2020"
    },
    {
        name:"person 6",
        amt:"$20,000",
        status:"reject",
        date:"july 11,2020"
    },
    {
        name:"person 7",
        amt:"$20,000",
        status:"success",
        date:"july 11,2020"
    },
    {
        name:"person 8",
        amt:"$20,000",
        status:"success",
        date:"july 11,2020"
    },
    {
        name:"person 9",
        amt:"$20,000",
        status:"reject",
        date:"july 11,2020"
    },
    {
        name:"person 10",
        amt:"$20,000",
        status:"success",
        date:"july 11,2020"
    },
]

const Table = () => {
  return (
    <>
      <h2 className='pt-3'>Recent Activity</h2>
      <table className='table-striped table table-bordered border-dark mt-4'>
        <thead>
            <th>Transction</th>
            <th>amount</th>
            <th>status</th>
            <th>date</th>
        </thead>
        <tbody>
            {table.map((data,index)=>(
                <tr>
                    <td>{data.name}</td>
                    <td>{data.amt}</td>
                    <td>
                        <div className={`${data.status === "success" ? "text-success" :"text-danger"}`}>{data.status}</div>
                    </td>
                    <td>{data.date}</td>
                </tr>
            ))}
        </tbody>

      </table>

    </>
  )
}

export default Table
