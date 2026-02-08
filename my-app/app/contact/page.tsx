'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground">Get in touch with our bicycle store</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Store Locations</CardTitle>
            <CardDescription>Visit us at any of our branches</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Downtown Branch</h3>
              <p className="text-sm text-muted-foreground">123 Main Street, City Center</p>
              <p className="text-sm text-muted-foreground">Phone: (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Hours: Mon-Fri 9AM-6PM, Sat 10AM-5PM</p>
            </div>
            <div>
              <h3 className="font-semibold">Uptown Branch</h3>
              <p className="text-sm text-muted-foreground">456 Park Avenue, Uptown</p>
              <p className="text-sm text-muted-foreground">Phone: (555) 234-5678</p>
              <p className="text-sm text-muted-foreground">Hours: Mon-Fri 10AM-7PM, Sat-Sun 10AM-6PM</p>
            </div>
            <div>
              <h3 className="font-semibold">West Side Branch</h3>
              <p className="text-sm text-muted-foreground">789 West Boulevard, West Side</p>
              <p className="text-sm text-muted-foreground">Phone: (555) 345-6789</p>
              <p className="text-sm text-muted-foreground">Hours: Mon-Sat 9AM-5PM, Sun Closed</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>We'll get back to you shortly</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  placeholder="Your message..."
                  className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background"
                  rows={4}
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
