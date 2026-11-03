import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function NotFound() {
  return (
    <PageHeader title="Page not found">
      That page doesn’t exist anymore. <Link to="/" className="text-brand-deep underline">Go to the home page</Link>
    </PageHeader>
  )
}
