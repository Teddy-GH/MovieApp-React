import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$190000</span>
                    <span className="featuredMoneyRate">
                        -5.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$100000</span>
                    <span className="featuredMoneyRate">
                        11.4 <ArrowUpward className="featuredIcon " /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1000</span>
                    <span className="featuredMoneyRate">
                        -10.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
