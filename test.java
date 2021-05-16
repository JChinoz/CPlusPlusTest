import java.util.*;
import java.util.Arrays;

public class test {
    public static void main(String[] args){
        int nums[] = {1,1,2};
        System.out.println(removeDuplicates(nums));
    }

    public int removeDuplicates(int[] nums) {
        int j = 1;
        
        for(int i = 0; i < nums.length; i++){
            if(nums[i] != nums[j]){
                j++;
            }
            i++;
        }
        return j;
    }
}
