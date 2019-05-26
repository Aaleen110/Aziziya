
// const baseURL = 'http://35.200.204.201/api/'
// const baseURL = 'http://192.168.0.106:5000/api/'
const baseURL = 'http://23.235.198.220:5000/api/'

const URLs = {
    login : baseURL+ 'loginUser.php',
    signup : baseURL+ 'sign_up/',
    forgotPassword : baseURL+ 'forgot_password/',
    resetPassword: baseURL+ 'reset_password/',
    getCustomerTicket:baseURL+'get_customer_ticket/',
    cancelTicket:baseURL+'cancel_ticket/',
    getCustomerOrder: baseURL+'get_customer_order/',
    raiseTicket:baseURL+'raise_ticket/'
}

module.exports = {
    URLs,
    baseURL
}


