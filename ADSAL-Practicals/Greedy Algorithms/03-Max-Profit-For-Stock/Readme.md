# Maximizing Stock Profit with Peak Strategy

> \[!IMPORTANT]
> **Peak-Based Stock Trading Algorithm**
>
> This program calculates the **maximum profit** that can be earned by trading stocks based on daily prices.
> It uses a **peak detection strategy** where all possible buys are made before a local peak and sold at that peak.

## Problem Statement

Given an array `arr[]` of `N` positive integers, where each element represents the stock price on a given day, find the **maximum profit** achievable by buying and selling under the following strategy:

* Identify a **peak day** (a day with the highest stock price in the remaining period).
* **Buy on all days before the peak** and **sell at the peak**.
* Repeat the process for the remaining days after the peak.

## Mathematical Insight

* Profit is made by buying low and selling high.
* Instead of making individual buy/sell decisions, this algorithm groups multiple transactions into **segments ending at a peak**.
* For each peak found:

  ```
  Profit += Σ (peakPrice - arr[k])   for all k before peak
  ```

## Approach

1. Start at day `i = 0`.
2. Find the **peak index** in the remaining array.
3. Accumulate profit by buying on all days before the peak and selling at the peak.
4. Move to the next index after the peak and repeat until the array ends.

## Time Complexity

| Component                 | Complexity          |
| ------------------------- | ------------------- |
| Peak search (per segment) | O(n²) in worst case |
| Profit calculation        | O(n)                |
| Overall                   | O(n²)               |

*(Efficient for small/medium input sizes, can be optimized with better peak detection.)*

## Test Case

### Input

```
arr = {5, 7, 9, 1, 4, 5, 7}
```

### Output

```
Maximum Profit = 21
```

### Explanation

* First segment → Peak = 9 at index 2

  * Buy at 5, 7 → Profit = (9-5) + (9-7) = 6
* Second segment → Peak = 7 at index 6

  * Buy at 1, 4, 5 → Profit = (7-1) + (7-4) + (7-5) = 15

Total Profit = **6 + 15 = 21**

## Features

* Uses **peak-based trading strategy** for maximum profit.
* Simple, intuitive algorithm for stock analysis.
* Can be extended to handle **multiple stocks or real-time trading simulations**.

## Java Implementation

```java
public class StockProfitPeak {

    // Function to calculate maximum profit using peak strategy
    static int maxProfit(int[] arr) {
        int n = arr.length;
        int profit = 0;
        int i = 0;

        while (i < n) {
            // find the peak (max element) in the remaining array
            int peakIndex = i;
            for (int j = i; j < n; j++) {
                if (arr[j] > arr[peakIndex]) {
                    peakIndex = j;
                }
            }

            // buy at all days before peak
            for (int k = i; k < peakIndex; k++) {
                profit += (arr[peakIndex] - arr[k]);
            }

            // move to the next segment after peak
            i = peakIndex + 1;
        }

        return profit;
    }

    public static void main(String[] args) {
        int[] arr = {5, 7, 9, 1, 4, 5, 7};
        System.out.println("Maximum Profit = " + maxProfit(arr));
    }
}
```

## Sample Output

```
Maximum Profit = 21
```

## Educational Value

This implementation demonstrates how **greedy trading strategies** can be simulated with simple algorithms.
It highlights how grouping transactions around **local peaks** can maximize profit efficiently without explicitly tracking every buy/sell decision.
