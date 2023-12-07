import React from 'react'
import Layout from './Layout'
import EditContactInput from '../Components/EditContactInput'
 const EditContact = ({data}) => {
    console.log(data);
  return (
    <Layout>
        <EditContactInput data={data}/>
    </Layout>
  )
}

export default EditContact
