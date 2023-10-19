import './BookinPage.css'

import BookingForm from "../BookingForm/BookingForm"
import { Link } from "react-router-dom";

import {  
    Heading,
    Stack,
    Button
   } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import Alert from '../Alert';

   

function BookingPage () {
    return (
        <div>
            <Stack direction='row' spacing={4} p={4}>
                <Link to='/'>
                    <Button leftIcon={<ArrowBackIcon w={6} h={6} />} colorScheme='yellow' size='sm' variant='solid'/>
                </Link>
                <Heading as="h1" id="contactme-section" className='booking-title'>
                    Reservations 
                </Heading>
            </Stack> 
            <BookingForm/>
            <Alert></Alert>
        </div>
    )
}

export default BookingPage