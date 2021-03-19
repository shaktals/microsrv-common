import { Message, Stan } from 'node-nats-streaming';
import { Subjects } from './Subjects';
interface Event {
    subject: Subjects;
    data: any;
}
export default abstract class BaseListener<T extends Event> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: Message): void;
    private client;
    protected ackWait: number;
    constructor(client: Stan);
    subscriptionOptions(): import("node-nats-streaming").SubscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}
export {};
