import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

class ExpensesList extends React.Component {
  render() {
    const { expensesList } = this.props;
    return (
      <div>
        <table border="1">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            { expensesList.map((objExpense, index) => (
              <TableBody key={ index } expense={ objExpense } />)) }
          </tbody>
        </table>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
});

ExpensesList.propTypes = {
  expensesList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(ExpensesList);
