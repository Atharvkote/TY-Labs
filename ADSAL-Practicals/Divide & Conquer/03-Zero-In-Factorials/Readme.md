# Smallest Number with at Least N Trailing Zeroes in Factorial

> \[!IMPORTANT]
> **Binary Search Based Factorial Analysis**
>
> This program finds the **smallest positive integer `x`** such that the factorial of `x` (denoted as `x!`) contains at least `n` trailing zeroes.
> It uses a **mathematical observation** and applies **binary search** to avoid large factorial computations.


## Problem Statement

Given a number `n`, find the **smallest integer `x`** such that the number of trailing zeroes in `x!` is **greater than or equal to `n`**.


## Mathematical Insight

* Trailing zeroes in a factorial are caused by the product of `2 × 5`.
* In any factorial, the number of 2s is abundant, so **the number of 5s determines the count of trailing zeroes**.
* The number of trailing zeroes in `x!` can be calculated as:

```
floor(x / 5) + floor(x / 25) + floor(x / 125) + ...
```


## Approach

1. Define a function to compute trailing zeroes in `x!`.
2. Use **binary search** between `0` and `5 * n` to find the smallest such `x`.
3. Return the smallest `x` whose factorial has at least `n` trailing zeroes.


## Time Complexity

| Component      | Complexity  |
| -------------- | ----------- |
| Trailing count | O(log x)    |
| Binary search  | O(log (5n)) |
| Overall        | O(log² n)   |


## Test Case

### Input

```
Enter n: 6
```

### Output

```
Smallest number whose factorial has at least 6 trailing zeroes is: 25
```

Explanation:
25! = 15,511,210,043,330,985,984,000,000 → contains **6 trailing zeroes**


## Features

* Efficient for large `n` (up to 10⁶)
* No factorials are computed directly
* Logarithmic complexity with respect to `n`
* Mathematical + binary search based reasoning


## Java Implementation

```java
import java.util.Scanner;

public class FactorialTrailingZeroes {

    // Function to count trailing zeroes in x!
    static int countTrailingZeroes(int x) {
        int count = 0;
        while (x >= 5) {
            count += x / 5;
            x /= 5;
        }
        return count;
    }

    // Binary search to find the smallest number with at least n trailing zeroes
    static int findSmallestNumber(int n) {
        int low = 0, high = 5 * n;
        int ans = -1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int trailing = countTrailingZeroes(mid);

            if (trailing >= n) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n: ");
        int n = sc.nextInt();

        int result = findSmallestNumber(n);
        System.out.println("Smallest number whose factorial has at least " + n + " trailing zeroes is: " + result);
    }
}
```


## Sample Output

```
Enter n: 10
Smallest number whose factorial has at least 10 trailing zeroes is: 45
```


## Educational Value

This implementation is a classic example of how **binary search** can solve numeric problems efficiently by **modeling factorial growth without computation**. It teaches how to combine mathematical insights with algorithmic thinking.

