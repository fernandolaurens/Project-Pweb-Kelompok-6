import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia';
import 'typeface-merriweather';
import '../../css/addpage.css';
const AddContactInput = () => {
    const [formData, setFormData] = useState({
        npm: '',
        name: '',
        daerah_asal: '',
        no_telpon: '',
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
            await Inertia.post('/addContact', formData);
            console.log(formData)
            console.log('Data submitted successfully');
        } catch (error) {
            console.error('Failed to submit data', error);
        }
    }


    return (


        <div className="container-add">

            <form onSubmit={handleSubmit} className="content-form">
                <h2>New Contact</h2>
                <input type="hidden" name="_token" value={window.csrf_token} />

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

                <button className='save-btn' type='submit'>Save</button>
            </form>
        </div>

    )
}

export default AddContactInput
