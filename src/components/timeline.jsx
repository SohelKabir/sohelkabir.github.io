import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-experience' data-section='timeline'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>highlights</span>
                <h2 className='colorlib-heading animate-box'>Timeline</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='timeline-centered'>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'></div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-4'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Undergrad from North South University
                          <span> 2015 - 2019</span>
                        </h2>
                        <p>
                          I have completed my Bachelor Of Science (BSc.) in
                          Computer Science and Engineering from North South
                          University in September'19.{' '}
                        </p>
                        <p>
                          During my undergrad I have studied fundamentals of
                          Computer Science, Machine Learning, Computer
                          Networking, Computer Vision, Natural Language
                          Processing(NLP), Data Science, Web Development and
                          Internet Technology etc.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-5'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          HSC <span>2012-2014</span>
                        </h2>
                        <p>
                          I have completed my Higher Secondary Education degree
                          from Chattogram Cantonment public College (CCPC) with
                          Science major.{' '}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-5'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          SSC <span>2010-2012</span>
                        </h2>
                        <p>
                          I have completed my Secondary Education degree from
                          Baitush Sharaf Jabbaria Adarsha Madrasa with Science
                          major.{' '}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry begin animate-box'
                    data-animate-effect='fadeInBottom'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-none'></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
