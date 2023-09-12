import { utils, write } from 'xlsx';

export const exportToExcel = (data, fileName) => {
  const dataWithoutMessage = data.map(({ ...rest }) => rest);
  const worksheet = utils.json_to_sheet(dataWithoutMessage);
  const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
  const excelBlob = new Blob([excelBuffer], {
    type: 'application/octet-stream',
  });

  if (navigator.msSaveBlob) {
    // Para Internet Explorer
    navigator.msSaveBlob(excelBlob, fileName);
  } else {
    const url = URL.createObjectURL(excelBlob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
