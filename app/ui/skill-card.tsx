"use client"
import Image from 'next/image'


export function CardWrapper(){
    const python_text = "I have experience coding in python on projects such as ___,___,___"
    const java_text = "I have experience coding in java on projects such as ___,___,___"
    const c_text = "I have experience coding in C on projects such as ___,___,___"
    const web_skills_text = "I have experience coding in html/css/js on projects such as ___,___,___"
    const ocaml_text = "I have experience coding in oCaml"
    const mongodb_text = "I have experience working with mongoDb"
    const github_text = "I have experience working with github for version control for many projects"
    const linux_text = "I have experience working with linux"
    const node_text = "I have experience working with node.js"
    
    return(
        <section className='flex flex-wrap gap-10 justify-between min-h-full py-8'>
            <Card lang={"Python"} text={`${python_text}`}
            width={80} 
            imgs={[["Python-logo.svg", "python image"]]}
            />
            <Card lang={"Java"} text={`${java_text}`}
            imgs={[["java-4.svg","python image"]]}
            width={80} 
            />
            <Card lang={"C"} text={`${c_text}`}
            imgs={[["c-1.svg","python image"]]}
            width={80} 
            />
            <Card lang={"front-end stack"} text={`${web_skills_text}`}
            imgs={[["html-1.svg","python image"],
                    ["css-3.svg", "css image"],
                    ["logo-javascript.svg", "javascript image"] ]}
            width={80} 
            />
            <Card
            lang={"oCaml"} text={`${ocaml_text}`}
            imgs={[["ocaml.svg","oCaml image"]]}
            width={120}
            />
            <Card
            lang={"Linux"} text={`${linux_text}`}
            imgs={[["linux-icon.svg","linux image"]]}
            width={120}
            />
            <Card
            lang={"node.js"} text={`${node_text}`}
            imgs={[["nodejs-3.svg","nodejs image"]]}
            width={120}
            />
        </section>
    )
}


function Card({lang, text, width, imgs} : 
    {lang: string, text:string, width: number, imgs: [string, string][]}) {
        const frmt_imgs: JSX.Element[] = [];
        imgs.forEach(img =>
            frmt_imgs.push(
                <Image
                src={img[0]}
                alt={img[1]}
                width={width}
                height={width}
                />
            ))
    return (
        <div className='bg-cyan-900 w-72 h-96 rounded-lg px-2 py-4'>
            <div className='flex flex-wrap gap-2'>
                {frmt_imgs}
            </div>
            <p className='text-cyan-400 text-2xl mt-2'>{`${lang}`}</p>
            <p className='mt-4'>{`${text}`}</p>
        </div>
    )
}