import { FormEvent } from "react";
import Button from "./Button";

export interface CustomFormData {
    firstName: string;
    lastName: string;
    emailId: string;
    password: string;
    checkMeOut: boolean;
}

interface Props {
    onSubmit: (event: FormEvent, data: CustomFormData) => void;
}

// Main Component
function Form({ onSubmit }: Props) {
    const handleSubmission = (e: FormEvent) => {
        const form = e.target as HTMLFormElement;
        const formData = {
            firstName: (form.elements.namedItem("inputFirstName") as HTMLInputElement).value,
            lastName: (form.elements.namedItem("inputLastname") as HTMLInputElement).value,
            emailId: (form.elements.namedItem("inputEmail") as HTMLInputElement).value,
            password: (form.elements.namedItem("inputPassword") as HTMLInputElement).value,
            checkMeOut: (form.elements.namedItem("checkMeOut") as HTMLInputElement).checked,
        };

        // Call the prop function with the form data
        onSubmit(e, formData);
    };
    return (
        <>
            <form className="row g-3" action='#' onSubmit={(e) => { handleSubmission(e) }}>
                <h1>Form</h1>

                <div className="col-md-6">
                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                    <input pattern="^[A-Za-z]+$" name="inputFirstName" id='inputFirstName' type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastname" className="form-label">Last Name</label>
                    <input name="inputLastname" id="inputLastname" type="text" className="form-control" />
                </div>
                <div className="col-6">
                    <label htmlFor="inputEmail" className="form-label">Email ID</label>
                    <input name="inputEmail" id="inputEmail" type="email" className="form-control" placeholder="id@example.com" />
                </div>
                <div className='col-6'>
                    <label htmlFor="inputPassword" className='form-label'>Password</label>
                    <input name="inputPassword" id="inputPassword" type="password" className='form-control' />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input name="checkMeOut" id="checkMeOut" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="checkMeOut">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">

                    <Button btnType="submit" Colors="success" label="Sign Up" />
                    <Button btnType="button" Colors="light" btnId="showpass" label='show pass' />
                </div>
            </form >
        </>

    )
}

export default Form