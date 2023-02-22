import React, { useState } from "react";
import "./styles.css";
import DragArea from "./DragArea";
// import FileList from "./FileList";


export default function App() {
  const [fileList, setFileList] = useState([]);

  const addFile = (file) => {
    setFileList([...fileList, file]);
  };

  // let deleteFile = (e) => {
  //   let x=e.target.getAttribute("removeFile")
  //   setFileList(fileList.filter(items=> items.name!==x));
  // }

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);

  }

  return (
    <div className="App">
      <h1 className="title">Drag and Drop Files App</h1>
      <DragArea addFile={addFile} />
      {/* <FileList fileList={fileList}/> */}
      {fileList.length >= 1 ?
        <div className="file-list">
          {fileList.map((file, index) => {
            return (
              <div key={index} className="file-item">
                <h3 className="file-title"> {file.name} </h3>
                {/* <p className="file-size"> {file.size}b </p> */}
                <div>
                  <button type="button" className="del-button">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                      alt="delete"
                      className="delete-icon"
                      // removeFile={file.name}
                      // onClick={deleteFile}
                      onClick={() => fileRemove(file)}
                    />
                  </button>
                </div>

              </div>
            )
          })}
        </div> :

        <div>No files Dropped yet !!</div>

      }



    </div>
  );
}
