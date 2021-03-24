import { Stan } from 'node-nats-streaming'

import { Subjects } from './Subjects'

interface Event {
  subject: Subjects
  data: any
}

export abstract class Publisher<T extends Event> {
  abstract subject: T['subject']
  protected client: Stan

  constructor(client: Stan) {
    this.client = client
  }

  publish(data: T['data']): Promise<{ error?: Error, success: Boolean }> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (error) => {
        if (error) {
          return reject({ error })
        } 

        console.log('Event published to subject:', this.subject)
        resolve({ success: true })
      })
    })
  }
}
