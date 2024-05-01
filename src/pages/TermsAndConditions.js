import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'

const TermsAndConditions = () => {
    return (
        <div>
            <MetaTags title="Terms and Conditions" />
            <BreadCrumb title="Terms and Conditions" />
            <Container class1='policy-wrapper home-wrapper-2 py-5'>
                <div className="row">
                    <div className="col-12">
                        <div className="policy"></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TermsAndConditions
