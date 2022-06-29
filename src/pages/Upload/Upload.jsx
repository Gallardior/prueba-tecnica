import AuthContext from "../../context/AuthContext"
import { useContext, useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { UploadForm } from "../../components/UploadForm/UploadForm"
import { CarouselImages } from "../../components/CarouselImages/CarouselImages"

const INITIAL_IMAGES = JSON.parse(localStorage.getItem('images')) || []

export function Upload () {
  // Redirigir al home si el usuario no esta logueado
  const {isLogin} = useContext(AuthContext)
  if(!isLogin) return <Navigate to="/" replace={true}/>
  const [images, setimages] = useState(INITIAL_IMAGES)

  // Cachear las imagenes cada vez que se suba una nueva
  useEffect( () => {
    localStorage.setItem('images', JSON.stringify(images))
  }, [images]) 

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl text-center font-bold mb-6">Upload</h2>
      <UploadForm setimages={setimages}/>
      {
        images.length > 0 
          ? <>
            <h2 className="text-2xl text-center font-bold my-6">Your Images</h2>
            <CarouselImages images={images}/>
          </>
          : null
      }
    </section>
  )
}