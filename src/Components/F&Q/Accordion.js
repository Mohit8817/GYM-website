import React from 'react'
// import { faqs } from '../../data'

const Accordion = () => {
    return (
        <div>

            <div className="container">
                <div className="row mt-5 mb-5">
                <h2 style={{ color: "white", fontSize: "40px" }} > <i className='fa fa-question text-warning'></i> F&Qs</h2>
                            {/* left side accordion  */}
  
                    <div className="col-md-6 p-4">
                        <div className="accordion accordion-flush" id="accordionFlush">

                            <div className="accordion-item bg-accor mb-5 ">
                                <h2 className="accordion-header">
                                    <button className="accordion-button bg-accor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <strong><i className="fa fa-shield"></i> How often should I exercies?</strong>
                                    </button>
                                </h2>
                                
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlush">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate theaccordion-flush class. This is the first item's accordion body.</div>
                                </div>
                            </div>


                            <div className="accordion-item bg-accor mb-5">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed bg-accor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <strong> <i className="fa fa-times"></i> How long should my workouts be?</strong>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlush">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item bg-accor mb-5">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed bg-accor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <strong> <i className="fa fa-bar-chart"></i> What time of day is best to work out?</strong>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlush">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of </div>
                                </div>
                            </div>
                        </div>

                    </div>

                            {/* Right side accordion  */}
                    <div className="col-md-6 p-4">
                        <div className="accordion accordion-flush" id="accordionFlushtwo">

                            <div className="accordion-item bg-accor mb-5 ">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed bg-accor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                        <strong><i className="fa fa-shield"></i> Do I need to warm up before my workouts?</strong>
                                    </button>
                                </h2>
                                <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushtwo">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate theaccordion-flush class. This is the first item's accordion body.</div>
                                </div>
                            </div>


                            <div className="accordion-item bg-accor mb-5 ">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed bg-accor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                                        <strong><i className="fa fa-shield"></i> Should I do strength training, cardio or both?</strong>
                                    </button>
                                </h2>
                                <div id="flush-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushtwo">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate theaccordion-flush class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                        


                            <div className="accordion-item bg-accor mb-5">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed bg-accor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
                                        <strong><i className="fa fa-shield"></i> Should I lift weights for strength training?</strong>
                                    </button>
                                </h2>
                                <div id="flush-collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushtwo">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate theaccordion-flush class. This is the first item's accordion body.</div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>




    )
}

export default Accordion
