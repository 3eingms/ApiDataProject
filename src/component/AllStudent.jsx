import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


const AllStudent = ()=>{
    const [students,allStudent] = useState([])
    useEffect(()=>{
        fetchStudent()
    },[])

    const fetchStudent = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        allStudent(data)
        // console.log(students);
    }

    return (
        <>
            <div className='heading' >
            <h2>Student List </h2>
            </div>
            
            {
                students.map((stuData,index)=>(
                    // return <h2>{stuData.title}</h2>
                    <>
                    <Link to= {`/get/${stuData.id}`} key={stuData.id} className = 'title-set'  > <h2 title='open details' > {stuData.id} :  {stuData.title}</h2></Link>
                    <hr />
                    </>

                )
                )
            }
        </>
    )
}

export default AllStudent