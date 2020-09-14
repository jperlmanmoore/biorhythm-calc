import React  from "react";
import { 
    LineChart, 
    ResponsiveContainer, 
    Line,
    XAxis,
    ReferenceLine,
    CartesianGrid,
} from 'recharts';

import { calculateBiorhythmSeries } from '../calculations';
import daysjs from 'dayjs';
import "./BiorhythmChart.css"
// mock data
// const data = [
//     {date: '2020-09-13', physical: 0.99, emotional: .74, intellectual: -.23},
//     {date: '2020-09-14', physical: 0.81, emotional: -.82, intellectual: -.52},
//     {date: '2020-09-15', physical: -0.39, emotional: .24, intellectual: -.91},
// ]

function formatDate(isoString) {
    return daysjs(isoString).format('D MMM');

}

function BiorhythmChart( { birthDate, targetDate}) {
    const startDate = daysjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
        .map((item) => ({...item, date: formatDate(item.date)}));
    return (
        <div  style={{width: '100%', height: 300}}>
            <ResponsiveContainer className='biorhythm-chart' >
            <LineChart 
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                <XAxis dataKey="date"
                    ticks={[data[1].date, data[15].date, data[29].date]}/>
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <ReferenceLine x={data[15].date}/>
                <Line type="natural" dot={false} dataKey="physical" className="physical"/>
                <Line type="natural" dot={false} dataKey="emotional" className="emotional"/>
                <Line type="natural" dot={false} dataKey="intellectual" className="intellectual"/>
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BiorhythmChart;
