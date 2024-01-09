import { Nav } from '@/app/ui/nav';
import { Footer } from '../ui/footer';
import { About } from '../ui/content';

export default function Page(){
    return (
        <>
        <main className="flex min-h-screen flex-col px-36 py-12 bg-[#083344] text-gray-600 text-[#CFFAFE]">
            <Nav/>
            <div id="content" className='flex-1 justify-center items-center'>
                <About/>
            </div>
        </main>
        <Footer/>
        </>
    )
}