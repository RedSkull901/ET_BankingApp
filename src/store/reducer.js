const initialState = {
	balance: 45000,
	transactionHistory: []
};

const reducer = (state = initialState, action) => {
  const newState = {...state};

  let date = new Date().toLocaleString()


  switch (action.type) {
  	
  	case "withdraw":
	return { 
	  ...state,
	  balance: state.balance - action.value,
	  transactionHistory: state.transactionHistory.concat({ date: date, transactionType: 'withdrawl', amount: action.value, newBalance: state.balance - action.value })
	};
	break;

	case "deposit":
	return { 
	  ...state,
	  balance: state.balance + action.value,
	  transactionHistory: state.transactionHistory.concat({ date: date, transactionType: 'deposit', amount: action.value, newBalance: state.balance + action.value })
	};
	break;
 }
 return newState
}

export default reducer;
