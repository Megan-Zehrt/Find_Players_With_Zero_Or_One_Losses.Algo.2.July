// 2225. Find Players With Zero or One Losses



// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

// Note:

// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.








/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    
    let map = new Map();
    let wins = [];
    let losses = [];
    let res = [];
    
    for(let player of matches){
         
        if(map.has(player[0])){
  
            map.set(player[0], map.get(player[0]) + 0);  
            
        }else{
            map.set(player[0], 0); 
        }
        
        
        if(map.has(player[1])){
            
             map.set(player[1], map.get(player[1]) + 1);
            
        } else {
            map.set(player[1], 1);
        }
        
        
    }
    
    
    for(let [player, loss] of map){
          if(loss == 0){
              wins.push(player)

          } else if(loss == 1){
                    losses.push(player)

          }        
    }

    wins.sort((a,b) => a-b)
    res.push(wins)
    losses.sort((a,b) => a-b)
    res.push(losses)

    return res
    
}



/**

    hashMap

    iterate over matches array[1]
        add key: player, value: amount of losses

    iterate over matches array[0]
        add key: player, value: amount == 0


    if player value == 0, push into first array
    if player value == 1, push into second array

 */