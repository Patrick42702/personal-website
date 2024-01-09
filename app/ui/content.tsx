import productive from '@/public/productive.svg'
import Image from 'next/image'

export function About() {
    return (
        <div className="flex flex-row justify-center content-center ">
            <Info />
            <InfoPic />
        </div>
    )
}

function Info() {
    return (
        <div className="">
            <h2 className="">Patrick Muller</h2>
            <p className="">Software Engineer</p>
            <p className="">Hello! My name is Patrick Muller and
                I am a software engineer at nvidia corp!
                I specialize in compiler design but like
                to do many other projects on the side.
                Here you can find a bit about me, my skills,
                and some projects that I’ve done!</p>
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