import java.util.*;

public class test {

    public static boolean checkisAnswer(int[] example, int days , int factor){
        int count = 0;
        boolean isPossible = true;
        while(isPossible){
            isPossible = false;
            if(count >= days) return false;
            for(int i = 0; i < example.length; i++){
                if(example[i] >= 0 ){
                    example[i] -= factor;
                    count++;
                    isPossible = true;
                }
            }
        }

        if(count <= days) return true;

        return false;
    }

    public static double checkAnswer(int[] example, int days) {
        float sum = 0;
        for (int i = 0; i < example.length; i++) {
            sum += example[i];
        }

        double mean = Math.ceil(sum / days);
        double diff = 0;
        while (diff <= 5) {
            boolean isCorrect = checkisAnwer(example, days, mean - diff);
            if (isCorrect) {
                return mean - diff;
            }
            diff++;
        }
    }

    public static void main(String[] args) {
        int[] example = {};
        int day = 15;

        double ans = checkAnswer(example, day);
        System.out.println(ans);
    }

}