import { useState } from 'react';
import { useDispatch } from 'react-redux';
import camera from '../../assets/products/camera.svg';
import './UploadProduct.css';
import { uploadImage } from '../../Redux/Images/imageActions';
import { MdUpload } from 'react-icons/md';

const UploadProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null); // Estado local para el archivo seleccionado
  const [selectedImage, setSelectedImage] = useState(null); // Estado local para la imagen seleccionada
  const dispatch = useDispatch();

  const handleImageChange = async (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      setFile(imageFile); // Actualiza el estado 'file' con el archivo seleccionado
      const formData = new FormData();
      formData.append('image_file', imageFile);
      console.log(file);
      try {
        setIsLoading(true);
        const imageUrl = await dispatch(uploadImage(formData));
        setSelectedImage(imageUrl); // Actualiza el estado 'selectedImage' con la URL de la imagen cargada
        console.log(imageUrl);
      } catch (error) {
        console.error('Error al cargar imagen:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className='remove__bg'>
      <section>
        {isLoading && <span className="loading-spinnerProduct"></span>}
        <label htmlFor="fileInput">
          {selectedImage ? (
            <img className="result-image" src={selectedImage} alt="Result" />
          ) : (
            <img className="upload-icon" src={camera} alt="Camera" />
          )}
        </label>
        <input
          type="file"
          accept=".png, .jpeg, .jpg"
          name="image"
          onChange={handleImageChange}
          id="fileInput"
          style={{ display: 'none' }}
        />
        <div className="button_upload">
          <MdUpload />
          <p>Cargar Imagen</p>
        </div>
      </section>
    </div>
  );
};

export default UploadProduct;
