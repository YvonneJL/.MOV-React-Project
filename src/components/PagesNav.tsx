import { useContext } from "react";
import { mainContext } from "../context/MainProvider";
import { ISetPageContext } from "../interfaces/interfaces";

const PagesNav = () => {

    const {page, setPage} = useContext(mainContext) as ISetPageContext

    return ( 
        <div className="flex justify-center gap-6 lg:pt-5 mb-3">
            <img src="/images/arrowBack.svg" className={`${page === 1 ? "opacity-0" : ""} cursor-pointer`} alt="back" onClick={() => {if(page > 1) {setPage(page - 1)}}}/>
            <p className="lg:text-3xl">{page}</p>
            <img src="/images/arrowBack.svg" alt="next" className="cursor-pointer -scale-x-100" onClick={() => setPage(page + 1)}/>
        </div>
    );
}

export default PagesNav;