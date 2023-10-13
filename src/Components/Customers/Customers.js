import './Customers.css'

import person1 from  './../../assets/testimonials/person1.png';
import person2 from  './../../assets/testimonials/person2.png';
import person3 from  './../../assets/testimonials/person3.png';

import { Heading } from '@chakra-ui/react'
import { SimpleGrid, Text, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function Customers () {
    return (
        <div className='mainCustomers'>
            <div className='customers-title'>
                <h3>Check out the Testimonials!</h3>
            </div>
            <div className='customers-container'>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Card className='card-content' size='sm' variant='elevated'>
                    <CardHeader className='card-header'>
                        <img src={person1} className='card-img' alt='basic'/>
                        <Heading size='lg' className='card-text'>John</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize='sm'>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                    <StarIcon/>
                        <Text>5.0</Text>
                    </CardFooter>
                </Card>
                <Card className='card-content' size='sm' variant='elevated'>
                    <CardHeader className='card-header'>
                        <img src={person2} className='card-img' alt='basic'/>
                        <Heading size='lg'  className='card-text'>Ashley</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize='sm'>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <StarIcon/>
                        <Text>5.0</Text>
                    </CardFooter>
                </Card>
                <Card className='card-content' size='sm' variant='elevated'>
                    <CardHeader className='card-header'>
                        <img src={person3} className='card-img' alt='basic'/>
                        <Heading size='lg'  className='card-text'>Maria</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize='sm'>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <StarIcon/>
                        <Text>5.0</Text>
                    </CardFooter>
                </Card>

            </SimpleGrid>
            </div>
        </div>
    )
}

export default Customers