import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './WhitePaper.css'

import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
function WhitePaper() {
    const [numPages, setNumPages] = useState(null);
    let [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      
      setNumPages(numPages);
    }
    const increasePage = () => {
        if(pageNumber >= 2){
            setPageNumber(--pageNumber)
        }
    }
    const decreasePage = () => {
        if(pageNumber < numPages){
            setPageNumber(++pageNumber)

        }
    }
  return (
    <div className='WhitePaperMain' >
             <AiFillCaretLeft onClick={increasePage} className={ pageNumber >= 2 ? "text-dark fs-1" : "text-secondary fs-1" } /> 
      <span className="fs-5">
        Page {pageNumber} of {numPages}
      </span>
       <AiFillCaretRight onClick={decreasePage} className={ pageNumber < numPages ? "text-dark fs-1" : "text-secondary fs-1" }/> 
      <div className="document">
<Document file="splassive_whitepaper.pdf" onLoadSuccess={onDocumentLoadSuccess} >
        <Page pageNumber={pageNumber} />
      </Document>
      </div>
       <AiFillCaretLeft onClick={increasePage} className={ pageNumber >= 2 ? "text-dark fs-1" : "text-secondary fs-1" } /> 
      <span className="fs-5">
        Page {pageNumber} of {numPages}
      </span>
       <AiFillCaretRight onClick={decreasePage} className={ pageNumber < numPages ? "text-dark fs-1" : "text-secondary fs-1" }/> 

    </div>
  )
}

export default WhitePaper