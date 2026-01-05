import { apiRawClient } from '@/lib/apiClient';
import { Project } from '../../Project';
import React from 'react';
import { Project1Result } from './Project1Result';

export class Project1 implements Project {
  id = 'rate-restaurant-review';
  name = 'Restaurant Review Sentiment Analysis';
  descriptionPath = 'rate-restaurant-review.md';

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

  async action(input: string): Promise<any> {
    const res = await apiRawClient({
      method: 'POST',
      endpoint: 'https://eskaks-rate-restaurant-review.hf.space/sentiment/',
      data: { texto: input },
    });
    return res.json();
  }

  renderResult(result: any): React.ReactNode {
    return <Project1Result result={result} renderStars={this.renderStars.bind(this)} />;
  }
}
