import './CPRUpdate.css'

export default function CPRUpdateButton() {
    return (<>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEmployee">
          Update Certifcation
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="addEmployee" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="addEmployee">Certification Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <input type="text" placeholder="Agency"></input><br></br>
                  <input type="text" placeholder="Issued"></input><br></br>
                  <input type="text" placeholder="Expiration"></input><br></br>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}