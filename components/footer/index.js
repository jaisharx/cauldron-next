import MainFooter from './styles.js';

export default function Footer() {
    return (
        <MainFooter>
            <div className="container">
                <ul className="nav-links">
                    <li>
                        <a href="#">Terms of services</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                </ul>
                <div className="copyright">© 2021 Cauldron, All Rights Reserved.</div>
            </div>
        </MainFooter>
    );
}
