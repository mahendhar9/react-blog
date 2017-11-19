import React, { Component } from 'react';
import PostsIndex from "./posts_index";
import '../style.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-xs-center">React - Blog</h1>
        <PostsIndex />
      </div>
    );
  }
}
