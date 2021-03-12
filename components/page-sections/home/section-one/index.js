import Section from './styles.js';

export default function SectionOne() {
    return (
        <Section>
            <div class="container">
                <div class="left">
                    <div class="sub-title">WHAT IS CAULDRON?</div>
                    <h2 class="title">Getting job applications right.</h2>
                    <p class="text">
                        Cauldron eliminates long, inefficient screening processes and the
                        never-ending interviews.
                    </p>
                    <ul class="list">
                        <li class="list-item">
                            <strong>Interactive workflows: </strong>Create application processes
                            with pre-screening tasks and assignments. Identify committed applicants
                            in an instant.
                        </li>
                        <li class="list-item">
                            <strong>Improved decision-making: </strong>Add structure and data points
                            to the applications, reduce screening and evaluation time.
                        </li>
                    </ul>
                    <a href="#" class="cta-btn">
                        Get Started — it's free
                    </a>
                </div>
                <div class="right">
                    <img src="/sectionFirst.4400bc1.png" alt="Process of working" />
                </div>
            </div>
        </Section>
    );
}
