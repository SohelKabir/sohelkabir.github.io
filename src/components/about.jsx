import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-about' data-section='about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div
                  className='row row-bottom-padded-sm animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='col-md-12'>
                    <div className='about-desc'>
                      <span className='heading-meta'>About Us</span>
                      <h2 className='colorlib-heading'>Who Am I?</h2>
                      <p>
                        Hi! I'm Mohammad Nurul Kabir Sohel, recently I have
                        graduated from North South University from department of
                        Electrical and Computer Engineering.{' '}
                      </p>
                      <p>
                        Currently I'm working in software development firm based
                        in Dhaka as a Software Engineer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='colorlib-about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>What I do?</span>
                <h2 className='colorlib-heading'>
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className='row row-pt-md'>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-1'>
                  <span className='icon'>
                    <i className='icon-bulb' />
                  </span>
                  <div className='desc'>
                    <h3>Web Development </h3>
                    <p>
                      I have experience working with web technologies like
                      Node.js, Express.js, React, webRTC, Redux, Jest, Flask,
                      Babel, Webpack, GraphQL, PostgreSQL, MySQL,MS SQL, Oracle
                      DB, MongoDB, Firebase etc .
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-3'>
                  <span className='icon'>
                    <i className='icon-phone3' />
                  </span>
                  <div className='desc'>
                    <h3>Mobile Development</h3>
                    <p>
                      I have developed and deployed in hybrid mobile development
                      technologies like React Native and Flutter. Also worked
                      with backend/server SASS like Firebase, AWS, Atlas, GCP
                      etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-5'>
                  <span className='icon'>
                    <i className='icon-data' />
                  </span>
                  <div className='desc'>
                    <h3>Machine Learning</h3>
                    <p>
                      I have studied classical Machine Learning, Deep Learning,
                      Computer Vision and AI at my University. Frameworks/Tools:
                      Scikit-Learn, NumPy , SciPy, Matplotlib, Pandas, NLTK,
                      Anaconda, OpenCV, Seaborn, Plotly.
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
}
