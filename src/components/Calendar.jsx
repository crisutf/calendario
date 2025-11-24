import React from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useCalendar } from '../context/CalendarContext';
import { CalendarHeader } from './CalendarHeader';
import { DayCell } from './DayCell';
import { EventModal } from './EventModal';

export function Calendar() {
    const { currentDate, events } = useCalendar();
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday start
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const days = eachDayOfInterval({ start: startDate, end: endDate });
    const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

    const handleDayClick = (date) => {
        setSelectedDate(date);
        setIsModalOpen(true);
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-4">
            <div className="glass rounded-3xl shadow-xl overflow-hidden border border-white/40">
                <CalendarHeader />

                {/* Weekday headers */}
                <div className="grid grid-cols-7 bg-white/30 border-b border-gray-100">
                    {weekDays.map(day => (
                        <div key={day} className="py-2 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 bg-gray-50/30">
                    {days.map((day, idx) => (
                        <DayCell
                            key={idx}
                            date={day}
                            currentMonth={currentDate}
                            events={events}
                            onClick={handleDayClick}
                        />
                    ))}
                </div>
            </div>

            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                date={selectedDate}
                events={events}
            />
        </div>
    );
}
