import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia';
import 'typeface-merriweather';
import '../../css/editpage.css';
const EditContactInput = ({data}) => {
    const contactId = data.id
    console.log(contactId);
    const [formData, setFormData] = useState({
        name: data.name,
        daerah_asal: data.daerah_asal,
        no_telpon: data.no_telpon,
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await Inertia.post(`/editContact/${contactId}`, formData);
            console.log(formData)
            console.log('Data Updated successfully');
        } catch (error) {
            console.error('Failed to submit data', error);
        }
    }

    return (
        <div className="container-edit">
            <form onSubmit={handleSubmit} className="content-form">
                <h2>Change Contact</h2>
                <div className="input-contact contact-name">
                    <label htmlFor="name">Name : </label>
                    <input type="text" placeholder='name...' name='name'
                    value={formData.name} onChange={handleInputChange}/>
                </div>

                <div className="input-contact contact-place">
                    <label htmlFor="daerah_asal">Daerah Asal : </label>
                    <input type="text" placeholder='daerah asal...' name='daerah_asal'
                    value={formData.daerah_asal} onChange={handleInputChange} />
                </div>

                <div className="input-contact contact-no">
                    <label htmlFor="no_telpon">Nomor Telepon : </label>
                    <input type="text" placeholder='no telepon...' name='no_telpon'
                    value={formData.no_telpon} onChange={handleInputChange} />
                </div>

                <button className='updt-btn' type='submit'>Update</button>
            </form>
        </div>
    )
}

export default EditContactInput
