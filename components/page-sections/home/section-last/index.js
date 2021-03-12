import Section from './styles.js';

export default function SectionLast() {
    return (
        <Section>
            <div class="container">
                <h2 class="get-started">Get started with Cauldron today</h2>
                <form class="cta">
                    <input type="email" placeholder="Your work email" />
                    <button class="get-started">Get started free</button>
                </form>
            </div>
        </Section>
    );
}
