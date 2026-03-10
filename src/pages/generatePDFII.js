import React, { useEffect, useState } from "react";
import { Document as ViewerDocument, Page as ViewerPage, pdfjs } from "react-pdf";
import { pdf, Document, Page, Text, View } from "@react-pdf/renderer";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";

import {
  getVehicleRoster,
  getDriverRoster,
  getPortalRequest,
  getCompanyLegalName,
  getCompanyDBAName
} from "../data/registrationData";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function GeneratePDFII() {
  const [mergedBlob, setMergedBlob] = useState(null);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    generateMergedPDF();
  }, []);

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  async function generateMergedPDF() {
    const mergedPdf = await PDFDocument.create();
    const font = await mergedPdf.embedFont(StandardFonts.Helvetica);

    // 1️⃣ Generate provider form
    const providerBlob = await pdf(<TransportationProvider />).toBlob();
    const providerBytes = await providerBlob.arrayBuffer();
    const providerPdf = await PDFDocument.load(providerBytes);

    const providerPages = await mergedPdf.copyPages(
      providerPdf,
      providerPdf.getPageIndices()
    );
    providerPages.forEach(p => mergedPdf.addPage(p));

    // 2️⃣ Collect uploaded files
    const files = [
      getVehicleRoster(),
      getDriverRoster(),
      getPortalRequest()
    ].filter(Boolean);

    for (const file of files) {
      if (file.type === "application/pdf") {
        const bytes = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(bytes);

        const pages = await mergedPdf.copyPages(
          pdfDoc,
          pdfDoc.getPageIndices()
        );
        pages.forEach(p => mergedPdf.addPage(p));
      }

      if (file.type === "text/plain") {
        const text = await file.text();
        const page = mergedPdf.addPage();

        const { width, height } = page.getSize();

        page.drawText(text, {
          x: 50,
          y: height - 50,
          size: 12,
          font,
          maxWidth: width - 100,
          lineHeight: 14
        });
      }
    }

    const mergedBytes = await mergedPdf.save();
    const blob = new Blob([mergedBytes], { type: "application/pdf" });

    setMergedBlob(blob);
  }

  function downloadPDF() {
    if (mergedBlob) {
      saveAs(mergedBlob, "TransportationProvider.pdf");
    }
  }

  return (
    <div>
      {mergedBlob && (
        <ViewerDocument file={mergedBlob} onLoadSuccess={onLoadSuccess}>
          {Array.from({ length: numPages }, (_, i) => (
            <ViewerPage
              key={i}
              pageNumber={i + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </ViewerDocument>
      )}

      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

function TransportationProvider() {
  return (
    <Document>
      <Page style={{ padding: 40 }}>
        <View>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>
            Transportation Provider Registration
          </Text>

          <Text>
            Company Legal Name: {getCompanyLegalName()}
          </Text>

          <Text>
            DBA Name: {getCompanyDBAName()}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
