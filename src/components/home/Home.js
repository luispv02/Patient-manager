
import Patients from '../patients/Patients'
import Sidebar from '../sidebar/Sidebar'

const Home = () => {

  

  return (
    <div className="container-fluid p-0">
      <div className="row m-0">

 

        <div className="col-12 col-md-4 col-lg-3 p-0">          
          <Sidebar />
        </div>


        <div className="col-12 col-md-8 col-lg-9 p-0">
          <Patients />
        </div>
   
      </div>
    </div>
  )
}

export default Home