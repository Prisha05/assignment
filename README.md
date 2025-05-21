# assignment - Checkout Queue Simulation

## Objective

Simulate customer assignment to checkout queues in a hypermart using efficient JavaScript logic.

## How it Works

- Customers enter the number of items.
- They're assigned to the checkout with the fewest total items.
- In case of a tie, the leftmost queue is selected.

## Tech Stack

- HTML
- CSS
- JavaScript

## Time Complexity

- Finding the least loaded queue: O(n), where n is the number of checkouts.
- Insertion: O(1)
- Rendering: O(n)

## Assumptions

- All item counts are positive integers.
- The number of checkout machines is fixed (3).
