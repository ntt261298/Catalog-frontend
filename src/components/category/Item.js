import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
// import { getCategoryItems } from '../../actions/item';
import { getCategoryItems } from '../../actions/item';
import lastPage from '../../assets/images/page-last.svg';
import firstPage from '../../assets/images/page-first.svg';
import left from '../../assets/images/left.svg';
import right from '../../assets/images/right.svg';


const activeStyle = {
  background: '#444',
  color: '#fff',
};

const itemsPerPage = 1;

class Item extends Component {
    state = {
      page: 1,
    }

    componentDidMount() {
      this.props.getCategoryItems(this.props.id);
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
      if (items.length === 0) {
        return <h2>This category has no item.</h2>;
      }
      return (
        <div className="item">
          <h2>Items</h2>
          <ul>
            {
            items.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(({ id, title }) => (
              <li key={id}>
                <Link to={`category/${id}`}>
                  { title }
                </Link>
              </li>
            ))
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
  items: PropTypes.array.isRequired,
  getCategoryItems: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  items: state.item.categoryItems,
});

export default connect(mapStateToProps, { getCategoryItems })(Item);