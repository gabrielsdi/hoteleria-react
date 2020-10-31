import { React } from 'react';
import moment from 'moment';

const DateFilter = (props) => {

    let {date, icon} = props;

    let formatDate = moment(date).format("YYYY-MM-DD");

    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" value={formatDate} />
                <span className="icon is-small is-left">
                    <i className={icon}></i>
                </span>
            </div>
        </div>
    )
}

export default DateFilter;