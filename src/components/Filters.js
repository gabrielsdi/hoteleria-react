import { React } from 'react';
import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';

const Filters = ({ filters, onChange }) => {
    return (
        <nav className="navbar is-info" style={{ justifyContent: 'center' }}>
            <div className="navbar-item">
                <DateFilter
                    date={filters.dateFrom}
                    icon="sign-in-alt" onChange={ onChange } 
                    name="dateFrom"
                    />
            </div>
            <div className="navbar-item">
                <DateFilter
                    date={filters.dateTo}
                    icon="sign-out-alt" onChange={ onChange } 
                    name="dateTo"
                    />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={[{ value: undefined, name: 'Todos los países' }, { value: 'Argentina', name: 'Argentina' }, { value: 'Brasil', name: 'Brasil' }, { value: 'Chile', name: 'Chile' }, { value: 'Uruguay', name: 'Uruguay' }]}
                    selected={filters.country}
                    icon="globe" onChange={ onChange } 
                    name="country" />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={[{ value: undefined, name: 'Cualquier precio' }, { value: 1, name: '$' }, { value: 2, name: '$$' }, { value: 3, name: '$$$' }, { value: 4, name: '$$$$' }]}
                    selected={filters.price}
                    icon="dollar-sign" onChange={ onChange }
                    name="price"
 />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={[{ value: undefined, name: 'Cualquier tamaño' }, { value: 10, name: 'Hotel pequeño' }, { value: 20, name: 'Hotel mediano' }, { value: 30, name: 'Hotel grande' }]}
                    selected={filters.rooms}
                    icon="bed" onChange={ onChange }
                    name="rooms"
 />
            </div>
        </nav>
    )
}

export default Filters;