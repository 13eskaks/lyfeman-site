import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export function Project1Result({
  result,
  renderStars,
}: {
  result: any;
  renderStars: (rating: number) => React.ReactNode;
}) {
  const [tab, setTab] = useState<'decorated' | 'raw'>('decorated');

  if (!result) return null;

  const data = [
    { name: 'Positivity', value: result.positividad, color: '#22c55e' },
    { name: 'Negativity', value: result.negatividad, color: '#ef4444' },
    { name: 'Neutrality', value: result.neutralidad, color: '#6b7280' },
  ];

  const containerStyle = { minHeight: 350 };

  return (
    <div>
      {/* Tabs */}
      <div style={{ marginBottom: 12 }}>
        <button
          onClick={() => setTab('decorated')}
          style={{
            marginRight: 10,
            padding: '6px 12px',
            backgroundColor: tab === 'decorated' ? '#3b82f6' : '#374151',
            color: 'white',
            borderRadius: 4,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Decorated View
        </button>
        <button
          onClick={() => setTab('raw')}
          style={{
            padding: '6px 12px',
            backgroundColor: tab === 'raw' ? '#3b82f6' : '#374151',
            color: 'white',
            borderRadius: 4,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Raw JSON
        </button>
      </div>

      {tab === 'decorated' ? (
        <div style={containerStyle}>
          <p style={{ fontSize: '1.1rem', marginBottom: 8 }}>{result.texto}</p>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 24, marginRight: 8 }}>{renderStars(result.rating)}</div>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: 'gold' }}>
              {result.rating.toFixed(2)}
            </div>
          </div>

          {/* Pie chart con altura mayor y margen para que no se corte */}
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <PieChart margin={{ top: 20, bottom: 20 }}>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(1)}%`}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${(value * 100).toFixed(2)}%`} />
                <Legend wrapperStyle={{ paddingTop: 16 }} /> {/* Espacio extra */}
              </PieChart>
            </ResponsiveContainer>
          </div>

          <p style={{ marginTop: 12, fontSize: '0.9rem', color: '#aaa' }}>
            Date: {new Date(result.fecha).toLocaleString()}
          </p>
        </div>
      ) : (
        <pre
          style={{
            backgroundColor: '#1f2937',
            color: '#d1d5db',
            padding: 12,
            borderRadius: 8,
            maxHeight: 350,
            overflow: 'auto',
            ...containerStyle,
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
