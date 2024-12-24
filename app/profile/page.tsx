import Link from 'next/link'
import { ArrowLeft, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BottomNavigation } from '@/components/BottomNavigation'

export default function ProfilePage() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center">
        <Link href="/">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <h1 className="text-xl font-bold">Profile</h1>
        <Button variant="ghost" size="icon">
          <Settings className="w-6 h-6 text-gray-700" />
        </Button>
      </header>

      {/* User Info */}
      <div className="bg-white p-6 flex flex-col items-center">
        <img src="/placeholder.svg?height=100&width=100" alt="User" className="w-24 h-24 rounded-full mb-4" />
        <h2 className="text-2xl font-bold mb-2">John Doe</h2>
        <p className="text-gray-500">Sports Enthusiast</p>
      </div>

      {/* Favorite Sports */}
      <div className="mt-6 p-4">
        <h3 className="text-lg font-bold mb-4">Favorite Sports</h3>
        <div className="flex flex-wrap gap-2">
          {['Football', 'Basketball', 'Tennis'].map((sport) => (
            <span key={sport} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {sport}
            </span>
          ))}
        </div>
      </div>

      {/* Saved Articles */}
      <div className="flex-grow mt-6 p-4">
        <h3 className="text-lg font-bold mb-4">Saved Articles</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <Link key={item} href={`/article/${item}`} className="block">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-1">Saved Article {item}</h4>
                <p className="text-sm text-gray-500">Short description of the saved article...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation active="profile" />
    </div>
  )
}

