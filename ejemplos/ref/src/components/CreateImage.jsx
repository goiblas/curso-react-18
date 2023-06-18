import domtoimage from 'dom-to-image-more';
import { useRef, useState } from 'react';

export default function CreateImage() {
  const domRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const createImage =  async () => {
    const dataUrl = await domtoimage.toPng(domRef.current);
    setImageSrc(dataUrl);
  }

  return (
    <>
      {imageSrc && <img src={imageSrc} alt="DOM" />}
      
      <div ref={domRef} className="box" contentEditable>
        <h1>DOM to Image</h1>
        <p>Convert DOM to Image</p>
      </div>
      <button onClick={createImage}>Create Image</button>
    </>
  )
}

  