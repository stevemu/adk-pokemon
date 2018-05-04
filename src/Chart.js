import React, { Component } from 'react'
import './scss/main.scss'

import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList, BarChart, Bar
} from 'recharts';

const data = [
  { name: 'Attack', uv: 128 },
  { name: 'Defense', uv: 108 },
  { name: 'Stamina', uv: 78 }
];

export default class extends Component {
  render() {
    return (
      <div>
        <BarChart width={700} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar type="monotone" dataKey="uv" barSize={30} fill="#5F5F5F"
            label={<div>label</div>} />
        </BarChart>
      </div>
    )
  }
}

