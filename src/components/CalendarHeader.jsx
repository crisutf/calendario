import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCalendar } from '../context/CalendarContext';

export function CalendarHeader() {
    const { currentDate, nextMonth, prevMonth, goToToday } = useCalendar();

    return (
        <div className="flex items-center justify-between px-6 py-4 glass rounded-t-3xl border-b border-gray-200/50">
            <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold capitalize text-gray-900 tracking-tight">
                    {format(currentDate, 'MMMM yyyy', { locale: es })}
                </h2>
                <div className="flex gap-1">
                    <button onClick={prevMonth} className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-500 hover:text-gray-900">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={nextMonth} className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-500 hover:text-gray-900">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <button
                onClick={goToToday}
                className="px-4 py-1.5 text-sm font-medium text-apple-blue bg-blue-50/50 hover:bg-blue-100/80 rounded-full transition-colors backdrop-blur-sm"
            >
                Hoy
            </button>
        </div>
    );
}
