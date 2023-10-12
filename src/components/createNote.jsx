import React, { useEffect, useState } from 'react'
import add from '../assets/img/add-solid.svg'
import AddNote from './addNote'
export default function CreateNote() {
    const [value,nextValue] = useState([])
    const [d,sd] = useState()
    
    const da = (e)=>{
        sd(e.target.value)
    }


    const newTask = ()=>{
         
        nextValue([...value,d])

    }
   
    
    return(
        <div className='mx-auto w-5/6'>
            <div className='grid gap-7 my-7'>
                <div className='flex justify-center text-2xl font-bold w-full'>
                    <h1>TODO APP</h1>
                </div>
                    <div className='relative'>
                        <input className=' shadow-2xl py-4 px-4 rounded-2xl w-full' type='text' placeholder='Add todo..' onChange={da}/>
                        <div className='absolute right-4 bottom-5 border ' onClick={newTask}>
                            <img className='w-5' src={add} />
                        </div>
                </div>
            </div>
            {value.map((dt)=><AddNote note={dt}/>)}
            
        </div>
    )
}
 