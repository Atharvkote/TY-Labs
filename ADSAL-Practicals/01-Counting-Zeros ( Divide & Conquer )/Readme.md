# Couting Zeros in a Array of 1's and 0's

## Problem Statement :
Count the number of zeros in an array that consists of all `1s` followed by all `0s`.
The array contains only `1s` and `0s`, with all the 1s appearing before any `0`. `Your task is to determine how many 0s are present in the array`.

## Approach
Since the array has all 1s first and then 0s (like a sorted array with a transition),
we can use binary search to find the index where the first 0 appears.

Once found, we subtract this index from the total length to get the count of 0s.

### Why binary search?
Because it reduces time complexity from `O(N)` to `O(log N)`.


## Test Case 1

**Input:**

```
1 1 1 0 0 0 2
```

**Expected Output:**

```
Number of Zeros are : 3
```


## Test Case 2

**Input:**

```
1 1 1 1 2
```

**Expected Output:**

```
Number of Zeros are : 0
```


## Test Case 3

**Input:**

```
1 1 0 0 1
```

**Expected Output:**

```
Invalid Input: Can't insert 1 after 0.
```

## Solution

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int[] nums = new int[10];
        int choice = 1, ans = 0;
        int i = 0;
        boolean zeroStarted = false;

        Scanner sc = new Scanner(System.in);

        while (i < 10) {
            System.out.print("Enter array[ " + i + " ] (Enter 2 to exit):: ");
            choice = sc.nextInt();
            if (choice == 2) break;
            if (choice != 0 && choice != 1) {
                System.out.println("Invalid Input: Only 0 or 1 allowed.");
                return;
            }
            if (choice == 0 && !zeroStarted) {
                zeroStarted = true;
            }
            if (choice == 1 && zeroStarted) {
                System.out.println("Invalid Input: Can't insert 1 after 0.");
                return;
            }
            nums[i++] = choice;
        }

        int low = 0;
        int high = i - 1;

        while (low < high) {
            int mid = (low + high) / 2;
            if (nums[mid] == 0 && nums[mid - 1] == 1 || nums[mid] == 1 && nums[mid + 1] == 0) {
                ans = i - mid - 1;
                break;
            } else if (nums[mid] == 0 && nums[mid - 1] != 1) {
                high = mid - 1;
            } else if (nums[mid] == 1 && nums[mid + 1] != 0) {
                low = mid + 1;
            }
        }

        System.out.println("Number of Zeros are : " + ans);
    }
}

```






