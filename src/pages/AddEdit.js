import React, { useState, useEffect } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    name: "",
    email: "",
    contact: "",
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);

    const { name, email, contact } = state;

    //const history = Navigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("Please provide the value in each field");
        } else {
            axios.post("https://back-cab10.onrender.com", {
                name,
                email,
                contact
            })
                .then(() => {
                    setState({ name: "", email: "", contact: "" })
                })
                .catch((err) => toast.error(err.response.data));
            toast.success("Bill Added Successfully!");
            //setTimeout(() => history.push("/"), 500);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (


        <div class="border border-warning m-3">

            <div style={{ marginTop: "100px" }}>
                <div class="bg-transparent">
                    <form
                        style={{
                            margin: "auto",
                            padding: "15px",
                            maxWidth: "400px",
                            alignContent: "center",

                        }}
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="name"> <font color="yellow"><b><u>Cab Number</u></b></font></label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Cab Number ..."
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="email"> <font color="#39e75f"><b><u>Cab Id</u></b></font></label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Cab Id ..."
                            value={email}
                            onChange={handleInputChange}
                        />
                        <label html For="contact"><font color="red"><b><u>Monthly Earning</u></b></font></label>
                        <input
                            type="number"
                            id="contact"
                            name="contact"
                            placeholder="Monthly Earning in Rs...."
                            value={contact}
                            onChange={handleInputChange}
                        />
                        <input type="submit" value="Save" />
                        <Link to="/">
                            <input type="button" value="Open List" />
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default AddEdit;