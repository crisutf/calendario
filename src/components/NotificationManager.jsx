import React, { useEffect } from 'react';

export function NotificationManager({ events }) {
    useEffect(() => {
        const checkNewEvents = () => {
            const storedEventCount = localStorage.getItem('calendar_event_count');
            const currentEventCount = events.length;

            if (storedEventCount) {
                const prevCount = parseInt(storedEventCount, 10);
                if (currentEventCount > prevCount) {
                    const diff = currentEventCount - prevCount;
                    // Request permission and show notification
                    if (Notification.permission === 'granted') {
                        new Notification('Nuevos Eventos', {
                            body: `Se han añadido ${diff} nuevos eventos al calendario.`,
                            icon: '/logo.png' // We will add this later
                        });
                    } else if (Notification.permission !== 'denied') {
                        Notification.requestPermission().then(permission => {
                            if (permission === 'granted') {
                                new Notification('Nuevos Eventos', {
                                    body: `Se han añadido ${diff} nuevos eventos al calendario.`,
                                    icon: '/logo.png'
                                });
                            }
                        });
                    }
                }
            }

            // Update storage
            localStorage.setItem('calendar_event_count', currentEventCount.toString());
        };

        checkNewEvents();
    }, [events]);

    return null; // This component doesn't render anything
}
