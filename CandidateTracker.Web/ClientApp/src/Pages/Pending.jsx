import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pending() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/api/candidates/getPending');
            setCandidates(data);
        })();
    }, [])

    return <>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {candidates.map(({ id, firstName, lastName, phoneNumber, email }) => <tr key={id}>
                    <td><Link to={`/details/${id}`}>View Details</Link></td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}