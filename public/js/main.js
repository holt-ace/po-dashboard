document.addEventListener('DOMContentLoaded', function() {
    const poData = [
    {
        "Purchase Order": "PO-30708300",
        "Customer": "Sysco San Francisco",
        "Buyer": "Kinsey Collins",
        "Order Date": "2024-10-07",
        "Delivery Date": "2024-10-23",
        "Status": "CONFIRMED",
        "Invoice": "",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_30708300.pdf"
    },
    {
        "Purchase Order": "PO-44502160",
        "Customer": "Sysco Los Angeles",
        "Buyer": "Ricardo Amore",
        "Order Date": "2024-10-18",
        "Delivery Date": "2024-11-13",
        "Status": "CONFIRMED",
        "Invoice": "",
        "Type": "SHELF STABLE",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_44502160.pdf"
    },
    {
        "Purchase Order": "PO-29592910",
        "Customer": "Sysco Chicago",
        "Buyer": "Aaron Reichow",
        "Order Date": "2024-09-23",
        "Delivery Date": "2024-10-16",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "SHELF STABLE",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_29592910.pdf"
    },
    {
        "Purchase Order": "PO-29587710",
        "Customer": "Sysco Chicago",
        "Buyer": "Aaron Reichow",
        "Order Date": "2024-08-29",
        "Delivery Date": "2024-09-09",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_29587710.pdf"
    },
    {
        "Purchase Order": "PO-28142160",
        "Customer": "Sysco Denver",
        "Buyer": "Celina Dowling",
        "Order Date": "2024-10-15",
        "Delivery Date": "2024-10-21",
        "Status": "DELIVERED",
        "Invoice": "SENT",
        "Type": "SHELF STABLE",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_28142160.pdf"
    },
    {
        "Purchase Order": "PO-28069770",
        "Customer": "Sysco Denver",
        "Buyer": "Celina Dowling",
        "Order Date": "2024-09-03",
        "Delivery Date": "2024-09-16",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_28069770.pdf"
    },
    {
        "Purchase Order": "PO-59406120",
        "Customer": "Sysco Nashville",
        "Buyer": "Crystal Ferguson",
        "Order Date": "2024-08-30",
        "Delivery Date": "2024-09-10",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_59406120.pdf"
    },
    {
        "Purchase Order": "PO-10243890",
        "Customer": "Sysco Riverside",
        "Buyer": "Geoffrey Potter",
        "Order Date": "2024-09-13",
        "Delivery Date": "2024-09-26",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_10243890.pdf"
    },
    {
        "Purchase Order": "PO-38331580",
        "Customer": "Sysco North Texas",
        "Buyer": "Nichole Bonin",
        "Order Date": "2024-10-01",
        "Delivery Date": "2024-10-17",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "SHELF STABLE",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_38331580.pdf"
    },
    {
        "Purchase Order": "PO-38240150",
        "Customer": "Sysco North Texas",
        "Buyer": "Nichole Bonin",
        "Order Date": "2024-09-09",
        "Delivery Date": "2024-09-26",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_38240150.pdf"
    },
    {
        "Purchase Order": "PO-27378750",
        "Customer": "Sysco Central Texas",
        "Buyer": "Nichole Bonin",
        "Order Date": "2024-09-10",
        "Delivery Date": "2024-09-17",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_27378750.pdf"
    },
    {
        "Purchase Order": "PO-27286940",
        "Customer": "Sysco Houston",
        "Buyer": "Nichole Bonin",
        "Order Date": "2024-09-10",
        "Delivery Date": "2024-09-17",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_27286940.pdf"
    },
    {
        "Purchase Order": "PO-38215570",
        "Customer": "Sysco North Texas",
        "Buyer": "Nichole Bonin",
        "Order Date": "2024-09-03",
        "Delivery Date": "2024-09-17",
        "Status": "DELIVERED",
        "Invoice": "PAID",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_38215570.pdf"
    },
    {
        "Purchase Order": "PO-14517280",
        "Customer": "Sysco St. Louis",
        "Buyer": "Christina Lang",
        "Order Date": "2024-10-14",
        "Delivery Date": "2024-10-25",
        "Status": "TRANSIT",
        "Invoice": "",
        "Type": "SHELF STABLE",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_14517280.pdf"
    },
    {
        "Purchase Order": "PO-28234070",
        "Customer": "Sysco Arizona",
        "Buyer": "Geoffrey Potter",
        "Order Date": "2024-10-15",
        "Delivery Date": "2024-10-24",
        "Status": "TRANSIT",
        "Invoice": "",
        "Type": "IQF",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_28234070.pdf"
    },
    {
        "Purchase Order": "PO-10269630",
        "Customer": "Sysco Riverside",
        "Buyer": "Geoffrey Potter",
        "Order Date": "2024-09-18",
        "Delivery Date": "2024-10-23",
        "Status": "TRANSIT",
        "Invoice": "",
        "Type": "SHELF STABLE",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_10269630.pdf"
    },
    {
        "Purchase Order": "PO-30721790",
        "Customer": "Sysco San Francisco",
        "Buyer": "Kinsey Collins",
        "Order Date": "2024-10-09",
        "Delivery Date": "2024-10-23",
        "Status": "TRANSIT",
        "Invoice": "",
        "Type": "SHELF STABLE",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_30721790.pdf"
    },
    {
        "Purchase Order": "PO-27395370",
        "Customer": "Sysco Central Texas",
        "Buyer": "Nichole Bonin",
        "Order Date": "2024-09-10",
        "Delivery Date": "2024-10-29",
        "Status": "TRANSIT",
        "Invoice": "",
        "Type": "SHELF STABLE",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_27395370.pdf"
    },
    {
        "Purchase Order": "PO-27312200",
        "Customer": "Sysco Houston",
        "Buyer": "Nichole Bonin",
        "Order Date": "2024-09-23",
        "Delivery Date": "2024-10-28",
        "Status": "TRANSIT",
        "Invoice": "",
        "Type": "SHELF STABLE",
        "pdf": "https://github.com/holt-ace/po-dashboard/blob/master/Sysco%20_PO_Confirmation/PO_27312200.pdf"
    }
];

    let sortOrder = 'asc';

    // Define all your functions (same as before)
    function sortPOs() {
        const sortOption = document.getElementById('sort-options').value;
        poData.sort((a, b) => {
            let comparison = 0;
            if (sortOption === 'orderDate') {
                comparison = new Date(a["Order Date"]) - new Date(b["Order Date"]);
            } else if (sortOption === 'deliveryDate') {
                comparison = new Date(a["Delivery Date"]) - new Date(b["Delivery Date"]);
            } else if (sortOption === 'customer') {
                comparison = a["Customer"].localeCompare(b["Customer"]);
            } else if (sortOption === 'buyer') {
                comparison = a["Buyer"].localeCompare(b["Buyer"]);
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });
        displayPOs(poData);
    }

    function toggleSortOrder() {
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        document.getElementById('sort-order').innerText = sortOrder === 'asc' ? 'Ascending' : 'Descending';
    }

    function filterPOs() {
        const query = document.getElementById('search-bar').value.toLowerCase();
        const filteredPOs = poData.filter(po =>
            po["Customer"].toLowerCase().includes(query) ||
            po["Purchase Order"].toLowerCase().includes(query) ||
            po["Buyer"].toLowerCase().includes(query)
        );
        displayPOs(filteredPOs);
    }

    function filterStatus(status) {
        const filterButtons = document.querySelectorAll('.filter-buttons button');
        filterButtons.forEach(button => button.classList.remove('active'));
        const activeButton = document.querySelector(`.filter-buttons button[data-status="${status}"]`);
        if (activeButton) activeButton.classList.add('active');

        const poContainer = document.getElementById('po-container');
        poContainer.classList.remove('full-width');

        const filteredPOs = status === 'ALL' ? poData : poData.filter(po => po["Status"] === status);
        displayPOs(filteredPOs);

        if (filteredPOs.length > 0) {
            poContainer.classList.add('full-width');
        }
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    function toggleSection(titleElement) {
        const section = titleElement.parentElement;
        section.classList.toggle('collapsed');
    }

    function displayPOs(poData) {
        const confirmedContent = document.getElementById('confirmed-content');
        const transitContent = document.getElementById('transit-content');
        const deliveredContent = document.getElementById('delivered-content');
        confirmedContent.innerHTML = '';
        transitContent.innerHTML = '';
        deliveredContent.innerHTML = '';

        poData.forEach(po => {
            const poCard = document.createElement('div');
            poCard.className = 'po-card';
            poCard.onclick = () => window.open(po.pdf, '_blank');

            const poHeader = document.createElement('div');
            poHeader.className = 'po-header';
            poHeader.innerHTML = `<strong>${po["Customer"]}</strong><br><span>${po["Purchase Order"]}</span>`;

            const poDetails = document.createElement('div');
            poDetails.className = 'po-details';
            poDetails.innerHTML = `
                <div><span class="label">Buyer:</span> ${po["Buyer"]}</div>
                <div><span class="label">Order Date:</span> ${formatDateToLocal(po["Order Date"])}</div>
                <div><span class="label">Delivery Date:</span> ${formatDateToLocal(po["Delivery Date"])}</div>
                <div class="po-type">
                    <span class="type-icon">${po["Type"] === "IQF" ? "❄️" : "📦"}</span>
                    <span class="type-text">${po["Type"]}</span>
                </div>
            `;

            const poStatus = document.createElement('div');
            poStatus.className = `po-status ${po["Status"]}`;
            poStatus.innerText = po["Status"];

            const poInvoice = document.createElement('div');
            poInvoice.className = `po-invoice ${po["Invoice"]}`;
            poInvoice.innerText = po["Invoice"] ? `Invoice: ${po["Invoice"]}` : '';

            poCard.appendChild(poHeader);
            poCard.appendChild(poDetails);
            poCard.appendChild(poStatus);
            if (po["Invoice"]) poCard.appendChild(poInvoice);

            if (po["Status"] === 'CONFIRMED') {
                confirmedContent.appendChild(poCard);
            } else if (po["Status"] === 'TRANSIT') {
                transitContent.appendChild(poCard);
            } else if (po["Status"] === 'DELIVERED') {
                deliveredContent.appendChild(poCard);
            }
        });
    }

    // Notification Functionality
    function checkForDeliveryNotifications() {
        const today = new Date().setHours(0, 0, 0, 0);
        poData.forEach(po => {
            const deliveryDate = new Date(po["Delivery Date"]).setHours(0, 0, 0, 0);
            if (deliveryDate === today) {
                sendEmailNotification(po);
            }
        });
    }

    function sendEmailNotification(po) {
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: 'ace@rtecuisine.com',
                subject: `Invoice Reminder for PO: ${po["Purchase Order"]}`,
                text: `Reminder: Delivery is scheduled today for ${po["Customer"]}, PO: ${po["Purchase Order"]}. Please send the customer invoice.`
            })
        })
        .then(response => response.json())
        .then(data => console.log('Email sent successfully:', data))
        .catch(error => console.error('Error sending email:', error));
    }
        //local time date
    function formatDateToLocal(dateString) {
        const date = new Date(dateString);
        const timezoneOffset = date.getTimezoneOffset() * 60000; // Get timezone offset in milliseconds
        return new Date(date.getTime() + timezoneOffset).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
    
        // Function to calculate average delivery time
    function calculateAverageDeliveryTime() {
        const deliveredPOs = poData.filter(po => po["Status"] === "DELIVERED");
        if (deliveredPOs.length === 0) return "N/A";

        const totalDays = deliveredPOs.reduce((sum, po) => {
            const orderDate = new Date(po["Order Date"]);
            const deliveryDate = new Date(po["Delivery Date"]);
            return sum + ((deliveryDate - orderDate) / (1000 * 60 * 60 * 24));
        }, 0);

        return (totalDays / deliveredPOs.length).toFixed(2) + " days";
    }

    // Function to display average delivery time
    function displayAverageDeliveryTime() {
        const averageDeliveryTime = calculateAverageDeliveryTime();
        const averageDeliveryTimeElement = document.getElementById('average-delivery-time');
        averageDeliveryTimeElement.innerText = `${averageDeliveryTime}`;
    }


    // Run notification check on page load
    window.onload = function() {
        displayPOs(poData);
        checkForDeliveryNotifications();
        displayAverageDeliveryTime(); 
    }
    

    // Attach Event Listeners

    // Sorting
    const sortButton = document.getElementById('sort-button');
    const toggleSortOrderButton = document.getElementById('toggle-sort-order');
    const searchBar = document.getElementById('search-bar');

    sortButton.addEventListener('click', sortPOs);
    toggleSortOrderButton.addEventListener('click', toggleSortOrder);
    searchBar.addEventListener('input', filterPOs);

    // Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const status = this.getAttribute('data-status');
            filterStatus(status);
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Section Collapse
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            toggleSection(this);
        });
    });

    // Initial Display and Notifications
    displayPOs(poData);
    checkForDeliveryNotifications();

    console.log(poData);
});
