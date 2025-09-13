import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="block hover:scale-110 transition-transform">
          <img src={viteLogo} className="w-20 h-20 animate-pulse" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="block hover:scale-110 transition-transform">
          <img src={reactLogo} className="w-20 h-20 animate-spin" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Yowane's Portfolio
      </h1>
      
      <div className="glass-effect rounded-lg p-8 mb-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 mb-4"
        >
          Count is {count}
        </button>
        <p className="text-gray-300 text-center">
          Edit <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="text-gray-400 text-center animate-fade-in">
        🚀 Portfolio under construction with React + Vite + Tailwind CSS
      </p>
    </div>
  )
}

export default App
