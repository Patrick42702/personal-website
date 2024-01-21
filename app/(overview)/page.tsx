import { Nav } from '@/app/ui/nav';
import { Footer } from '../ui/footer';
import { About } from '../ui/content';
import { CardWrapper } from '../ui/skill-card';

export default function Page() {
    return (
        <div id='root'>
            <Nav />
            <div className="flex-col px-36 bg-[#083344]">
                <About/>
                <CardWrapper/>
            </div>
            <Footer />
        </div>
    )
}