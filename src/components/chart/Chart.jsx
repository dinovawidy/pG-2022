import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
  {name: "January", Total: 10000},
  {name: "February", Total: 13000},
  {name: "Maret", Total: 8000},
  {name: "April", Total: 17000},
  {name: "Mei", Total: 5000},
  {name: "Juni", Total: 9000},
  {name: "July", Total: 11000},
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Penghasilan 7 bulan terakhir</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke="gray" />

  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart