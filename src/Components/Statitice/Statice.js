import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Statice.css'

const Statice = () => {
    const data = useLoaderData()
  
    return (
        <div className='container py-5 chart'>          
            <LineChart  width={350} height={300} data={data.data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>           
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name"  />
            <YAxis />
            <Tooltip />
        </LineChart>                         
        </div>
    );
};

export default Statice;