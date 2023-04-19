import React from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf"
import Button from './Button'

const DownloadPdf = ({ rootElementId, downloadFileName}) => {
    const exportPDF = () => {
        const input = document.getElementById('page');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a3',
        });
      
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = 297; // A4 dimensions in mm
          const pageHeight = 420; // A4 dimensions in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
      
          let position = 0;
      
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
      
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
      
          pdf.save('document.pdf');
        });
      };
  return (
    <div>
      <Button onClick={exportPDF}>Download CV </Button>
    </div>
  )
}

export default DownloadPdf
