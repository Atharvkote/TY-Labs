import java.util.Scanner;

public class Solution {

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
