var companyLegalName = "";
var companyDBAName = "";
var providerType = "";
var companyPhone = "";
var companyEmail = "";
var companyAddress = "";
var companyWebsite = "";
var companyOwnerName = "";
var companyOwnerPhone = "";
var companyBusinessLicenseNumber = "";
var companyOwnerEmail = "";
var companyServicingAddress = "";
var companyServiceState = "";
var companyServiceZip = "";
var companyAddressState = "";
var companyAddressZip = "";
var companyOwnerPhoneNumber = "";
var companyContractedTransdev = false;
var medicaidProviderID = "";
var nationalProviderNumber = "";
var federalEmployerID = "";
var independentProviderSSN = "";
var contractedDrivers = 0;  
var contractedVehicles = 0;
var vehicleRoster = [];
var driverRoster = [];
var operatingCounties = [];
var portalRequest = "";
var yourName = "";
var yourTitle = "";
var signatureName = "";
var signature = "";     
export function setCompanyAddressState(value) {
    companyAddressState = value;
}
export function setCompanyAddressZip(value) {
    companyAddressZip = value;
}
export function getCompanyAddressState() {
    return companyAddressState;
}
export function getCompanyAddressZip() {
    return companyAddressZip;
}
export function getCompanyAddressStateAndZip() {
    if (companyAddressState && companyAddressZip) {
        return companyAddressState + " " + companyAddressZip;      
    } else {
        return null;
    } 
}
export function setDriverRoster(value) {
    console.log("Set Driver Roster Name: " + value.name);
    driverRoster = value;
}
export function getDriverRoster() {
    console.log("Get Driver Roster Name: " + driverRoster.name);
    return driverRoster;
}
export function getDriverRosterName() {
    return driverRoster.name;
}
export function setCompanyLegalName(value) {
    companyLegalName = value;
}
export function setCompanyDBAName(value) {
    companyDBAName = value;
}
export function setProviderType(value) {
    providerType = value;
}
export function setCompanyPhone(value) {
    companyPhone = value;
}
export function setCompanyEmail(value) {
    companyEmail = value;
}
export function setCompanyAddress(value) {
    companyAddress = value;
}
export function setCompanyWebsite(value) {
    companyWebsite = value;
}
export function setCompanyOwnerName(value) {
    companyOwnerName = value;
}
export function setCompanyOwnerPhone(value) {
    companyOwnerPhone = value;
}
export function setCompanyBusinessLicenseNumber(value) {
    companyBusinessLicenseNumber = value;
}
export function setCompanyOwnerEmail(value) {
    companyOwnerEmail = value;
}
export function setCompanyServicingAddress(value) {
    companyServicingAddress = value;
}
export function setCompanyServiceState(value) {
    companyServiceState = value;
}
export function setCompanyServiceZip(value) {
    companyServiceZip = value;
}   
export function setCompanyOwnerPhoneNumber(value) {
    companyOwnerPhoneNumber = value;
}
export function setCompanyContractedTransdev(value) {
    companyContractedTransdev = value;
}
export function setMedicaidProviderID(value) {
    medicaidProviderID = value;
}
export function setNationalProviderNumber(value) {
    nationalProviderNumber = value;
}
export function setFederalEmployerID(value) {
    federalEmployerID = value;
}
export function setIndependentProviderSSN(value) {
    independentProviderSSN = value;
}
export function setContractedDrivers(value) {
    contractedDrivers = value;
}
export function setContractedVehicles(value) {
    contractedVehicles = value;
}
export function setVehicleRoster(value) {
    console.log("Set Vehicle Roster Name: " + value.name);
    vehicleRoster = value;
}
export function setOperatingCounties(value) {
    operatingCounties = value;
}
export function setPortalRequest(value) {
    console.log("Set Portal Request: " + value.name);
    portalRequest = value;
}
export function setYourName(value) {
    yourName = value;
}
export function setYourTitle(value) {
    yourTitle = value;
}
export function setSignatureName(value) {
    signatureName = value;
}
export function setSignature(value) {
    signature = value;
}
export function getCompanyLegalName() {
    return companyLegalName;
}
export function getCompanyDBAName() {
    return companyDBAName;
}
export function getProviderType() {
    return providerType;
}   
export function getCompanyPhone() { 
    return companyPhone;
}
export function getCompanyEmail() {
    return companyEmail;
}
export function getCompanyAddress() {
    return companyAddress;
}
export function getCompanyWebsite() {
    return companyWebsite;
}
export function getCompanyOwnerName() {
    return companyOwnerName;
}
export function getCompanyOwnerPhone() {
    return companyOwnerPhone;
}
export function getCompanyBusinessLicenseNumber() {
    return companyBusinessLicenseNumber;
}
export function getCompanyOwnerEmail() {
    return companyOwnerEmail;
}
export function getCompanyServicingAddress() {
    return companyServicingAddress;
}
export function getCompanyServiceState() {
    return companyServiceState;
}
export function getCompanyServiceZip() {
    return companyServiceZip;
}   

export function getCompanyOwnerPhoneNumber() {
    return companyOwnerPhoneNumber;
}
export function getCompanyContractedTransdev() {
    return companyContractedTransdev;
}
export function getMedicaidProviderID() {
    return medicaidProviderID;
}
export function getNationalProviderNumber() {
    return nationalProviderNumber;
}
export function getFederalEmployerID() {
    return federalEmployerID;
}
export function getIndependentProviderSSN() {
    return independentProviderSSN;
}
export function getContractedDrivers() {
    return contractedDrivers;
}
export function getContractedVehicles() {
    return contractedVehicles;
}
export function getVehicleRoster() {
    console.log("Get Vehicle Roster Name: " + vehicleRoster.name);
    return vehicleRoster;
}
export function getVehicleRosterName() {
    console.log("Get Vehicle Roster Name: " + vehicleRoster.name);
    return vehicleRoster.name;
}

export function getOperatingCounties() {
    return operatingCounties;
}
export function getPortalRequest() {
    console.log("Get Portal Request: " + portalRequest.name);
    return portalRequest;
}
export function getPortalRequestName() {
    return portalRequest.name;
}
export function getYourName() {
    return yourName;
}
export function getYourTitle() {
    return yourTitle;
}
export function getSignatureName() {
    return signatureName;
}
export function getSignature() {
    return signature;
}

export function getSignatureType() {
    return signatureName.type;  
}
