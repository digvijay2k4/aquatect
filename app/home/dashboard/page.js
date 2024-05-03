'use client'
import React, { useState } from 'react';
import Link from 'next/link';
const WaterTreatmentDashboard = () => {
  const [selectedDevice, setSelectedDevice] = useState('device1');

  const [device1Data, setDevice1Data] = useState({
    waterPurity: 98,
    waterPH: 6.8,
    filtrationLevel: 85,
    disinfectionLevel: 92,
    waterSupply: 120000,
    coverage: 95,
  });

  const [device2Data, setDevice2Data] = useState({
    waterPurity: 95,
    waterPH: 7.2,
    filtrationLevel: 90,
    disinfectionLevel: 88,
    waterSupply: 100000,
    coverage: 92,
  });

  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  const handleControlChange = (key, value) => {
    if (selectedDevice === 'device1') {
      setDevice1Data((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    } else {
      setDevice2Data((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    }
  };

  const renderControls = () => {
    const deviceData =
      selectedDevice === 'device1' ? device1Data : device2Data;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Water Quality Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Water Quality
          </h2>
          <div className="flex items-center">
            <div className="mr-4">
              <span className="text-4xl font-bold text-green-500">
                {deviceData.waterPurity}%
              </span>
              <p className="text-gray-600">Purity</p>
              <input
                type="range"
                min="0"
                max="100"
                value={deviceData.waterPurity}
                onChange={(e) =>
                  handleControlChange('waterPurity', e.target.value)
                }
                className="w-full mt-2"
              />
            </div>
            <div>
              <span className="text-4xl font-bold text-yellow-500">
                {deviceData.waterPH}
              </span>
              <p className="text-gray-600">pH</p>
              <input
                type="range"
                min="0"
                max="14"
                step="0.1"
                value={deviceData.waterPH}
                onChange={(e) => handleControlChange('waterPH', e.target.value)}
                className="w-full mt-2"
              />
            </div>
          </div>
        </div>

        {/* Treatment Process Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Treatment Process
          </h2>
          <div className="flex items-center">
            <div className="mr-4">
              <span className="text-4xl font-bold text-sky-600">
                {deviceData.filtrationLevel}%
              </span>
              <p className="text-gray-600">Filtration</p>
              <input
                type="range"
                min="0"
                max="100"
                value={deviceData.filtrationLevel}
                onChange={(e) =>
                  handleControlChange('filtrationLevel', e.target.value)
                }
                className="w-full mt-2"
              />
            </div>
            <div>
              <span className="text-4xl font-bold text-sky-600">
                {deviceData.disinfectionLevel}%
              </span>
              <p className="text-gray-600">Disinfection</p>
              <input
                type="range"
                min="0"
                max="100"
                value={deviceData.disinfectionLevel}
                onChange={(e) =>
                  handleControlChange('disinfectionLevel', e.target.value)
                }
                className="w-full mt-2"
              />
            </div>
          </div>
        </div>

        {/* Supply and Distribution Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Supply and Distribution
          </h2>
          <div className="flex items-center">
            <div className="mr-4">
              <span className="text-4xl font-bold text-red-500">
                {deviceData.waterSupply}
              </span>
              <p className="text-gray-600">Gallons/Day</p>
              <input
                type="range"
                min="0"
                max="500000"
                step="1000"
                value={deviceData.waterSupply}
                onChange={(e) =>
                  handleControlChange('waterSupply', e.target.value)
                }
                className="w-full mt-2"
              />
            </div>
            <div>
              <span className="text-4xl font-bold text-green-500">
                {deviceData.coverage}%
              </span>
              <p className="text-gray-600">Coverage</p>
              <input
                type="range"
                min="0"
                max="100"
                value={deviceData.coverage}
                onChange={(e) => handleControlChange('coverage', e.target.value)}
                className="w-full mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
         Dashboard
        </h1>

        <div className="mb-6">
          <label htmlFor="deviceSelect" className="block font-medium">
            Select a device:
          </label>
          <select
            id="deviceSelect"
            value={selectedDevice}
            onChange={handleDeviceChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600 sm:text-sm"
          >
            <option value="device1">Main</option>
            <option value="device2">Backup</option>
          </select>
        </div>

        {renderControls()}
      </div>
      <div className='fixed bottom-5 right-5 bg-slate-900 text-slate-50 px-4 py-2 rounded-sm'>
        <Link href='\home'>HOME</Link>
      </div>
    </div>
  );
};

export default WaterTreatmentDashboard;