import React from 'react';

const BadgeList = ({ items }) => {
  const colorClasses = [
    'bg-gray-50 text-gray-600 ring-gray-500/10',
    'bg-red-50 text-red-700 ring-red-600/10',
    'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    'bg-green-50 text-green-700 ring-green-600/20',
    'bg-blue-50 text-blue-700 ring-blue-700/10',
    'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
    'bg-purple-50 text-purple-700 ring-purple-700/10',
    'bg-pink-50 text-pink-700 ring-pink-700/10'
  ];

  const getRandomColorClass = () => {
    return colorClasses[Math.floor(Math.random() * colorClasses.length)];
  };

  return (
    <div className="flex flex-wrap gap-1">
      {items?.map((item, index) => (
        <span
          key={index}
          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getRandomColorClass()}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default BadgeList;
