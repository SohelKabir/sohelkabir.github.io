import React from 'react';

function bioData() {
  return (
    <div>
      <section className='colorlib-about' data-section='bio'></section>
      <section className='colorlib-about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <h2 className='colorlib-heading'>Personal Information</h2>
            </div>
          </div>
          <div className='row row-pt-md'>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-1'>
                <span className='icon'>
                  <i className='icon-location' />
                </span>
                <div className='desc'>
                  <h3>Present/Permanent Address </h3>
                  <p>Chunati Shah Shaheb Gate, Chunati, Lohagara, Chattogram</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-2'>
                <span className='icon'>
                  <i className='icon-heart' />
                </span>
                <div className='desc'>
                  <h3>Parents Info</h3>
                  <ul
                    style={{
                      listStyleType: 'none',
                    }}
                  >
                    <li>Father name: Mohammad Younus </li>
                    <li>Profession: Business </li>
                    <li>Mother name: Hazera Begum </li>
                    <li>Profession: Housewife </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-6'>
                <span className='icon'>
                  <i className='icon-group' />
                </span>
                <div className='desc'>
                  <h3>siblings</h3>
                  <p>
                    My parents are blessed with two daughters and four sons. I
                    am the 5th child of total six children of my parents. My two
                    sisters are married and two brothers are doing business
                    after study and the youngest one is still on college.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default bioData;
