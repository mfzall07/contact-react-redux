import React, { useEffect, useState } from 'react'
import { Button, Card, ContactCard, InputField, Sidebar } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, deleteContact, detailContact, listContact, updateContact } from '../../actions'
import { Default } from '../../assets'
import { LuSearch } from 'react-icons/lu'
import moment from 'moment/moment'

const Home = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] = useState('')
    
    const { addContactResult, detailContactResult, updateContactResult, deleteContactResult } = useSelector((state) => state.ContactReducer);
    const { listContactResult, listContactLoading, listContactError } = useSelector((state) => state.ContactReducer);

    const filteredAgeOn30 = Object.values(listContactResult).filter(item => item.age > 30);
    const filteredAgeUnder30 = Object.values(listContactResult).filter(item => item.age < 30);
    

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
        <div className='flex flex-col lg:flex-row items-center h-screen lg:overflow-hidden'>
            <Sidebar/>        
            <div className='w-full h-full lg:border py-16 lg:px-16 px-[16px] space-y-10'>
                <div className='flex items-center gap-6'>
                    <h1 className='text-[#B8C8C5] font-bold'>{moment().format('MMM, DD YYYY')}</h1>
                    <h1 className='text-[#B8C8C5] font-bold'>{moment().format('dddd')}</h1>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 items-center justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#1C2C2B] font-bold lg:text-5xl'>Welcome To The Contact List</h1>
                        <h1 className='text-[#1C2C2B]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                    </div>
                    <div className='relative'>
                        <input className='outline-none appearance-none pl-11 pr-4 rounded-full py-2 border bg-[#F6F6F6] text-[#1C2C2B]' placeholder='Search'/>
                        <LuSearch className='absolute top-[14px] left-4 text-[#1C2C2B]'/>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-3'>
                    <Card
                        color={'bg-[#FFF5ED]'}
                        colorText={'text-[#C4803D]'}
                        title={'Total Contact'}
                        count={listContactResult.length}
                        />
                    <Card
                        color={'bg-[#F0F3FF]'}
                        colorText={'text-[#5E6298]'}
                        title={'Under 30'}
                        count={filteredAgeUnder30.length}
                        />
                    <Card
                        color={'bg-[#E5F8FF]'}
                        colorText={'text-[#306388]'}
                        title={'Age Over 30'}
                        count={filteredAgeOn30.length}
                    />
                </div>
                <div className='flex flex-col lg:grid lg:grid-cols-12 gap-8'>
                    <div className='col-span-6 p-5 space-y-4'>
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
                            color={'bg-[#6EED9E]'}
                        />
                        {detailContactResult &&
                            <Button
                                title={'Cancel'}
                                onClick={handleCancel}
                                color={'bg-[#B8C8C5]'}
                            />
                        }
                    </div>
                    <div className='col-span-6 space-y-3'>
                        <h1 className='text-[#1C2C2B] font-bold uppercase border-b'>Contact List</h1>
                        <div className='space-y-2 h-[500px] overflow-scroll scroll-smooth scrollbar-hide'>
                        { listContactResult ?
                            Object.values(listContactResult).map((data, index) => {
                                return( 
                                    <ContactCard
                                        key={index}
                                        image={data.photo === "N/A" ? Default : data.photo}
                                        name={data.firstName + ' ' + data.lastName}
                                        age={data.age}
                                        onClickDelete={ () => handleDelete(data.id) }
                                        onClickDetail={ () => dispatch(detailContact(data))}
                                    />
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
        </div>
    )
}

export default Home