console.log("hello")


let dashboardMxer = document.getElementById("dashboardMxer")
let propertyMxer = document.getElementById("propertyMxer")
let profileMxer = document.getElementById("profileMxer")
let logoutMxer = document.getElementById("logoutMxer")

const dashboard = () => {
    console.log("dashboard", dashboardMxer)

    dashboardMxer.className = "dashboard show"
    propertyMxer.className = "property hide"
    profileMxer.className = "profile hide"
    logoutMxer.className = "logout hide"
}
const property = () => {
    console.log("property")
    dashboardMxer.className = "dashboard hide"
    propertyMxer.className = "property show"
    profileMxer.className = "profile hide"
    logoutMxer.className = "logout hide"
}
const profile = () => {
    console.log("profile")
    dashboardMxer.className = "dashboard hide"
    propertyMxer.className = "property hide"
    profileMxer.className = "profile show"
    logoutMxer.className = "logout hide"
}
const logout = () => {
    console.log("logout")
    dashboardMxer.className = "dashboard hide"
    propertyMxer.className = "property hide"
    profileMxer.className = "profile hide"
    logoutMxer.className = "logout show"
}


// Sidebar Toggle
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
});

// Example Chart Integration
document.addEventListener('DOMContentLoaded', () => {
    // Chart1 Example
    var chart1 = document.getElementById('chart1').getContext('2d');
    new Chart(chart1, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'User Signups',
                data: [50, 60, 70, 80, 90],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart2 Example
    var chart2 = document.getElementById('chart2').getContext('2d');
    new Chart(chart2, {
        type: 'bar',
        data: {
            labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
            datasets: [{
                label: 'Sales',
                data: [300, 400, 200, 500, 700],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
