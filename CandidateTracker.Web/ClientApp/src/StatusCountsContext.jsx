import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const statusCountsContext = createContext();

export default function StatusCountsContext({children}) {
    const [statusCounts, setStatusCounts] = useState({pending : 0, confirmed : 0, declined : 0});

    const refreshStatusCounts = async () => {
        const {data} = await axios.get('/api/candidates/getStatusCounts');
        setStatusCounts(data);
    }

    useEffect(() => {
        refreshStatusCounts();
    }, []);

    const valueObj = {
        statusCounts,
        refreshStatusCounts
    }

    return <statusCountsContext.Provider value={valueObj}>
        {children}
    </statusCountsContext.Provider>
}

export function useStatusCounts () {
    return useContext(statusCountsContext);
}