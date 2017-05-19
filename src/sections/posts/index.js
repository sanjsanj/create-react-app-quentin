import React, { Component } from 'react';
import Input from '../../components/input';
import List from '../../components/list';
import Post from '../../components/post';
import Button from '../../components/button';

class PostSection extends Component {
  emptyState = {
      author: "",
      message: "",
  }
  constructor() {
    super();
    this.create = this.create.bind(this);
    this.updateAuthor = this.updateAuthor.bind(this);
    this.updateMessage = this.updateMessage.bind(this);

    this.state = {...this.emptyState};
  }
  updateAuthor(ev) {
    this.setState({author:ev.target.value})
  }
  updateMessage(ev) {
    this.setState({message:ev.target.value})
  }
  create() {
    this.props.create(
      this.state.author,
      this.state.message
    );
    this.setState({...this.emptyState});
  }

  render() {
    const { posts, create } = this.props;

    return (
      <div>
        <List items={posts} component={Post} />
        <div>
          <Input label="Author" value={this.state.author} onChange={this.updateAuthor} />
          <Input label="Message" value={this.state.message} onChange={this.updateMessage} />          
          <Button action={this.create}>Create</Button>
        </div>
      </div>
    );
  };
}

export default PostSection;
