// : In a payment processing system, you need to:
// Authenticate the user, verify if the payment method is valid, Process the
// payment, Update the user’s account balance, and notify the user of the
// payment result via email.
// Design this payment processing system using callbacks to ensure each step
// happens in order?

async function authenticateUser(userCredentials) {
    
    const isAuthenticated = true;
    if (!isAuthenticated) {
        throw new Error("Authentication failed");
    }
    else
      console.log('user autehnticated');
}

async function verifyPaymentMethod(paymentInfo) {
   
    const isValid = true; 
    if (!isValid) {
        throw new Error("Invalid payment method");
    }
    else
    console.log("payment verified");
}

async function processPayment(amount) {
    
    const isProcessed = true; 
    if (!isProcessed) {
        throw new Error("Payment processing failed");
    }
    else
    console.log("Payment processed");
}

async function updateAccountBalance(userId, amount) {
   
    const isUpdated = true; 
    if (!isUpdated) {
        throw new Error("Failed to update account balance");
    }
    else
    console.log("updated account balance");
}

function notifyUser(userId, message) {
    console.log(`Notification sent to user ${userId}: ${message}`);
}


async function processPaymentFlow(userCredentials, paymentInfo, amount, userId) {
    try {
        await authenticateUser(userCredentials);
        await verifyPaymentMethod(paymentInfo);
        await processPayment(amount);
        await updateAccountBalance(userId, amount);
        notifyUser(userId, "Payment processed successfully");
    } catch (error) {
        console.error(error.message);
        notifyUser(userId, "Payment processing failed: " + error.message);
    }
}

    await processPaymentFlow('user123', { cardNumber: '411111' }, 100.00, 'user123');
 
