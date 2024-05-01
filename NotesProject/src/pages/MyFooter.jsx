import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


const MyFooter = () => {
  return (
    <Footer className='bg-slate-600 text-white rounded-none' container>
      <div className="w-full text-white ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 className='text-white'">
          <div>
            <Footer.Brand className='text-white'
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 'text-white' ">
            <div className='text-white'>
              <Footer.Title title="about" />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className='text-white'>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className='text-white'>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup className='text-white' col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className='text-white'  />
        <div className="w-full sm:flex sm:items-center sm:justify-between 'text-white' ">
          <Footer.Copyright className='text-white' href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center 'text-white'">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer >
  )
}

export default MyFooter







