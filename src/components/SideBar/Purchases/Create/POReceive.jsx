import { useState } from "react"

export default function POReceive() {
  const [rows, setRows] = useState([
    { name: "", qty: "" }
  ])

  // add new empty row
  const addRow = () => {
    setRows([...rows, { name: "", qty: "" }])
  }

  // update input data
  const handleChange = (index, field, value) => {
    const updatedRows = [...rows]
    updatedRows[index][field] = value
    setRows(updatedRows)
  }

  const handleRemove=(index)=>{
    const updateRow=rows.filter((_,i)=>i!==index)
    setRows(updateRow)
  }
  return (
    <div className="p-6 max-w-xl mx-auto">
      <button
        onClick={addRow}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        + Add Row
      </button>

      <div className="space-y-3">
        {rows.map((row, index) => (
          <div
            key={index}
            className="flex gap-4 border p-3 rounded"
          >
            <input
              type="text"
              placeholder="Item name"
              value={row.name}
              onChange={(e) =>
                handleChange(index, "name", e.target.value)
              }
              className="border p-2 rounded w-1/2"
            />

            <input
              type="number"
              placeholder="Qty"
              value={row.qty}
              onChange={(e) =>
                handleChange(index, "qty", e.target.value)
              }
              className="border p-2 rounded w-1/2"
            />

          <div>
        <button onClick={(e)=>handleRemove(index)}>Remove</button>
      </div>
          </div>
        ))}
      </div>



      {/* Debug output */}
      <pre className="mt-4 bg-gray-100 p-2 text-sm">
        {JSON.stringify(rows, null, 2)}
      </pre>
    </div>
  )
}