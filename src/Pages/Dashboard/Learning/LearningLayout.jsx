import { Outlet } from "react-router-dom"
import { useDetailsStore } from "../../../AuthStore/GlobalStates"

const LearningLayout =()=> {
    const {activeLearningPage, setActiveLearningPage} = useDetailsStore()
   return ( 
    <div className="">
        <ul className="flex items-center justify-center py-7 text-sm text-white">
            <li onClick={()=>setActiveLearningPage(0)} className={`mx-2 cursor-pointer ${activeLearningPage === 0 && 'text-secondary'} hover:opacity-75`}>Video Tutorials</li>
            <li onClick={()=>setActiveLearningPage(1)} className={`mx-2 cursor-pointer ${activeLearningPage === 1 && 'text-secondary'} hover:opacity-75`}>Video Growth Guide</li>
            <li onClick={()=>setActiveLearningPage(2)} className={`mx-2 cursor-pointer ${activeLearningPage === 2 && 'text-secondary'} hover:opacity-75`}>Blog</li>
        </ul>
        <div className="bg-learning-bg bg-cover custom h-screen bg-center">
        <Outlet />
        </div>
    </div>
   )
}

export default LearningLayout