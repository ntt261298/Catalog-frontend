import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getUserItems } from '../../actions/item';
import { showAddItem } from '../../actions/app';
import plus from '../../assets/images/add-button.svg';


export class UserItem extends Component {
  componentDidMount() {
    this.props.getUserItems(this.props.token);
  }

  render() {
    const { item, showAddItem } = this.props;
    return (
      <div className="user-items">
        {
          <Fragment>
            <div className="main-user-header">
              <h2>User's Items</h2>
              <img onClick={showAddItem} src={plus} alt="" />
            </div>
            {item.userIds.map((id) => {
              const { title, description, category_id } = item.byId[id];
              return (
                <ul>
                  <li key={id} className="user-item">
                    <div className="edit-delete">
                      <span>edit</span>
                      <span>delete</span>
                    </div>
                    <Link href={`category/${category_id}/item/${id}`}>
                      <h3>{ title }</h3>
                    </Link>
                    <p>{ description }</p>
                  </li>
                </ul>
              );
            })}
          </Fragment>
        }
      </div>
    );
  }
}

UserItem.propTypes = {
  getUserItems: PropTypes.func.isRequired,
  showAddItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  item: state.item,
  token: state.user.accessToken,
});

export default connect(mapStateToProps, { getUserItems, showAddItem })(UserItem);
