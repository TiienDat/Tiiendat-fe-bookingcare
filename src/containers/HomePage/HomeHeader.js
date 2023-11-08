import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import Logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {
        console.log('check props: ', this.props)
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <div className='head-bar'>
                                <i className="fas fa-bars"></i>
                            </div>
                            <div className='head-logo'>
                                <img className='header-logo' src={Logo}></img>
                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.search-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fas fa-question-circle"></i><FormattedMessage id="homeheader.support" /></div>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='options-child'>
                                <div className='icon-child'><i className="fas fa-hospital-alt"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                            </div>


                            <div className='options-child'>
                                <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                            </div>


                            <div className='options-child'>
                                <div className='icon-child'><i className="fas fa-procedures"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                            </div>


                            <div className='options-child'>
                                <div className='icon-child'><i className="fas fa-flask"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                            </div>

                            <div className='options-child'>
                                <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child5" /></div>
                            </div>

                            <div className='options-child'>
                                <div className='icon-child'><i className="fas fa-briefcase-medical"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>


                </div>
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);