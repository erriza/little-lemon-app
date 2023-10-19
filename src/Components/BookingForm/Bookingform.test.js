import { render, fireEvent, screen } from "@testing-library/react";

import BookingForm from "./BookingForm";
import { date } from "yup";

test('Little Lemon exists', () => {
    //render app
    render(<BookingForm />); 

    const heading = screen.getByText('Ocassion')

    expect(heading).toBeInTheDocument();

})

test('booking form has validations', async () => {
    const { getByText, getByLabelText } = render(<BookingForm/>)

    const submitBtn = screen.getByText('Submit')
    fireEvent.click(submitBtn)
    
    const nameInput = screen.getByLabelText('Name')
    const emailInput = screen.getByLabelText('Email Address')
    const dateInput = screen.getByLabelText('Choose date')

    // const nameError = screen.getByText('Name Required')
    // const emailError = screen.getByText('Email Required')
    // const dateError = screen.getByText('Date Required')

    expect(nameInput).toBeInvalid()
    // expect(emailError).toBeInTheDocument()
    // expect(dateError).toBeInTheDocument()

})