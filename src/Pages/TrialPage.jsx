import React, {useEffect} from 'react'
import Pricing from '../components/Pricing';

const TrialPage = () => {
    useEffect(() => {
        const dashboardElement = document.getElementById('dashboard');
    
        if (dashboardElement) {
          dashboardElement.classList.remove('md:overflow-y-hidden');
        }

        return () => {
            dashboardElement.classList.add('md:overflow-y-hidden')
          };
      }, []);
      
  return (
    <div>
      <Pricing py={'py-[20px]'}/>
    </div>
  )
}

export default TrialPage
