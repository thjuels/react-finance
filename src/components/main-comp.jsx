import React from "react"
import QuickInfo from "./quick-info"
import Overview from "./overview-comp"
import CardInfo from "./card-info"
import Activity from "./activity"
import Payments from "./payment"
import RecentTrans from "./recent-transactions"

export default function Main(){
    return (
        <div className="main-el">
            <div className="quickinfo-all">
                <QuickInfo />
                <QuickInfo />
                <QuickInfo />
                <QuickInfo />
            </div>
            <div className="overview-row">
                <div>
                    <Overview />
                    <div className="bottom-row">
                        <Activity />
                        <Payments />

                    </div>
                </div>
                <div>
                    <CardInfo />
                    <RecentTrans />
                </div>
            </div>
        </div>
    )
}