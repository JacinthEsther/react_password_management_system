import React from 'react'
import axios from 'axios'

const GetAll = () => {

    const getAll = () => {
        axios.get("http://localhost:8083/api/getAll").then(
            data => {
                console.log(data)
            })
    }
  return (
    <div>
        <button onClick={getAll}>GetAll</button>

    </div>
  )
}

export default GetAll