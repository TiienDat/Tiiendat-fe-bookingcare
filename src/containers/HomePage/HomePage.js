import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import OutstandingDoctor from './Section/OutstandingDoctor';
import MedicalFacility from './Section/MedicalFacility';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './Section/HomeFooter';
import './HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <>
                <HomeHeader isShowBanner={true} />
                <Specialty
                    settings={settings}
                />
                <MedicalFacility
                    settings={settings}
                />
                <OutstandingDoctor
                    settings={settings}
                />
                {/* <HandBook
                    settings={settings}
                /> */}
                <About />
                <HomeFooter />
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
