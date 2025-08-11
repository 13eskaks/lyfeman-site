import { apiRawClient } from '../../../lib/apiClient';
import { Project } from '../../Project';
import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export class Project1 implements Project {
  id = 'rate-restaurant-review';
  name = 'Restaurant Review Sentiment Analysis';
  descriptionPath = 'rate-restaurant-review.md';

  // Performs the POST request sending the input text
  async action(input: string): Promise<any> {
    const res = await apiRawClient({
      method: 'POST',
      endpoint: 'https://eskaks-rate-restaurant-review.hf.space/sentiment/',
      data: { texto: input },
    });
    return res.json();
  }

  // Renders the result using a separate React component for proper hook usage
  renderResult(result: any): React.ReactNode {
    return <Project1Result result={result} renderStars={this.renderStars} />;
  }

  // Renders stars with full, half, and empty stars based on rating
  renderStars(rating: number): React.ReactNode {
    const stars = [];
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;
    const maxStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} style={{ color: 'gold', fontSize: 24 }}>
          ★
        </span>
      );
    }

    if (decimalPart >= 0.25 && decimalPart < 0.75) {
      // Half star (could customize icon)
      stars.push(
        <span key="half" style={{ color: 'gold', fontSize: 24 }}>
          ☆
        </span>
      );
    } else if (decimalPart >= 0.75) {
      stars.push(
        <span key="roundUp" style={{ color: 'gold', fontSize: 24 }}>
          ★
        </span>
      );
    }

    while (stars.length < maxStars) {
      stars.push(
        <span key={'empty-' + stars.length} style={{ color: 'lightgray', fontSize: 24 }}>
          ★
        </span>
      );
    }

    return <span>{stars}</span>;
  }
}

// Component to display results with pie chart from recharts
function Project1Result({
  result,
  renderStars,
}: {
  result: any;
  renderStars: (rating: number) => React.ReactNode;
}) {
  const [tab, setTab] = useState<'decorated' | 'raw'>('decorated');

  if (!result) return null;

  // Prepare data for recharts Pie
  const data = [
    { name: 'Positivity', value: result.positividad, color: '#22c55e' }, // green-500
    { name: 'Negativity', value: result.negatividad, color: '#ef4444' }, // red-500
    { name: 'Neutrality', value: result.neutralidad, color: '#6b7280' }, // gray-500
  ];

  // Style for container fixed height
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
          {/* Review Text */}
          <p style={{ fontSize: '1.1rem', marginBottom: 8 }}>{result.texto}</p>

          {/* Rating with stars and numeric */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 24, marginRight: 8 }}>{renderStars(result.rating)}</div>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: 'gold' }}>
              {result.rating.toFixed(2)}
            </div>
          </div>

          {/* Pie chart */}
          <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) =>
                    `${name}: ${((percent ?? 0) * 100).toFixed(1)}%`
                  }
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => `${(value * 100).toFixed(2)}%`}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Date */}
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
