import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Upload from './pages/Upload';


export default function Routes (){
    return ( 
        <BrowserRouter>
            <Route path="/" exact component= {Upload} />
        </BrowserRouter>
    );
}