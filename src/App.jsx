/// src/App.jsx
import { useState, useEffect } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState('bg-black');

  // Update body background when bgColor changes
  useEffect(() => {
    document.body.className = bgColor;
  }, [bgColor]);

  // Named Function for Red Button
  function handleRedClick() {
    setBgColor('bg-red-500');
  }

  // Arrow Function for Green Button
  const handleGreenClick = () => {
    setBgColor('bg-green-400');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-white">Event Handling Demo</h1>
      <div className="space-x-4">
        <button
          onClick={handleRedClick}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
         button
        </button>
        <button
          onClick={handleGreenClick}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
         button
        </button>
        <button
          onClick={() => setBgColor('bg-blue-500')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
         button
        </button>
      </div>
    </div>
  );
};

export default App;