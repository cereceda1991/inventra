import { useEffect, useState } from 'react';
import axios from 'axios';
import { IconfileUploadB, IconfileUploadW } from '../../utils/CustomIcons';
import camera from '../../assets/products/camera.svg';
import './RemoveBg.css';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../Redux/Images/imageActions';

const RemoveBg = () => {
  const [file, setFile] = useState(null);
  const [imageResult, setImageResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  const apiKey = import.meta.env.VITE_API_KEY;


  // Función para obtener el estado del modo oscuro desde el localStorage
  const getDarkModeFromLocalStorage = () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  };

  // Efecto secundario para cargar el estado del modo oscuro al montar el componente
  useEffect(() => {
    getDarkModeFromLocalStorage();
  }, []);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setImageResult(null);
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      return; // Don't submit if no image is selected
    }

    try {
      const formData = new FormData();
      formData.append('size', 'auto');
      formData.append('image_file', file);

      const headers = {
        'X-Api-Key': apiKey,
        ...(formData.getHeaders ? formData.getHeaders() : null),
      };

      // Llamar a ambas APIs al mismo tiempo
      const [responseRemoveBg, responseUpload] = await Promise.all([
        axios.post('https://api.remove.bg/v1.0/removebg', formData, {
          responseType: 'arraybuffer',
          headers,
          encoding: null,
        }),
        dispatch(uploadImage(formData)), // Llama a la segunda API con Redux Toolkit
      ]);

      if (responseRemoveBg.status !== 200) {
        console.error(
          'Error en Remove.bg:',
          responseRemoveBg.status,
          responseRemoveBg.statusText,
        );
        return;
      }

      const fileBlob = new Blob([responseRemoveBg.data], { type: 'image/png' });
      const fileUrl = URL.createObjectURL(fileBlob);
      setImageResult(fileUrl);
      setImagePreview(null);
      // Mostrar la respuesta de Remove.bg en el log
      console.log('Respuesta de Remove.bg:', responseRemoveBg);

      // La respuesta de la segunda API (uploadImage) está en responseUpload
      console.log('Respuesta de la segunda API (uploadImage):', responseUpload);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <div className="remove__bg">
      <section>
        <input
          type="file"
          accept=".png, .jpeg, .jpg"
          name="image"
          onChange={handleChange}
          id="fileInput"
          style={{ display: 'none' }}
        />
        <label htmlFor="fileInput">
          {imageResult ? (
            <img className="result-image" src={imageResult} alt="Result" />
          ) : imagePreview ? (
            <img className="preview-image" src={imagePreview} alt="Preview" />
          ) : (
            <img className="upload-icon" src={camera} alt="Camera" />
          )}
        </label>
        <button
          className={`upload-image-text ${!imagePreview && !imageResult ? 'inactive-button' : ''
            }`}
          type="button"
          onClick={handleSubmit}
          disabled={!imagePreview && !imageResult}
        >
          {darkMode ? <IconfileUploadW /> : <IconfileUploadB />}
          Cargar Imagen
        </button>
      </section>
    </div>
  );
};

export default RemoveBg;
