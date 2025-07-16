#include<iostream>
using namespace std;

int indx = 0, count_zeros = 0, answer[20];

void merge(int nums[], int low, int high) {
    for (int i = low; i <= high; i++) {
        if (nums[i] != 0) {
            answer[indx++] = nums[i];
        } else {
            count_zeros++;
        }
    }
}

void divide(int nums[], int low, int high) {
    if (low >= high) return;

    int mid = (low + high) / 2; 

    divide(nums, low, mid);
    divide(nums, mid + 1, high);
    merge(nums, low, high);
}

int main() {
    int nums[20], size;
    cout << "Enter Array Size: ";
    cin >> size;

    for (int i = 0; i < size; i++) {
        cout << "Enter array[" << i << "] : ";
        cin >> nums[i];
    }

    divide(nums, 0, size - 1);

    // Append zeros at the end
    for (int i = 0; i < count_zeros; i++) {
        answer[indx++] = 0;
    }

    cout << "Rearranged array: ";
    for (int i = 0; i < size; i++) {
        cout << answer[i] << " ";
    }

    cout << endl;
    return 0;
}
