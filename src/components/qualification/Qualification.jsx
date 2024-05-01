import React, { useState } from "react";
import './qualification.css';

const Qualification = () => {

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className=
                    "qualification__button button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science</h3>
                            <span className="qualification__subtitle">University "Kadri Zeka"</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021-Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </section>
    );
};


export default Qualification;