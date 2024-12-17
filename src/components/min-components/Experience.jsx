import React from 'react'
import { AiFillAccountBook } from 'react-icons/ai'

const Details = ({ location, descriptions, work }) => {
    return (
        <div className='w-[68%] mx-auto flex space-x-2 space-y-2 items-start justify-between'>

            <div className='absoulute justify-center items-center flex flex-col z-10'>
                <span className='bg-black flex justify-center items-center w-8 h-8 rounded-full'><AiFillAccountBook fontSize={20} className='text-white' /></span>
                <div className='top-0 w-1 h-[150px] bg-black'>&nbsp;</div>
            </div>

            <ul className='w-[90%] mx-auto flex flex-col space-y-2'>
                <li className='flex text-xl text-left pt-0 font-bold text-gray-700'>
                    <div>
                        <h3 className='capitalize text-2xl font-bold'>
                            {work}
                        </h3>
                    </div>
                </li>
                <li>
                    <h4 className='capitalize text-2xl font-primary'>
                        {location}
                    </h4>
                </li>
                <li>
                    <p className='capitalize font-medium text-black/75'>
                        {descriptions}
                    </p>
                </li>
            </ul>
        </div>
    )
}

const Experience = () => {
    return (
        <div className='pt-0 inline-block justify-between items-center mb-32'>
            <h1
                className='flex text-4xl justify-center items-center text-center py-5 pt-0 font-bold text-gray-700/75'
            >
                <span className='flex'>Experiences</span>
            </h1>

            <div className='p-5 flex flex-col space-y-5'>
                <Details
                    work={'Technical support'}
                    location={'2023-2024 | Cagayan De Oro.'}
                    descriptions={`
              Completing my OJT as Technical Support allowed me to develop skills in troubleshooting, user assistance, and IT system management, enhancing my technical and problem-solving abilities."
                `}
                />
            </div>
        </div>
    )
}

export default Experience