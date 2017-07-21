
import { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Card } from 'material-ui/Card';
import * as actionsObj from '../../state-management/actions';

import './style.css';

const ZERO = 0;

class TodoItemList extends Component {
  componentDidMount() {
    this.props.actions.api.getItemsForList({});
  }

  render() {
    const handleSelectMe = () => {
    };
    const { app } = this.props;
    // const term = { params };

    const body = { section: (
      <div className="layout-column layoutPadding animated fadeInUp">
        <div data-ui-view="pageContent">
          <h2>{'Loading TodoItemList ...'}</h2>
        </div>
      </div>
    ) };

    if (app.data && app.data.length) {
      const listContent = app.data.map((item) => (
        <div key={item.todoListId}>
          <input
            type="button"
            value="go To Items"
            onClick={handleSelectMe}
          />
          <section> {item.name} </section>
        </div>

      ));

      body.section = (<section>{listContent}</section>);
    }

    if (app.data && (app.data.length === ZERO)) {
      return (<span>{' No Data Found'}</span>);
    }

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
)(TodoItemList);


TodoItemList.propTypes = {
  actions: PropTypes.object,
  app: PropTypes.object,
};
