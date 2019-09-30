import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import CustomTab from './components/CustomTab'
import Transaction from './components/Transaction';
import SendDetails from './components/SendDetails';
import './HomePage.css';

const HomePage = () => (
    <div>
        <div className="title">currencyfair</div>
        <div className="homepage">
            <div className="tab-container">
                <Tabs activeTab='transaction'>
                    <TabList>
                        <Tab component={CustomTab} label='Step 1 => Transaction info' id='transaction' />
                        <Tab component={CustomTab} label='Step 2 => Recipient info' id='recipient' />
                        <Tab component={CustomTab} label='Step 3 => Make Payment' id='payment' />
                    </TabList>
                    <TabList>
                        <TabPanel component={Transaction} id='transaction' />
                        <TabPanel component={Transaction} id='recipient' />
                        <TabPanel component={Transaction} id='payment' />
                    </TabList>
                </Tabs>
            </div>
            <SendDetails />
        </div>
    </div>
)

export default HomePage