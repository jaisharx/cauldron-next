import Section from './styles.js';

export default function SectionFour() {
    return (
        <Section>
            <div className="container">
                <div className="left">
                    <img src="/digitainLanding.c302487.png" alt="Digital Landing Page" />
                </div>
                <div className="right">
                    <div className="user-title">USER STORY</div>
                    <h2 className="quote">
                        “Our screening process, which used to take up several days was cut to a few
                        hours.”
                    </h2>
                    <div className="name">Anna P.</div>
                    <div className="role">Chief People and Culture Officer at Digitain</div>
                    <a href="#" className="read-more-btn">
                        Read user story
                    </a>
                    
                </div>
            </div>
        </Section>
    );
}
