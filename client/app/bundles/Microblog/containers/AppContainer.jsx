import { connect } from 'react-redux';
import App from '../components/App';
import * as actions from '../actions';

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(App);
