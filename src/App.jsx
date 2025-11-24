import React from 'react';
import { CalendarProvider } from './context/CalendarContext';
import { Calendar } from './components/Calendar';

function App() {
  return (
    <CalendarProvider>
      <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans selection:bg-apple-blue selection:text-white">
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
            Curso 2025/26
          </h1>
          <p className="text-gray-500">Calendario Escolar</p>
        </div>
        <Calendar />
      </div>
    </CalendarProvider>
  );
}

export default App;
