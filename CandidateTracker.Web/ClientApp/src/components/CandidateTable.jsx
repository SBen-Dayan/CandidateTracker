import { Fragment, useState } from "react"
import { v4 as guid } from "uuid"

export default function Table({ rows }) {
    const [viewNotes, setViewNotes] = useState(true);
    const wantedValues = viewNotes ? ['firstname', 'lastname', 'phonenumber', 'email', 'notes'] : ['firstname', 'lastname', 'phonenumber', 'email'];

    return <>
        <button className="btn btn-primary" onClick={() => setViewNotes(!viewNotes)}>
            {viewNotes ? 'Hide Notes' : 'View Notes'}
        </button>
        <table className="mt-3 table table-bordered table-hover">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    {viewNotes && <th>Notes</th>}
                </tr>
            </thead>
            <tbody>
                {rows.map(row =>
                    <Fragment key={guid()}>
                        <tr>
                            {Object.entries(row)
                                .filter(([key]) => wantedValues.includes(key.toLowerCase()))
                                .map(([, value]) => <td key={value}>{value || 'N/A'}</td>)}
                        </tr>
                    </Fragment>
                )}
            </tbody>
        </table>
    </>
}