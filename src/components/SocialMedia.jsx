import {FaGithub,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa';


function SocialMedia(){
    return(
        <div className='flex justify-evenly p-4 md:justify-start '>
            <a href="https://github.com/venukommineni615"><FaGithub className=' hover:text-yellow-500 text-3xl md:mx-3'/></a>  
            <a href="https://www.linkedin.com/in/venumadhav-kommineni-35a48018a/"><FaLinkedin className=' hover:text-yellow-500 text-3xl md:mx-3'/></a> 
            <a href="#"><FaInstagram className=' hover:text-yellow-500 text-3xl md:mx-3'/></a>
            <a href="https://twitter.com/devKVM"><FaTwitter className=' hover:text-yellow-500 text-3xl md:mx-3'/></a>           
        </div>
    );
}
export default SocialMedia;