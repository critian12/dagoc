import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Transitions from '../../components/Transition'
import ojtImage from '../../assets/ojt.jpg'
import famImage from '../../assets/fam.jpg'

const Project = ({ imageSrc, title, descriptions, link }) => {
  return (
    <div className='w-full h-full flex flex-row gap-6 p-8 border rounded-2xl shadow-xl'>
      <div className='h-full w-1/2'>
        {/* Display local image */}
        <img
          src={imageSrc}
          alt={title}
          className='w-full h-96 object-cover rounded border shadow-md hover:opacity-80 transition duration-300'
        />
      </div>
      <div className='w-1/2 flex flex-col gap-5'>
        <h1 className='font-bold text-2xl p-5'>{title}</h1>
        <p className='text-xl font-medium p-5'>{descriptions}</p>
        {link && (
          <Link
            to={link}
            target='_blank'
            className='flex justify-center items-center text-red-400 hover:text-red-700'
          >
            View full project <AiOutlineLink fontSize={20} className='ml-4' />
          </Link>
        )}
      </div>
    </div>
  )
}

const ProjectsComponents = () => {
  return (
    <Transitions>
      <>
        <div className='flex justify-center items-center w-full p-5'>
          <h1 className='text-4xl leading-tight text-center p-5 inline-block font-bold'>
            My Gallery
          </h1>
        </div>

        <div className='flex flex-col gap-10 h-full p-16'>
          
          {/* Project 1: Practicum Orientation & Pinning Ceremony */}
          <Project
            title={`Practicum Orientation & Pinning Ceremony`}
            imageSrc={ojtImage} 
            descriptions={`The Practicum Orientation and Pinning Ceremony marks the beginning of my professional journey, providing me with essential guidance and symbolizing my readiness to enter the field.`}
          />

          {/* Project 2: Family Gathering Photos */}
          <Project
            title={`Family Gathering Event`}
            imageSrc={famImage}
            descriptions={`My family is my foundation, providing unwavering support, love, and strength throughout my journey.`}
          />

        </div>
      </>
    </Transitions>
  )
}

export default ProjectsComponents
