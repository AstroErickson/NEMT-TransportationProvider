import { StyleSheet } from "@react-pdf/renderer";
const Home = () => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: "row",
            backgroundColor: "#61dafb",
        },
    });
    return (
        <div style={styles.page}>
            <h1 align="center">Welcome to the Transportation Provider Registration Home Page</h1>
            <br />
            <div width="80%" align="center">
            <p align="center">
                Our <b>Non-Emergency Medical Transportation (NEMT) Provider Portal</b> streamlines the 
                registration and onboarding process between transportation providers and transportation managers. 
                Through a single, secure online application, providers can submit essential business information 
                such as company name, contact details, and website, along with required regulatory data 
                including Medicaid enrollment, Federal Tax ID, and DOT identification. The platform supports 
                secure uploads of certifications, licenses, insurance documents, and other compliance attachments, 
                while capturing key operational details such as fleet size, number of drivers, and service 
                capabilities. Providers can define their areas of operation, review contractual terms, and 
                complete required agreements with an electronic signature—ensuring a faster, more accurate, 
                and fully documented approval process. Providers review and execute participation agreements 
                using an electronic signature, and upon completion the system generates a standardized PDF 
                application that can be used by transportation managers and agencies to formally register, 
                review, and maintain provider records.
            </p>
            </div>
        </div>
    );
}
export default Home;
