import React from 'react'
import {FaHeart, FaFrownOpen, FaFemale, FaVaadin, FaHeartbeat, FaPrescription, FaPlusSquare} from 'react-icons/fa'
import '../../healthEffects.css'

const healthEffects = () => {
    return(
        <div className="section" id="section2" style={{padding: '20px'}}>
        <section id="services" className="content-inside-section">
          <div className="row row-no-margin">
            <div className="left-center-text split-section">
              <div className="left-center-part">
                <div className="section-name" style={{textAlign: 'center', color: '#B5569C', fontWeight: '600'}}>Alternative Solutions</div>
                <h2 style={{textAlign: 'center'}}>Problems CBD can Help</h2>
                <hr />
                {/* +++ START - Carousel +++ */}
                <div id="carousel-services" className="carousel slide" data-interval={6000} data-ride="carousel">
                  
                  {/* START - Wrapper for carousel items */}
                  <div className="carousel-inner">
                    {/* Services 1 */}
                    <div className="active item">
                      {/* START - Services row */}
                      <div className="row">
                        {/* START - Block services */}
                        <div className="col-xs-12 col-sm-6 col-lg-6 block-services">
                          <div className="icon-services"><FaFrownOpen/></div>
                          <h3>CBD &amp; Anxiety</h3>
                          <p>
                            Research has shown that CBD can help to relieve stress, anxiety, and depression by altering the brain's serotonin signals.
                            CBD also helps to relive social anxiety disorder (SAD) and post-traumatic stress disorder (PTSD).
                          </p>
                        </div> 
                        {/* END - Block services */}
                        {/* START - Block services */}
                        <div className="col-xs-12 col-sm-6 col-lg-6 block-services">
                          <div className="icon-services"><FaFemale/></div>
                          <h3>CBD &amp; Endometriosis</h3>
                          <p>
                            Cannabinoids could treat endometriosis by stopping cell proliferation, preventing cell migration, inhibiting lesion vascularization (blood vessels),
                            inhibiting lesion innervation, blocking synthesis of inflammatory prostaglandins, modulating the immune response,
                            and desensitizing nerves that transmit pain.
                          </p>
                        </div> {/* END - Block services */}
                      </div> {/* END - Services row */}
                    </div>
                    {/* Services 2 */}
                    <div className="item">
                      {/* START - Services row */}
                      <div className="row">
                        {/* START - Block services */}
                        <div className="col-xs-12 col-sm-6 col-lg-6 block-services">
                          <div className="icon-services" ><FaVaadin/></div>
                          <h3>CBD &amp; Menstrual Pain</h3>
                          <p>
                            CBD and other cannabinoids are incredibly effective at relieving menstrual cramps, 
                            and a large reason for this appears to be that CBD inhibits COX-2, 
                            the enzyme responsible for producing inflammatory prostaglandins.
                          </p>
                        </div> {/* END - Block services */}
                        {/* START - Block services */}
                        <div className="col-xs-12 col-sm-6 col-lg-6 block-services">
                          <div className="icon-services"><FaHeartbeat/></div>
                          <h3>CBD &amp; Inflammation</h3>
                          <p>
                            Cannabinoids are potent anti-inflammatory agents and they exert their effects through induction of apoptosis,
                            inhibition of cell proliferation, suppression of cytokine production and induction of T-regulatory cells.
                          </p>
                        </div> {/* END - Block services */}
                      </div> {/* END - Services row */}
                    </div>
                    {/* Services 3 */}
                    <div className="item">
                      {/* START - Services row */}
                      <div className="row">
                        {/* START - Block services */}
                        <div className="col-xs-12 col-sm-6 col-lg-6 block-services">
                          <div className="icon-services"><FaPlusSquare/></div>
                          <h3>CBD &amp; Uterine Fibroids</h3>
                          <p>
                            Published research suggests that cannabinoid compounds like CBD may be useful in treating uterine fibroids,
                            malignancies, and other hormone disorders by enhancing the endocannabinoid system. 
                          </p>
                        </div> {/* END - Block services */}
                        {/* START - Block services */}
                        <div className="col-xs-12 col-sm-6 col-lg-6 block-services">
                          <div className="icon-services"><FaPrescription/></div>
                          <h3>CBD &amp; Pain Relief</h3>
                          <p>
                            Studies have shown that CBD may help reduce chronic pain by impacting endocannabinoid receptor activity,
                            reducing inflammation and interacting with neurotransmitters 
                          </p>
                        </div> {/* END - Block services */}
                      </div> {/* END - Services row */}
                    </div>
                  </div>
                  {/* END - Wrapper for carousel items */}
                  {/* Left arrow */}
                  <a className="carousel-control left" href="#carousel-services" data-slide="prev">
                    <span className="icon-prev" />
                  </a>
                  {/* Right arrow */}
                  <a className="carousel-control right" href="#carousel-services" data-slide="next">
                    <span className="icon-next" />
                  </a>
                </div>
                {/* +++ END - Carousel +++ */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default healthEffects