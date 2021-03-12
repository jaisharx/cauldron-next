import Section from './styles.js';

export default function SectionLast() {
    return (
        <Section>
            <div className="container">
                <h2 className="get-started">Get started with Cauldron today</h2>
                <form className="cta">
                    <input type="email" placeholder="Your work email" />
                    <button className="get-started">Get started free</button>
                </form>
            </div>
        </Section>
    );
}
