import React from 'react'
import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navDrop'
import { cn } from '@/lib/utils'

const ListItem = React.forwardRef((props, ref) => {
  const { className, title, children, href, ...rest } = props
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...rest}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/logo.svg" alt="Finance App Logo" />
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem
                      title="Trading"
                      href="/product/trading"
                    >
                      Powerful trading platform for stocks and derivatives
                    </ListItem>
                    <ListItem
                      title="Mutual Funds"
                      href="/product/mutual-funds"
                    >
                      Zero commission mutual fund investments
                    </ListItem>
                    <ListItem
                      title="Portfolio Management"
                      href="/product/portfolio"
                    >
                      Track and analyze your investments across assets
                    </ListItem>
                    <ListItem
                      title="Research & Analytics"
                      href="/product/research"
                    >
                      Data-driven market research and stock analysis tools
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem
                      title="Brokerage"
                      href="/pricing/brokerage"
                    >
                      Low-cost brokerage plans for all trading styles
                    </ListItem>
                    <ListItem
                      title="Subscription Plans"
                      href="/pricing/plans"
                    >
                      Premium features with monthly/annual subscriptions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Education</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem
                      title="Learn"
                      href="/education/learn"
                    >
                      Free courses and resources for beginners
                    </ListItem>
                    <ListItem
                      title="Blog"
                      href="/education/blog"
                    >
                      Market insights and investment strategies
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-gray-900">
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/support" className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-gray-900">
                  Support
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Sign up
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar