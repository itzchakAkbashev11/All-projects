import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import UserContext from '../context/userContext'

const Home = () => {
  return (
    <>
         <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
          <header className="text-center mb-8">
            <h1 className="text-4xl text-blue-500 font-bold">Welcome to Our Website</h1>
            <p className="text-gray-600">Discover amazing content and explore our services.</p>
          </header>
          <section className="mb-8">
            <h2 className="text-2xl text-blue-500 font-bold">About Us</h2>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum justo eget libero viverra, sit amet efficitur quam
              consequat.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl text-blue-500 font-bold">Featured Products</h2>
            {/* Add code to display featured products */}
          </section>
          <section className="mb-8">
            <h2 className="text-2xl text-blue-500 font-bold">Contact Us</h2>
            <p className="text-gray-800">
              Have questions or suggestions? Feel free to{' '}
              <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
            </p>
          </section>
          <footer className="text-center">
            <p className="text-gray-600">&copy; 2024 Our Website. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home