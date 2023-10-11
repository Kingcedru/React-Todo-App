import React from 'react'
import add from '../assets/img/add-solid.svg'
export default function CreateNote(props) {
    return(
        <div className='mx-auto w-5/6'>
            <div className='grid gap-7 my-7'>
                <div className='flex justify-center text-2xl font-bold w-full'>
                    <h1>TODO APP</h1>
                </div>
                    <div className='relative'>
                        <input className=' shadow-2xl py-4 px-4 rounded-2xl w-full' type='text' placeholder='Add todo..'/>
                        <div className='absolute right-4 bottom-5'>
                            <img className='w-5' src={add}/>
                        </div>
                </div>
            </div>
        </div>
    )
}
 