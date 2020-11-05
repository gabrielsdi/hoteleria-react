import { React } from 'react';

const OptionsFilter = ({ options, icon, name, selected, onChange }) => {
    
    const listOptions = options.map((option) =>
        <option>{option.name}</option>
    );

    console.log("options : ", options);   
    return (
        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={{ width: '100%' }}>
                    <select value={selected} name={ name } onChange={onChange} style={{ width: '100%' }}>
                    {listOptions}
                    </select>
                </div>
                <div className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                </div>
            </div>
        </div>
    )
}

export default OptionsFilter;