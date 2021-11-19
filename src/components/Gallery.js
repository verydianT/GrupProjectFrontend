import React from 'react';
import '../FolderCSS/gallery.css'

import Img1 from '../images/images-kuta-1.jpg'
import Img2 from '../images/images-kuta-2.jpg'
import Img3 from '../images/images-kuta-3.jpg'
import Img4 from '../images/images-kuta-4.jpg'
import Img5 from '../images/images-kuta-5.jpg'
import Img6 from '../images/images-kuta-6.jpg'
import Img7 from '../images/images-kuta-7.jpg'
import Img8 from '../images/images-nusa-3.jpg'
import Img9 from '../images/images-nusa-4.jpg'
import Img10 from '../images/images-nusa-5.jpg'
import Img11 from '../images/images-nusa-6.jpg'
import Img12 from '../images/images-ubud-1.jpg'
import Img13 from '../images/images-ubud-2.jpg'

const Gallery = () => {
    let data =[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc:Img4,
        },
        {
            id:5,
            imgSrc:Img5,
        },
        {
            id:6,
            imgSrc:Img6,
        },
        {
            id:7,
            imgSrc:Img7,
        },
        {
            id:8,
            imgSrc:Img8,
        },
        {
            id:9,
            imgSrc:Img9,
        },
        {
            id:10,
            imgSrc:Img10,
        },
        {
            id:11,
            imgSrc:Img11,
        },
        {
            id:12,
            imgSrc:Img12,
        },
        {
            id:13,
            imgSrc:Img13,
        },
    ]

    return(
        <div>
              <h2 style={{textAlign: "center", marginTop:"100px", marginBottom:"80px"}}>Image Gallery</h2>
            <div className="gallery">
                {data.map ((item, index) => {
                    return (
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} style={{width: '100%'}}></img>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery;