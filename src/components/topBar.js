import {
    TopBar, Circle, UserIcon, Login, LoginTitle, Buttons, Button, SignUp
} from "./styleTopBar.js"
import userIcon from "../../assets/userIcon.png"

export default function RenderTopBar() {
    return (
        <TopBar>
            <Circle>
                <UserIcon src={userIcon} />
            </Circle>
            <Login>
                <LoginTitle>
                    Bem-Vindo
                </LoginTitle>
                <p>
                    Entre na sua conta para ver suas compras,
                    favoritos e etc.
                </p>
                <Buttons>
                    <Button>
                        <p>Entre</p>
                    </Button>
                    <SignUp>
                        <p>Criar a sua conta</p>
                    </SignUp>
                </Buttons>
            </Login>
        </TopBar>
    )
}