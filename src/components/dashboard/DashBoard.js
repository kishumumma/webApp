import React from 'react';
 import {Link} from 'react-router-dom';

const DashBoard= () => {
  // const navigate = useNavigation();
  const handleTwoCard=()=>{
   
    // .push('/other-screen'); 

  }
  return (
    <section className='conatainer is-max-desktop'>
        <div className='mainContainer'>
        <h1 className='title is-1'>This Is Card section</h1>
        </div>
       
    <div className="card-container">
        
      <div className="box" onClick={()=>handleTwoCard}>
        <Link to="/TwoCard"> click </Link>
        <div className="card-content">
          <h1 className="title is-1">Card 1</h1>
          <figure className='image is-64x64'>
            {/* <image src="/images/airpods.jpg" alt="image" /> */}

          </figure>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="select-text">Select</p>
        </div>
       
      </div>
      <div className="box">
        <div className="card-content">
          <h1 className="title is-1">Card 1</h1>
          <figure className='image is-64x64'>
            <image src="/images/airpods.jpg" alt="image" />

          </figure>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="select-text">Select</p>
        </div>
      </div>
      <div className="box">
        <div className="card-content">
          <h1 className="title is-1">Card 1</h1>
          <figure className='image is-64x64'>
            <image src="/images/airpods.jpg" alt="image" />

          </figure>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="select-text">Select</p>
        </div>
      </div>
      <div className="box">
        <div className="card-content">
          <h1 className="title is-1">Card 1</h1>
          <figure className='image is-64x64'>
            <image src="/images/airpods.jpg" alt="image" />

          </figure>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="select-text">Select</p>
        </div>
      </div>
      <div className="box">
        <div className="card-content">
          <h1 className="title is-1">Card 1</h1>
          <figure className='image is-64x64'>
            <image src="/images/airpods.jpg" alt="image" />

          </figure>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="select-text">Select</p>
        </div>
      </div>
      

      <div className="box">
        <div className="card-content">
          <h1 className="title is-1">Card 2</h1>
          <figure className='image is-64x64'>
            <image src="/images/airpods.jpg" alt="image" />

          </figure>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="select-text title is-2">Select</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DashBoard;
