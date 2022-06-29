import { useState, useRef } from "react"

export function UploadForm ({setimages}) {
  const [source, setSource] = useState('')
  const inputImage = useRef()

  const handleChange = () => {
    // Crear el FilReader
    let reader = new FileReader()
    // Leer archivo subido
    reader.readAsDataURL(inputImage.current.files[0])
     // Callback que ejecutara al cargar la imagen
    reader.onload = function () {
      setSource(reader.result)
    }
  }
  const handleDrop = e => {
    e.preventDefault()
    inputImage.current.files = e.dataTransfer.files
    handleChange()
  }
  const deleteImages = () => {
    inputImage.current.files = null
    setSource('')
  }
  const pushImages = () => {
    if(source) {
      setimages(prevState => [...prevState, source])
      setSource('')
    }
  }

  return(
    <form>
      <label htmlFor="image" className="block mb-6">
        <input 
          accept="image/png, image/jpeg, image/jpg"
          className="hidden" 
          id="image" 
          name="image" 
          onChange={handleChange} 
          ref={inputImage}
          type="file" 
        />
        <div
          className="p-4 w-11/12 lg:w-3/5 h-96 mx-auto border-2 shadow-xl cursor-pointer flex items-center justify-center"
          onDrop={ handleDrop }
          onDragLeave={ e => e.preventDefault()}
          onDragOver={ e => e.preventDefault()}
        >
          {
            source
              ? <img src={source} className="w-full h-full object-contain" />
              : <h3 className="text-center lg:text-2xl font-bold">Arrastra una imagen aqui</h3>
          }
        </div>
      </label>
      <div className="flex justify-center gap-2">
        <button 
          className="py-2 px-6 bg-red-500 rounded-md"
          onClick={deleteImages}
          type="button" 
        >
          <img src="/icons/x.svg" alt="X" />
        </button>
        <button 
          className="py-2 px-6 bg-green-500 rounded-md"
          type="button" 
          onClick={pushImages}
        >
          <img src="/icons/check.svg" alt="Check"  />
        </button>
      </div>
    </form>
  )
}