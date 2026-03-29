import { RouterProvider } from './router'
import V1Layout from './versions/v1/HomeV1'

export default function App() {
  return (
    <RouterProvider>
      <V1Layout />
    </RouterProvider>
  )
}
