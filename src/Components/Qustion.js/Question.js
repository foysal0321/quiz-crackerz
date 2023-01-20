import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye } from '@fortawesome/free-solid-svg-icons'
import './Question.css'
//import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = () => {
    const data = useLoaderData()
    //console.log(data.data);

    const question = (q)=>{
        const prev = data.data.questions
         const prevqustion =    prev.find(i => i.correctAnswer === q)
         if(prevqustion){
            toast.success('Right',{autoClose:500, position:'top-center'})
         }else{
            toast.warning('Wrong',{autoClose:500, position:'top-center'})
         }   
    }

    const showAns = (q)=>{
       toast(q,{autoClose:1000, position:'top-center'})
    }
      
    return (
        <div className='container'>
            <h4 className='text-center py-4'>Quiz of {data.data.name}</h4>
            {
              data.data.questions.map(d => (
                <div key={d.id} className="question">
                    <div className="questionIcon">
                         <h4>{d.question}</h4>
                  <FontAwesomeIcon onClick={() => showAns(d.correctAnswer)} icon={faEye} />
                 
                        </div>                                      
                    <div className="">
                        <div className="q1">
                        <div className="q">
                         <h6 onClick={() => question(d.options[0])}>{d.options[0]} </h6>   
                        </div>
                       <div className="q">
                         <h6 onClick={() => question(d.options[1])}>{d.options[1]}</h6>
                       </div>                       
                        </div>
                        <div className="q2">
                        <div className="q">
                        <h6 onClick={() => question(d.options[2])}>{d.options[2]}</h6>  
                        </div>
                        <div className="q">
                        <h6 onClick={() => question(d.options[3])}>{d.options[3]} </h6>                         
                        </div>
                        </div> 
                           <ToastContainer />             
                    </div>
                    
                </div>
              ))
            }
        </div>
    );
};

export default Question;