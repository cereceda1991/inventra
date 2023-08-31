import { useState } from 'react'
import axios from 'axios'
import { IconfileUpload } from '../../utils/CustomIcons'
import camera from '../../assets/products/camera.svg'
import './RemoveBg.css'

const RemoveBg = () => {
  const [file, setFile] = useState(null)
  const [imageResult, setImageResult] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const apiKey = import.meta.env.VITE_API_KEY

  const handleChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
    setImageResult(null)
    setImagePreview(URL.createObjectURL(selectedFile))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!file) {
      return; // Don't submit if no image is selected
    }

    try {
      const formData = new FormData()
      formData.append('size', 'auto')
      formData.append('image_file', file)

      const headers = {
        'X-Api-Key': apiKey,
        ...(formData.getHeaders ? formData.getHeaders() : null)
      }

      const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
        responseType: 'arraybuffer',
        headers,
        encoding: null
      })

      if (response.status !== 200) {
        console.error('Error:', response.status, response.statusText)
        return
      }

      const fileBlob = new Blob([response.data], { type: 'image/png' })
      const fileUrl = URL.createObjectURL(fileBlob)
      setImageResult(fileUrl)
      setImagePreview(null)
    } catch (error) {
      console.error('Request failed:', error)
    }
  }

  return (
    <div className='remove__bg'>
      <form>
        <input
          type='file'
          accept='image/*'
          onChange={handleChange}
          id='fileInput'
          style={{ display: 'none' }}
        />
        <label htmlFor='fileInput'>
          {imageResult ? (
            <img className='result-image' src={imageResult} alt='Result' />
          ) : imagePreview ? (
            <img className='preview-image' src={imagePreview} alt='Preview' />
          ) : (
            <img className='camera-icon' src={camera} alt='Camera' />
          )}
        </label>
        <button
           className={`upload-image-text ${!imagePreview && !imageResult ? 'inactive-button' : ''}`}
           type='button'
           onClick={handleSubmit}
           disabled={!imagePreview && !imageResult} // Disable the button based on conditions
        >
           <IconfileUpload />
          Cargar Imagen
        </button>
      </form>
    </div>
  )
}

export default RemoveBg
