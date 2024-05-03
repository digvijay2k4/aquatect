import React from 'react';
import data from './data'
import Link from 'next/link';
const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center"> Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((developer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`https://picsum.photos/id/${index + 1}/300/200`}
                alt={developer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {developer.name}
                </h2>
                <p className="text-gray-700 mb-2">{developer.username}</p>
                <p className="text-gray-600 mb-4">{developer.contribution}</p>
                <p className="text-gray-500 mb-4">{developer.location}</p>
                <div className="flex justify-center">
                  <a
                    href={developer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 mr-4"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a
                    href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='fixed bottom-5 right-5 bg-slate-900 text-slate-50 px-4 py-2 rounded-sm'>
        <Link href='\home'>HOME</Link>
      </div>
    </div>
  );
};

export default About;