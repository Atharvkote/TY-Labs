import java.util.Scanner;

public class Solution {
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

        if (ans == 0 && zeroStarted) ans = i - low;

        System.out.println("Number of Zeros are : " + ans);
    }
}
