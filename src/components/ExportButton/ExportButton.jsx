import { useDispatch, useSelector } from 'react-redux';
import { exportToExcel } from '../../utils/exportToExcel';
import {
  finishExporting,
  startExporting,
} from '../../Redux/ExportExcel/exportSlice';
import { PiExportBold } from 'react-icons/pi';

import './ExportButton.css';
import { ExportButtonPropTypes } from '../../utils/propTypes';

const ExportButton = ({ data, entity }) => {
  const dispatch = useDispatch();
  const exporting = useSelector((state) => state.export.exporting);

  const handleExport = async () => {
    // Inicia la exportación
    dispatch(startExporting());

    try {
      // Realiza la lógica de exportación aquí, usando tu función exportToExcel
      const fileName = `${entity}.xlsx`;
      await exportToExcel(data, fileName);

      // Finaliza la exportación después de que se complete
      dispatch(finishExporting());
    } catch (error) {
      console.error('Error exporting data:', error);
      dispatch(finishExporting());
    }
  };

  return (
    <button
      className="button_export"
      onClick={handleExport}
      disabled={exporting}
    >
      {exporting ? 'Exportando...' : <PiExportBold />}
    </button>
  );
};

ExportButton.propTypes = ExportButtonPropTypes;

export default ExportButton;
