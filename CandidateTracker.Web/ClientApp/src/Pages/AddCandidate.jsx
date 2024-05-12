import { useState } from "react"
import axios from "axios";
import { useStatusCounts } from "../StatusCountsContext";
import { useNavigate } from "react-router-dom";

export default function AddCandidate() {
    const {refreshStatusCounts} = useStatusCounts();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    const onSubmitClick = async() => {
        await axios.post('/api/candidates/add', {firstName, lastName, email, phoneNumber, notes});
        refreshStatusCounts();
        navigate('/');
    }

    return <>
        <div className="row mt-5">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                    <form>
                        <input type="text" placeholder="First Name" className="form-control"
                        value={firstName} onChange={({target}) => setFirstName(target.value)} />
                        <br />
                        <input type="text" placeholder="Last Name" className="form-control"
                        value={lastName} onChange={({target}) => setLastName(target.value)} />
                        <br />
                        <input type="text" placeholder="Email" className="form-control" 
                        value={email} onChange={({target}) => setEmail(target.value)}/>
                        <br />
                        <input type="text" placeholder="Phone Number" className="form-control"
                        value={phoneNumber} onChange={({target}) => setPhoneNumber(target.value)} />
                        <br />
                        <textarea rows="5" className="form-control" 
                        value={notes} onChange={({target}) => setNotes(target.value)} />
                        <br />
                        <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}