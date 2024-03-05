// Function to switch to the dashboard view
function showDashboard() {
    document.getElementById('expenseTracker').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    // Generate dummy data for the pie chart
    const data = {
        labels: ['Pending to Start', 'Working on it', 'Completed'],
        datasets: [{
            data: [tasks.filter(task => task.status === 'pending').length,
                   tasks.filter(task => task.status === 'working').length,
                   tasks.filter(task => task.status === 'completed').length],
            backgroundColor: ['pink', 'purple', 'plum']
        }]
    };

    // Get the canvas element
    const canvas = document.getElementById('pieChart').getContext('2d');

    // Create the pie chart
    new Chart(canvas, {
        type: 'pie',
        data: data
    });
}
