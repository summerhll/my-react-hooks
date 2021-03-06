import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';

import Header from '../../components/Header.jsx';
import DepartDate from './DepartDate.jsx';
import HighSpeed from './HighSpeed.jsx';
import Journey from './Journey.jsx';
import Submit from './Submit.jsx';

import CitySelector from '../../components/CitySelector.jsx';
import DateSelector from '../../components/DateSelector.jsx';

import { h0 } from '../../common/fp';

import {
    exchangeFromTo,
    showCitySelector,
    hideCitySelector,
    fetchCityData,
    setSelectedCity,
    showDateSelector,
    hideDateSelector,
    setDepartDate,
    toggleHighSpeed,
} from '../../redux/actions';

function Index(props) {
    const {
        from,
        to,
        isCitySelectorVisible,
        isDateSelectorVisible,
        cityData,
        isLoadingCityData,
        highSpeed,
        dispatch,
        departDate,
    } = props;

    const onBack = useCallback(() => {
        window.history.back();
    }, []);

    const cbs = useMemo(() => {
        return bindActionCreators(
            {
                exchangeFromTo,
                showCitySelector,
            },
            dispatch
        );
    }, []); //eslint-disable-line

    const citySelectorCbs = useMemo(() => {
        return bindActionCreators(
            {
                onBack: hideCitySelector,
                fetchCityData,
                onSelect: setSelectedCity,
            },
            dispatch
        );
    }, []); //eslint-disable-line

    const departDateCbs = useMemo(() => {
        return bindActionCreators(
            {
                onClick: showDateSelector,
            },
            dispatch
        );
    }, []); //eslint-disable-line

    const dateSelectorCbs = useMemo(() => {
        return bindActionCreators(
            {
                onBack: hideDateSelector,
            },
            dispatch
        );
    }, []); //eslint-disable-line

    const highSpeedCbs = useMemo(() => {
        return bindActionCreators(
            {
                toggle: toggleHighSpeed,
            },
            dispatch
        );
    }, []); //eslint-disable-line

    const onSelectDate = useCallback(day => {
        if (!day) {
            return;
        }

        if (day < h0()) {
            return;
        }

        dispatch(setDepartDate(day));
        dispatch(hideDateSelector());
    }, []); //eslint-disable-line

    return (
        <div>
            <div className="header-wrapper">
                <Header title="?????????" onBack={onBack} />
            </div>
            <div  className="form">
                <Journey from={from} to={to} {...cbs} />
                <DepartDate time={departDate} {...departDateCbs} />
                <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} />
                <Submit />
            </div>
            <CitySelector
                show={isCitySelectorVisible}
                cityData={cityData}
                isLoading={isLoadingCityData}
                {...citySelectorCbs}
            />
            <DateSelector
                show={isDateSelectorVisible}
                {...dateSelectorCbs}
                onSelect={onSelectDate}
            />
        </div>
    );
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch };
    }
)(Index);
