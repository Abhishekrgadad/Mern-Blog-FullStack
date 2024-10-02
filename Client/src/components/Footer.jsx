import React from 'react'
import { Footer } from 'flowbite-react'
import {Link}  from 'react-router-dom';
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
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
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
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
        <Footer.Divider/>
        <div className=" w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href='#' by="Abhishek's Blog" year={new Date().getFullYear()}/>
        </div>
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href='#' icon={BsFacebook}/>
          <Footer.Icon href='#' icon={BsInstagram}/>
          <Footer.Icon href='#' icon={BsTwitter}/>
          <Footer.Icon href='#' icon={BsGithub}/>
          <Footer.Icon href='#' icon={BsDribbble}/>
        </div>
      </div>
    </Footer>
  )
};
