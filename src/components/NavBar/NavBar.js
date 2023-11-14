import './NavBar.css'

export default function NavBar() {
    return (
        <div className="navbar">
            <button type="button" class="btn btn-dark">Logout</button>
            <p>Signed in as: <br/>
                Darrin Daugherty</p>
            <div>
                <label for="org-select">Organization: </label>
                <br/>
                <select name="org-select" id="org-select">
                    <option value="1">St. Thomas Hospital - ER</option>
                    <option value="2">St. Thomas Hospital - PICU</option>

                </select>

            </div>
        </div>
    );
}