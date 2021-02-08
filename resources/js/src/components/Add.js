import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import AppContaner from './AppContainer';
import api from '../api';


const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


    const onAddSubmit = async () => {
        setLoading(true);
        try {
            let product = {
                "name": title,
                "description": description,
                "price": price
            };
            await api.addProduct(product);
            history.push('/');
        } catch {
            alert('Failed to add product!');
        } finally {
            setLoading(false);
        }
    }

    return (
        <AppContaner title="ADD Product">
            <form>
                <div className="form-group">
                    <label>Product Name</label>
                    <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" type="text" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success" onClick={onAddSubmit} disabled={loading}>{loading ? 'Loading...' : 'Add'}</button>
                </div>
            </form>
        </AppContaner>
    );
};

export default Add;
