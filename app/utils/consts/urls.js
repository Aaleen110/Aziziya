
const baseURL = 'http://alaziziyamanpower.com/new_webservices/'

const URLs = {
    allResume : baseURL+ 'list-all-resume.php?',
    allCompanies : baseURL+ 'list-all-company.php?',
    updateCompanyStatus : baseURL+ 'update-company-status.php?',
    listResumeCompany: baseURL+ 'list-resume.php?',
    login:baseURL+'login.php?',
    addCompany:baseURL+'add-company.php?',

    updateCompany: baseURL+'update-company.php?',
    addResume:baseURL+'raise_ticket/'
}

module.exports = {
    URLs,
    baseURL
}


