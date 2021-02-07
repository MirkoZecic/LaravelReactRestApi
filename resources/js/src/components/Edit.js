import React from 'react'
import AppContaner from './AppContainer';

const Edit = () => {
    return (
        <AppContaner title="Edit Product">
            <form>
            <div className="form-group">
                    <label>Product Name</label>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success">Edit</button>
                </div>
            </form>
        </AppContaner>
    );
};

export default Edit;
