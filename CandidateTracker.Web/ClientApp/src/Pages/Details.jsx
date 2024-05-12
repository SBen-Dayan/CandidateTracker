import { UNSAFE_DataRouterStateContext, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { useStatusCounts } from "../StatusCountsContext";

export default function Details() {
    const { id } = useParams();
    const { refreshStatusCounts } = useStatusCounts();

    const [candidate, setCandidate] = useState({});

    useEffect(() => {
        refresh();
    }, [])

    const refresh = async () => {
        const { data } = await axios.get(`/api/candidates/getById?id=${id}`);
        setCandidate(data);
    }

    const onButtonClick = async action => {
        await axios.post(`/api/candidates/${action}`, { id: +id });
        refreshStatusCounts();
        refresh();
    }

    const { firstName, lastName, email, phoneNumber, status, notes } = candidate;
    return <>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Name: {firstName} {lastName}</h4>
                    <h4>Email: {email}</h4>
                    <h4>Phone: {phoneNumber}</h4>
                    <h4>Status: {status}</h4>
                    <h4>Notes:</h4>
                    <p>{notes || 'N/A'}</p>
                    {status == 'Pending' &&
                        <div>
                            <button className="btn btn-primary" onClick={() => onButtonClick('confirm')}>Confirm</button>
                            <button className="btn btn-danger" onClick={() => onButtonClick('decline')}>Decline</button>
                        </div>}
                </div>
            </div>
        </div>
    </>
}