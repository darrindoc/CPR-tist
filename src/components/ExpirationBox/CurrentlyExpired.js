import { useState, useEffect } from "react";
import { certAPIData } from "../ComponentAPIManager";

export const CurrentlyExpiredCerts = () => {
    const [allCerts, setAllCerts ] = useState([])

useEffect(() => {
    certAPIData()
    .then((certArray) => {
        setAllCerts(certArray)
    })
    },[])

const getCurrentEpoch = () => Math.floor(new Date().getTime()/1000)
const currentTime = getCurrentEpoch()


return(
    <div>
        <ul>
            {allCerts.map(expiredCert => (
            <li class="list-group-item">{expiredCert.expiration}</li>
            ))}
        </ul>
    </div>
)



}