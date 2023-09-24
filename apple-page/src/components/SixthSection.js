import arcade from './images/icons/arcade.png'

const SixthSection = () => {
    return (
        <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
            <div className="row">
                <Section2 OuterCon="left-side-wrapper" InnerCon="left-side-container"  Logo={arcade} description="Agent 8 is a small hero on a big mission." whiteD="white" show="show" link="Play now" link2="about Apple Arcade" />
                <Section2 Vis="Vis" OuterCon="right-side-wrapper" InnerCon="right-side-container" Title="Apple Card Monthly Installments" description="Pay for your next iPhone over time, interest-free with Apple Card." link="Learn more" link2="Apply now"/>
            </div>
        </div> 
    </section>
      )
}

export default SixthSection
