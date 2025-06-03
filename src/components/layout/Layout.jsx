import PropTypes from 'prop-types'
import Header from './Header'

export default function Layout({ children }) {
  return(
    <main>
      <Header />
      {children}
    </main>
  ) 
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
