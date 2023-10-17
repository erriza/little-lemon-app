import { render, fireEvent, screen } from "@testing-library/react";

import BookingForm from "./BookingForm";

test('Little Lemon exists', () => {
    //render app
    render(<BookingForm />); 

    const heading = screen.getByText('Ocassion')

    expect(heading).toBeInTheDocument();

})