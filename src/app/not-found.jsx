"use client"
import React from 'react'
import { Link } from 'next-view-transitions'

export default function NotFound() {
  return (
    <div className="container w-full h-screen! flex flex-col justify-center items-center text-center">
      <h1 className="text-8xl text-white leading-none tracking-tighter mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl text-neutral-300 mb-8 tracking-tight">
        Page Not Found
      </h2>
      <p className="text-neutral-400 mb-12 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="hover:underline"
      >
        Go Back Home
      </Link>
    </div>
  );
}
