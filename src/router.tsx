import { createContext, useContext, useState, useEffect, useCallback, ReactNode, MouseEvent } from 'react'

interface RouterContextType {
  pathname: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  navigate: () => {},
})

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to: string) => {
    window.history.pushState({}, '', to)
    setPathname(new URL(to, window.location.origin).pathname)
    window.scrollTo(0, 0)
  }, [])

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function usePathname() {
  return useContext(RouterContext).pathname
}

export function useRouter() {
  const { navigate } = useContext(RouterContext)
  return { push: navigate }
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

export function Link({ href, children, onClick, ...props }: LinkProps) {
  const { navigate } = useContext(RouterContext)

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e)
    if (e.defaultPrevented) return
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || e.metaKey || e.ctrlKey) {
      return
    }
    e.preventDefault()
    navigate(href)
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
