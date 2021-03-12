import Section from './styles.js';

export default function SectionTwo() {
    return (
        <Section>
            <div className="container">
                <div className="left">
                    <video className="video" loop="loop" autoplay="autoplay">
                        <source src="/section-second-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="right">
                    <div className="sub-title">EFFICIENCY IN DESIGN</div>
                    <h2 className="title">Interview less, interview better.</h2>
                    <ul className="list">
                        <li className="list-item">
                            <strong>Give back initiative: </strong>
                            Narrow down your applications and let the most passionate show off with
                            pre-screening assignments.
                        </li>
                        <li className="list-item">
                            <strong> Set a threshold: </strong>
                            Save hiring managers’ time by only interviewing the best.
                        </li>
                        <li className="list-item">
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
