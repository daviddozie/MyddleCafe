import Header from "../../components/Header/Header"
import Hero from "./Hero"
import DashBoard from "./DashBoard";

function HomePage() {
    const aim = (
        <div>
            Ushering Africa into the digital age of payment by making <br />
            cryptocurrency as easy as possible.
        </div>
    );
    return (
        <>
            <Header />
            <Hero
                assurance="With 0% trading commission"
                focus="Most trusted and secure P2P Cryptocurrency exchange"
                aim={aim}
            />
            <DashBoard
                market="Market" 
                emailName="Deoduu324"
                email="jameke@gmail.com"
                tutorials="Tutorials"
                orders="Orders"
                vendor="Be a Vendor"
            />
        </>
    )
}

export default HomePage