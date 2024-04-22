import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'

const TermsAndConditions = () => {
    return (
        <div>
            <MetaTags title="Terms and Conditions" />
            <BreadCrumb title="Terms and Conditions" />
            <section className="policy-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TermsAndConditions
