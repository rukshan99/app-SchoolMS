import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const DownloadPDF = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        const options = {
            width: 1500
        }
        html2canvas(input, options)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <Button
        onClick={downloadPdfDocument}
        variant="outlined"
        startIcon={<GetAppIcon />}
        >
            Download
            </Button>

}

export default DownloadPDF;