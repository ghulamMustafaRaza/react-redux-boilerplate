import React, { Component } from 'react';
import { connect } from 'react-redux';
import appEpic from './store/epics/app.epic';

class Root extends Component {
  render() {
    return this.props.loading ? <div>loading</div> : (
      <div>
        <button onClick={this.props.fetch}>Fetch</button>
        <ul>
            {
                this.props.posts.map(a => <li key={a.id}>{a.title}, {a.body}</li>)
            }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    posts: state.app.posts,
    loading: state.app.loading,
})

const mapDispatchToProps = (dispach) => ({
    fetch: () => dispach({ type: appEpic.HELLO })
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)