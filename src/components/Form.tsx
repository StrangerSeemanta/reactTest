import { FormEvent } from "react";

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
                    <input name="inputFirstName" type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastname" className="form-label">Last Name</label>
                    <input name="inputLastname" type="text" className="form-control" />
                </div>
                <div className="col-6">
                    <label htmlFor="inputEmail" className="form-label">Email ID</label>
                    <input name="inputEmail" type="email" className="form-control" placeholder="id@example.com" />
                </div>
                <div className='col-6'>
                    <label htmlFor="inputPassword" className='form-label'>Password</label>
                    <input name="inputPassword" type="password" className='form-control' />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input name="checkMeOut" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="checkMeOut">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-success">Sign in</button>
                </div>
            </form >
        </>

    )
}

export default Form