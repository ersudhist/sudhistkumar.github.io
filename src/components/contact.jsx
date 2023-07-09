import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/cf1da311-2ccf-400d-8f87-b150d9841021' className='flex flex-col max-w-[600px] w-full mt-8' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-200'>Contact</p>
                <p className='text-gray-200 py-4'>Submit the form below or email me-kumarsudhist@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='E-mail' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' cols='30' rows='6' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's catchup</button>
        </form>

    </div>
  )
}

export default Contact