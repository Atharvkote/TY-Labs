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



