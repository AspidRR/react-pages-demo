import React from 'react';
import galleryData from "../../data/gallery.json"
import {Container} from 'reactstrap';
import './gallery.css';

const Gallery = () => {
    return(
        <Container>
            <div className='gallery'>
                {galleryData.data.map((item, index) => (
                    <div key={index} className="wrapper-images">
                        <img src={item.link} alt={item.text} style={{width: '100%'}}/>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Gallery;