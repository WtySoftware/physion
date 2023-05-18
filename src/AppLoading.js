import LoadingImg from './img/Loading.png'

const LoadingScreen = () => {
  return (
    <div className='container'>
        <div className="row "  style={{height:"90vh"}}>
            <div className='col-4 mx-auto align-self-center text-center'>   
                
                <img className='loading' src={LoadingImg} alt="" />
                
            </div>
            
        </div>
    </div>
  );
};

export default LoadingScreen;
