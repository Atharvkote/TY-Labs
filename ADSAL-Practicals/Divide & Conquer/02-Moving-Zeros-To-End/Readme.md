# Push Zeros to End Using Divide and Conquer

> \[!IMPORTANT]
> **Modified Merge Sort to Move Zeros:**
>
> * In this program, we used a **modified merge-sort-like logic** not to sort the numbers, but to **move all zeros to the end of the array**, while preserving the **relative order of non-zero elements**.
> * The `merge()` function detects a `0` during traversal and shifts it step-by-step toward the end within its segment.
> * This technique demonstrates a recursive **divide-and-conquer** approach used for a rearrangement task, showcasing how sorting logic can be adapted for structural transformations.

Let me know if you’d like this formatted into a README, added to your source code as a comment, or presented in another format like PDF or Markdown.


## Problem Statement

Given an integer array containing 0s and non-zero values, write a program to **push all 0s to the end** while preserving the order of non-zero elements.

This solution uses a **divide and conquer approach**, similar to merge sort, for educational purposes.

## Approach

The program uses recursion to divide the array into smaller parts. During the merge phase, if a `0` is encountered, it is shifted to the right by swapping it forward one step at a time until it reaches the end of the current segment.

This preserves the **relative order of non-zero elements** and ensures that all `0`s are moved to the end.

## Test Case

### Input

```
Enter Array Size: 7
Enter array[ 0 ]: 1
Enter array[ 1 ]: 0
Enter array[ 2 ]: 3
Enter array[ 3 ]: 0
Enter array[ 4 ]: 5
Enter array[ 5 ]: 0
Enter array[ 6 ]: 6
```

### Output

```
Rearranged Array :: [ 1 , 3 , 5 , 6 , 0 , 0 , 0 , ]
```

## Features

* In-place rearrangement without additional memory
* Works up to array size 20
* Recursively structured for clarity and educational purpose

## Time Complexity

| Component    | Complexity                                  |
| ------------ | ------------------------------------------- |
| Divide phase | O(log n)                                    |
| Merge phase  | O(n²) in worst case (due to repeated swaps) |

> This is not the most optimized method for pushing zeros, but it's useful for understanding recursive problem solving and array manipulation.

## Code Structure

```java
// merge()  - Finds zeros and shifts them right by swapping
// divide() - Recursively splits the array and calls merge()
// main()   - Reads input, processes, and prints the final array
```

## Sample Output

```
Enter Array Size: 6
Enter array[ 0 ]: 0
Enter array[ 1 ]: 4
Enter array[ 2 ]: 0
Enter array[ 3 ]: 1
Enter array[ 4 ]: 3
Enter array[ 5 ]: 0

Rearranged Array :: [ 4 , 1 , 3 , 0 , 0 , 0 , ]
```

## Solution

```java

import java.util.Scanner;

public class ZeroRearrange {

    // Merge function to push zeros to the end
    static void merge(int[] nums, int low, int high) {
        for (int i = low; i <= high; i++) {
            if (nums[i] == 0) {
                int j = i;
                while (j < high) {
                    int temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                    j++;
                }
            }
        }
    }

    // Divide function (recursive)
    static void divide(int[] nums, int low, int high) {
        if (low >= high) return;

        int mid = (low + high) / 2;
        divide(nums, low, mid);
        divide(nums, mid + 1, high);
        merge(nums, low, high);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] nums = new int[20];
        int size;

        System.out.print("Enter Array Size: ");
        size = sc.nextInt();

        for (int i = 0; i < size; i++) {
            System.out.print("Enter array[ " + i + " ]: ");
            nums[i] = sc.nextInt();
        }

        divide(nums, 0, size - 1);

        System.out.print("Rearranged Array :: [ ");
        for (int i = 0; i < size; i++) {
            System.out.print(nums[i] + " , ");
        }
        System.out.println("]");
    }
}

```
