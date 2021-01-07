import React, { useState } from 'react'

const GetUserDocs: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState({} as File);

    const onFileChange = (e: any) => {
        setSelectedFile(e.target.files[0]);       
    };
    
    const onFileUpload = () => {};

    const fileData = () => {
        console.log(selectedFile);
        
        return ( 
            <div> 
                <h2>File Details:</h2> 
                <p>File Name: {selectedFile.name}</p> 
                <p>File Type: {selectedFile.type}</p>  
            </div>
        )        
    };

  return (
    <div> 
        <input type="file" onChange={onFileChange} />
        {fileData()} 
        <button onClick={onFileUpload}> 
            Upload! 
        </button> 
    </div>
  )
}

export default GetUserDocs;