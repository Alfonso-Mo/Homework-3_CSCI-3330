$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    // part 3

    $('#username').text(username);
    $('.revenue-amt').text(revenueAmt);
    $('#customer-num').text(customerNum);
    $('#orders-amt').text(ordersAmt);
    $('#issues-amt').text(issuesAmt);
    $('#notification-num').text(notifAmt);

    for(let i = 0; i < sales.length; i++){
    // create variables that hold a jQuery object, which allows to use jQuery methods (.text)
        let productCell = $('<td></td>');
        productCell.text(sales[i].product);

        let quantityCell = $('<td></td>');
        quantityCell.text(sales[i].quantity);

        let revenueCell = $('<td></td>');
        revenueCell.text(sales[i].revenue);

        let row = $('<tr></tr>')
        row.append(productCell, quantityCell, revenueCell);

        // This appends everything that was assigned to the row variable into the <tbody>
        $('#salesTableBody').append(row);
    }

    for(let i = 0; i < activities.length; i++){
        let messageCell = $('<li></li>');
        messageCell.text(activities[i].message);

        $('#activity-list').append(messageCell);
    }

    for(let i = 0; i < customers.length; i++){
        let nameCell = $('<td></td>');
        nameCell.text(customers[i].name);

        let emailCell = $('<td></td>');
        emailCell.text(customers[i].email);

        let statusCell = $('<td></td>');
        statusCell.text(customers[i].status);
        
        let joinedCell = $('<td></td>');
        joinedCell.text(customers[i].joined);

        let row = $('<tr></tr>');
        row.append(nameCell, emailCell, statusCell, joinedCell);

        $('#customerTableBody').append(row);
    }

    for(let i = 0; i < messages.length; i++){
        let messageCell = $('<li></li>');
        messageCell.text(messages[i].messsage);

        $('#system-status-list').append(messageCell);
    }

    for(let i = 0; i < notifications.length; i++){
        let messageCell = $('<li></li>');
        messageCell.text(notifications[i].messsage);

        $('#notifications-list').append(messageCell);
    }

    

    for(let i = 0; i < tasks.length; i++){
        
        let messageCell = $('<li></li>');
        messageCell.text(tasks[i].messsage);

        $('#tasks-list').append(messageCell);
    }

    });
    