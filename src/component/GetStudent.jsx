import React ,{useState,useEffect}from 'react'
import {useParams ,Link} from 'react-router-dom'
import Button from '@mui/material/Button';



const GetStudent = ()=>{
    const params = useParams()
    const [student,updateStudent] = useState([])

    useEffect(()=>{
        singleData()
    },[])

    const singleData = async ()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        const data = await response.json()
        updateStudent(data)
    }

    return(
        <>
            
            <div className='bg-color'>
            <h3> Student ID :  {student.id}</h3>
            <p>  <b>Student Title</b> : {student.title} </p>
            <p><b>Student Body</b> :  {student.body}</p>
            
            <Button variant="contained"><Link to='/' className='links' >Back</Link></Button>
            </div>
        </>
    )
}

export default GetStudent