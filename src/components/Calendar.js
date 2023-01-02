import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all';
import { useCallback } from 'react';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

const Calendar = () => {
	const handleDateClick = useCallback((DateClickArg) => {
		alert(DateClickArg.dateStr);
	}, []);

	return (
		<FullCalendar
			plugins={[dayGridPlugin, interactionPlugin]}
			locales={allLocales}
			locale="ja"
			dateClick={handleDateClick}
		/>
	)
}

export default Calendar;
