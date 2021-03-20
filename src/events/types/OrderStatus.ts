export enum OrderStatus {
  // When order has been created, but ticket is not yet reserved
  Created = 'created',
  // The ticket has already been reserved by other, or when user cancels order
  // Or if the order expires before payment
  Cancelled = 'cancelled',
  // Order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',
  // Once payment is processed successfully
  Complete = 'complete'
}
