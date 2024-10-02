import React from 'react'
import { Footer } from 'flowbite-react'
import {Link}  from 'react-router-dom';
export default function footer() {
  return (
    <Footer container className='border border-t-8 border-teal-400'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="">
          <div className=" ">
          <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-cyan-600 via-purple-500 to-pink-400 rounded-lg text-white'>Abhishek's</span>
          Blog
        </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title='About'/>
            <Footer.LinkGroup col>
              <Footer.Link href='https://wwww.100jsprojects.com'
              target='_blank'
              rel='noopener noreferrer'>
                100 JS Projects
              </Footer.Link>
              <Footer.Link href='https://wwww.100jsprojects.com'
              target='/about'
              rel='noopener noreferrer'>
                Abhishek's Blog
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow Us'/>
            <Footer.LinkGroup col>
              <Footer.Link href='https://wwww.github.com/abhishekrgadad'
              target='_blank'
              rel='noopener noreferrer'>
                Github
              </Footer.Link>
              <Footer.Link href='https://wwww.discord.com'
              target='_blank'
              rel='noopener noreferrer'>
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal'/>
            <Footer.LinkGroup col>
              <Footer.Link 
              target='#'>
                Privacy Policy
              </Footer.Link>
              <Footer.Link 
              target='#'
              > 
                Terms and Conditions
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            
          </div>
        </div>
      </div>
    </Footer>
  )
};
