import { StyleSheet } from "@react-pdf/renderer";
import { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import { Tooltip } from "react-tooltip";
import 'react-phone-number-input/style.css';
import Select from "react-select";
import SignatureCanvas from "react-signature-canvas";
import { setCompanyLegalName, setCompanyDBAName, setProviderType, setCompanyPhone, getCompanyEmail, getCompanyAddress, getCompanyPhone, getCompanyBusinessLicenseNumber, getCompanyOwnerEmail, getCompanyServicingAddress, getCompanyWebsite, getCompanyOwnerPhone, getVehicleRoster } from "../data/registrationData";
import { setCompanyOwnerPhone, setCompanyBusinessLicenseNumber, setCompanyOwnerEmail } from "../data/registrationData";
import { setCompanyOwnerPhoneNumber, setCompanyContractedTransdev, setMedicaidProviderID } from "../data/registrationData";
import { setNationalProviderNumber, setFederalEmployerID } from "../data/registrationData";
import { setIndependentProviderSSN, setContractedDrivers, setContractedVehicles, getProviderType } from "../data/registrationData";
import { setDriverRoster, setVehicleRoster, setOperatingCounties } from "../data/registrationData";
import { setPortalRequest, setYourName, setYourTitle, setSignatureName } from "../data/registrationData";
import { setSignature, getCompanyAddressState, setCompanyAddressState, setCompanyAddressZip, getCompanyAddressZip } from "../data/registrationData";
import { setCountyDropDown, setCompanyEmail, setCompanyAddress, setCompanyWebsite, setCompanyOwnerName, setCompanyServicingAddress, } from "../data/registrationData";
import { getCompanyLegalName, getCompanyDBAName, getCompanyContractedTransdev, getMedicaidProviderID, getCompanyOwnerName, getNationalProviderNumber, getFederalEmployerID, getIndependentProviderSSN, getContractedDrivers, getContractedVehicles, getDriverRoster, getOperatingCounties, getPortalRequest, getYourName, getYourTitle, getSignatureName, getSignature } from "../data/registrationData";
import { getCompanyServiceState, setCompanyServiceState, getCompanyServiceZip, setCompanyServiceZip, getCompanyOwnerPhoneNumber } from "../data/registrationData";  

    const coloradoCounties = ["Adams County", "Alamosa County", "Arapahoe County", "Archuleta County", "Baca County",
    "Bent County", "Boulder County", "City and County of Broomfield", "Chaffee County", "Cheyenne County",
    "Clear Creek County", "Conejos County", "Costilla County", "Crowley County", "Custer County", "Delta County",
    "City and County of Denver", "Dolores County", "Douglas County", "Eagle County", "El Paso County", "Elbert County",
    "Fremont County", "Garfield County", "Gilpin County", "Grand County", "Gunnison County", "Hinsdale County",
    "Huerfano County", "Jackson County", "Jefferson County", "Kiowa County", "Kit Carson County", "La Plata County",
    "Lake County", "Larimer County", "Las Animas County", "Lincoln County", "Logan County", "Mesa County", "Mineral County",
    "Moffat County", "Montezuma County", "Montrose County", "Morgan County", "Otero County", "Ouray County", "Park County",
    "Phillips County", "Pitkin County", "Prowers County", "Pueblo County", "Rio Blanco County", "Rio Grande County",
    "Routt County", "Saguache County", "San Juan County", "San Miguel County", "Sedgwick County", "Summit County",
    "Teller County", "Washington County", "Weld County", "Yuma County"];

const Registration = () => {
    const [countyDropDownLocal, setCountyDropDownLocal] = useState([]);
    const [conpanyLegalNameLocal, setCompanyLegalNameLocal] = useState("");
    const [companyDBANameLocal, setCompanyDBANameLocal] = useState("");
    const [providerTypeLocal, setProviderTypeLocal] = useState("");
    const [companyPhoneLocal, setCompanyPhoneLocal] = useState("");
    const [companyEmailLocal, setCompanyEmailLocal] = useState("");
    const [companyAddressLocal, setCompanyAddressLocal] = useState("");
    const [companyAddressStateLocal, setCompanyAddressStateLocal] = useState("");
    const [companyAddressZipLocal, setCompanyAddressZipLocal] = useState("");
    const [companyWebsiteLocal, setCompanyWebsiteLocal] = useState("");
    const [companyOwnerNameLocal, setCompanyOwnerNameLocal] = useState("");
    const [companyOwnerPhoneLocal, setCompanyOwnerPhoneLocal] = useState("");
    const [companyBusinessLicenseNumberLocal, setCompanyBusinessLicenseNumberLocal] = useState("");
    const [companyOwnerEmailLocal, setCompanyOwnerEmailLocal] = useState("");
    const [companyServicingAddressLocal, setCompanyServicingAddressLocal] = useState("");
    const [companyContractedTransdevLocal, setCompanyContractedTransdevLocal] = useState("");
    const [medicaidProviderIDLocal, setMedicaidProviderIDLocal] = useState("");
    const [nationalProviderNumberLocal, setNationalProviderNumberLocal] = useState("");
    const [federalEmployerIDLocal, setFederalEmployerIDLocal] = useState("");
    const [independentProviderSSNLocal, setIndependentProviderSSNLocal] = useState("");
    const [contractedDriversLocal, setContractedDriversLocal] = useState(0);
    const [contractedVehiclesLocal, setContractedVehiclesLocal] = useState(0);
    const [driverRosterLocal, setDriverRosterLocal] = useState(null);
    const [vehicleRosterLocal, setVehicleRosterLocal] = useState(null);
    const [operatingCountiesLocal, setOperatingCountiesLocal] = useState([]);
    const [portalRequestLocal, setPortalRequestLocal] = useState(null);
    const [yourNameLocal, setYourNameLocal] = useState("");
    const [yourTitleLocal, setYourTitleLocal] = useState("");
    const [signatureNameLocal, setSignatureNameLocal] = useState("");
    const [signatureLocal, setSignatureLocal] = useState(null);
    const [countyDropDown, setCountyDropDown] = useState([]);
    const [companyServiceStateLocal, setCompanyServiceStateLocal] = useState("");
    const [companyServiceZipLocal, setCompanyServiceZipLocal] = useState("");
    useEffect(() => {
        loadData();
    }, []);
    function loadData() {
        setCountyDropDown(coloradoCounties);
    }
    const CompanyLegalNameContent = "Your legal business name that matches exactly with the business name on file with Health First Colorado";
    const CompanyDBANameContent = "The name your company is doing business as in the marketplace, if different than your legal business name";
    const CompanyPhoneContent = "The best phone number for contacting you regarding compliance and credentialing matters related to your transportation provider application";
    const CompanyEmailContent = "The best email address for contacting you regarding compliance and credentialing matters related to your transportation provider application";
    const CompanyAddressContent = "The physical address of your company headquarters or main office location";
    const CompanyWebsiteContent = "The URL of your company website, if available";
    const CompanyOwnerNameContent = "The full name of the primary owner or executive contact for your transportation company";
    const CompanyOwnerPhoneContent = "The best phone number for contacting the primary owner or executive contact regarding compliance and credentialing matters related to your transportation provider application";
    const CompanyBusinessLicenseNumberContent = "Your company's business license number issued by the state or local government";
    const CompanyOwnerEmailContent = "The best email address for contacting the primary owner or executive contact regarding compliance and credentialing matters related to your transportation provider application";
    const CompanyServicingAddressContent = "The physical address where your transportation services are primarily provided, if different from your company headquarters address";
    const CompanyAddressStateContent = "The state where your company is located";
    const CompanyAddressZipContent = "The ZIP code for your company's physical address";
    const CompanyContractedTransdevContent = "Indicate whether your company is currently contracted with Transdev to provide transportation services for Health First Colorado members";
    const MedicaidProviderIDContent = "Your company's Medicaid Provider ID number issued by the Colorado Department of Health Care Policy and Financing";
    const NationalProviderNumberContent = "Your company's National Provider Identifier (NPI) number issued by the National Plan and Provider Enumeration System (NPPES)";
    const FederalEmployerIDContent = "Your company's Federal Employer Identification Number (FEIN) issued by the Internal Revenue Service (IRS)";
    const IndependentProviderSSNContent = "If your company is an independent transportation provider without a FEIN, please provide the Social Security Number (SSN) of the primary owner";
    const ContractedDriversContent = "The total number of drivers currently contracted with your transportation company";
    const ContractedVehiclesContent = "The total number of vehicles currently contracted with your transportation company";
    const DriverRosterContent = "Upload a file containing a roster of all drivers currently contracted with your transportation company, including their full names and contact information";
    const VehicleRosterContent = "Upload a file containing a roster of all vehicles currently contracted with your transportation company, including their make, model, year, and license plate number";
    const OperatingCountiesContent = "Select all counties in Colorado where your transportation company currently provides services to Health First Colorado members";
    const PortalRequestContent = "Upload any additional documentation or information that you would like to provide in support of your transportation provider application";
    const YourNameContent = "Enter your full name to confirm that you are the authorized representative of the transportation company submitting this application";
    const YourTitleContent = "Enter your job title or role within the transportation company to confirm your authority to submit this application";
    const SignatureNameContent = "Type your full name to create an electronic signature that confirms the accuracy of the information provided in this application and your agreement to the terms and conditions of participation as a transportation provider for Health First Colorado";
    const styles = StyleSheet.create({
        page: {
            flexDirection: "row",
            backgroundColor: "#61dafb",
        },
        phoneinput: {
            width: '300px',
        },
        select: {
            control: base => ({
                ...base,
                width: '300px',
            })
        },

    });
    
       const transportationOptions = [
        { value: "NEMT", label: "Non-Emergency Medical Transportation (NEMT)" },
        { value: "EMS", label: "Emergency Medical Services (EMS)" }
    ];
    const stateOptions = [
        { value: "AL", label: "Alabama" },
        { value: "AK", label: "Alaska" },
        { value: "AZ", label: "Arizona" },
        { value: "AR", label: "Arkansas" },
        { value: "CA", label: "California" },
        { value: "CO", label: "Colorado" },
        { value: "CT", label: "Connecticut" },
        { value: "DE", label: "Delaware" },
        { value: "FL", label: "Florida" },
        { value: "GA", label: "Georgia" },
        { value: "HI", label: "Hawaii" },
        { value: "ID", label: "Idaho" },
        { value: "IL", label: "Illinois" },
        { value: "IN", label: "Indiana" },
        { value: "IA", label: "Iowa" },
        { value: "KS", label: "Kansas" },
        { value: "KY", label: "Kentucky" },
        { value: "LA", label: "Louisiana" },
        { value: "ME", label: "Maine" },
        { value: "MD", label: "Maryland" },
        { value: "MA", label: "Massachusetts" },
        { value: "MI", label: "Michigan" },
        { value: "MN", label: "Minnesota" },
        { value: "MS", label: "Mississippi" },
        { value: "MO", label: "Missouri" },
        { value: "MT", label: "Montana" },
        { value: "NE", label: "Nebraska" },
        { value: "NV", label: "Nevada" },
        { value: "NH", label: "New Hampshire" },
        { value: "NJ", label: "New Jersey" },
        { value: "NM", label: "New Mexico" },
        { value: "NY", label: "New York" },
        { value: "NC", label: "North Carolina" },
        { value: "ND", label: "North Dakota" },
        { value: "OH", label: "Ohio" },
        { value: "OK", label: "Oklahoma" },
        { value: "OR", label: "Oregon" },
        { value: "PA", label: "Pennsylvania" },
        { value: "RI", label: "Rhode Island" },
        { value: "SC", label: "South Carolina" },
        { value: "SD", label: "South Dakota" },
        { value: "TN", label: "Tennessee" },
        { value: "TX", label: "Texas" },
        { value: "UT", label: "Utah" },
        { value: "VT", label: "Vermont" },
        { value: "VA", label: "Virginia" },
        { value: "WA", label: "Washington" },
        { value: "WV", label: "West Virginia" },
        { value: "WI", label: "Wisconsin" },
        { value: "WY", label: "Wyoming" }
    ]
    const transOptions = [
        { value: "Yes", label: "Contracted with Transdev" },
        { value: "No", label: "Not Contracted with Transdev" }
    ];
    const handleCompanyLegalName = (event) => {
        setCompanyLegalNameLocal(event.target.value);
        setCompanyLegalName(event.target.value);
        console.log("Company Legal Name: " + event.target.value);
    }
    const handleCompanyDBAName = (event) => {
        setCompanyDBANameLocal(event.target.value);
        setCompanyDBAName(event.target.value);
        console.log("Company DBA Name: " + event.target.value);
    }
    const handleProviderType = (selectedOption) => {
        setProviderTypeLocal(selectedOption);
        setProviderType(selectedOption?.value);
        console.log("Provider Type: " + selectedOption?.value);
    }
    const handleCompanyPhone = (value) => {
        setCompanyPhoneLocal(value);
        setCompanyPhone(value);
        console.log("Company Phone: " + value);
    }
    const handleCompanyEmail = (event) => {
        setCompanyEmailLocal(event.target.value);
        setCompanyEmail(event.target.value);
        console.log("Company Email: " + event.target.value);
    }
    const handleCompanyAddress = (event) => {
        setCompanyAddressLocal(event.target.value);
        setCompanyAddress(event.target.value);
        console.log("Company Address: " + event.target.value);
    }
    const handleCompanyAddressZip = (event) => {
        var result = event.target.value.replace(/\D/g, ''); 
        setCompanyAddressZipLocal(result);  
        setCompanyAddressZip(result);
    }
    const handleCompanyWebsite = (event) => {
        setCompanyWebsiteLocal(event.target.value);
        setCompanyWebsite(event.target.value);
        console.log("Company Website: " + event.target.value);
    }
    const handleCompanyServiceState = (selectedOption) => {
        setCompanyServiceStateLocal(selectedOption);
        setCompanyServiceState(selectedOption);
        console.log("Company Service State: " + selectedOption);
    }
    const handleCompanyServiceZip = (event) => {
        var result = event.target.value.replace(/\D/g, '');
        setCompanyServiceZipLocal(result);
        setCompanyServiceZip(result);
        console.log("Company Service Zip: " + result);
          };
    const handleCompanyOwnerName = (event) => {
        setCompanyOwnerNameLocal(event.target.value);
        setCompanyOwnerName(event.target.value);
        console.log("Company Owner Name: " + event.target.value);
    }
    const handleCompanyOwnerPhone = (value) => {
        setCompanyOwnerPhoneLocal(value);
        setCompanyOwnerPhone(value);
        console.log("Company Owner Phone: " + value);
    }
    const handleCompanyBusinessLicenseNumber = (event) => {
        setCompanyBusinessLicenseNumberLocal(event.target.value);
        setCompanyBusinessLicenseNumber(event.target.value);
        console.log("Company Business License Number: " + event.target.value);
    }
    const handleCompanyOwnerEmail = (event) => {
        setCompanyOwnerEmailLocal(event.target.value);
        setCompanyOwnerEmail(event.target.value);
        console.log("Company Owner Email: " + event.target.value);
    }
    const handleCompanyServicingAddress = (event) => {
        setCompanyServicingAddressLocal(event.target.value);
        setCompanyServicingAddress(event.target.value);
        console.log("Company Servicing Address: " + event.target.value);
    }
    const handleCompanyAddressState = (selectedOption) => {
        setCompanyAddressStateLocal(selectedOption);
        setCompanyAddressState(selectedOption);
        console.log("Company Address State: " + selectedOption);
    }
    const handleCompanyContractedTransdev = (selectedOption) => {
        setCompanyContractedTransdevLocal(selectedOption);
        setCompanyContractedTransdev(selectedOption?.value);
        console.log("Company Contracted with Transdev: " + selectedOption?.value);
    }
    const handleCompanyOwnerPhoneNumber = (value) => {
        setCompanyOwnerPhoneLocal(value);
        setCompanyOwnerPhoneNumber(value);
        console.log("Company Owner Phone Number: " + value);
    }
    const handleMedicaidProviderID = (event) => {
        setMedicaidProviderIDLocal(event.target.value);
        setMedicaidProviderID(event.target.value);
        console.log("Medicaid Provider ID: " + event.target.value);
    }
    const handleNationalProviderNumber = (event) => {
        setNationalProviderNumberLocal(event.target.value);
        setNationalProviderNumber(event.target.value);
        console.log("National Provider Number: " + event.target.value);
    }
    const handleFederalEmployerID = (event) => {
        setFederalEmployerIDLocal(event.target.value);
        setFederalEmployerID(event.target.value);
        console.log("Federal Employer ID: " + event.target.value);
    }
    const handleIndependentProviderSSN = (event) => {
        setIndependentProviderSSNLocal(event.target.value);
        setIndependentProviderSSN(event.target.value);
        console.log("Independent Provider SSN: " + event.target.value);
    }
    const handleContractedDrivers = (event) => {
        setContractedDriversLocal(event.target.value);
        setContractedDrivers(event.target.value);
        console.log("Contracted Drivers: " + event.target.value);
    }
    const handleContractedVehicles = (event) => {
        setContractedVehiclesLocal(event.target.value);
        setContractedVehicles(event.target.value);
        console.log("Contracted Vehicles: " + event.target.value);
    }
    const handleDriverRoster = (event) => {
        const file = event.target.files[0];
        setDriverRosterLocal(file);
        setDriverRoster(file);
        console.log("Driver Roster: " + file.name);
    }
    const handleVehicleRoster = (event) => {
        const file = event.target.files[0];
        setVehicleRosterLocal(file);
        setVehicleRoster(file);
        console.log("Vehicle Roster: " + file.name);
    }
    const handleCountiesApprovedList = (event) => {
        const options = event.target.options;
        const selectedCounties = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedCounties.push(options[i].value);
            }
        }
        setOperatingCountiesLocal(selectedCounties);
        setOperatingCounties(selectedCounties);
        console.log("Operating Counties: " + selectedCounties.join(", "));
    }
    const handlePortalRequest = (event) => {
        const file = event.target.files[0];
        setPortalRequestLocal(file);
        setPortalRequest(file);
        console.log("Portal Request: " + file.name);
    }
    const handleYourName = (event) => {
        setYourNameLocal(event.target.value);
        setYourName(event.target.value);
        console.log("Your Name: " + event.target.value);
    }
    const handleYourTitle = (event) => {
        setYourTitleLocal(event.target.value);
        setYourTitle(event.target.value);
        console.log("Your Title: " + event.target.value);
    }
    const handleSignatureName = (event) => {
        setSignatureNameLocal(event.target.value);
        setSignatureName(event.target.value);
        console.log("Signature Name: " + event.target.value);
    }
    const handleSignature = () => {
        console.log("Capturing signature...");
        if (sigCanvas.current.isEmpty()) {
            setSignatureLocal(null);
            setSignature(null);
            console.log("Signature: No signature provided");
        } else {
            //const signatureDataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
            const signatureDataURL = sigCanvas.current.toDataURL();
            setSignatureLocal(signatureDataURL);
            setSignature(signatureDataURL);
            console.log("Signature: Signature captured");
        }
    }
    const sigCanvas = useRef({});
    return (
        <div style={styles.page}>
            <h1 align="center">Welcome to the Transportation Provider Registration Page</h1>
            <br />
            <table><tbody>
                <tr with="100%"><td align="left">
                    <label htmlFor="companyLegalName">Company Legal Name:</label>
                    <input data-tooltip-id="companyLegalName-tooltip" type="text" id="companyLegalName" name="companyLegalName" required onChange={handleCompanyLegalName} value={getCompanyLegalName()} />
                    <Tooltip id="companyLegalName-tooltip" place="top" effect="solid" content={CompanyLegalNameContent} />
                </td><td align="right">
                        <label htmlFor="companyDBAName">Company DBA Name:</label>
                        <input data-tooltip-id="companyDBAName-tooltip" type="text" id="companyDBAName" name="companyDBAName" required onChange={handleCompanyDBAName} value={getCompanyDBAName()} />
                        <Tooltip id="companyDBAName-tooltip" place="top" effect="solid" content={CompanyDBANameContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="ProviderType">Provider Type:</label>
                    <Select id="ProviderType" name="ProviderType" required onChange={handleProviderType} value={providerTypeLocal}
                        options={transportationOptions}
                        placeholder="Select Provider Type"
                        styles={styles.select}
                    />
                </td><td align="right">
                        <label htmlFor="CompanyPhone">Company Phone Number: </label>
                        <PhoneInput id="CompanyPhone" name="CompanyPhone" required
                            placeholder="Company Phone Number"
                            value={getCompanyPhone()}
                            onChange={handleCompanyPhone}
                            style={styles.phoneinput}
                            defaultCountry="US"
                            data-tooltip-id="companyPhone-tooltip"
                        />
                        <Tooltip id="companyPhone-tooltip" place="top" effect="solid" content={CompanyPhoneContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="CompanyEmail">Company Email: </label>
                    <input data-tooltip-id="companyEmail-tooltip" type="email" id="CompanyEmail" name="CompanyEmail" required onChange={handleCompanyEmail} value={getCompanyEmail()} />
                    <Tooltip id="companyEmail-tooltip" place="top" effect="solid" content={CompanyEmailContent} />
                </td><td align="right">
                        <label htmlFor="CompanyAddress">Company Address: </label>
                        <input data-tooltip-id="companyAddress-tooltip" type="text" id="CompanyAddress" name="CompanyAddress" required onChange={handleCompanyAddress} value={getCompanyAddress()} />
                        <Tooltip id="companyAddress-tooltip" place="top" effect="solid" content={CompanyAddressContent} />
                        <br />
                        <label htmlFor="CompanyAddressState">Company State: </label>
                        <Select data-tooltip-id="companyAddressState-tooltip" type="text" id="CompanyAddressState" name="CompanyAddressState" required onChange={handleCompanyAddressState} value={getCompanyAddressState()} 
                                                   options={stateOptions}
                            placeholder="Select an option"
                            styles={styles.select}
                            />
                        <Tooltip id="companyAddressState-tooltip" place="top" effect="solid" content={CompanyAddressStateContent} />
                        <label htmlFor="CompanyAddressZip">ZIP Code: </label>
                        <input data-tooltip-id="companyAddressZip-tooltip" type="text" maxLength="5" id="CompanyAddressZip" name="CompanyAddressZip" required onChange={handleCompanyAddressZip} value={getCompanyAddressZip()} />
                        <Tooltip id="companyAddressZip-tooltip" place="top" effect="solid" content={CompanyAddressZipContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="CompanyWebsite">Company Website: </label>
                    <input data-tooltip-id="companyWebsite-tooltip" type="text" id="CompanyWebsite" name="CompanyWebsite" required onChange={handleCompanyWebsite} value={getCompanyWebsite()} />
                    <Tooltip id="companyWebsite-tooltip" place="top" effect="solid" content={CompanyWebsiteContent} />
                </td><td align="right">
                        <label htmlFor="CompanyOwnerName">Company Owner Name: </label>
                        <input data-tooltip-id="companyOwnerName-tooltip" type="text" id="CompanyOwnerName" name="CompanyOwnerName" required onChange={handleCompanyOwnerName} value={getCompanyOwnerName()} />
                        <Tooltip id="companyOwnerName-tooltip" place="top" effect="solid" content={CompanyOwnerNameContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="CompanyOwnerPhone">Company Owner Phone Number: </label>
                    <PhoneInput id="CompanyOwnerPhone" name="CompanyOwnerPhone" required
                        placeholder="Company Owner Phone Number"
                        value={getCompanyOwnerPhoneNumber()}
                        onChange={handleCompanyOwnerPhone}
                        style={styles.phoneinput}
                        defaultCountry="US"
                        data-tooltip-id="companyOwnerPhone-tooltip"
                    />
                    <Tooltip id="companyOwnerPhone-tooltip" place="top" effect="solid" content={CompanyOwnerPhoneContent} />
                </td><td align="right">
                        <label htmlFor="CompanyBusinessLicenseNumber">Company Business License Number: </label>
                        <input data-tooltip-id="companyBusinessLicenseNumber-tooltip" type="text" id="CompanyBusinessLicenseNumber" name="CompanyBusinessLicenseNumber" required onChange={handleCompanyBusinessLicenseNumber} value={getCompanyBusinessLicenseNumber()} />
                        <Tooltip id="companyBusinessLicenseNumber-tooltip" place="top" effect="solid" content={CompanyBusinessLicenseNumberContent} />
                    </td></tr>
                <tr with="100%"><td align="left">

                    <label htmlFor="CompanyOwnerEmail">Company Owner Email: </label>
                    <input data-tooltip-id="companyOwnerEmail-tooltip" type="email" id="CompanyOwnerEmail" name="CompanyOwnerEmail" required onChange={handleCompanyOwnerEmail} value={getCompanyOwnerEmail()} />
                    <Tooltip id="companyOwnerEmail-tooltip" place="top" effect="solid" content={CompanyOwnerEmailContent} />
                </td><td align="right">
                        <label htmlFor="CompanyServicingAddress">Company Servicing Address: </label>
                        <input data-tooltip-id="companyServicingAddress-tooltip" type="text" id="CompanyServicingAddress" name="CompanyServicingAddress" required onChange={handleCompanyServicingAddress} value={getCompanyServicingAddress()} />
                        <Tooltip id="companyServicingAddress-tooltip" place="top" effect="solid" content={CompanyServicingAddressContent} />
                        <br />
                        <label htmlFor="CompanyAddressState">Company State: </label>
                        <Select data-tooltip-id="companyAddressState-tooltip" type="text" id="CompanyAddressState" name="CompanyAddressState" required onChange={handleCompanyServiceState} value={getCompanyServiceState()} 
                                                   options={stateOptions}
                            placeholder="Select an option"
                            styles={styles.select}
                            />
                        <Tooltip id="companyAddressState-tooltip" place="top" effect="solid" content={CompanyAddressStateContent} />
                        <label htmlFor="CompanyAddressZip">ZIP Code: </label>
                        <input data-tooltip-id="companyServicingZip-tooltip" type="text" maxLength="5" id="CompanyServicingZip" name="CompanyServicingZip" required onChange={handleCompanyServiceZip} value={getCompanyServiceZip()} />
                        <Tooltip id="companyServicingZip-tooltip" place="top" effect="solid" content={CompanyAddressZipContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                 </td><td align="right">
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="CompanyOwnerPhoneNumber">Company Owner Phone Number: </label>
                    <PhoneInput id="CompanyOwnerPhoneNumber" name="CompanyOwnerPhoneNumber" required
                        placeholder="Company Owner Phone Number"
                        value={getCompanyOwnerPhone()}
                        onChange={handleCompanyOwnerPhone}
                        style={styles.phoneinput}
                        defaultCountry="US"
                        data-tooltip-id="companyOwnerPhone-tooltip"
                    />
                    <Tooltip id="companyOwnerPhone-tooltip" place="top" effect="solid" content={CompanyOwnerPhoneContent} />
                </td><td align="right">
                        <label htmlFor="CompanyContractedTransdev">Company Currrently Contracted with Transdev: </label>
                        <Select id="CompanyContractedTransdev" name="CompanyContractedTransdev" required onChange={handleCompanyContractedTransdev} value={companyContractedTransdevLocal}
                            options={transOptions}
                            placeholder="Select an option"
                            styles={styles.select}
                        />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="MedicaidProviderID">Medicaid Provider ID: </label>
                    <input data-tooltip-id="medicaidProviderID-tooltip" type="text" id="MedicaidProviderID" name="MedicaidProviderID" required onChange={handleMedicaidProviderID} value={getMedicaidProviderID()} />
                    <Tooltip id="medicaidProviderID-tooltip" place="top" effect="solid" content={MedicaidProviderIDContent} />
                </td><td align="right">
                        <label htmlFor="NationalProviderNumber (NPI)">National Provider Number (NPI): </label>
                        <input data-tooltip-id="nationalProviderNumber-tooltip" type="text" id="NationalProviderNumber (NPI)" name="NationalProviderNumber (NPI)" required onChange={handleNationalProviderNumber} value={getNationalProviderNumber()} />
                        <Tooltip id="nationalProviderNumber-tooltip" place="top" effect="solid" content={NationalProviderNumberContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="FederalEmployerID">Company Federal Employer ID Number (FEIN): </label>
                    <input data-tooltip-id="federalEmployerID-tooltip" type="text" id="FederalEmployerID" name="FederalEmployerID" required onChange={handleFederalEmployerID} value={getFederalEmployerID()} />
                    <Tooltip id="federalEmployerID-tooltip" place="top" effect="solid" content={FederalEmployerIDContent} />
                </td><td align="right">

                        <label htmlFor="IndependentProviderSSN">Independent Provider Social Security Number (SSN): </label>
                        <input data-tooltip-id="independentProviderSSN-tooltip" type="text" id="IndependentProviderSSN" name="IndependentProviderSSN" required onChange={handleIndependentProviderSSN} value={getIndependentProviderSSN()} />
                        <Tooltip id="independentProviderSSN-tooltip" place="top" effect="solid" content={IndependentProviderSSNContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="ContractedDrivers">Total Number of Contracted Drivers: </label>
                    <input data-tooltip-id="contractedDrivers-tooltip" type="number" id="ContractedDrivers" name="ContractedDrivers" required onChange={handleContractedDrivers} value={getContractedDrivers()} />
                    <Tooltip id="contractedDrivers-tooltip" place="top" effect="solid" content={ContractedDriversContent} />
                </td><td align="right">

                        <label htmlFor="ContractedVehicles">Total Number of Contracted Vehicles: </label>
                        <input data-tooltip-id="contractedVehicles-tooltip" type="number" id="ContractedVehicles" name="ContractedVehicles" required onChange={handleContractedVehicles} value={getContractedVehicles()} />
                        <Tooltip id="contractedVehicles-tooltip" place="top" effect="solid" content={ContractedVehiclesContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <lable htmlFor="DriverRoster">Driver Roster: </lable>
                    <input data-tooltip-id="driverRoster-tooltip" type="file" id="DriverRoster" name="DriverRoster" title="Upload Driver Roster txt or pdf" accept="*.txt, *.pdf" required onChange={handleDriverRoster} />
                    <Tooltip id="driverRoster-tooltip" place="top" effect="solid" content={DriverRosterContent} />
                </td><td align="right">
                        <label htmlFor="VehicleRoster">Vehicle Roster: </label>
                        <input data-tooltip-id="vehicleRoster-tooltip" type="file" id="VehicleRoster" name="VehicleRoster" title="Upload Vehicle Roster txt or pdf" accept="*.txt, *.pdf" required onChange={handleVehicleRoster} />
                        <Tooltip id="vehicleRoster-tooltip" place="top" effect="solid" content={VehicleRosterContent} />
                    </td></tr>
                <tr with="100%"><td align="left">ß
                    <label htmlFor="OperatingCounties">Operating Counties: </label>
                    <div className="dropdown">
                        <select onChange={handleCountiesApprovedList} value={getOperatingCounties()} multiple id="OperatingCounties" name="OperatingCounties" required>
                            {countyDropDown.map((item) => (
                                <option>{item}</option>
                            ))}
                        </select>
                    </div>
                </td><td align="right">

                        <label htmlFor="PortalRequest">NEMT Credentialing Portal User Request: </label>
                        <input data-tooltip-id="portalRequest-tooltip" type="file" id="PortalRequest" name="PortalRequest" required onChange={handlePortalRequest} />
                        <Tooltip id="portalRequest-tooltip" place="top" effect="solid" content={PortalRequestContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="YourName">Your Name: </label>
                    <input data-tooltip-id="yourName-tooltip" type="text" id="YourName" name="YourName" required onChange={handleYourName} value={getYourName()} />
                    <Tooltip id="yourName-tooltip" place="top" effect="solid" content={YourNameContent} />
                </td><td align="right">

                        <label htmlFor="YourTitle">Your Title: </label>
                        <input data-tooltip-id="yourTitle-tooltip" type="text" id="YourTitle" name="YourTitle" required onChange={handleYourTitle} value={getYourTitle()} />
                        <Tooltip id="yourTitle-tooltip" place="top" effect="solid" content={YourTitleContent} />
                    </td></tr>
                <tr with="100%"><td align="left">
                    <label htmlFor="SignatureName">Signature Name: </label>
                    <input data-tooltip-id="signatureName-tooltip" type="text" id="SignatureName" name="SignatureName" required onChange={handleSignatureName} value={getSignatureName()} />
                    <Tooltip id="signatureName-tooltip" place="top" effect="solid" content={SignatureNameContent} />
                </td><td align="right">

                        <label htmlFor="Signature">Signature: </label>
                        <SignatureCanvas
                            ref={sigCanvas}
                            penColor="black"
                            canvasProps={{
                                width: 400,
                                height: 150,
                                className: "sigCanvas",
                                style: { border: "2px solid black", borderRadius: "4px" },
                            }}
                            
                        />
                        <div>
                            <button type="button" onClick={() => { sigCanvas.current.clear(); setSignatureLocal(null); setSignature(null); }} style={{ marginTop: "10px" }}>Clear Signature</button>
                            <button type="button" onClick={handleSignature} style={{ marginTop: "10px", marginLeft: "10px" }}>Save Signature</button>
                        </div>
                    </td></tr>
            </tbody></table>
        </div>
    );
}
export default Registration;