import Table from "../components/CandidateTable";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Declined() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        (async() => {
            const {data} = await axios.get('/api/candidates/getDeclined');
            setCandidates(data);
        })();
    }, [])
    return <div className="mt-5">
    <Table
    rows={candidates} />
    </div>
}