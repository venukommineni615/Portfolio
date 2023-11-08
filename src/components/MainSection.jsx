import myphoto from "../assets/Untitled Project.jpg"
function MainSection(){
    return(
        <section className="p-2" id="home">
            <div className=" p-6 md:grid md:grid-cols-2 md:gap-2">
                <div>
                    <h1 className="font-Roboto font-bold text-4xl text-yellow-500 text-left">Hey! I'm Venumadhav</h1>
                    <h6 className="font-Roboto font-bold text-lg text-left">FullStack Developer</h6>
                    <p className="font-Roboto text-left my-4">As a FullStack developer, I have a strong grasp of HTML, CSS,JavaScript, TypeScript, node.js, Express.js,mongoDb, PostgreSQL, Next.js along with React library, and I am skilled in creating engaging and responsive user interfaces besides backend api's.</p>
                    <button className="bg-yellow-500 text-White font-bold rounded-lg flex justify-start shadow-yellow-500  px-4 py-2 font-Roboto  hover:bg-yellow-600"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=venukommineni61@gmail.com">Contact me</a>
</button>
                </div>
                <div className="flex items-center justify-center ">
                    <img className=" p-4 w-60  rounded-full" src={myphoto} alt="image"/>
                </div>



            </div>
            <div>

            </div>
        </section>
    );
}
export default MainSection