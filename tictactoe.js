$(document).ready(function(){
    // Set current player:
    current_player = "X";
    $("span").text("Player "+current_player+"\'s move:");    
    var winner = "";
    
    function toggle_player(){
        current_player == "X" ? current_player="O" : current_player="X";
        $("span").text("Player "+current_player+"\'s move:");    
    }
    
    $("td").click(function(){
        if(winner == ""){
            $this = $(this);
            // Make moves:
            // If space is not taken:
            if($this.text() == " "){
                $this.text(current_player);
                $this.addClass("selected");
                // Check for win:
                arr = $('td').text();
                // Check horizontal, vertical, backslash, forward slash for 3 in a row.
                for(var i=0; i<3; i++){
                    if(arr[3*i] == arr[3*i+1] && arr[3*i+1] == arr[3*i+2] && arr[3*i] != " "){
                        winner = arr[3*i];
                        $("table tr:nth-child("+(i+1)+")").children().addClass("winner");
                    }
                    if(arr[i] == arr[i+3] && arr[i+3] == arr[i+6] && arr[i] != " "){
                        winner = arr[i];
                        $("tr td:nth-child("+(i+1)+")").addClass("winner");
                    }
                }
                if(arr[0] == arr[4] && arr[4] == arr[8] && arr[4] != " "){
                    winner = arr[4];
                    $td = $("td");
                    $td.first().addClass('winner');
                    $("table tr:nth-child(2) td:nth-child(2)").addClass('winner');
                    $td.last().addClass('winner');                    
                }
                if(arr[2] == arr[4] && arr[4] == arr[6] && arr[4] != " "){
                    winner = arr[4];
                    $("table tr:nth-child(1) td:nth-child(3)").addClass('winner');
                    $("table tr:nth-child(2) td:nth-child(2)").addClass('winner');
                    $("table tr:nth-child(3) td:nth-child(1)").addClass('winner');
                }
                if(winner != ""){
                    $("span").text("Player "+winner+" wins! Click to play again.");
                }
                else if(arr.indexOf(" ")==-1){
                    // Check for tie:
                    $("span").text("Players tie. Click to play again.");
                    winner = "none";
                }
                else{
                    toggle_player();
                }              
            }
        } 
        else{
            $td = $("td")
            $td.text(" ");
            $td.removeClass("selected");
            $td.removeClass("winner");
            toggle_player();
            winner = "";
        }
    });
});