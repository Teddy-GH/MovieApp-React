import React, { useEffect, useState } from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import axios from 'axios';
const Home = () => {
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );
    

      const [userStats, setUserStats] = useState([])


      useEffect(()=> {
          const getStats = async () => {
              try {
                const res = await 
                axios.get("/users/stats", {headers:
                    {token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmE1Yzk5Mjg4MjM0NmVmODEwNzNiMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzkwODE1NiwiZXhwIjoxNjI4MzQwMTU2fQ.aRIk1TwMa-knSjc18Qykuzzm7vA9a82rmD8f2_lO2ew "}});
                    const statsList = res.data.sort(function (a, b) {
                        return a._id - b._id;
                      });
                      statsList.map((item) =>
                        setUserStats((prev) => [
                          ...prev,
                          { name: MONTHS[item._id - 1], "New User": item.total },
                        ])
                      );
              } catch (err) {
                  console.log(err);
              }
             
          }
          getStats();
      },[MONTHS])
      
      console.log(userStats);

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
