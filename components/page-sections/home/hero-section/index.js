import MainCTA from 'components/main-cta/index.js';
import MainContent from './styles.js';

export default function MainSection() {
    return (
        <MainContent>
            <img className="logo" src="/cauldronLogo.891e7e5.svg" alt="Website Logo" />

            <h1 className="main-text">
                Get to know the <span>people</span> behind the resumes.
            </h1>
            <h2 className="sub-text">
                Cauldron is software that redefines the job application process and lets you meet
                the best candidates in shortest time.
            </h2>

            <MainCTA/>

            <div className="arrow-down">
                <img src="/image.svg" alt="Scroll for more content" />
            </div>
        </MainContent>
    );
}
