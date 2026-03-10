import React from "react";
import { StyleSheet } from "@react-pdf/renderer";
import { getCompanyWebsite, getIndependentProviderSSN } from "../data/registrationData";
import { saveAs } from "file-saver";
import { Document as ViewerDocument, Page as ViewerPage } from "react-pdf";
import {
    pdf,
    Document,
    Page,
    Text,
    View,
    Image
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { getCompanyLegalName, getCompanyDBAName, getProviderType, getCompanyPhone, getCompanyEmail, getCompanyAddress, getCompanyOwnerName, getCompanyOwnerPhone, getCompanyBusinessLicenseNumber, getCompanyOwnerEmail, getCompanyServicingAddress, getCompanyContractedTransdev, getMedicaidProviderID, getNationalProviderNumber, getFederalEmployerID, getContractedDrivers, getContractedVehicles, getYourName, getYourTitle, getSignatureName, getVehicleRoster, getOperatingCounties } from "../data/registrationData";
import { getDriverRoster, getDriverRosterName, getPortalRequest, getVehicleRosterName } from "../data/registrationData";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { pdfjs } from "react-pdf";
import fontkit from "@pdf-lib/fontkit";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { useEffect } from "react";

    const pdfFiles = [];
    const textFiles = [];

const GeneratePDF = () => {
    const [pdfBlob, setPdfBlob] = React.useState(null);
    const [numPages, setNumPages] = React.useState(null);

    const retrieveFiles = async () => {
        // Retrieve PDF and text files from local storage 
        // Three files to retrieve - Vehicle Roster, Driver Roster and Portal registration request
        const vehicleRoster = getVehicleRoster();
        const driverRoster = getDriverRoster();
        const portalRegistrationRequest = getPortalRequest();

        if (vehicleRoster.type === "application/pdf") {

            pdfFiles.push(vehicleRoster);
        } else if (vehicleRoster.type === "text/plain") {
            textFiles.push(vehicleRoster);
        }
        if (driverRoster.type === "application/pdf") {
            pdfFiles.push(driverRoster);
        } else if (driverRoster.type === "text/plain") {
            textFiles.push(driverRoster);
        }
        if (portalRegistrationRequest.type === "application/pdf") {
            console.log("Portal Registration Request Name: " + portalRegistrationRequest.name);
            pdfFiles.push(portalRegistrationRequest);
        } else if (portalRegistrationRequest.type === "text/plain") {
            textFiles.push(portalRegistrationRequest);
        }
        console.log("PDF Files: " + pdfFiles.map(file => file.name).join(", "));
        console.log("Text Files: " + textFiles.map(file => file.name).join(", "));
    };
    useEffect(() => {
        const initializePDF = async () => {
            await retrieveFiles();
            const blob = await mergePDFHandler(pdfFiles, textFiles);
            setPdfBlob(blob);
        };
        initializePDF();
    }, []);

    const onDocumentLoadSuccess = async ({ numPages }) => {
        setNumPages(numPages);
    };

    const styles = StyleSheet.create({
        page: {
            flexDirection: "row",
            backgroundColor: "#61dafb",
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1,
        }
    });

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
    ).toString();

    async function loadPdf(fileBytes) {
        try {
            const pdfDoc = await PDFDocument.load(fileBytes);
            const numPages = pdfDoc.getPageCount();
            return numPages;
        } catch (error) {
            console.error("Error loading PDF:", error);
            return null;
        }
    }

    const tableRowStyle = {
        flexDirection: "row",
    };
    const tableCellStyle = {
        textAlign: "center",
        margin: 5,
        fontSize: 10,
    };
const saveFile = () => {
    if (pdfBlob) {
        saveAs(pdfBlob, "TransportationProvider.pdf");
    }
};
    const createTableRow = (value) => {
        let tableColStyle = {
            width: "100%",
        };

        return (
            <View style={tableRowStyle} fixed>
                <View style={tableColStyle}>
                    <Text style={tableCellStyle}>{value}</Text>
                </View>
            </View>
        );
    };
    const pageStyle = {
        paddingTop: 16,
        paddingHorizontal: 40,
        paddingBottom: 56,
    };
    const rowone = "Company Legal Name: " + getCompanyLegalName() + " Company DBA Name: " + getCompanyDBAName();
    const rowtwo = "Provider Type: " + getProviderType() + " Company Phone: " + getCompanyPhone();
    const rowthree = "Company Email: " + getCompanyEmail() + " Company Address: " + getCompanyAddress();
    const rowfour = "Company Website: " + getCompanyWebsite() + " Company Owner Name: " + getCompanyOwnerName();
    const rowfive = "Company Owner Phone: " + getCompanyOwnerPhone() + " Company Business License Number: " + getCompanyBusinessLicenseNumber();
    const rowsix = "Company Owner Email: " + getCompanyOwnerEmail() + " Company Servicing Address: " + getCompanyServicingAddress();
    const rowseven = "Company Website: " + getCompanyWebsite() + " Company Owner Name: " + getCompanyOwnerName()
    const roweight = "Company Owner Phone: " + getCompanyOwnerPhone() + " Company Contracted with Transdev: " + getCompanyContractedTransdev();
    const rownine = "Medicaid Provider ID: " + getMedicaidProviderID() + " NPI Number: " + getNationalProviderNumber();
    const rowten = "Federal Employer ID: " + getFederalEmployerID() + " Indepentent Provider SSN: " + getIndependentProviderSSN();
    const roweleven = "Number of Contracted Drivers: " + getContractedDrivers() + " Number of Vehicles: " + getContractedVehicles();
    const rowtwelve = "Driver Roster File Name: " + getDriverRosterName() + " Vehicle Roster File Name: " + getVehicleRosterName();
    const rowthirteen = " Operating Counties: " + getOperatingCounties() + " Portal Registration Request File Name: " + getPortalRequest().name;
    const rowfourteen = "Your Name: " + getYourName() + " Your Title: " + getYourTitle() + " Signature Name: " + getSignatureName();

    const mergePDFHandler = async (files, textFiles) => {
        const mergedPdf = await PDFDocument.create();
        mergedPdf.registerFontkit(fontkit);

        const fontResponse = await fetch("/fonts/Roboto-Regular.ttf");
        const fontBytes = await fontResponse.arrayBuffer();
        const font = await mergedPdf.embedFont(fontBytes);


        //Generate Transportation Provider as PDF bytes
        const transProviderBytes = await pdf(<TransportationProvider />).toBlob();
        const transProviderArrayBuffer = await transProviderBytes.arrayBuffer();
        const transProviderPdf = await PDFDocument.load(transProviderArrayBuffer);
        const transProviderPages = await mergedPdf.copyPages(transProviderPdf, transProviderPdf.getPageIndices());
        transProviderPages.forEach((page) => {
            page.setFont(font);
            mergedPdf.addPage(page);
        });
        // Merge PDF files
        for (const file of files) {
            const existingPdfBytes = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(existingPdfBytes);

            const copiedPages = await mergedPdf.copyPages(
                pdfDoc,
                pdfDoc.getPageIndices()
            );

            copiedPages.forEach((page) => mergedPdf.addPage(page));
        }
        // Merge text files as new PDF pages
        for (const textFileUrl of textFiles) {
            //const textFile = await fetch(textFileUrl).then(res => res.text());
            const textFile = await textFileUrl.text();
            const textPage = mergedPdf.addPage();
            const { width, height } = textPage.getSize();
            textPage.drawText(textFile, {
                x: 50,
                y: height - 50,
                size: 12,
                font: font,
                maxWidth: width - 100,
                lineHeight: 14,
            });
        }

        const mergedPdfBytes = await mergedPdf.save();
        return new Blob([mergedPdfBytes], { type: "application/pdf" });
    };

    const TransportationProvider = () => {

        return (
            <Document style={{ width: '100%', height: '100%', backgroundColor: '#61dafb', color: 'black' }}>
                <Page style={pageStyle}>
                    <div className="w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#eeeeee',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                padding: '4px',
                            }}
                        >
                        </div>
                    </div>
                    <View style={styles.section}>
                        <Text style={{ fontWeight: "bold", textAlign: "center" }}>Transportation Provider Registration</Text>
                        <br />
                        {createTableRow(rowone)}
                        <br />
                        {createTableRow(rowtwo)}
                        <br />
                        {createTableRow(rowthree)}
                        <br />
                        {createTableRow(rowfour)}
                        <br />
                        {createTableRow(rowfive)}
                        <br />
                        {createTableRow(rowsix)}
                        <br />
                        {createTableRow(rowseven)}
                        <br />
                        {createTableRow(roweight)}
                        <br />
                        {createTableRow(rownine)}
                        <br />
                        {createTableRow(rowten)}
                        <br />
                        {createTableRow(roweleven)}
                        <br />
                        {createTableRow(rowtwelve)}
                        <br />
                        {createTableRow(rowthirteen)}
                        <br />
                        {createTableRow(rowfourteen)}
                        <br />
                    </View>
                </Page>
            </Document>

        );
    };


    return (
        <div>
            {pdfBlob && (
                <ViewerDocument
                    file={pdfBlob}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages), (_, index) => (
                        <ViewerPage
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    ))}
                </ViewerDocument>
            )}
            <button onClick={saveFile} style={{ marginTop: "20px" }}>Download PDF</button>
        </div>
    )
}

export default GeneratePDF;