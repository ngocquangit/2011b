import PropTypes from 'prop-types';
const ResultComponent = (props) => (
<>
    <h1>{props.count}</h1>
</>
);

ResultComponent.propTypes = {
    count: PropTypes.number
}
export default ResultComponent;