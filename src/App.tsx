import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Form, { CustomFormData } from "./components/Form";
import { FormEvent, Fragment, useState } from "react";


function App() {
  const [visibilityState, setVisibilityState] = useState(false);
  const [DivisionNameVisible, setDivisionNameVisibl] = useState(false);
  const [divisionDetails, setDivisionDetails] = useState(<></>)
  const [formData, setFormData] = useState<CustomFormData>({
    firstName: " ",
    lastName: " ",
    emailId: " ",
    password: " ",
    checkMeOut: false
  })
  let lists = [
    "Dhaka",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Mymensingh",
    "Rangpur",
    "Cittagong",
    "Rajshahi"

  ]
  let details = [
    "Dhaka is the capital of Bangladesh",
    "Khulna is the second modern city in Bangladesh",
    "Barisal is called second venis town for its riverside views",
    "Sylhet is a city of Mountain and Naturality",
    "Mymensingh is newest member of division list for its expansion and modernization",
    "Rangpur is the place where you can see Kanchan Jangha",
    "Cittagong is owning the largest sea beach in the world",
    "Rajshahi the city of mango"

  ]
  const handleSelectedItem = (a: string, i: number) => {
    let msg = <><h1>{a}</h1><br /><p>{details[i]}</p></>
    setDivisionDetails(msg)
    setDivisionNameVisibl(true)
  }
  const handleSubmission = (e: FormEvent, data: CustomFormData) => {
    e.preventDefault();
    console.log(data)
    setFormData(data);
  }
  return (
    <Fragment>
      <section>
        <div>
          <ListGroup lists={lists} heading="Divisions" onSelected={handleSelectedItem} />
          {visibilityState && <Alert withCloseBtn onClose={() => setVisibilityState(false)} children="Hello World" />}

          <Button label="Show Alert" buttonType="danger" onClick={() => { setVisibilityState(true) }} />

          {DivisionNameVisible && <Alert withCloseBtn onClose={() => { setDivisionNameVisibl(false); }} children={divisionDetails} />}
        </div>
      </section>

      <section>
        <Form onSubmit={handleSubmission} />

        {formData.firstName.length > 3 && <Alert withCloseBtn={false} onClose={(e) => { console.log(e) }} children={
          <>
            <h1>Hi.. {formData.firstName + " " + formData.lastName}</h1>
            <br />
            {formData.emailId.length > 1 ? <p><strong>Your email address: </strong> {formData.emailId}</p> : <i>ENTER YOUR MAIL</i>}
            <br />
            <h6>Thanks for submitting your informations</h6>
          </>}
        />}
      </section>
    </Fragment>

  );
}

export default App;
