import { Link } from "react-router-dom"
import icon27 from "../../assets/images/icons/icon-27.png"



export default function Feature() {
    return (
        <>
            <section className="feature-section-six">
                <div className="auto-container">
                    <div className="wrapper-box">
                        <div className="row">
                            <div className="col-lg-4 feature-block-six">
                                <div className="inner-box">
                                    <div className="icon"><img src={icon27} alt="" /></div>
                                    <h4>How we work</h4>
                                    <div className="text">In free hour when choices <br /> easy to distinguish. </div>
                                    <Link to="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 feature-block-six">
                                <div className="inner-box">
                                    <div className="icon"><img src={icon27} alt="" /></div>
                                    <h4>Experience Team</h4>
                                    <div className="text">To take a trivial example of <br />every physical work.</div>
                                    <Link to="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 feature-block-six">
                                <div className="inner-box">
                                    <div className="icon"><img src={icon27} alt="" /></div>
                                    <h4>Tailored Support</h4>
                                    <div className="text">Explain to you how all this is <br />mistaken idea one. </div>
                                    <Link to="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
