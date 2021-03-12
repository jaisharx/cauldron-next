import Section from './styles.js';

export default function SectionTwo() {
    return (
        <Section>
            <div class="container">
                <div class="left">
                    <video class="video" loop="loop" autoplay="autoplay">
                        <source src="/section-second-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="right">
                    <div class="sub-title">EFFICIENCY IN DESIGN</div>
                    <h2 class="title">Interview less, interview better.</h2>
                    <ul class="list">
                        <li class="list-item">
                            <strong>Give back initiative: </strong>
                            Narrow down your applications and let the most passionate show off with
                            pre-screening assignments.
                        </li>
                        <li class="list-item">
                            <strong> Set a threshold: </strong>
                            Save hiring managers’ time by only interviewing the best.
                        </li>
                        <li class="list-item">
                            <strong>Made for teams: </strong>
                            Share notes and collaborate with your team to evaluate incoming
                            applications.
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
