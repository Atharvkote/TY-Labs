import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;

public class DP {
    public static int getNumberofWays(Integer[] coins, int amount) {
        HashSet<ArrayList<Integer>> set = new HashSet<>();
        Arrays.sort(coins, Collections.reverseOrder());
        int i = 0;

        while (i < coins.length) {
            int coin = coins[i];
            int target = amount;
            ArrayList<Integer> intermediate = new ArrayList<>();
            if (target - coin >= 0) {
                target -= coin;
                intermediate.add(coin);
                int j = i;
                while (target > 0 && j < coins.length) {
                    if (target - coins[j] >= 0) {
                        target -= coins[j];
                        intermediate.add(coins[j]);
                    } else {
                        j++;
                    }
                }
            }
            set.add(intermediate);
            i++;
        }

        return set.size();
    }

    public static void main(String[] args) {
        Integer[] coins = {1, 2, 5};
        int amount = 32;
        int numberOfWays = getNumberofWays(coins, amount);
        System.out.println(numberOfWays);
    }
}
