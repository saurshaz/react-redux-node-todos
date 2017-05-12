
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsObj from '../../state-management/actions';

import './style.css';

class TodoItem extends Component {

  componentDidMount() {
    // const { actions } = this.props;
    // actions.ping();
  }

  render() {
    // const { actions } = this.props;
    // const term = { params };
    const body = { section: (
      <div className="layout-column layoutPadding animated fadeInUp">
        <div data-ui-view="pageContent">
          <h2>{'Loading TodoItem ...'}</h2>
        </div>
      </div>
    ) };

    return (<span>{body.section}</span>);
  }
}

const mapStateToProps = (state) => {
  const { app } = state;

  return {
    app,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    api: bindActionCreators(actionsObj.api, dispatch),
  },
});

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(TodoItem);
