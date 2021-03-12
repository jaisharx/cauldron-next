import CTAForm from './styles.js';

export default function MainCTA() {
    return (
        <CTAForm>
            <input type="email" placeholder="Your work email" />
            <button className="get-started">Get started free</button>
        </CTAForm>
    );
}
