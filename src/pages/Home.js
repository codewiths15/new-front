import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { toast } from "react-toastify";
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    const localData = async () => {
        const response = await axios.get("http://localhost:8080/api/get");
        setData(response.data);
    };

    useEffect(() => {
        localData();
    }, []);
    return (

        <div style={{ marginTop: "60px" }}>
            
            <Link to="/addContact">
                <button classname= "btn btn-contact"> Add Bill</button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Cab Number</th>
                        <th style={{ textAlign: "center" }}>Cab Id</th>
                        <th style={{ textAlign: "center" }}>Monthly Earning in Rs.</th> 
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                               
                                <td>
                                    
                                   
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home
