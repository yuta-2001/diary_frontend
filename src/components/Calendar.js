import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
	return (
		<FullCalendar
			plugins={[dayGridPlugin]}
			locale="ja"
			initialEvents={[{ title: 'initial event', start: new Date() }]}
		/>
	)
}

export default Calendar;
