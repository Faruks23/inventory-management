import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your general account settings and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="Enter your company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-address">Company Address</Label>
                <Textarea id="company-address" placeholder="Enter your company address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time-zone">Time Zone</Label>
                <Select>
                  <SelectTrigger id="time-zone">
                    <SelectValue placeholder="Select time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time</SelectItem>
                    <SelectItem value="cst">Central Time</SelectItem>
                    <SelectItem value="pst">Pacific Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select>
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                    <SelectItem value="jpy">JPY</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" />
                <Label htmlFor="dark-mode">Enable Dark Mode</Label>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage your notification preferences for various events.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Email Notifications</h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-low-stock">Low Stock Alerts</Label>
                  <Switch id="email-low-stock" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-new-orders">New Orders</Label>
                  <Switch id="email-new-orders" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-shipment-updates">Shipment Updates</Label>
                  <Switch id="email-shipment-updates" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">SMS Notifications</h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-critical-alerts">Critical Alerts</Label>
                  <Switch id="sms-critical-alerts" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-order-status">Order Status Changes</Label>
                  <Switch id="sms-order-status" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">In-App Notifications</h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="app-all-activities">All Activities</Label>
                  <Switch id="app-all-activities" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="app-mentions">Mentions & Comments</Label>
                  <Switch id="app-mentions" />
                </div>
              </div>
              <Button>Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security and access settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button>Change Password</Button>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Two-Factor Authentication</h3>
                <div className="flex items-center space-x-2">
                  <Switch id="enable-2fa" />
                  <Label htmlFor="enable-2fa">Enable Two-Factor Authentication</Label>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Login History</h3>
                <Button variant="outline">View Login History</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect and manage third-party integrations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connected Services</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Shopify</Label>
                    <p className="text-sm text-gray-500">Sync your Shopify store inventory</p>
                  </div>
                  <Switch id="shopify-integration" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">QuickBooks</Label>
                    <p className="text-sm text-gray-500">Connect your accounting software</p>
                  </div>
                  <Switch id="quickbooks-integration" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Shippo</Label>
                    <p className="text-sm text-gray-500">Manage shipping and tracking</p>
                  </div>
                  <Switch id="shippo-integration" />
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Available Integrations</h3>
                <Button variant="outline">Browse Integration Marketplace</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing Settings</CardTitle>
              <CardDescription>Manage your subscription and billing information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Current Plan</h3>
                <p>Professional Plan - $49/month</p>
                <Button variant="outline">Upgrade Plan</Button>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Payment Method</h3>
                <p>Visa ending in 1234</p>
                <Button variant="outline">Update Payment Method</Button>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Billing History</h3>
                <Button variant="outline">View Billing History</Button>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Billing Address</h3>
                <Textarea placeholder="Enter your billing address" />
                <Button className="mt-2">Update Billing Address</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

