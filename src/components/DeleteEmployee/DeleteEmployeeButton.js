import { deleteEmployee } from "../ComponentAPIManager";

export const EmployeeDeleteButton = ({id}) => {
    
    const pageReload = () => {
        window.location.reload();
    }
    
    const handleDelete = () => {
        deleteEmployee(id)
        .then(pageReload())
    };

    return (
        <button class="btn btn-primary mx-2"  onClick={handleDelete}> Delete </button>
    );
};