import React, { useState } from "react";
import Layout from './Layout';
import { Link } from '@inertiajs/inertia-react';
import '../../css/home.css';
import { MdEdit, MdDelete } from "react-icons/md";
const App = ({ data }) => {

    const shouldEnableScroll = data.length >= 6;

    const rows = [];
    for (const contact of data) {
        const contactId = contact.id
        rows.push(
            <tr key={contact.id}>
                <td className="contact-id">{contact.id}</td>
                <td>
                    <div className="contact">
                        <p className="contact-name">{contact.name}</p>
                        <div className="contact-info">
                            <p>{contact.no_telpon}</p>
                            <p>{contact.daerah_asal}</p>
                        </div>
                    </div>

                </td>
                <td>
                    <div className="contact-btns">

                        <Link href={`/viewContact/${contactId}`}>
                            <MdEdit color="#9e9e9e"
                                onMouseOver={({ target }) => target.style.color = "gray"}
                                onMouseOut={({ target }) => target.style.color = "#9e9e9e"} />

                        </Link>
                        <Link href={`/deleteContact/${contactId}`}>
                            <MdDelete color="#9e9e9e"
                                onMouseOver={({ target }) => target.style.color = "gray"}
                                onMouseOut={({ target }) => target.style.color = "#9e9e9e"} />

                        </Link>
                    </div>

                </td>

            </tr>
        )
    }
    return (
        <Layout>


            <div  className='container'>
                <div className="title">

                    <h2>Contact List</h2>
                </div>
                <div className="add-btn">

                    <Link href='/newContact'>
                        <button>New Contact</button>
                    </Link>
                </div>
                <div className={`content${shouldEnableScroll ? ' scrollable' : ''}`}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Contacts</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>

        </Layout>


    )
}

export default App
