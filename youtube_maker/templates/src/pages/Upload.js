import React, {Component} from 'react';
import api from '../services/api';
import './Upload.css';
import {Progress} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
class Upload extends Component{
    //Defying state of selected file
    constructor(props){
        super(props)
        this.state = {
            selectedFile: [],
            loaded:0
        }
    }
    //Verifying if user send 1 file to upload
    maxSelectFile=(e)=>{
        let files = e.target.files;
        if(files.length > 1){
            const msg = 'Only 1 file';
            e.target.value = null;
            toast.warn(msg)
            return false;
        }
        return true;
    }

    handleChange=e=>{
        var file = e.target.files
        if(this.maxSelectFile(e)){
            this.setState({
            selectedFile: file,
            loaded: 0
            })
        }
    }
    handleSubmit= async ({history})=>{
        const data = new FormData();
        data.append("file", this.state.selectedFile[0]);
        const response = await api.post('upload/', data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
                })
            },             
        })
        //.then( res => {
        //    toast.success('Success');
        //})
        //.catch(err => {
        //    toast.error('Fail');
        //})
        const {id} = response.data;
        console.log(id);
        this.props.history.push(`/video/${id}`);
        
    }

    render(){
        return (
            
            <div className= "login-container">
                
                <form  >
                    <input
                        type="file"
                        multiple onChange={this.handleChange}                        
                        />
                    <div >
                        <ToastContainer />
                        <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
        
                    </div>
                     
                    <button  type="button" onClick={this.handleSubmit} >Send Your File</button> 
                </form>            
            </div>
          
        );
    }
}
export default Upload;