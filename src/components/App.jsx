import React, { Component } from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';

export class App extends Component {
  render() {
    return (
      <>
        <LoginForm />
        <ProductReviewForm />
      </>
    );
  }
}
