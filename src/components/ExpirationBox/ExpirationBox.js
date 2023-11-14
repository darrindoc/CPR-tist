import './ExpirationBox.css'

export default function ExpirationBox() {
    return (
<div className='expiration-cards'>
        <div class="card text-bg-danger">
        <div class="card-header">
            <h1>Current CPR Expirations</h1>
            <p>These employees are forbidden from treating patients until renewed!</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Janice Flanders, MD: 10/31/2023</li>
            <li class="list-group-item">Sam Smith, LPN: 10/31/2023</li>
        </ul>
    </div>
    <div class="card text-bg-warning">
        <div class="card-header">
            <h1>Upcoming CPR Expirations</h1>
            <p>Schedule these employees for renewal ASAP!</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">John King, RN: 11/30/2023</li>
            <li class="list-group-item">Sarah Smith, LPN: 11/30/2023</li>
            <li class="list-group-item">Pedro Samson, LPN: 11/30/2023</li>
        </ul>
    </div>
</div>
    );
}