import { CurrentlyExpiredCerts } from './CurrentlyExpired';
import './ExpirationBox.css'

const currentDate = new Date().toLocaleDateString();

export default function ExpirationBox() {
    return (
<div className='expiration-cards'>
        <div  className="individual-exp-card" class="card text-bg-danger mt-5 mb-4">
        <div class="card-header">
            <h1>Expired Certifications</h1>
            <p>These employees are forbidden from treating patients until renewed!</p>
        </div>
        <ul class="list-group list-group-flush">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Peter Jackson, RN: 10/31/2023</li>
            <li class="list-group-item">Frances Pickleheimer, LPN: 10/31/2023</li>
            <li class="list-group-item">Mac Flanders, LPN: 10/31/2023</li>
        </ul>
        </ul>
    </div>
    <div className="individual-exp-card" class="card text-bg-warning">
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