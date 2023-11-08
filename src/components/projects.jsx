export default function Projects(){
    return(
        <>
        <h1 className="my-4 font-Roboto font-bold text-center text-3xl">Projects</h1>
        <div id="projects" className="w-full m-4 flex flex-col items-center font-Roboto">
            <iframe loading="lazy" allow="fullscreen" src="https://courseaapp.netlify.com" frameborder="0" className="w-2/3 h-96 m-4 border-2 border-black rounded-lg no-scrollbar "></iframe>
            <a className="text-black my-2" href="https://courseaapp.netlify.com" target="blank">Open in a new tab</a>
        </div>
        </>
    )
}