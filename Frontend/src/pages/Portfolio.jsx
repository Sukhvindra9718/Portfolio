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
    category: "Applications",
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
    category: "Applications",
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
                    <li className={category === "All" ? 'active-category':'non-active-category'} onClick={()=>setCategory("All")}>All</li>
                    <li className={category === "Web design" ? 'active-category':'non-active-category'} onClick={()=>setCategory("Web design")}>Web design</li>
                    <li className={category === "Applications" ? 'active-category':'non-active-category'} onClick={()=>setCategory("Applications")}>Applications</li>
                    <li className={category === "Web development" ? 'active-category':'non-active-category'} onClick={()=>setCategory("Web development")}>Web development</li>
                </ul>
            </section>
            <section className='portfolio-container'>
                {portfolioData.map((data, index) => (
                    (category === data.category || category === "All") && <PortfolioCard key={index} data={data} />
                ))
                }
            </section>
        </main>
    )
}

export default Portfolio