import React,{ useState, useEffect } from 'react';
import { createWorker } from 'tesseract.js';

const ImageText: React.FC = () => {
  const image=require('../eng_bw.png');
  const worker = createWorker({
    logger: m => console.log(m),
  });
  const doOCR = async () => {
    console.log('doing ocr');    
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(image);
    console.log('done ocr');
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing...');
  useEffect(() => {
    doOCR().catch(e => console.log(e));
  });

  return (
    <div>
      <img src={image.default} alt="sample" style={{maxWidth: '30%', maxHeight: '50%'}}/>
      <p>{ocr}</p>
    </div>
  );
}

export default ImageText;