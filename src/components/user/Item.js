import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getUserItems } from '../../actions/item';
import lastPage from '../../assets/images/page-last.svg';
import firstPage from '../../assets/images/page-first.svg';
import left from '../../assets/images/left.svg';
import right from '../../assets/images/right.svg';


const activeStyle = {
  background: '#444',
  color: '#fff',
};

const itemsPerPage = 1;

export class Item extends Component {
    state = {
      page: 1,
    }

    componentDidMount() {
      this.props.getUserItems(this.props.token);
    }

    setPage(page) {
      this.setState({
        page,
      });
    }

    createPage(totalPages) {
      const { page } = this.state;
      const numeric = [];
      for (let i = 1; i <= totalPages; i++) {
        numeric.push(
          <span
            onClick={this.setPage.bind(this, i)}
            key={i}
            style={page === i ? activeStyle : null}
          >
            { i }
          </span>,
        );
      }
      return numeric;
    }

    decreasePage() {
      const prevState = this.state.page;
      if (prevState === 1) return;
      this.setState({
        page: prevState - 1,
      });
    }

    increasePage(totalPages) {
      const prevState = this.state.page;
      if (prevState === totalPages) return;
      this.setState({
        page: prevState + 1,
      });
    }

    render() {
      const { items } = this.props;
      const { page } = this.state;
      const totalPages = Math.ceil(items.length / itemsPerPage);
      return (
        <div className="item">
          <h2>User's Items</h2>
          <ul>
            {
            items.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(
              ({ id, title, category_id }) => (
                <li key={id}>
                  <a href={`category/${category_id}/item/${id}`}>
                    { title }
                  </a>
                </li>
              ),
            )
          }
          </ul>
          <div className="numeric">
            {' '}
            <img src={left} onClick={this.decreasePage.bind(this)} alt="" />
            {' '}
            <img src={firstPage} onClick={this.setPage.bind(this, 1)} alt="" />
            {' '}
            { this.createPage(totalPages) }
            {' '}
            <img src={lastPage} onClick={this.setPage.bind(this, totalPages)} alt="" />
            {' '}
            <img src={right} onClick={this.increasePage.bind(this, totalPages)} alt="" />
            {' '}
          </div>
        </div>
      );
    }
}

Item.propTypes = {
  getUserItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  items: state.item.items,
  token: state.user.accessToken,
});

export default connect(mapStateToProps, { getUserItems })(Item);
