import React from 'react';
import { format, isSameMonth, isToday } from 'date-fns';
import { cn } from '../lib/utils';

export function DayCell({ date, currentMonth, events = [], onClick }) {
    const isCurrentMonth = isSameMonth(date, currentMonth);
    const isDayToday = isToday(date);

    // Filter events for this day
    const dayEvents = events.filter(event =>
        format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );

    return (
        <div
            onClick={() => onClick(date)}
            className={cn(
                "h-24 sm:h-32 border-b border-r border-gray-100 p-2 transition-colors cursor-pointer relative group",
                !isCurrentMonth && "bg-gray-50/50 text-gray-400",
                isCurrentMonth && "bg-white/40 hover:bg-white/60",
                isDayToday && "bg-blue-50/30"
            )}
        >
            <div className="flex justify-between items-start">
                <span className={cn(
                    "text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full",
                    isDayToday ? "bg-apple-blue text-white" : "text-gray-700",
                    !isCurrentMonth && "text-gray-400"
                )}>
                    {format(date, 'd')}
                </span>
            </div>

            <div className="mt-1 space-y-1">
                {dayEvents.map((event, idx) => (
                    <div key={idx} className={cn(
                        "text-xs px-1.5 py-0.5 rounded truncate",
                        event.type === 'exam' ? "bg-red-100 text-red-700" :
                            event.type === 'holiday' ? "bg-green-100 text-green-700" :
                                "bg-blue-100 text-blue-700"
                    )}>
                        {event.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
