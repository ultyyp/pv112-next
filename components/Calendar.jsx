import React, { useState } from 'react';

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [calendar, setCalendar] = useState([]);

  const daysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const generateCalendar = (year, month) => {
    const days = daysInMonth(year, month);
    const firstDay = new Date(year, month - 1, 1).getDay();
    const calendarArray = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || dayCounter > days) {
          week.push('');
        } else {
          week.push(dayCounter);
          dayCounter++;
        }
      }
      calendarArray.push(week);
    }

    setCalendar(calendarArray);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleGenerateCalendar = () => {
    generateCalendar(parseInt(year), parseInt(month));
  };

  return (
    <div>
      <h1>Календарь</h1>
      <div>
        <label>Год: </label>
        <input type="number" value={year} onChange={handleYearChange} />
      </div>
      <div>
        <label>Месяц: </label>
        <input type="number" value={month} onChange={handleMonthChange} />
      </div>
      <button onClick={handleGenerateCalendar}>Сгенерировать календарь</button>
      <table>
        <thead>
          <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
