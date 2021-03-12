import Section from './styles.js';

export default function SectionThree() {
    return (
        <Section>
            <div className="container">
                <div className="left">
                    <div className="sub-title">FROM A TO Z</div>
                    <h2 className="title">Designed with the applicant in mind.</h2>
                    <p className="text">
                        Cauldron is built for recruiters and hiring managers who care about their
                        applicants.
                    </p>
                    <ul className="list">
                        <li className="list-item">
                            <strong>Job page builder: </strong>
                            Stop worrying about formatting or design. Our application-builder lets
                            you create the application journeys you envision.
                        </li>
                        <li className="list-item">
                            <strong>Intuitive structure: </strong>
                            Cauldron will guide your candidates through the process — from the job
                            page to the interview.
                        </li>
                        <li className="list-item">
                            <strong>Stay in touch: </strong>
                            Set up custom notifications that keep your applicants informed. There’s
                            no such thing as over-communication.
                        </li>
                    </ul>
                    <a href="#" className="cta-btn">
                        Start building now
                    </a>
                </div>
                <div className="right">
                    <img src="/sectionThree.ee1185a.png" alt="Submit process explained" />
                </div>
            </div>
        </Section>
    );
}
