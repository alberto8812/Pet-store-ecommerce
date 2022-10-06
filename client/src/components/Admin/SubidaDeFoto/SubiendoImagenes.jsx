import React, { useState } from "react"
import './SubiendoIImagenes.css'
export default function SubiendoImagenes({image, setImage}) {

    const [loading , setLoading] = useState(false)


    const uploadImagen = async(e) =>{
        const files = e.target.files
        const data = new FormData()
        if(files[0]){
        data.append('file', files[0])
        data.append('upload_preset' , 'wg3pqir0')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dzrkfqgzz/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        //console.log(res)
        setImage(file.secure_url)
        console.log(file.secure_url)
        setLoading(false)
    }}


    return(
        <div className="SubiendoIImagenes">
            <div>
                <input 
                type="file"
                name='file'
                onChange={uploadImagen} />
                <img src={image} alt="" height="200px" width="200px" />
            </div>
        </div>
    )

}
