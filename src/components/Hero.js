import { React } from 'react';

const Hero = (props) => {
    let { filters } = props;
    let subtitleInfo = "";

    if(filters.country && filters.price > 0 && filters.rooms > 0){
        subtitleInfo = ` en ${filters.country} por ${filters.price} de hasta ${filters.rooms} habitaciones.`
    }

    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                        desde el <strong>{filters.dateFrom.toLocaleDateString ()}</strong> hasta el <strong>{filters.dateTo.toLocaleDateString ()}</strong>{subtitleInfo}
                        

                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Hero;