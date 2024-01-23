import Image from 'next/image'

export function CardWrapper(){
    const python_text = "I have experience coding in python on projects such as ___,___,___"
    const java_text = "I have experience coding in java on projects such as ___,___,___"
    const c_text = "I have experience coding in C on projects such as ___,___,___"
    const web_skills_text = "I have experience coding in html/css/js on projects such as ___,___,___"
    return(
        <section className='flex flex-wrap gap-10 justify-between min-h-full py-8'>
            <Card lang={"Python"} text={`${python_text}`}
            src={"Python-logo.svg"} alt={"python image"}
            width={80} height={80}
            />
            <Card lang={"Java"} text={`${java_text}`}
            src={"Java-4.svg"} alt={"python image"}
            width={80} height={80}
            />
            <Card lang={"C"} text={`${c_text}`}
            src={"C-1.svg"} alt={"python image"}
            width={80} height={80}
            />
            <Card lang={"front-end stack"} text={`${web_skills_text}`}
            src={"html-1.svg"} alt={"python image"}
            width={80} height={0}
            />
        </section>
    )
}


function Card({lang, text, src, alt, width, height} : 
    {lang: string, text:string, src: string, alt: string, width: number, height: number}) {
    return (
        <div className='bg-cyan-900 w-72 h-96 rounded-lg px-2 py-4'>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
            <p className='text-cyan-400 text-2xl mt-2'>{`${lang}`}</p>
            <p className='mt-4'>{`${text}`}</p>
        </div>
    )
}