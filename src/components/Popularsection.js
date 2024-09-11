import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"

function Popularsection(){
    return(
        <>
         <div className="popular">
            <h1 className="popular__title">Most Popular</h1>
            <p className="popular__subtitle">Pick the best</p>
            <div className="popular__container">
                <div className="course-card">
                    <img src={c1} alt=""/>
                    <h3>2023 Python Data Visaulisation Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c2} alt=""/>
                    <h3>Web Development BootCamp 2023</h3>
                    <p>
                        Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c3} alt=""/>
                    <h3>Master UI/UX Designing</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c4} alt=""/>
                    <h3>Basic to Advance programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c3} alt=""/>
                    <h3>Master UI/UX Designing</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c1} alt=""/>
                    <h3>2023 Python Data Visaulisation Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c3} alt=""/>
                    <h3>Master UI/UX Designing</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={c4} alt=""/>
                    <h3>Basic to Advance programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Popularsection