// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
// import getItem from '../../actions/item';

// export class Category extends Component {
//   componentDidMount() {
//     this.props.getItem();
//   }

//   render() {
//     const { categoryName, itemName } = this.props.params;
//     return (
//       <div className="category">
//         <h2>Item</h2>

//       </div>
//     );
//   }
// }

// Category.propTypes = {
//   getItem: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired,
//   params: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   item: state.item.categories,
// });

// export default connect(mapStateToProps, { getItem })(Category);
