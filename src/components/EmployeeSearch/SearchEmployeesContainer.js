import { useState } from "react"
import { EmployeeSearchBar } from "./EmployeeSearchBar"
import { EmployeeSearchResults } from "./SearchEmployeesResults"
import EmployeeUpdateButton from "../EmployeeUpdate/EmployeeUpdate"

export const SearchEmployeesContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return(<>
        <EmployeeSearchBar setterFunction={setSearchTerms}/>
        <EmployeeSearchResults searchTermsState={searchTerms}/>
        </>
    )
}