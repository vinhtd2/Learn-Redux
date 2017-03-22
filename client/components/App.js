import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreator from '../action/actionCreator';

import Main from './Main';

const mapStateToProps = (state) => {
   return{
     posts: state.posts,
     comments: state.comments
   }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreator, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
