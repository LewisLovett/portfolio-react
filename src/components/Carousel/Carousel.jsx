import "./Carousel.scss";
import { useState } from "react";

const Carousel = ({images}) => {
    const [imageIndex,setImageIndex] = useState(0);

    const prevImage = () =>{
        imageIndex == 0 ? setImageIndex(images.length-1): setImageIndex(imageIndex-1);
    }

    const nextImage = () =>{
        imageIndex == images.length-1 ? setImageIndex(0): setImageIndex(imageIndex+1);
    }
    
    return(
        <div className="carousel">
            <div className="carousel__arrow" onClick={prevImage}>{'<'}</div>
            <img className="carousel__image" src={require(`../../assets/images/${images[imageIndex]}`)}/>
            <div className="carousel__arrow"  onClick={nextImage}>{'>'}</div>
        </div>
    )
}

export default Carousel;