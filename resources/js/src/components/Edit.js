import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import AppContaner from './AppContainer';
import api from '../api';
import { result } from 'lodash';


const Edit = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            let product = {
                "name": name,
                "description": description,
                "price": price,
                "manufacturer_id": manufacturer_id
            };
            await api.updateProduct(product, id);
            history.push('/');
        } catch {
            alert('Failed to edit product!');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        api.getOneProduct(id).then(res => {
            const result = res.data;
            const product = result.product;
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
        })
    }, []);

    return (
        <AppContaner title="EDIT Product">
            <form>
                <div className="form-group">
                    <label>Product Name</label>
                    <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} />
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
                    <button type="button" className="btn btn-success" onClick={onEditSubmit} disabled={loading}>{loading ? 'Loading...' : 'Edit'}</button>
                </div>
            </form>
        </AppContaner>
    );
};

export default Edit;
