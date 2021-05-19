import java.util.*;
import java.util.Arrays;
import java.util.Collections;

public class test {
    public static void main(String[] args){
        int prices[] = {7,1,5,3,6,4};
        System.out.println(maxProfit(prices)); 
    }

// Remove duplicates

    // public static int removeDuplicates(int[] nums) {
    //     int i = 0;
        
    //     for(int j = 1; j < nums.length; j++) {
    //         if(nums[i] != nums[j]){
    //             i++;
    //             nums[i] = nums[j];
    //         } 
    //     }
    //     return i + 1;
    // }

// Sell stock
    public int maxProfit(int[] prices) {
        int min = Collections.min(Arrays.asList(prices));
        int max = Collections.max(Arrays.asList(prices));

        return max - min;
    }
}
