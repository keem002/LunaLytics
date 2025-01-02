document.getElementById('periodForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const cycleLength = (endDate - startDate) / (1000 * 60 * 60 * 24); // Calculate cycle length in days

    // Simplified linear regression model for predicting the next period
    const predictNextPeriod = (cycleLength) => {
        // This is a placeholder for a more complex model that could use historical data
        // For simplicity, we'll just add the cycle length to the current date
        const nextStartDate = new Date();
        nextStartDate.setDate(nextStartDate.getDate() + cycleLength);
        return nextStartDate;
    };

    const nextStartDate = predictNextPeriod(cycleLength);
    document.getElementById('prediction').textContent = `Your next period is predicted to start on ${nextStartDate.toLocaleDateString()}.`;
});
