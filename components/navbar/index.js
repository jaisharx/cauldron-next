import CTAButton from 'components/button';
import PrimaryHeader from './styles';

export default function Navbar() {
    return (
        <PrimaryHeader>
            <nav className="navbar container">
                <div className="logo">Cauldron</div>
                <a className="link">Pricing</a>
                <a className="link">Sign In</a>
                <CTAButton>Get started free</CTAButton>
            </nav>
        </PrimaryHeader>
    );
}
