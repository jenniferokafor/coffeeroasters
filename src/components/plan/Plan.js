import Footer from "../shared/Footer";
import Header from "../shared/Header";
import PlanHome from "./PlanHome";
import Process from "./Process";
import Subscription from "./Subscription";

export default function Plan () {
    return (
        <>
            <Header />
            <PlanHome />
            <Process />
            <Subscription />
            <Footer />
        </>
    )
}