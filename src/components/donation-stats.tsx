'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'R&D Grants', value: 30 },
  { name: 'Scholarship Program', value: 25 },
  { name: 'Awards and Recognition', value: 20 },
  { name: 'Outreach and Awareness', value: 15 },
  { name: 'School Funding', value: 10 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export function DonationStats() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          How we spend your donations and where it goes
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <ul className="space-y-4">
              {data.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-4 h-4 mr-3" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                  <span>{item.name}: {item.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

