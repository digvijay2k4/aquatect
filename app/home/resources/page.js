import React from 'react';
import Link from 'next/link';

const ResourceLinks = () => {
  const resources = [
    {
      title: 'Central Pollution Control Board (CPCB)',
      description: 'National agency for pollution control and environmental monitoring in India.',
      link: 'https://cpcb.nic.in/',
    },
    {
      title: 'India Water Resources Information System',
      description: 'Data and information on water resources and related aspects in India.',
      link: 'https://indiawris.gov.in/',
    },
    {
      title: 'National Water Quality Monitoring Programme',
      description: 'Water quality data for rivers, lakes, and groundwater in India.',
      link: 'https://cpcb.nic.in/water-quality-monitoring/',
    },
    {
      title: 'State Pollution Control Boards',
      description: 'Pollution control boards for various states in India.',
      link: 'https://cpcb.nic.in/state-pollution-control-boards/',
    },
    {
      title: 'WaterAid India',
      description: 'Non-profit organization working on water, sanitation, and hygiene issues in India.',
      link: 'https://www.wateraidindia.in/',
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Water Pollution Resources in India
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {resource.title}
              </h2>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                <span className="text-sky-600 hover:text-sky-700 font-medium">
                  Visit Website
                </span>
              </Link>
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

export default ResourceLinks;