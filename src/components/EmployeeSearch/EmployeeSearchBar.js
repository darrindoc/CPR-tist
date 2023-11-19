export const EmployeeSearchBar = ({ setterFunction }) => {
    return (
        <input 
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }   
        type="text" placeholder="Name or Title" />
    )
}