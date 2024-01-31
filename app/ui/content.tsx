import Image from 'next/image'

export function About() {
    return (
        <header id="content" className='sm:pt-12 flex justify-center items-center 
        md:h-[calc(100vh-100px)] min-h-full'>
            <div className="flex flex-row justify-center content-center max-w-3xl">
                <Info />
                <InfoPic />
            </div>
        </header>
    )
}

function Info() {
    return (
        <div className=" text-2xl mr-6">
            <h2 className="">Patrick Muller</h2>
            <p className="text-cyan-400 mt-4">Software Engineer</p>
            <p className="mt-4">Hello! My name is Patrick Muller and
                I am a computer science student in my senior year
                currently studying at Stony Brook University. My goal
                is to get into the masters program for computer science! </p>
        </div>
    )
}

function InfoPic() {
    return (
        <Image
            src="productive.svg"
            alt="productive looking image"
            width={300}
            height={300}
        />
    )
}