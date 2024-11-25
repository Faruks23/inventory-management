import Link from 'next/link'
import { Home, Package, Warehouse, ShoppingCart, Users, FileText, Bell, Settings, Truck, FolderTree } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { name: 'Overview', icon: Home, href: '/' },
    { name: 'Inventory', icon: Package, href: '/inventory' },
    { name: 'Categories', icon: FolderTree, href: '/categories' },
    { name: 'Warehouses', icon: Warehouse, href: '/warehouses' },
    { name: 'Orders', icon: ShoppingCart, href: '/orders' },
    { name: 'Customers', icon: Users, href: '/customers' },
    { name: 'Suppliers', icon: Truck, href: '/suppliers' },
    { name: 'Reports', icon: FileText, href: '/reports' },
    { name: 'Notifications', icon: Bell, href: '/notifications' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ]

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Inventory MS</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <item.icon className="h-5 w-5 mr-2" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar

