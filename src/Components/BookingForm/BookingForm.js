import './BookinForm.css'

import { useState, useEffect } from "react"; 

import * as Yup from 'yup';
//import { Formik } from "formik"; 
import { useFormik } from "formik"; 


import useSubmit from "../../hooks/useSumbit";


import { 
    Box, 
    Button, 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Input, 
    Select, 
    Textarea, 
    VStack, 
   } from "@chakra-ui/react";
import { useAlertContext } from '../context/alertContext';

function BookingForm () {
    const {isLoading, response, submit} = useSubmit();
    const [formValues, setFormValues] = useState({})
    const { onOpen } = useAlertContext(); 
    
    const formik = useFormik({ 
      initialValues: { 
        firstName: "", 
        email: "", 
        date: "",
        time: "17",
        number: '1',
        type: "birthday", 
        comment: "", 
      }, 
      onSubmit: (values) => { 
        setFormValues(values)
        submit('https://someurl.com', values);
      }, 
      validationSchema: Yup.object({ 
        firstName: Yup.string().required("Required"), 
        email: Yup.string().email("Invalid email address").required("Required"), 
        date: Yup.date().required("Required").default(() => new Date()),
        time: Yup.string().required(),
        number: Yup.number().positive().integer().min(1, 'At least one').max(10, 'Max is 10'),
        comment: Yup.string() 
      }), 
    }); 

    
    useEffect(() => { 
      if (response) { 
        onOpen(response.type, response.message); 
        if (response.type === 'success') { 
          formik.resetForm()
        } 
      } 
    }, [response]); 

    return (
        <VStack p={5} alignItems="flex-start"> 
        <Box p={6} rounded="md" w="100%"> 
          <form onSubmit={formik.handleSubmit}> 
            <VStack spacing={4}> 
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
                <FormLabel htmlFor="firstName">Name</FormLabel> 
                <Input 
                  id="firstName" 
                  name="firstName" 
                  {...formik.getFieldProps("firstName")} 
                /> 
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
              </FormControl> 
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
                <FormLabel htmlFor="email">Email Address</FormLabel> 
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  {...formik.getFieldProps("email")} 
                /> 
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
              </FormControl>
              <FormControl isInvalid={!!formik.errors.date && formik.touched.date}> 
                <FormLabel htmlFor="date">Choose date</FormLabel> 
                <Input 
                  id="date" 
                  name="date" 
                  type="date" 
                  {...formik.getFieldProps("date")} 
                /> 
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
              </FormControl>
              <FormControl> 
                <FormLabel htmlFor="time">Choose time</FormLabel> 
                <Select id="time" name="time" {...formik.getFieldProps("time")}> 
                  <option value='17'>17:00</option>
                  <option value='18'>18:00</option>
                  <option value='19'>19:00</option>
                  <option value='20'>20:00</option>
                  <option value='21'>21:00</option>
                  <option value='22'>22:00</option>
                </Select> 
              </FormControl>
              <FormControl isInvalid={!!formik.errors.number && formik.touched.number}> 
                <FormLabel htmlFor="number">Number of guests</FormLabel> 
                <Input 
                  id="number" 
                  name="number" 
                  type="number"
                  placeholder="1"
                  {...formik.getFieldProps("number")} 
                /> 
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
              </FormControl>
              <FormControl> 
                <FormLabel htmlFor="type">Ocassion</FormLabel> 
                <Select id="type" name="type" {...formik.getFieldProps("type")}> 
                  <option value="birthday">Birthday</option> 
                  <option value="anniversary"> 
                    Anniversary
                  </option> 
                  <option value="other">Other</option> 
                </Select> 
              </FormControl> 
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
                <FormLabel htmlFor="comment">Do you want to add something to this special ocassion?</FormLabel> 
                <Textarea 
                  id="comment" 
                  name="comment" 
                  height={250} 
                  {...formik.getFieldProps("comment")} 
                /> 
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
              </FormControl> 
              <Button type="submit" colorScheme="yellow" width="full" isLoading={isLoading}> 
                Submit 
              </Button> 
            </VStack> 
          </form> 
        </Box>
        <div>
         <h3>Form Values</h3>
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </div> 
      </VStack> 
    // return (
    //   <Formik
    //     initialValues= {{ 
    //           firstName: "", 
    //           email: "", 
    //           date: "",
    //           time: "17",
    //           number: '1',
    //           type: "birthday", 
    //           comment: "", 
    //         }}
    //     validationSchema= { Yup.object({ 
    //       firstName: Yup.string().required("Required"), 
    //       email: Yup.string().email("Invalid email address").required("Required"), 
    //       date: Yup.date().required("Required").default(() => new Date()),
    //       time: Yup.string().required(),
    //       number: Yup.number().positive().integer().min(1, 'At least one').max(10, 'Max is 10'),
    //       comment: Yup.string() })}
    //     onSubmit= {(values, { setSubmitting }) => { 
    //       submit(values)
    //       setTimeout(() => {
    //         setSubmitting(false);
    //         setFormValues(values)
    //       }, 400);
    //       console.log(values);
    //       // submit('https://john.com/contactme', values);
    //     }}
    //   >
    //     {formik => (
    //     <VStack p={5} alignItems="flex-start"> 
    //     <Box p={6} rounded="md" w="100%"> 
    //       <form onSubmit={formik.handleSubmit}> 
    //         <VStack spacing={4}> 
    //           <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
    //             <FormLabel htmlFor="firstName">Name</FormLabel> 
    //             <Input 
    //               id="firstName" 
    //               name="firstName" 
    //               {...formik.getFieldProps("firstName")} 
    //             /> 
    //             <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
    //           </FormControl> 
    //           <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
    //             <FormLabel htmlFor="email">Email Address</FormLabel> 
    //             <Input 
    //               id="email" 
    //               name="email" 
    //               type="email" 
    //               {...formik.getFieldProps("email")} 
    //             /> 
    //             <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
    //           </FormControl>
    //           <FormControl isInvalid={!!formik.errors.date && formik.touched.date}> 
    //             <FormLabel htmlFor="date">Choose date</FormLabel> 
    //             <Input 
    //               id="date" 
    //               name="date" 
    //               type="date" 
    //               {...formik.getFieldProps("date")} 
    //             /> 
    //             <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
    //           </FormControl>
    //           <FormControl> 
    //             <FormLabel htmlFor="time">Choose time</FormLabel> 
    //             <Select id="time" name="time" {...formik.getFieldProps("time")}> 
    //               <option value='17'>17:00</option>
    //               <option value='18'>18:00</option>
    //               <option value='19'>19:00</option>
    //               <option value='20'>20:00</option>
    //               <option value='21'>21:00</option>
    //               <option value='22'>22:00</option>
    //             </Select> 
    //           </FormControl>
    //           <FormControl isInvalid={!!formik.errors.number && formik.touched.number}> 
    //             <FormLabel htmlFor="number">Number of guests</FormLabel> 
    //             <Input 
    //               id="number" 
    //               name="number" 
    //               type="number"
    //               placeholder="1"
    //               {...formik.getFieldProps("number")} 
    //             /> 
    //             <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
    //           </FormControl>
    //           <FormControl> 
    //             <FormLabel htmlFor="type">Ocassion</FormLabel> 
    //             <Select id="type" name="type" {...formik.getFieldProps("type")}> 
    //               <option value="birthday">Birthday</option> 
    //               <option value="anniversary"> 
    //                 Anniversary
    //               </option> 
    //               <option value="other">Other</option> 
    //             </Select> 
    //           </FormControl> 
    //           <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
    //             <FormLabel htmlFor="comment">Do you want to add something to this special ocassion?</FormLabel> 
    //             <Textarea 
    //               id="comment" 
    //               name="comment" 
    //               height={250} 
    //               {...formik.getFieldProps("comment")} 
    //             /> 
    //             <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
    //           </FormControl> 
    //           <Button type="submit" colorScheme="yellow" width="full" isLoading={isLoading}> 
    //             Submit 
    //           </Button> 
    //         </VStack> 
    //       </form> 
    //     </Box> 
    //     <div>
    //       <h3>Form Values</h3>
    //       <pre>{JSON.stringify(formValues, null, 2)}</pre>
    //     </div>
    // //   </VStack> 
    //     )}

    //   </Formik>
      )
}

export default BookingForm