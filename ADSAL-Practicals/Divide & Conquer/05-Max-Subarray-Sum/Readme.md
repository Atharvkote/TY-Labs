# Maximum Subarray Sum Using Divide and Conquer

> \[!IMPORTANT]
> **Divide and Conquer Based Maximum Subarray Algorithm**
>
> This program implements the **Maximum Subarray Problem** using a **divide-and-conquer** approach, which is conceptually similar to merge sort.
> It recursively splits the array into halves, calculates the maximum subarray sum in the left half, right half, and the crossing segment (spanning both sides), and returns the largest of the three.
> This method is particularly useful for understanding how recursive techniques can solve optimization problems efficiently.

## Problem Statement

Given an array of integers, find the **contiguous subarray** (containing at least one number) which has the **largest sum**, and return its sum.

## Approach

This implementation uses a recursive **divide and conquer** strategy. The array is divided until a single element remains. During the merge step, the algorithm finds:

1. The maximum sum subarray in the left half.
2. The maximum sum subarray in the right half.
3. The maximum sum subarray that crosses the middle.

The maximum of these three values is selected at each step and propagated up.

## Test Case

### Input

```
Enter Size : 9
Enter element 0: -2
Enter element 1: 1
Enter element 2: -3
Enter element 3: 4
Enter element 4: -1
Enter element 5: 2
Enter element 6: 1
Enter element 7: -5
Enter element 8: 4
```

### Output

```
You entered: -2 1 -3 4 -1 2 1 -5 4 
Maximum Subarray Sum: 6
```

Explanation: The subarray `[4, -1, 2, 1]` yields the maximum sum.

## Features

* Recursive, divide-and-conquer logic
* Efficient handling of subproblems
* Clearly separates logic into merge and divide phases
* Time-efficient for large datasets

## Time Complexity

| Component    | Complexity |
| ------------ | ---------- |
| Divide Phase | O(log n)   |
| Merge Phase  | O(n)       |
| Overall      | O(n log n) |

> This approach is more efficient than brute-force methods, though not as fast as Kadane's algorithm (which runs in O(n)).

## Code Structure

```java
// merge()   - Calculates cross-subarray sum
// divide()  - Recursively solves left, right, and crossing segments
// main()    - Reads input and prints maximum subarray sum
```

## Sample Output

```
Enter Size : 6
Enter element 0: 5
Enter element 1: -3
Enter element 2: 4
Enter element 3: -1
Enter element 4: 2
Enter element 5: -6

You entered: 5 -3 4 -1 2 -6 
Maximum Subarray Sum: 7
```

## Java Implementation

```java
import java.util.Scanner;

public class MaxSubarray {

    static int maxSum = Integer.MIN_VALUE;

    static void merge(int[] array, int low, int mid, int high) {
        int leftSum = Integer.MIN_VALUE, rightSum = Integer.MIN_VALUE;
        int sum = 0;

        for (int i = mid; i >= low; i--) {
            sum += array[i];
            if (sum > leftSum) {
                leftSum = sum;
            }
        }

        sum = 0;
        for (int i = mid + 1; i <= high; i++) {
            sum += array[i];
            if (sum > rightSum) {
                rightSum = sum;
            }
        }

        int crossSum = leftSum + rightSum;
        if (crossSum > maxSum) {
            maxSum = crossSum;
        }
    }

    static void divide(int[] array, int low, int high) {
        if (low == high) {
            if (array[low] > maxSum) {
                maxSum = array[low];
            }
            return;
        }

        int mid = (low + high) / 2;
        divide(array, low, mid);
        divide(array, mid + 1, high);
        merge(array, low, mid, high);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] array = new int[100];

        System.out.print("Enter Size : ");
        int size = sc.nextInt();

        for (int i = 0; i < size; i++) {
            System.out.print("Enter element " + i + ": ");
            array[i] = sc.nextInt();
        }

        System.out.print("You entered: ");
        for (int i = 0; i < size; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();

        divide(array, 0, size - 1);
        System.out.println("Maximum Subarray Sum: " + maxSum);
    }
}
```

## Educational Value

This program is ideal for those learning:

* Divide and conquer strategy
* Array-based recursive problem solving
* Optimization techniques beyond brute force
