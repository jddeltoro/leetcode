/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let pos = 0;
    let result = [];
    while(result.length<2){
        for(let i = pos+1; i<nums.length; i++){
            nums[pos]+nums[i] === target ? result.push(pos,i): null;
        }
        pos++;
    }
    return result;
};