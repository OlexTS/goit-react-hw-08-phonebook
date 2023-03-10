import { FcContacts } from "react-icons/fc";
import { Container, MainTitle, SecondaryTitle, Text} from "./HomeView.styled"
import { useAuth } from "hooks";

export const HomeView = () => {
    const { isLoggedIn } = useAuth();
    return <Container>
        <MainTitle>WELCOME TO PHONEBOOK!!!</MainTitle>
        <FcContacts size={100} />
        <SecondaryTitle>Now your contacts are safe!</SecondaryTitle>
       {!isLoggedIn && <Text>Please, sign up or login to continue!</Text>} 
    </Container>
}