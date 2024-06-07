import React from 'react'
import PortfolioCard from '../Component/PortfolioCard'
import "../Component/Portfolio.css";


const portfolioData = [{
    industry: "Finance",
    category: "Web development",
    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg"
},
{
    industry: "Finance",
    category: "Web development",
    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.png"
},
{
    industry: "Orizon",
    category: "Web design",
    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg"
}, {
    industry: "Finance",
    category: "Web development",
    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg"
},
{
    industry: "Finance",
    category: "Web development",
    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-5.png"
},
{
    industry: "Orizon",
    category: "Web design",
    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg"
}, {
    industry: "Finance",
    category: "Web development",
    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg"
},
{
    industry: "Finance",
    category: "Web development",
    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-5.png"
},
{
    industry: "Orizon",
    category: "Web design",
    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg"
}]
function Portfolio() {

    const [category, setCategory] = React.useState("All")

    return (
        <main className='portfolio'>
            <section className='category-header'>
                <ul>
                    <li><a href="" style={category === "All" ? {color:"#ffdb70"}:{}}>All</a></li>
                    <li><a href="">Web design</a></li>
                    <li><a href="">Applications</a></li>
                    <li><a href="">Web development</a></li>
                </ul>
            </section>
            <section className='portfolio-container'>
                {portfolioData.map((data, index) => (
                    <PortfolioCard key={index} data={data} />
                ))
                }
            </section>
        </main>
    )
}

export default Portfolio