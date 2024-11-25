import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const notifications = [
  { id: 1, message: "Low stock alert: Product XYZ (SKU: 12345) is running low.", type: "warning", date: "2023-06-15" },
  { id: 2, message: "New order received: Order #1001 from customer ABC Corp.", type: "info", date: "2023-06-14" },
  { id: 3, message: "Payment received: Invoice #INV-001 has been paid.", type: "success", date: "2023-06-13" },
  { id: 4, message: "Shipment delayed: Order #1000 delivery has been postponed.", type: "error", date: "2023-06-12" },
]

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="outline">Mark All as Read</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li key={notification.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${getNotificationColor(notification.type)}`} />
                <div className="flex-1">
                  <p>{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{notification.date}</p>
                </div>
                <Button variant="ghost" size="sm">
                  Mark as Read
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function getNotificationColor(type: string) {
  switch (type) {
    case "warning":
      return "bg-yellow-500"
    case "info":
      return "bg-blue-500"
    case "success":
      return "bg-green-500"
    case "error":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

