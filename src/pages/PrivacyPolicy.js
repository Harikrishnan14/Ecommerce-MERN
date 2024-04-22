import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'

const PrivacyPolicy = () => {
    return (
        <div>
            <MetaTags title="Privacy Policy" />
            <BreadCrumb title="Privacy Policy" />
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

export default PrivacyPolicy
