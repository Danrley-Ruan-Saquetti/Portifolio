import Frame from "./components/frame"
import Header from "./components/header"
import NavigationBar from "./components/navigation-bar"
import ObjectFloating from "./components/object-floating"
import Session from "./components/session"
import SocialBar from "./components/social-bar"
import { SessionProvider } from "./contexts/sessionContext"
import "./styles/app.scss"

export default function App() {

    return (
        <>
            <SessionProvider>
                <Header>
                    <Session className={"home"} name={"home"}>
                        <div className="profile-info">
                            <span>Olá, eu sou</span>
                            <h1>Dan Ruan</h1>
                            <span>e sou <strong className="text-animation">Dev FullStack</strong></span>
                        </div>

                        <ObjectFloating type="component">
                            <Frame className={"profile-img"} src="perfil.png" alt="Dan Ruan" details={<SocialBar />} />
                        </ObjectFloating>

                        <ObjectFloating type="object" object="cubic" position={{ x: 7, y: 25 }} size={25} opacity={(Math.random(.7) + .3).toFixed(1)} />
                        <ObjectFloating type="object" object="circle" position={{ x: 90, y: 20 }} size={15} opacity={(Math.random(.7) + .3).toFixed(1)} />
                        <ObjectFloating type="object" object="circle" position={{ x: 25, y: 75 }} size={18} opacity={(Math.random(.7) + .3).toFixed(1)} />
                        <ObjectFloating type="object" object="cubic" position={{ x: 95, y: 95 }} size={21} opacity={(Math.random(.7) + .3).toFixed(1)} />
                    </Session>
                </Header>

                <Session name={"about-me"}>
                    <span>Sobre Min</span>
                    <ObjectFloating type="object" object="cubic" position={{ x: -5, y: 100 }} size={25} opacity={(Math.random(.7) + .3).toFixed(1)} />
                    <ObjectFloating type="object" object="circle" position={{ x: 5, y: 10 }} size={15} opacity={(Math.random(.7) + .3).toFixed(1)} />
                    <ObjectFloating type="object" object="circle" position={{ x: 25, y: 75 }} size={18} opacity={(Math.random(.7) + .3).toFixed(1)} />
                    <ObjectFloating type="object" object="cubic" position={{ x: 75, y: 60 }} size={21} opacity={(Math.random(.7) + .3).toFixed(1)} />
                </Session>
                <Session name={"projects"}>
                    <span>Projetos</span>
                    <ObjectFloating type="object" object="cubic" position={{ x: 50, y: 35 }} size={25} opacity={(Math.random(.7) + .3).toFixed(1)} />
                    <ObjectFloating type="object" object="circle" position={{ x: 90, y: 20 }} size={15} opacity={(Math.random(.7) + .3).toFixed(1)} />
                    <ObjectFloating type="object" object="circle" position={{ x: 35, y: 85 }} size={18} opacity={(Math.random(.7) + .3).toFixed(1)} />
                </Session>
                <Session name={"contacts"}>
                    <span>Contatos</span>
                    <ObjectFloating type="object" object="cubic" position={{ x: 10, y: 35 }} size={25} opacity={(Math.random(.7) + .3).toFixed(1)} />
                    <ObjectFloating type="object" object="cubic" position={{ x: 65, y: 75 }} size={18} opacity={(Math.random(.7) + .3).toFixed(1)} />
                </Session>

                <NavigationBar />
            </SessionProvider>
        </>
    )
}