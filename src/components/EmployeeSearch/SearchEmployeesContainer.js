import { useState } from "react"
import { EmployeeSearchBar } from "./EmployeeSearchBar"
import { EmployeeSearchResults } from "./SearchEmployeesResults"

export const SearchEmployeesContainer = () => {
    const [searchTerms, setSearchTerms] =useState([])

    return(<>
        <EmployeeSearchBar setterFunction={setSearchTerms}/>
        <EmployeeSearchResults searchTermsState={searchTerms}/>
        </>
    )
}