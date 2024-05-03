'use client'
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import waterPollutionData from './data';
import Link from 'next/link';

const CityWaterPollutionChart = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const cityData = waterPollutionData.find((data) => data.city === selectedCity);

  const chartData = {
    labels: [
      'BOD Content',
      'Dissolved Oxygen',
      'pH Value',
      
    ],
    datasets: [
      {
        label: 'Water Pollution Metrics',
        data: cityData
          ? [
              cityData.bodContent,
              cityData.dissolvedOxygen,
              cityData.phValue,
            ]
          : [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-thin mb-4">City Water Pollution Data</h1>
      <div className="mb-4">
        <label htmlFor="citySelect" className="block font-medium">
          Select a city:
        </label>
        <select
          id="citySelect"
          value={selectedCity}
          onChange={handleCityChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select a city</option>
          {waterPollutionData.map((data) => (
            <option key={data.city} value={data.city}>
              {data.city}
            </option>
          ))}
        </select>
      </div>
      {selectedCity && (
        <div>
          <h2 className="text-xl font mb-2">{selectedCity} Water Pollution Data</h2>
          <div className=" flex items-center justify-center  chart-container h-96">
            <Bar data={chartData} />
          </div>
        </div>
      )}
      <div className='fixed bottom-5 right-5 bg-slate-900 text-slate-50 px-4 py-2 rounded-sm'>
        <Link href='\home'>HOME</Link>
      </div>
    </div>
  );
};

export default CityWaterPollutionChart;