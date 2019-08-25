import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Upload from './pages/Upload';
import Bitmovin from './pages/BitmovinPlayer';


export default function Routes (){
    return ( 
        <BrowserRouter>
            <Route path="/" exact component= {Upload} />
            <Route path="/video/:id" exact component= {Bitmovin} />
        </BrowserRouter>
    );
}