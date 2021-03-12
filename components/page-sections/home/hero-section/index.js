import MainContent from './styles.js';

export default function MainSection() {
    return (
        <MainContent>
            <img class="logo" src="/assets/cauldronLogo.891e7e5.svg" alt="Website Logo" />

            <h1 class="main-text">
                Get to know the <span>people</span> behind the resumes.
            </h1>
            <h2 class="sub-text">
                Cauldron is software that redefines the job application process and lets you meet
                the best candidates in shortest time.
            </h2>
            <form class="cta">
                <input type="email" placeholder="Your work email" />
                <button class="get-started">Get started free</button>
            </form>
            <div class="arrow-down">
                <img src="/assets/image.svg" alt="Scroll for more content" />
            </div>
        </MainContent>
    );
}
