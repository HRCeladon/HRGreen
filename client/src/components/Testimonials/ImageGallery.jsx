import {useState, useEffect, useRef} from "react";
import React from "react";



export default function ExpandedImages({photos,setGallery, imageCount, gallery}) {
  const [zoom, setZoom] = useState(false);
  const [expandedDimensions, setExpandedDimensions] = useState([0, 0]);
  const [zoomSize, setZoomSize] = useState("");


  var photoId = imageCount;

  const handleZoomCloseClick = (e) => {
    setZoom(false);
  };


  const handleZoomOpenClick = (e) => {
    setZoom(true);
    setExpandedDimensions([e.clientX/e.currentTarget.clientWidth*100, e.clientY/e.currentTarget.clientHeight*100]);
    if (e.currentTarget.clientWidth >= e.currentTarget.clientHeight) {
      setZoomSize(`${e.currentTarget.clientWidth * 2.5}px auto`);
    } else {
      setZoomSize(`auto ${e.currentTarget.clientHeight * 2.5}px`);
    }

  };

  const zoomIn = (e) => {
    const zoomTarget = e.currentTarget;
    let clientX = 0;
    let clientY = 0;
    e.clientX ? clientX = e.clientX : clientX = e.pageX;
    e.clientY ? clientY = e.clientY : clientX = e.pageX;
    let x = clientX/zoomTarget.clientWidth*100;
    let y = clientY/zoomTarget.clientHeight*100;
    zoomTarget.style.backgroundPosition = x + "%" + y + "%";
  };





  return (
    <div id="expanded-image-gallery">
      <section id="expanded-image-container">
        {zoom &&
          <figure id="zoomed-main" className="pictureOverview" style={{
            backgroundImage: `url(${photos[imageCount]})`,
            backgroundSize: `${zoomSize}`,
            backgroundPosition: `${expandedDimensions[0]}% ${expandedDimensions[1]}%`
            }} onMouseMove={zoomIn} onError={(e) => console.log(e)} onClick={handleZoomCloseClick}>
            <img id="zoomed-main-image" className="pictureOverview" src={photos[imageCount]} alt="zoomed main image" onError={(e) => console.log(e)}></img>
          </figure>
        }
        {!zoom &&
          <img id="expanded-main-image" className="pictureOverview" src={photos[imageCount]} onError={(e) => console.log(e)} onClick={handleZoomOpenClick}></img>
        }
      </section>
    </div>
  );
}


