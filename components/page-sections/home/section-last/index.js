import MainCTA from 'components/main-cta/';
import Section from './styles.js';

export default function SectionLast() {
    return (
        <Section>
            <div className="container">
                <h2 className="get-started">Get started with Cauldron today</h2>
                <MainCTA/>
            </div>
        </Section>
    );
}
