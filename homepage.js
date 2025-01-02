let periodDates = [];

function addPeriodDate() {
    const periodDate = document.getElementById('periodDate').value;
    const periodDuration = document.getElementById('periodDuration').value;
    if (periodDate && periodDuration) {
        const startDate = new Date(periodDate);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + parseInt(periodDuration) - 1);
        periodDates.push({ start: startDate, end: endDate });
        generateCalendar();
    }
}

function generateCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        calendar.appendChild(document.createElement('div'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('calendar-day');

        periodDates.forEach(period => {
            if (date >= period.start && date <= period.end) {
                dayElement.classList.add('period-date');
            }
        });

        calendar.appendChild(dayElement);
    }
}

// Assuming this is the end of your existing calendar generation code
generateCalendar();

// Add Symptoms div
const symptomsDiv = document.createElement('div');
symptomsDiv.id = 'symptomsDiv';
symptomsDiv.innerHTML = `
    <h2>Add Symptoms</h2>
    <form>
        <label for="symptom">Symptom:</label>
        <input type="text" id="symptom" name="symptom">
        <input type="submit" value="Submit">
    </form>
`;

// Append the symptomsDiv to the calendarContainer or directly to the body if calendarContainer is not defined
const calendarContainer = document.getElementById('calendarContainer');
if (calendarContainer) {
    calendarContainer.appendChild(symptomsDiv);
} else {
    document.body.appendChild(symptomsDiv);
}

