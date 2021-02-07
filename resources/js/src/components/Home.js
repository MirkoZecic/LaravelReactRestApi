import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AppContaner from './AppContainer';
//import axios from 'axios';

const Home = () => {

    // const fetch= async()=>{
    //     const res= await axios.get('http://localhost:8000/api/products');
    //     console.log(res);
    // }

    // useEffect(()=>{
    //     fetch();
    // });
    return (
        <AppContaner title="Products">
            <Link to="/add" className="btn btn-primary">Add Product</Link>
            <div className="table-responsive">
                <table className="table table-stripped mt-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sample Title</td>
                            <td>Sample Description</td>
                            <td>
                                <Link to="/edit/1" className="btn btn-warning"> Edit</Link>
                                <Link to="/delete" className="btn btn-danger">Delete</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AppContaner>
    );
};

export default Home;
