import MenuIcon from '@material-ui/icons/Menu';
import WolfHeadLogo from '../assets/WolfHeadLogo.png';

export const Header = () => {
    return(
        <header className="flex flex-row w-full justify-evenly">
            <img 
                src={WolfHeadLogo} 
                alt="Drawing of wolf face with gray hair and yellow eyes" 
                className="h-20 w-20"
            />
            <section className="justify-self-center">
                <h2 className="text-5xl flex justify-center cursive">The Colorado Howl</h2>
                <h3 className="text-lg text-gray-600 flex justify-center mb-12">
                    Updates about Colorado's wolf reintroduction efforts
                </h3>
            </section>
            <MenuIcon fontSize="large" className="justify-self-end" />
        </header>
    );
};