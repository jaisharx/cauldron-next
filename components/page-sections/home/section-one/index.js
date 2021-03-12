import Section from './styles.js';

export default function SectionOne() {
    return (
        <Section>
            <div className="container">
                <div className="left">
                    <div className="sub-title">WHAT IS CAULDRON?</div>
                    <h2 className="title">Getting job applications right.</h2>
                    <p className="text">
                        Cauldron eliminates long, inefficient screening processes and the
                        never-ending interviews.
                    </p>
                    <ul className="list">
                        <li className="list-item">
                            <strong>Interactive workflows: </strong>Create application processes
                            with pre-screening tasks and assignments. Identify committed applicants
                            in an instant.
                        </li>
                        <li className="list-item">
                            <strong>Improved decision-making: </strong>Add structure and data points
                            to the applications, reduce screening and evaluation time.
                        </li>
                    </ul>
                    <a href="#" className="cta-btn">
                        Get Started — it's free
                    </a>
                </div>
                <div className="right">
                    <img src="/sectionFirst.4400bc1.png" alt="Process of working" />
                </div>
            </div>
        </Section>
    );
}
