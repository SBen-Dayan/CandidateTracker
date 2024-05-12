import { Link } from "react-router-dom"

export default function Home() {
    return <>
        <div className="card d-flex align-items-center justify-content-center bg-light mt-5 py-5">
            <div className="text-center">
                <h1 className="display-4">Welcome to the Candidate Tracker</h1>
                <p className="lead">
                    <Link to={'/addCandidate'} className="btn btn-dark btn-lg mt-5">
                        Click here to add a new candidate
                    </Link>
                </p>
                <p>Or Use The Links Above</p>
            </div>
        </div>
    </>
}