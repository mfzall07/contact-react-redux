import React, { useEffect, useState } from 'react'
import { Button, ContactCard, InputField } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, deleteContact, detailContact, listContact, updateContact } from '../../actions'
import { Default } from '../../assets'

const Home = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] = useState('')
    
    const { addContactResult, detailContactResult, updateContactResult, deleteContactResult } = useSelector((state) => state.ContactReducer);
    const { listContactResult, listContactLoading, listContactError } = useSelector((state) => state.ContactReducer);

    // POST DATA
    const handleSubmit = (e) => {
        e.preventDefault()
        if(id) {
            const data = { 
                firstName: firstName,
                lastName: lastName,
                age: age,
                photo: image,
            }
            dispatch(updateContact(data, id))
            setTimeout(() => {
                window.location.reload(false)
            }, 3000)
        } else {
            dispatch(addContact({
                firstName: firstName,
                lastName: lastName,
                age: age,
                photo: image
            }))
        }
    }

    // DELETE DATA
    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    }

    const handleCancel = () => {
        window.location.reload(false)
    }
    useEffect(() => {
        if(addContactResult){
            dispatch(listContact());
        }
        dispatch(listContact())
    }, [addContactResult, dispatch])

    useEffect(() => {
        if(updateContactResult){
            dispatch(listContact());
        } 
        dispatch(listContact())
    }, [updateContactResult, dispatch])

    useEffect(() => {
        if(detailContactResult) {
            setFirstName(detailContactResult.firstName)
            setLastName(detailContactResult.lastName)
            setAge(detailContactResult.age)
            setImage(detailContactResult.photo)
            setId(detailContactResult.id)
        }
        dispatch(listContact())
    }, [detailContactResult, dispatch])

    useEffect(() => {
        if(deleteContactResult) {
            dispatch(listContact());
        } 
        dispatch(listContact())
    }, [deleteContactResult, dispatch])

    return (
        <div className='p-5 bg-[#F8F9FB] h-screen'>
            <div className='grid grid-rows-12 lg:grid-cols-12 gap-5'>
                <div className='row-span-6 lg:col-span-2 flex flex-col gap-5 border-2 shadow-sm rounded-lg bg-white p-5'>
                    <h1 className='text-center text-xl font-bold uppercase text-[#737373] border-b py-2'>Add Contact</h1>
                    <div className='flex flex-col gap-4'>
                        <InputField
                            fieldTitle={'Photo'}
                            placeholder={'Image'}
                            fieldType={'file'}
                            image={image}
                            value={image}
                        />
                        <InputField
                            fieldTitle={'Link Photo'}
                            placeholder={'Input Link Photo....'}
                            fieldType={'text'}
                            onChange={ (e) => setImage(e.target.value) }
                            value={image}
                        />
                        <InputField
                            fieldTitle={'First Name'}
                            placeholder={'First Name....'}
                            fieldType={'text'}
                            onChange={ (e) => setFirstName(e.target.value) }
                            value={firstName}
                        />
                        <InputField
                            fieldTitle={'Last Name'}
                            placeholder={'Last Name....'}
                            fieldType={'text'}
                            onChange={ (e) => setLastName(e.target.value) }
                            value={lastName}
                        />
                        <InputField
                            fieldTitle={'Age'}
                            placeholder={'Age....'}
                            fieldType={'text'}
                            onChange={ (e) => setAge(e.target.value) }
                            value={age}
                        />
                    </div>
                    <Button
                        title={!detailContactResult ? 'Submit' : 'Save'}
                        onClick={handleSubmit}
                        color={'bg-green-500'}
                    />
                    {detailContactResult &&
                        <Button
                            title={'Cancel'}
                            onClick={handleCancel}
                            color={'bg-gray-500'}
                        />
                    }
                </div>
                <div className='row-span-6 lg:col-span-10'>
                    <div className='grid grid-cols-12 gap-2'>
                        { listContact ?
                            Object.values(listContactResult).map((data, index) => {
                                return( 
                                    <div className='col-span-6 lg:col-span-2'>
                                        <ContactCard
                                            key={index}
                                            image={data.photo === "N/A" ? Default : data.photo}
                                            name={data.firstName + ' ' + data.lastName}
                                            age={data.age}
                                            onClickDelete={ () => handleDelete(data.id) }
                                            onClickDetail={ () => dispatch(detailContact(data))}
                                        />
                                    </div>
                                )
                            })
                            :
                            listContactLoading ?
                                <h1>Wait a seconds, data still loading....</h1>
                            :
                            listContactError ? listContactError : 'Empty Contact Data'
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home