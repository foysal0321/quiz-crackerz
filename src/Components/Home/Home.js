import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const data = useLoaderData()

    return (
        <div>
            <header>
                <div className="container header">
                    <div className="img">
                        <img src="https://mallumusic.info/wp-content/uploads/2022/03/Custom-Software-Development.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p className='lead'>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing. <br />
                        <br /> 
                        A front-end developer architects and develops websites and applications using web technologies ( HTML, CSS, DOM, and JavaScript), 
                        </p>                        
                    </div>
                </div>
            </header>
            <div className="data container">
                {
                    data.data.map(d => (
                        <div key={d.id} className="card">
                        <img src={d.logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{d.name}</h5> 
                            <h6>Total Quiz: {d.total}</h6>    
                             <NavLink to={`/${d.id}`}>
                              <button className="btn btn-primary"> Start quiz</button>
                            </NavLink>                                      
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;