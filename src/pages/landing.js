import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import { randomBytes } from 'crypto'

const Landing = (props) => (
    <Layout>
        <BannerLanding />

        <div id="main">
            {/*<section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Sed amet aliquam</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
</section>*/}
            <section id="main" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>What we do</h3>
                            </header>
                            <h4>
                                Education, support, encouragement, and accountability. 
                            </h4>
                            <p>
                                Don’t just change your body but learn how to structure your diet using foods you love so you’ll never have to “diet” again. 
                            </p>
                            <p>
                                We provide you the framework to work within to change your body according to your goals, and were with you every step of the way. We use either macronutrients or a few different metrics for daily tracking to keep you progressing. As important as your results in the short term are to us, we’re just as focused on long term sustainability and making sure you’re mindset towards food is in a much better place by our time together is your, ensuring you KEEP all the changes we earn together. 
                                We set you up and educate you so you’ll never have to diet again. Get the best body you can remember using evidence based methods, and have a coach in your corner every step of the way. 
                            </p>                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Who we are</h3>
                            </header>
                            <p>
                                Our nutrition coaches have years of experience and have worked with thousands on goals ranging from fat loss, to performance gains. We’ve helped individuals do everything from losing 200+ lbs to helping runners qualify from Boston. We’re equally well versed in normal working folks as we are with high level endurance athletes and we’ve got the track record to show you excellence helping just about every population. 
                            </p>
                            <p>
                                Let us help you take the guesswork out of your nutrition so you can have the best body you can remember and FEEL better than ever!
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Work with us</h3>
                            </header>
                            <p>Request our monthly rates and tell us more about yourself and give us the opportunity to learn more about you, your situation, and your goals. This is a team effort so let’s learn more about each other!</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Accountability</h3>
                            </header>
                            <p>Weekly checkins and access to your coach within that means you have a partner in your journey and youâ€™re never alone. Your success is our success and we’re here to hold you accountable. Don’t go it alone, and stop guessing.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Monthly rates</h3>
                            </header>
                            <p>No sticker shock here. Affordable nutrition coaching proven to get you in your best shape possible.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Why Nutrition Coaching?</h3>
                            </header>
                            <p>Diet is truly the bulk of the battle for body composition change. Too many folks spend hours and hours in the gym trying to out-train a bad diet. If they spent the same (less?) effort paying attention to their nutrition they’d d carry far less stress and enjoy life a whole lot more. Let us show you the way!</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)


export default Landing