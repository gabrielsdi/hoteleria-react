import { React } from 'react';
import moment from 'moment';

const DateFilter = ({ date, icon, name, onChange }) => {
   
    let formatDate = moment(date).format("YYYY-MM-DD");

    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" name={ name } value={formatDate} onChange={ onChange }  />
                <span className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                </span>
            </div>
        </div>
    )
}

export default DateFilter;