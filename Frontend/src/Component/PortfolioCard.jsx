import React from 'react'

function PortfolioCard({ key, data }) {
    return (
        <div className='portfolio-card' key={key}>
            <div className='img-container'>
                <img src={data.img} alt=""/>
            </div>
            <div className='portfolio-card-info'>
                <h3>{data.industry}</h3>
                <p>{data.category}</p>
            </div>
        </div>
    )
}

export default PortfolioCard