import Section from './styles.js';

export default function SectionThree() {
    return (
        <Section>
            <div class="container">
                <div class="left">
                    <div class="sub-title">FROM A TO Z</div>
                    <h2 class="title">Designed with the applicant in mind.</h2>
                    <p class="text">
                        Cauldron is built for recruiters and hiring managers who care about their
                        applicants.
                    </p>
                    <ul class="list">
                        <li class="list-item">
                            <strong>Job page builder: </strong>
                            Stop worrying about formatting or design. Our application-builder lets
                            you create the application journeys you envision.
                        </li>
                        <li class="list-item">
                            <strong>Intuitive structure: </strong>
                            Cauldron will guide your candidates through the process — from the job
                            page to the interview.
                        </li>
                        <li class="list-item">
                            <strong>Stay in touch: </strong>
                            Set up custom notifications that keep your applicants informed. There’s
                            no such thing as over-communication.
                        </li>
                    </ul>
                    <a href="#" class="cta-btn">
                        Start building now
                    </a>
                </div>
                <div class="right">
                    <img src="/sectionThree.ee1185a.png" alt="Submit process explained" />
                </div>
            </div>
        </Section>
    );
}
