import DefaultLayout from 'layouts/default';

import MainSection from 'components/page-sections/home/hero-section';
import SectionFive from 'components/page-sections/home/section-five';
import SectionFour from 'components/page-sections/home/section-four';
import SectionLast from 'components/page-sections/home/section-last';
import SectionOne from 'components/page-sections/home/section-one';
import SectionThree from 'components/page-sections/home/section-three';
import SectionTwo from 'components/page-sections/home/section-two';

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <MainSection />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionLast />
            </DefaultLayout>
        </>
    );
}
