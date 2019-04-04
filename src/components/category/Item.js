import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import removeSpace from '../../helper/removeSpace';
import getItems from '../../actions/item';

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
      this.props.getCategoryItems();
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
          <h2>Items</h2>
          <ul>
            {
            items.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(({ id, title }) => (
              <li key={id}>
                <a href={`item/${removeSpace(title)}`}>
                  { title }
                </a>
              </li>
            ))
          }
          </ul>
          <div className="numeric">
            {' '}
            <img src="assets/images/baseline-chevron_left-24px.svg" onClick={this.decreasePage.bind(this)} alt="" />
            {' '}
            <img src="assets/images/page-first.svg" onClick={this.setPage.bind(this, 1)} alt="" />
            {' '}
            { this.createPage(totalPages) }
            {' '}
            <img src="assets/images/page-last.svg" onClick={this.setPage.bind(this, totalPages)} alt="" />
            {' '}
            <img src="assets/images/baseline-chevron_right-24px.svg" onClick={this.increasePage.bind(this, totalPages)} alt="" />
            {' '}
          </div>
        </div>
      );
    }
}

Item.propTypes = {
  getCategoryItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  items: state.category.items,
});

export default connect(mapStateToProps, { getItems })(Item);
