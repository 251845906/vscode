// imconnect
// imconnect
// imconnect
import { connect } from 'react-redux'
// improvider
// improvider
// improvider
import { Provider } from 'react-redux'
// provider
// provider
// provider
<Provider store={store}>
    Component
</Provider>
// mstp
// mstp
// mstp
const mapStateToProps = (state, ownProps) => ({
    
})
// mdtp
// mdtp
// mdtp
const mapDispatchToProps = {
    
}
// connect
// connect
// connect
export default connect(mapStateToProps, mapDispatchToProps)(containerName)
// container
// container
// container
// container
import { connect } from 'react-redux'
import component from '../components/component'
import { actionCreator } from '../actionPath'

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
