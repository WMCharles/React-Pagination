import { useEffect, useState } from 'react'
import Pagination from './Pagination';
import Records from './Records';
import axios from "axios";

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('MOCK_DATA.json')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(() => {
        alert('There was an error loading the data')
      })
  }, [])

  const Loading = () => {
    return (
      <div>
        Loading....
      </div>
    )
  }

  // implementing pagination 
  // current page number
  const [currentPage, setCurrentPage] = useState(1)

  // No of records on each page
  // eslint-disable-next-line no-unused-vars
  const [recordsPerPage, setRecordsPerPage] = useState(20)

  // indices of first && last record
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage

  // records to display per page
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)

  // calculating number of pages
  const nPages = Math.ceil(data.length / recordsPerPage)

  return (
    <div className="container">
      <h1>Pagination Demo</h1>
      {loading ? <Loading/> : <Records data={currentRecords}/>}
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
