
import { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsObj from '../../state-management/actions';

import './style.css';

class TodoList extends Component {
  render() {
    const { actions, app } = this.props;
    // const term = { params };

    actions.api.ping();
    const body = { section: (
      <div className="layout-column layoutPadding animated fadeInUp">
        <div data-ui-view="pageContent">
          <h2>{'Loading TodoItemList ...'}</h2>
          {JSON.stringify(app.data)}
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
)(TodoList);

TodoList.propTypes = {
  actions: PropTypes.object,
  app: PropTypes.object,
};
