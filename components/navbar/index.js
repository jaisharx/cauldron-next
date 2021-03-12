import CTAButton from 'components/button';
import PrimaryHeader from './styles';

export default function Navbar() {
    return (
        <PrimaryHeader>
            <nav class="navbar container">
                <div class="logo">Cauldron</div>
                <a class="link">Pricing</a>
                <a class="link">Sign In</a>
                <CTAButton>Get started free</CTAButton>
            </nav>
        </PrimaryHeader>
    );
}
